import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const animateTitle = (titleElement: HTMLHeadingElement | null) => {
  if (!titleElement) {
    return;
  }

  const split = new SplitText(titleElement, {
    type: 'lines',
    linesClass: 'line',
    mask: 'lines',
  });

  const tween = gsap.fromTo(
    split.lines,
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
    }
  );

  return () => {
    tween.kill();
    split.revert();
  };
};

export const animateIndicators = (
  indicatorsContainer: HTMLDivElement | null,
  activeIndex: number
) => {
  if (!indicatorsContainer) {
    return;
  }

  const tweens = gsap.utils
    .toArray<HTMLParagraphElement>('.slider-indicator-item', indicatorsContainer)
    .map((indicator, index) => {
      const marker = indicator.querySelector<HTMLSpanElement>('.marker');
      const indexElement = indicator.querySelector<HTMLSpanElement>('.index');
      const isActive = index === activeIndex;
      const indicatorTweens: gsap.core.Tween[] = [];

      if (indexElement) {
        indicatorTweens.push(
          gsap.to(indexElement, {
            opacity: isActive ? 1 : 0.35,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        );
      }

      if (marker) {
        indicatorTweens.push(
          gsap.to(marker, {
            scaleX: isActive ? 1 : 0,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        );
      }

      return indicatorTweens;
    })
    .flat();

  return () => {
    tweens.forEach((tween) => tween.kill());
  };
};

export const animateActiveImage = (
  imagesContainer: HTMLDivElement | null,
  activeSlideId?: number
) => {
  if (!imagesContainer || activeSlideId == null) {
    return;
  }

  const activeImage = imagesContainer.querySelector<HTMLImageElement>(
    `[data-slide="${activeSlideId}"]`
  );

  if (!activeImage) {
    return;
  }

  const tween = gsap.fromTo(
    activeImage,
    { opacity: 0, scale: 1.05 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
    }
  );

  return () => tween.kill();
};


