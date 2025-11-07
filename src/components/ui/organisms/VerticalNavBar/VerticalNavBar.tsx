import { isLabEnabled } from '../../../../config';
import { VerticalNavBarItem } from '../../molecules';
import type { VerticalNavBarProps } from './types';

export const VerticalNavBar = ({ onNavItemClick }: VerticalNavBarProps) => {
  return (
    <nav className='fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center py-8'>
      <ul className='flex flex-col gap-6'>
        <VerticalNavBarItem
          text='01'
          onNavItemClick={() => onNavItemClick('home')}
        />
        <VerticalNavBarItem
          text='02'
          onNavItemClick={() => onNavItemClick('about')}
        />
        <VerticalNavBarItem
          text='03'
          onNavItemClick={() => onNavItemClick('projects')}
        />
        <VerticalNavBarItem
          text='04'
          onNavItemClick={() => onNavItemClick('contact')}
        />
        {isLabEnabled && (
          <VerticalNavBarItem
            text='05'
            onNavItemClick={() => onNavItemClick('lab')}
          />
        )}
      </ul>
    </nav>
  );
};
