import { HeroSlider, HomeMenu } from '../../ui';
import { useViewportHeight } from '../../../hooks/useViewportHeight';
import { useHomeMenuController } from './useHomeMenuController';

const MENU_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Contact', href: '#' },
];

const CONTACT_LINES = [
  '© 2025 J-Lytn.',
  'All rights reserved.',
  'joshua.riz.layton@gmail.com',
];

const MENU_MEDIA = {
  src: 'https://images.unsplash.com/photo-1716066508192-7ccd1a71ac1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
  alt: 'Menu spiral image',
};

export const Home = () => {
  useViewportHeight();

  const {
    rootRef,
    mainContentRef,
    menuToggleLabelRef,
    menuOverlayRef,
    menuOverlayContentRef,
    menuMediaWrapperRef,
    handleMenuToggle,
    isMenuOpen,
    isAnimating,
    isHamburgerActive,
    isOpening,
  } = useHomeMenuController();

  return (
    <div className='home-root' ref={rootRef}>
      <HomeMenu
        onToggle={handleMenuToggle}
        isAnimating={isAnimating}
        isMenuOpen={isMenuOpen}
        isOpening={isOpening}
        isHamburgerActive={isHamburgerActive}
        menuToggleLabelRef={menuToggleLabelRef}
        menuOverlayRef={menuOverlayRef}
        menuOverlayContentRef={menuOverlayContentRef}
        menuMediaWrapperRef={menuMediaWrapperRef}
        location='Leeds, UK'
        links={MENU_LINKS}
        contactLines={CONTACT_LINES}
        mediaImage={MENU_MEDIA}
      />

      <div className='container' ref={mainContentRef}>
        {/* DO NOT TOUCH */}
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
      </div>
    </div>
  );
};
