import type { ProjectsProps } from './types';

export const Projects = ({ id }: ProjectsProps) => {
  return (
    <section
      id={id}
      className='col-span-12 w-full h-screen flex items-center justify-center bg-orange-500'
    >
      <h1 className='text-4xl font-bold text-zinc-100'>Projects</h1>
    </section>
  );
};
