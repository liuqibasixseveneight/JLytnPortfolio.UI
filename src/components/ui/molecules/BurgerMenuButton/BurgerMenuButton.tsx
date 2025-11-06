import { IconButton } from '../../atoms';
import type { BurgerMenuButtonProps } from './types';

export const BurgerMenuButton = ({
  className = '',
  onClick,
}: BurgerMenuButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      className={`fixed left-[calc(23*100%/24)] -translate-x-1/2 flex-col gap-1.5 ${className}`}
      ariaLabel='Menu'
    >
      <span className='w-6 h-0.5 bg-zinc-100'></span>
      <span className='w-6 h-0.5 bg-zinc-100'></span>
      <span className='w-6 h-0.5 bg-zinc-100'></span>
    </IconButton>
  );
};
