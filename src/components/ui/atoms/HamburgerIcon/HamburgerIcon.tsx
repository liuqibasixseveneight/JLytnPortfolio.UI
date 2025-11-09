import type { HamburgerIconProps } from './types';

const BASE_CLASS = 'menu-hamburger-icon';

export const HamburgerIcon = ({
  isActive = false,
  className,
}: HamburgerIconProps) => {
  const classNames = [BASE_CLASS];

  if (isActive) {
    classNames.push('active');
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(' ')}>
      <span />
      <span />
    </div>
  );
};

