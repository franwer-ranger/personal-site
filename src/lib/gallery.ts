interface Shot {
  src: string;
  base: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  index: string;
}

/**
 * Project screenshot gallery: a scroll-snap filmstrip plus a lightbox.
 *
 * The strip works without JS — it scrolls by hand. This adds the arrows, the
 * position counter and the full-size view. Safe to call on every
 * astro:page-load: already-wired galleries are skipped.
 */
export function initGalleries(): void {
  document
    .querySelectorAll<HTMLElement>('[data-gallery]:not([data-gallery-init])')
    .forEach(setupGallery);
}

function setupGallery(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>('[data-gallery-track]');
  const data = root.querySelector<HTMLScriptElement>('[data-gallery-data]');
  const dialog = root.querySelector<HTMLDialogElement>('[data-gallery-dialog]');
  if (!track || !data || !dialog) return;

  root.dataset.galleryInit = 'true';

  const shots: Shot[] = JSON.parse(data.textContent ?? '[]');
  const slides = Array.from(track.children) as HTMLElement[];
  if (slides.length === 0) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const behavior = (): ScrollBehavior => (reduced.matches ? 'auto' : 'smooth');

  // ---- Strip -------------------------------------------------------------
  const prev = root.querySelector<HTMLButtonElement>('[data-gallery-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-gallery-next]');
  const current = root.querySelector<HTMLElement>('[data-gallery-current]');

  let index = 0;

  // Where a slide comes to rest: the track's left edge plus its scroll padding.
  // Measured with rects rather than offsetLeft, because the strip breaks out of
  // the reading column and its offsetParent is not the track.
  function restingEdge(): number {
    const padding = parseFloat(getComputedStyle(track!).scrollPaddingLeft);
    return track!.getBoundingClientRect().left + (Number.isNaN(padding) ? 0 : padding);
  }

  // The slide nearest that edge is the one being read.
  function nearestSlide(): number {
    const edge = restingEdge();
    let best = 0;
    let bestGap = Infinity;
    slides.forEach((slide, i) => {
      const gap = Math.abs(slide.getBoundingClientRect().left - edge);
      if (gap < bestGap) {
        bestGap = gap;
        best = i;
      }
    });
    return best;
  }

  function syncControls(): void {
    if (current) current.textContent = shots[index]?.index ?? '01';
    // Compared against the maximum scroll rather than the index, because the
    // last few slides can share a resting position on a wide viewport.
    const atStart = track!.scrollLeft <= 1;
    const atEnd = track!.scrollLeft >= track!.scrollWidth - track!.clientWidth - 1;
    if (prev) prev.disabled = atStart;
    if (next) next.disabled = atEnd;
  }

  function goTo(target: number): void {
    index = Math.max(0, Math.min(slides.length - 1, target));
    const delta = slides[index].getBoundingClientRect().left - restingEdge();
    track!.scrollTo({ left: track!.scrollLeft + delta, behavior: behavior() });
  }

  let frame = 0;
  track.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        index = nearestSlide();
        syncControls();
      });
    },
    { passive: true },
  );

  prev?.addEventListener('click', () => goTo(index - 1));
  next?.addEventListener('click', () => goTo(index + 1));

  // The arrows depend on how much there is left to scroll, which isn't final
  // until the slides have their real size — fonts and images settle after this
  // runs. Without re-syncing, `next` would stay disabled from the start.
  const resize = new ResizeObserver(() => syncControls());
  resize.observe(track);
  slides.forEach((slide) => resize.observe(slide));

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    }
  });

  syncControls();

  // ---- Lightbox ----------------------------------------------------------
  const avif = dialog.querySelector<HTMLSourceElement>('[data-gallery-lb-avif]');
  const webp = dialog.querySelector<HTMLSourceElement>('[data-gallery-lb-webp]');
  const img = dialog.querySelector<HTMLImageElement>('[data-gallery-lb-img]');
  const caption = dialog.querySelector<HTMLElement>('[data-gallery-lb-caption]');
  const counter = dialog.querySelector<HTMLElement>('[data-gallery-lb-counter]');
  const close = dialog.querySelector<HTMLButtonElement>('[data-gallery-close]');
  const lbPrev = dialog.querySelector<HTMLButtonElement>('[data-gallery-lb-prev]');
  const lbNext = dialog.querySelector<HTMLButtonElement>('[data-gallery-lb-next]');

  let lightboxIndex = 0;
  let opener: HTMLElement | null = null;

  function show(target: number): void {
    lightboxIndex = Math.max(0, Math.min(shots.length - 1, target));
    const shot = shots[lightboxIndex];
    if (avif) avif.srcset = `${shot.base}.avif`;
    if (webp) webp.srcset = `${shot.base}.webp`;
    if (img) {
      img.src = shot.src;
      img.alt = shot.alt;
      img.width = shot.width;
      img.height = shot.height;
    }
    if (caption) caption.textContent = shot.caption;
    if (counter) counter.textContent = `${shot.index} / ${String(shots.length).padStart(2, '0')}`;
    if (lbPrev) lbPrev.disabled = lightboxIndex === 0;
    if (lbNext) lbNext.disabled = lightboxIndex === shots.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.querySelector('[data-gallery-open]')?.addEventListener('click', (event) => {
      opener = event.currentTarget as HTMLElement;
      show(i);
      dialog!.showModal();
      // showModal alone leaves the page behind scrollable on some browsers.
      document.documentElement.style.overflow = 'hidden';
    });
  });

  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
    // Leave the strip where the reader ended up, then hand focus back.
    goTo(lightboxIndex);
    opener?.focus();
    opener = null;
  });

  close?.addEventListener('click', () => dialog.close());
  lbPrev?.addEventListener('click', () => show(lightboxIndex - 1));
  lbNext?.addEventListener('click', () => show(lightboxIndex + 1));

  // Clicking the backdrop closes: outside the inner box means outside the image.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(lightboxIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(lightboxIndex + 1);
    }
  });

  // A dialog left open across a client-side navigation would keep the page
  // locked, so it is closed on the way out.
  document.addEventListener(
    'astro:before-swap',
    () => {
      if (dialog.open) dialog.close();
      document.documentElement.style.overflow = '';
    },
    { once: true },
  );
}
