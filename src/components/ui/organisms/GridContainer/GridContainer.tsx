import type { GridContainerProps } from './types';

export const GridContainer = ({
  children,
  className = '',
}: GridContainerProps) => {
  return (
    <div
      className={`relative grid grid-cols-12 w-full grid-debug ${className}`}
    >
      {children}
    </div>
  );
};
