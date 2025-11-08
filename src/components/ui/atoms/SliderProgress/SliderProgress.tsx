import { forwardRef } from 'react';

import type { SliderProgressProps } from './types';

export const SliderProgress = forwardRef<HTMLDivElement, SliderProgressProps>(
  ({ className = '' }, ref) => (
    <div
      ref={ref}
      className={['slider-progress', className].filter(Boolean).join(' ')}
    />
  )
);

SliderProgress.displayName = 'SliderProgress';

