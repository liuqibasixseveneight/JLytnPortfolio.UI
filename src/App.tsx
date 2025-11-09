import { Home } from './components/pages';
import { SiteNavigation } from './components/ui';
import { useViewportHeight, useSiteNavigationController } from './hooks';

export const App = () => {
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
  } = useSiteNavigationController();

  return (
    <div className='site-root' ref={rootRef}>
      <SiteNavigation
        onToggle={handleMenuToggle}
        isAnimating={isAnimating}
        isMenuOpen={isMenuOpen}
        isOpening={isOpening}
        isHamburgerActive={isHamburgerActive}
        menuToggleLabelRef={menuToggleLabelRef}
        menuOverlayRef={menuOverlayRef}
        menuOverlayContentRef={menuOverlayContentRef}
        menuMediaWrapperRef={menuMediaWrapperRef}
      />

      <main className='container' ref={mainContentRef}>
        <Home />
      </main>
    </div>
  );
};
