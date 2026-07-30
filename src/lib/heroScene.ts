import * as THREE from 'three';

/**
 * Hero scene: a scattered cloud of nodes that reorganizes into an ordered
 * lattice as the user scrolls — "complex systems into clear products".
 *
 * Performance notes:
 * - Single Points + LineSegments draw, positions updated on CPU per frame.
 * - Render loop pauses when the canvas leaves the viewport.
 * - DPR capped; particle count reduced on small screens.
 * - prefers-reduced-motion: renders a static ordered frame, no loop.
 */

const INK = new THREE.Color('#1b1813');
const ACCENT = new THREE.Color('#b4502a');

function smoothstep(t: number): number {
  const x = Math.min(Math.max(t, 0), 1);
  return x * x * (3 - 2 * x);
}

/** Deterministic pseudo-random so every load composes the same scene. */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeDotTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function initHeroScene(canvas: HTMLCanvasElement, section: HTMLElement): () => void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 48rem)').matches;

  // ---- Geometry: chaos cloud -> ordered lattice ----
  const grid = isSmallScreen ? { x: 8, y: 8, z: 6 } : { x: 10, y: 10, z: 8 };
  const count = grid.x * grid.y * grid.z;
  const spacing = 0.62;

  const chaos = new Float32Array(count * 3);
  const order = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 3);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const rand = mulberry32(20260726);

  let i = 0;
  for (let gx = 0; gx < grid.x; gx++) {
    for (let gy = 0; gy < grid.y; gy++) {
      for (let gz = 0; gz < grid.z; gz++) {
        const o = i * 3;

        // Ordered lattice, centered, with a whisper of irregularity.
        order[o] = (gx - (grid.x - 1) / 2) * spacing + (rand() - 0.5) * 0.05;
        order[o + 1] = (gy - (grid.y - 1) / 2) * spacing + (rand() - 0.5) * 0.05;
        order[o + 2] = (gz - (grid.z - 1) / 2) * spacing + (rand() - 0.5) * 0.05;

        // Chaos: uneven blob with arms, reads as noise rather than a sphere.
        const theta = rand() * Math.PI * 2;
        const phi = Math.acos(2 * rand() - 1);
        const radius = 2.2 + rand() * rand() * 3.4;
        chaos[o] = Math.sin(phi) * Math.cos(theta) * radius * 1.5;
        chaos[o + 1] = Math.cos(phi) * radius * 0.9 + (rand() - 0.5) * 1.6;
        chaos[o + 2] = Math.sin(phi) * Math.sin(theta) * radius;

        seeds[o] = rand() * Math.PI * 2;
        seeds[o + 1] = 0.4 + rand() * 0.8;
        seeds[o + 2] = rand();

        positions[o] = chaos[o];
        positions[o + 1] = chaos[o + 1];
        positions[o + 2] = chaos[o + 2];

        // A small share of nodes carries the accent color.
        const c = rand() < 0.08 ? ACCENT : INK;
        colors[o] = c.r;
        colors[o + 1] = c.g;
        colors[o + 2] = c.b;

        i++;
      }
    }
  }

  // Lattice edges: connect each node to its +x/+y/+z neighbors.
  const edgeIndices: number[] = [];
  const idx = (x: number, y: number, z: number) => (x * grid.y + y) * grid.z + z;
  for (let x = 0; x < grid.x; x++) {
    for (let y = 0; y < grid.y; y++) {
      for (let z = 0; z < grid.z; z++) {
        if (x + 1 < grid.x) edgeIndices.push(idx(x, y, z), idx(x + 1, y, z));
        if (y + 1 < grid.y) edgeIndices.push(idx(x, y, z), idx(x, y + 1, z));
        if (z + 1 < grid.z) edgeIndices.push(idx(x, y, z), idx(x, y, z + 1));
      }
    }
  }

  // ---- Three.js setup ----
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.4, 9.5);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.BufferGeometry();
  const positionAttr = new THREE.BufferAttribute(positions, 3);
  positionAttr.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', positionAttr);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const dotTexture = makeDotTexture();
  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.075,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    alphaTest: 0.05,
    depthWrite: false,
    sizeAttenuation: true,
  });
  group.add(new THREE.Points(geometry, pointsMaterial));

  const linePositions = new Float32Array(edgeIndices.length * 3);
  const lineGeometry = new THREE.BufferGeometry();
  const lineAttr = new THREE.BufferAttribute(linePositions, 3);
  lineAttr.setUsage(THREE.DynamicDrawUsage);
  lineGeometry.setAttribute('position', lineAttr);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: INK,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

  // ---- State ----
  let progress = reducedMotion ? 1 : 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let rafId = 0;
  let running = false;
  let disposed = false;

  function updatePositions(time: number): void {
    const p = smoothstep(progress);
    const wobble = (1 - p) * 0.22;

    for (let n = 0; n < count; n++) {
      const o = n * 3;
      const phase = seeds[o];
      const speed = seeds[o + 1];
      const drift = seeds[o + 2];

      const wx = Math.sin(time * speed + phase) * wobble;
      const wy = Math.cos(time * speed * 0.8 + phase * 1.7) * wobble;
      const wz = Math.sin(time * speed * 0.6 + phase * 2.3 + drift * 6) * wobble;

      positions[o] = chaos[o] + (order[o] - chaos[o]) * p + wx;
      positions[o + 1] = chaos[o + 1] + (order[o + 1] - chaos[o + 1]) * p + wy;
      positions[o + 2] = chaos[o + 2] + (order[o + 2] - chaos[o + 2]) * p + wz;
    }
    positionAttr.needsUpdate = true;

    for (let e = 0; e < edgeIndices.length; e++) {
      const src = edgeIndices[e] * 3;
      const dst = e * 3;
      linePositions[dst] = positions[src];
      linePositions[dst + 1] = positions[src + 1];
      linePositions[dst + 2] = positions[src + 2];
    }
    lineAttr.needsUpdate = true;
    lineMaterial.opacity = p * 0.16;
    pointsMaterial.size = 0.075 + p * 0.02;
  }

  function resize(): void {
    const { clientWidth, clientHeight } = canvas;
    if (canvas.width === clientWidth && canvas.height === clientHeight) return;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / Math.max(clientHeight, 1);
    camera.updateProjectionMatrix();
  }

  function renderFrame(timeMs: number): void {
    const time = timeMs * 0.001;
    resize();
    updatePositions(time);

    group.rotation.y += ((targetTiltY + time * 0.05) * (1 - smoothstep(progress) * 0.6) + 0.0 - group.rotation.y) * 0.06;
    group.rotation.x += (targetTiltX - group.rotation.x) * 0.06;

    renderer.render(scene, camera);
  }

  function loop(timeMs: number): void {
    if (disposed) return;
    renderFrame(timeMs);
    rafId = requestAnimationFrame(loop);
  }

  function start(): void {
    if (running || disposed || reducedMotion) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }

  function stop(): void {
    running = false;
    cancelAnimationFrame(rafId);
  }

  // ---- Scroll + pointer wiring ----
  // The hero sits sticky inside a taller pin wrapper: while the wrapper's
  // extra height scrolls by, the hero stays on screen and the gesture drives
  // the ordering. Ordering completes at 80% of that travel so the resolved
  // lattice holds in view for a beat before the hero releases.
  const pin = section.closest<HTMLElement>('[data-hero-pin]') ?? section;

  function onScroll(): void {
    const pinRect = pin.getBoundingClientRect();
    const travel = Math.max(pinRect.height - section.offsetHeight, window.innerHeight * 0.4);
    const passed = Math.min(Math.max(-pinRect.top, 0), travel);
    progress = Math.min(passed / (travel * 0.8), 1);
    section.style.setProperty('--hero-order', progress.toFixed(3));
  }

  function onPointerMove(event: PointerEvent): void {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    targetTiltY = x * 0.25;
    targetTiltX = y * 0.15;
  }

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? start() : stop()),
    { threshold: 0.02 },
  );
  visibilityObserver.observe(canvas);

  if (reducedMotion) {
    // One static, fully ordered frame.
    resize();
    updatePositions(0);
    renderer.render(scene, camera);
  } else {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    start();
  }

  window.addEventListener('resize', resize);

  // ---- Teardown (ClientRouter page swaps) ----
  return () => {
    disposed = true;
    stop();
    visibilityObserver.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('resize', resize);
    geometry.dispose();
    lineGeometry.dispose();
    pointsMaterial.dispose();
    lineMaterial.dispose();
    dotTexture.dispose();
    renderer.dispose();
  };
}
