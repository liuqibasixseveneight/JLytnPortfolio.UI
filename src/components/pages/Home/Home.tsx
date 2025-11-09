import { HeroSlider } from '../../ui';

export const Home = () => {
  return (
    <>
      <section className='intro'>
        <h1>
          Frontend engineer building fast, accessible interfaces with polish.
        </h1>
      </section>

      <HeroSlider />

      <section className='outro'>
        <h1>
          Thanks for stopping by—let’s chat about your next frontend build.
        </h1>
      </section>
    </>
  );
};
