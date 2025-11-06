import { IconButton } from '../IconButton';
import type { GridToggleButtonProps } from './types';
import { useGridDebugStore } from '../../../../state';

export const GridToggleButton = ({ className = '' }: GridToggleButtonProps) => {
  const { isGridVisible, toggleGrid } = useGridDebugStore();

  return (
    <IconButton
      onClick={toggleGrid}
      className={className}
      ariaLabel={isGridVisible ? 'Hide grid' : 'Show grid'}
    >
      <svg
        className='w-5 h-5 text-zinc-100'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
        />
      </svg>
    </IconButton>
  );
};
