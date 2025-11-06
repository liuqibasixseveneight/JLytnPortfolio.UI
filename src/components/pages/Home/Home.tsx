import type { HomeProps } from './types';

export const Home = ({}: HomeProps) => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-purple-500'>
      <h1 className='text-4xl font-bold text-white'>j-lytn</h1>
    </div>
  );
};
