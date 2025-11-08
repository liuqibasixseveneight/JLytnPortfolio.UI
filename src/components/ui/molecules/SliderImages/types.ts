import type { Slide } from '../../organisms/HeroSlider/slides';

export type SliderImagesProps = {
  slides: Slide[];
  activeSlideId?: number;
  className?: string;
};
