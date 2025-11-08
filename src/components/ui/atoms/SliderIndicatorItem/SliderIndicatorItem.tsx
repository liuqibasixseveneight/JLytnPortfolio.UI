import type { SliderIndicatorItemProps } from './types';

export const SliderIndicatorItem = ({
  index,
  className = '',
}: SliderIndicatorItemProps) => (
  <p
    data-indicator-index={index}
    className={['slider-indicator-item', className].filter(Boolean).join(' ')}
  >
    <span className='marker' aria-hidden='true' />
    <span className='index'>{(index + 1).toString().padStart(2, '0')}</span>
  </p>
);

