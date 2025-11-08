import { forwardRef } from 'react';

import type { SliderIndicatorsProps } from './types';

import { SliderIndicatorItem } from '../../atoms';

export const SliderIndicators = forwardRef<HTMLDivElement, SliderIndicatorsProps>(
  ({ slides, className = '' }, ref) => (
    <div ref={ref} className={['slider-indices', className].filter(Boolean).join(' ')}>
      {slides.map((slide, index) => (
        <SliderIndicatorItem key={slide.id} index={index} />
      ))}
    </div>
  )
);

SliderIndicators.displayName = 'SliderIndicators';

