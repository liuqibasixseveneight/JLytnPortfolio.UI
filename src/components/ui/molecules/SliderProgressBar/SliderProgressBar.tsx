import { forwardRef } from 'react';

import type { SliderProgressBarProps } from './types';

import { SliderProgress } from '../../atoms';

export const SliderProgressBar = forwardRef<
  HTMLDivElement,
  SliderProgressBarProps
>(({ className = '' }, ref) => (
  <div className={['slider-progress-bar', className].filter(Boolean).join(' ')}>
    <SliderProgress ref={ref} />
  </div>
));

SliderProgressBar.displayName = 'SliderProgressBar';

