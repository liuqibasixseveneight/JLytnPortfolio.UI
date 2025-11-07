import type { ContactProps } from './types';

export const Contact = ({ id }: ContactProps) => {
  return (
    <section
      id={id}
      className='col-span-12 w-full h-screen flex items-center justify-center bg-blue-500'
    >
      <h1 className='text-4xl font-bold text-zinc-100'>Contact</h1>
    </section>
  );
};
