import type { HomeProps } from './types';
import { HeaderNav, HeroSlider, VerticalScrollBar } from '../../ui';

export const Home = ({}: HomeProps) => {
  return (
    <>
      <HeaderNav />
      <VerticalScrollBar />

      <section className='intro'>
        <h1>
          I craft human-centric frontends with performance, animation, and
          accessibility in mind.
        </h1>
      </section>

      <HeroSlider />

      <section className='outro'>
        <h1>Thanks for gliding through. Let’s build something together.</h1>
      </section>
    </>
  );
};
