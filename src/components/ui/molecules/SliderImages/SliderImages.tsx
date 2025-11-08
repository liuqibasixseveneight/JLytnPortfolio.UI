import { forwardRef } from 'react';

import type { SliderImagesProps } from './types';

export const SliderImages = forwardRef<HTMLDivElement, SliderImagesProps>(
  ({ slides, activeSlideId, className = '' }, ref) => (
    <div
      ref={ref}
      className={['slider-images', className].filter(Boolean).join(' ')}
    >
      {slides.map((slide) => (
        <img
          key={slide.id}
          data-slide={slide.id}
          data-active={slide.id === activeSlideId}
          src={slide.image}
          alt={slide.title}
        />
      ))}
    </div>
  )
);

SliderImages.displayName = 'SliderImages';

