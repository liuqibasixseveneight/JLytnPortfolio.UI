import type { MenuToggleProps } from './types';
import { HamburgerIcon } from '../../atoms';

export const MenuToggle = ({
  onToggle,
  isExpanded,
  isDisabled,
  isActive,
  labelRef,
  controlId = 'menu-overlay',
  label = '[ Menu ]',
}: MenuToggleProps) => (
  <button
    type='button'
    className='menu-toggle-btn'
    onClick={onToggle}
    aria-expanded={isExpanded}
    aria-controls={controlId}
    disabled={isDisabled}
  >
    <div className='menu-toggle-label'>
      <p ref={labelRef}>{label}</p>
    </div>
    <HamburgerIcon isActive={isActive} />
  </button>
);

