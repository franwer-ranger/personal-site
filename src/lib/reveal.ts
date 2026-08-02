import { animate, inView } from 'motion';

/**
 * Scroll-reveal system. Elements with [data-reveal] fade/slide in when
 * they enter the viewport. Optional data-reveal-delay (ms) staggers items.
 * Safe to call on every astro:page-load: already-initialized elements
 * are skipped via a data attribute.
 */
export function initReveals(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // On narrow viewports staggered reveals fight the scroll gesture — skip them.
  if (window.matchMedia('(max-width: 48rem)').matches) return;

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-init])');

  elements.forEach((el) => {
    el.dataset.revealInit = 'true';
    const delay = Number(el.dataset.revealDelay ?? 0) / 1000;

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
          { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        );
      },
      { margin: '-8% 0px -8% 0px' },
    );
  });
}
