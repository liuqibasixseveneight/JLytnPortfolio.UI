import type { VerticalNavBarItemProps } from './types';

export const VerticalNavBarItem = ({
  text,
  onNavItemClick,
}: VerticalNavBarItemProps) => {
  return (
    <li className='not-last:[&>button]:after:content-[""] not-last:[&>button]:after:bg-zinc-100 not-last:[&>button]:after:w-px not-last:[&>button]:after:h-10 not-last:[&>button]:after:opacity-50 not-last:[&>button]:after:my-2.5'>
      <button
        onClick={onNavItemClick}
        className='flex flex-col items-center cursor-pointer text-zinc-100! hover:text-zinc-400! transition-colors duration-300 ease-in-out focus:outline-none font-jetbrains'
      >
        {text}
      </button>
    </li>
  );
};
