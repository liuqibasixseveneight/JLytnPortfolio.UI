import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const scheduleScrollTriggerRefresh = () => {
  if (typeof window === 'undefined') {
    return () => {};
  }

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

  return () => {
    if (frameId != null) {
      cancelAnimationFrame(frameId);
    }
    window.removeEventListener('resize', scheduleRefresh);
  };
};


