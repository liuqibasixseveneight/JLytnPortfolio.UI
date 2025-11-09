import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WINDOW_UPDATE_EVENTS: Array<keyof WindowEventMap> = [
  'resize',
  'orientationchange',
];

const DOCUMENT_UPDATE_EVENTS: Array<keyof DocumentEventMap> = [
  'visibilitychange',
];

const setViewportVariables = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const viewport = window.visualViewport;
  const viewportHeight = viewport?.height ?? window.innerHeight;
  const vh = viewportHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const safeAreaTop = viewport?.offsetTop ?? 0;
  const safeAreaLeft = viewport?.offsetLeft ?? 0;
  const safeAreaBottom = Math.max(
    window.innerHeight - viewportHeight - safeAreaTop,
    0
  );
  const safeAreaRight = Math.max(
    window.innerWidth - (viewport?.width ?? window.innerWidth) - safeAreaLeft,
    0
  );

  document.documentElement.style.setProperty(
    '--safe-area-top',
    `${safeAreaTop}px`
  );
  document.documentElement.style.setProperty(
    '--safe-area-right',
    `${safeAreaRight}px`
  );
  document.documentElement.style.setProperty(
    '--safe-area-bottom',
    `${safeAreaBottom}px`
  );
  document.documentElement.style.setProperty(
    '--safe-area-left',
    `${safeAreaLeft}px`
  );
};

export const useViewportHeight = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setViewportVariables();
    ScrollTrigger.refresh();

    const handleUpdate = () => {
      setViewportVariables();
      ScrollTrigger.refresh();
    };

    WINDOW_UPDATE_EVENTS.forEach((event) => {
      window.addEventListener(event, handleUpdate, { passive: true });
    });

    DOCUMENT_UPDATE_EVENTS.forEach((event) => {
      document.addEventListener(event, handleUpdate, { passive: true });
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleUpdate, {
        passive: true,
      });
      window.visualViewport.addEventListener('scroll', handleUpdate, {
        passive: true,
      });
    }

    return () => {
      WINDOW_UPDATE_EVENTS.forEach((event) => {
        window.removeEventListener(event, handleUpdate);
      });

      DOCUMENT_UPDATE_EVENTS.forEach((event) => {
        document.removeEventListener(event, handleUpdate);
      });

      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleUpdate);
        window.visualViewport.removeEventListener('scroll', handleUpdate);
      }
    };
  }, []);
};
