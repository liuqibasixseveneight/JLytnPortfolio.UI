import { Logo } from '../../atoms';
import { MenuToggle } from '../../molecules';
import type { SiteNavigationProps } from './types';

const DEFAULT_CONTROL_ID = 'menu-overlay';

const DEFAULT_NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Contact', href: '#' },
];

const DEFAULT_FOOTER_SECTIONS = [
  {
    id: 'location',
    lines: ['Leeds, UK'],
  },
  {
    id: 'contact',
    lines: [
      '© 2025 J-Lytn.',
      'All rights reserved.',
      'joshua.riz.layton@gmail.com',
    ],
  },
];

const DEFAULT_MEDIA = {
  src: 'https://images.unsplash.com/photo-1716066508192-7ccd1a71ac1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
  alt: 'Menu spiral image',
};

export const SiteNavigation = ({
  onToggle,
  isAnimating,
  isMenuOpen,
  isOpening,
  isHamburgerActive,
  menuToggleLabelRef,
  menuOverlayRef,
  menuOverlayContentRef,
  menuMediaWrapperRef,
  primaryLinks,
  footerSections,
  mediaImage,
  controlId = DEFAULT_CONTROL_ID,
  logoHref = '#',
}: SiteNavigationProps) => {
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
            <img
              src={(mediaImage ?? DEFAULT_MEDIA).src}
              alt={(mediaImage ?? DEFAULT_MEDIA).alt}
            />
          </div>
          <div className='menu-content-wrapper'>
            <div className='menu-content-main'>
              <div className='menu-col'>
                {(primaryLinks ?? DEFAULT_NAV_LINKS).map(({ href, label }) => (
                  <div className='menu-link' key={label}>
                    <a href={href}>{label}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className='menu-footer'>
              {(footerSections ?? DEFAULT_FOOTER_SECTIONS).map((section) => (
                <div className='menu-col' key={section.id}>
                  {section.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
