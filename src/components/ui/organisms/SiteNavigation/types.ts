import type { Ref } from 'react';

export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationFooterSection = {
  id: string;
  lines: string[];
};

export type NavigationMedia = {
  src: string;
  alt: string;
};

export type SiteNavigationProps = {
  onToggle: () => void;
  isAnimating: boolean;
  isMenuOpen: boolean;
  isOpening: boolean;
  isHamburgerActive: boolean;
  menuToggleLabelRef: Ref<HTMLParagraphElement>;
  menuOverlayRef: Ref<HTMLDivElement>;
  menuOverlayContentRef: Ref<HTMLDivElement>;
  menuMediaWrapperRef: Ref<HTMLDivElement>;
  primaryLinks?: NavigationLink[];
  footerSections?: NavigationFooterSection[];
  mediaImage?: NavigationMedia;
  logoHref?: string;
  controlId?: string;
};

