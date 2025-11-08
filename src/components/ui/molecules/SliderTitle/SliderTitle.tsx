import { forwardRef } from 'react';

import type { SliderTitleProps } from './types';

export const SliderTitle = forwardRef<HTMLHeadingElement, SliderTitleProps>(
  ({ title, className = '' }, ref) => (
    <div
      className={['slider-title', className].filter(Boolean).join(' ')}
      aria-live='polite'
    >
      <h1 ref={ref}>{title}</h1>
    </div>
  )
);

SliderTitle.displayName = 'SliderTitle';

