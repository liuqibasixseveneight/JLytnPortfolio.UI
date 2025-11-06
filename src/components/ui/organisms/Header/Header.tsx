import { GridToggleButton, Logo } from '../../atoms';
import { BurgerMenuButton } from '../../molecules';
import { isLabEnabled } from '../../../../config';
import type { HeaderProps } from './types';

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className='col-span-12 fixed top-0 left-0 right-0 w-full flex items-center justify-between px-4 py-4 z-50'>
      <div className='flex items-center gap-4'>
        <Logo />
        {isLabEnabled && <GridToggleButton />}
      </div>
      <BurgerMenuButton onClick={onMenuClick} />
    </header>
  );
};

