import type { AboutProps } from './types';

export const About = ({}: AboutProps) => {
  return (
    <div className='col-span-12 w-full h-screen flex items-center justify-center bg-green-500'>
      <h1 className='text-4xl font-bold text-white'>About</h1>
    </div>
  );
};
