import { GridToggleButton, Logo } from '../../atoms';
import { BurgerMenuButton } from '../../molecules';
import { isLabEnabled } from '../../../../config';
import type { HeaderProps } from './types';

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className='fixed top-0 left-0 right-0 w-full z-50'>
      <div className='px-4 sm:px-6 md:px-8 py-4 grid grid-cols-12 items-center'>
        <div className='col-span-11 flex items-center gap-4'>
          <Logo />
          {isLabEnabled && <GridToggleButton />}
        </div>
        <div className='col-span-1 flex justify-end'>
          <BurgerMenuButton onClick={onMenuClick} />
        </div>
      </div>
    </header>
  );
};
