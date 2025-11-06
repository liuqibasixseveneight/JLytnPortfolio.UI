import type { VerticalNavBarItemProps } from './types';

export const VerticalNavBarItem = ({
  text,
  href = '#',
}: VerticalNavBarItemProps) => {
  return (
    <li className='not-last:[&>a]:after:content-[""] not-last:[&>a]:after:bg-white not-last:[&>a]:after:w-px not-last:[&>a]:after:h-10 not-last:[&>a]:after:opacity-50 not-last:[&>a]:after:my-2.5'>
      <a
        href={href}
        className='flex flex-col items-center cursor-pointer text-white! hover:text-gray-400! transition-colors duration-300 ease-in-out'
      >
        {text}
      </a>
    </li>
  );
};
