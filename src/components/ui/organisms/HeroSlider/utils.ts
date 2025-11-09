import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const scheduleScrollTriggerRefresh = () => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const { visualViewport } = window;
  let frameId: number | null = null;

  const scheduleRefresh = () => {
    if (frameId != null) {
      cancelAnimationFrame(frameId);
    }

    frameId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      frameId = null;
    });
  };

  window.addEventListener('resize', scheduleRefresh);
  window.addEventListener('orientationchange', scheduleRefresh);
  visualViewport?.addEventListener('resize', scheduleRefresh);
  visualViewport?.addEventListener('scroll', scheduleRefresh);

  return () => {
    if (frameId != null) {
      cancelAnimationFrame(frameId);
    }
    window.removeEventListener('resize', scheduleRefresh);
    window.removeEventListener('orientationchange', scheduleRefresh);
    visualViewport?.removeEventListener('resize', scheduleRefresh);
    visualViewport?.removeEventListener('scroll', scheduleRefresh);
  };
};
