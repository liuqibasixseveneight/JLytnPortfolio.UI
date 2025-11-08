import type { IconButtonProps } from './types';

export const IconButton = ({
  children,
  className = '',
  onClick,
  ariaLabel,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button flex items-center justify-center cursor-pointer p-2 bg-transparent border-none ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
