import type { VerticalScrollBarProps } from './types';

export const VerticalScrollBar = ({
  className = '',
}: VerticalScrollBarProps) => {
  return (
    <div
      className={`fixed right-3 top-1/2 hidden -translate-y-1/2 flex-col items-center sm:flex ${className}`}
    >
      <div className='h-32 w-px bg-zinc-700/50' />
      <div className='mt-2 flex flex-col items-center gap-2'>
        <span className='h-2 w-2 rounded-full border border-zinc-500' />
        <span className='h-2 w-2 rounded-full border border-zinc-500/70' />
        <span className='h-2 w-2 rounded-full border border-zinc-500/50' />
      </div>
    </div>
  );
};
