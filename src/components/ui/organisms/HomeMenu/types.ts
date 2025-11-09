import type { Ref } from 'react';

export type MenuLink = {
  label: string;
  href: string;
};

export type HomeMenuProps = {
  onToggle: () => void;
  isAnimating: boolean;
  isMenuOpen: boolean;
  isOpening: boolean;
  isHamburgerActive: boolean;
  menuToggleLabelRef: Ref<HTMLParagraphElement>;
  menuOverlayRef: Ref<HTMLDivElement>;
  menuOverlayContentRef: Ref<HTMLDivElement>;
  menuMediaWrapperRef: Ref<HTMLDivElement>;
  location: string;
  links: MenuLink[];
  contactLines: string[];
  mediaImage: {
    src: string;
    alt: string;
  };
  controlId?: string;
  logoHref?: string;
};

