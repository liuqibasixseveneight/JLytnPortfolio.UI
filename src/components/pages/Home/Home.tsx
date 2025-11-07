import type { HomeProps } from './types';

export const Home = ({ id }: HomeProps) => {
  return (
    <section
      id={id}
      className='col-span-12 w-full h-screen flex items-center justify-center bg-purple-500'
    >
      <h1
        className='font-bold leading-none text-zinc-100'
        style={{ fontSize: '15vw' }}
      >
        j-lytn
      </h1>
    </section>
  );
};
