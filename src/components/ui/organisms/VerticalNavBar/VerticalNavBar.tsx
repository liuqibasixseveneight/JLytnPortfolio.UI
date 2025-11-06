import { isLabEnabled } from '../../../../config';
import { VerticalNavBarItem } from '../../molecules';
import type { VerticalNavBarProps } from './types';

export const VerticalNavBar = ({}: VerticalNavBarProps) => {
  return (
    <nav className='fixed right-[calc(50%/12)] top-1/2 -translate-y-1/2 flex flex-col items-center py-8'>
      <ul className='flex flex-col gap-6'>
        <VerticalNavBarItem text='01' />
        <VerticalNavBarItem text='02' />
        <VerticalNavBarItem text='03' />
        <VerticalNavBarItem text='04' />
        {isLabEnabled && <VerticalNavBarItem text='05' />}
      </ul>
    </nav>
  );
};
