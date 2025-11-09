import { useEffect, useMemo, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ScrollTrigger as ScrollTriggerInstance } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import {
  SliderIndicators,
  SliderImages,
  SliderProgressBar,
  SliderTitle,
} from '../../molecules';
import {
  animateActiveImage,
  animateIndicators,
  animateTitle,
} from './animations';
import { scheduleScrollTriggerRefresh } from './utils';
import type { HeroSliderProps } from './types';
import { slides as defaultSlides, type Slide } from './slides';

gsap.registerPlugin(ScrollTrigger, SplitText);

const DEFAULT_VISIBLE_SLIDES = 3;

export const HeroSlider = ({ slides: providedSlides }: HeroSliderProps) => {
  const slidesData = useMemo<Slide[]>(
    () => (providedSlides?.length ? providedSlides : defaultSlides),
    [providedSlides]
  );
  const totalSlides = slidesData.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderWrapperRef = useRef<HTMLElement | null>(null);
  const sliderSectionRef = useRef<HTMLDivElement | null>(null);
  const sliderImagesRef = useRef<HTMLDivElement | null>(null);
  const sliderTitleRef = useRef<HTMLHeadingElement | null>(null);
  const sliderIndicatorsRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTriggerInstance | null>(null);
  const activeIndexRef = useRef(0);

  const visibleSlides = useMemo<Slide[]>(() => {
    if (!totalSlides) {
      return [];
    }

    const start = Math.max(0, activeIndex - (DEFAULT_VISIBLE_SLIDES - 1));
    return slidesData.slice(start, activeIndex + 1);
  }, [slidesData, activeIndex, totalSlides]);

  useEffect(() => {
    const cleanupResize = scheduleScrollTriggerRefresh();

    activeIndexRef.current = 0;
    setActiveIndex(0);

    return () => {
      cleanupResize();
    };
  }, [totalSlides]);

  useGSAP(
    (_, contextSafe) => {
      if (
        !sliderWrapperRef.current ||
        !sliderSectionRef.current ||
        !totalSlides
      ) {
        return;
      }

      const updateActiveIndex =
        contextSafe?.((self: ScrollTriggerInstance) => {
          const nextIndex = Math.min(
            totalSlides - 1,
            Math.floor(self.progress * totalSlides)
          );

          if (
            Number.isFinite(nextIndex) &&
            nextIndex !== activeIndexRef.current
          ) {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        }) ??
        ((self: ScrollTriggerInstance) => {
          const nextIndex = Math.min(
            totalSlides - 1,
            Math.floor(self.progress * totalSlides)
          );

          if (
            Number.isFinite(nextIndex) &&
            nextIndex !== activeIndexRef.current
          ) {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        });

      if (!scrollTriggerRef.current) {
        scrollTriggerRef.current = ScrollTrigger.create({
          id: 'hero-slider-trigger',
          trigger: sliderWrapperRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * totalSlides}`,
          scrub: 1,
          pin: sliderWrapperRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, {
                scaleY: self.progress,
                transformOrigin: 'center top',
                overwrite: true,
              });
            }

            updateActiveIndex(self);
          },
        });
      } else {
        scrollTriggerRef.current.vars.end = () =>
          `+=${window.innerHeight * totalSlides}`;
        scrollTriggerRef.current.refresh();
      }

      const cleanupFns = [
        animateTitle(sliderTitleRef.current),
        animateIndicators(sliderIndicatorsRef.current, activeIndex),
        animateActiveImage(
          sliderImagesRef.current,
          slidesData[activeIndex]?.id
        ),
      ].filter(
        (cleanup): cleanup is () => void => typeof cleanup === 'function'
      );

      return () => {
        cleanupFns.forEach((cleanup) => cleanup());
        scrollTriggerRef.current?.kill();
        scrollTriggerRef.current = null;
      };
    },
    { scope: sliderSectionRef, dependencies: [activeIndex, totalSlides] }
  );

  if (!totalSlides) {
    return null;
  }

  return (
    <section className='slider-wrapper' ref={sliderWrapperRef}>
      <div className='slider' ref={sliderSectionRef}>
        <SliderImages
          ref={sliderImagesRef}
          slides={visibleSlides}
          activeSlideId={slidesData[activeIndex]?.id}
        />

        <SliderTitle
          ref={sliderTitleRef}
          title={slidesData[activeIndex]?.title ?? ''}
        />

        <div className='slider-indicator'>
          <SliderIndicators ref={sliderIndicatorsRef} slides={slidesData} />
          <SliderProgressBar ref={progressBarRef} />
        </div>
      </div>
    </section>
  );
};
