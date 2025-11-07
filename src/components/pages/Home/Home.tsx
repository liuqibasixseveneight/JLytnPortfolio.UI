import type { HomeProps } from './types';

export const Home = ({ id }: HomeProps) => {
  return (
    <section
      id={id}
      className='col-span-12 w-full h-screen flex items-center justify-center bg-purple-500'
    >
      <h1 className='text-4xl font-bold text-zinc-100'>j-lytn</h1>
    </section>
  );
};
