import { forwardRef } from 'react';
import { useGridDebugStore } from '../../../../state';
import type { GridContainerProps } from './types';

export const GridContainer = forwardRef<HTMLElement, GridContainerProps>(
  ({ children, className = '' }, ref) => {
    const isGridVisible = useGridDebugStore((state) => state.isGridVisible);

    return (
      <main ref={ref} className='px-4 sm:px-6 md:px-8'>
        <div
          className={`relative grid grid-cols-12 w-full grid-overlay ${
            isGridVisible ? 'grid-debug' : ''
          } ${className}`}
        >
          {children}
        </div>
      </main>
    );
  }
);
