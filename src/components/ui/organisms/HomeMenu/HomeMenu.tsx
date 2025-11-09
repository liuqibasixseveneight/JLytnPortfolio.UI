import { Logo } from '../../atoms';
import { MenuToggle } from '../../molecules';
import type { HomeMenuProps } from './types';

const DEFAULT_CONTROL_ID = 'menu-overlay';

export const HomeMenu = ({
  onToggle,
  isAnimating,
  isMenuOpen,
  isOpening,
  isHamburgerActive,
  menuToggleLabelRef,
  menuOverlayRef,
  menuOverlayContentRef,
  menuMediaWrapperRef,
  location,
  links,
  contactLines,
  mediaImage,
  controlId = DEFAULT_CONTROL_ID,
  logoHref = '#',
}: HomeMenuProps) => {
  const isOverlayActive = isMenuOpen || isOpening;

  return (
    <nav>
      <div className='menu-bar'>
        <div className='menu-logo'>
          <a href={logoHref}>
            <Logo />
          </a>
        </div>

        <MenuToggle
          onToggle={onToggle}
          isExpanded={isOverlayActive}
          isDisabled={isAnimating}
          isActive={isHamburgerActive}
          labelRef={menuToggleLabelRef}
          controlId={controlId}
        />
      </div>

      <div
        id={controlId}
        className='menu-overlay'
        ref={menuOverlayRef}
        role='dialog'
        aria-modal={isOverlayActive ? 'true' : undefined}
        aria-hidden={isOverlayActive ? 'false' : 'true'}
        tabIndex={-1}
      >
        <div className='menu-overlay-content' ref={menuOverlayContentRef}>
          <div className='menu-media-wrapper' ref={menuMediaWrapperRef}>
            <img src={mediaImage.src} alt={mediaImage.alt} />
          </div>
          <div className='menu-content-wrapper'>
            <div className='menu-content-main'>
              <div className='menu-col'>
                {links.map(({ href, label }) => (
                  <div className='menu-link' key={label}>
                    <a href={href}>{label}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className='menu-footer'>
              <div className='menu-col'>
                <p>{location}</p>
              </div>
              <div className='menu-col'>
                {contactLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
