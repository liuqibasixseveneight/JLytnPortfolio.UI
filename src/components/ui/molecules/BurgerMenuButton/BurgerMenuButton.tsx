import { IconButton } from '../../atoms';
import type { BurgerMenuButtonProps } from './types';

export const BurgerMenuButton = ({
  className = '',
  onClick,
}: BurgerMenuButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      className={`flex-col gap-1.5 ${className}`}
      ariaLabel='Menu'
    >
      <span className='w-6 h-0.5 bg-zinc-100'></span>
      <span className='w-6 h-0.5 bg-zinc-100'></span>
      <span className='w-6 h-0.5 bg-zinc-100'></span>
    </IconButton>
  );
};
