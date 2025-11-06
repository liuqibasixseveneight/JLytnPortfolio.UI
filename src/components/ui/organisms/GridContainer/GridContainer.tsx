import { useGridDebugStore } from '../../../../state';
import type { GridContainerProps } from './types';

export const GridContainer = ({
  children,
  className = '',
}: GridContainerProps) => {
  const isGridVisible = useGridDebugStore((state) => state.isGridVisible);

  return (
    <div
      className={`relative grid grid-cols-12 w-full grid-overlay ${
        isGridVisible ? 'grid-debug' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
