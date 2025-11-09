import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import type { HomeProps } from './types';
import { HeroSlider, Logo } from '../../ui';

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
CustomEase.create('hop', '.87, 0, .13, 1');

const MENU_SHIFT_DURATION = 0.65;
const MENU_MEDIA_DURATION = 0.45;
const MENU_COPY_DURATION = 1.1;
const MENU_CLOSE_DURATION = 0.55;
const MENU_CLOSE_MEDIA_DURATION = 0.35;
const MENU_CLOSE_COPY_DURATION = 0.5;

type SplitTextInstance = {
  lines?: HTMLElement[];
  revert?: () => void;
};

type SplitTextConstructor = new (
  target: Element,
  vars: Record<string, unknown>
) => SplitTextInstance;

const SplitTextCtor = SplitText as unknown as SplitTextConstructor;

export const Home = ({}: HomeProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const menuToggleLabelRef = useRef<HTMLParagraphElement | null>(null);
  const menuOverlayRef = useRef<HTMLDivElement | null>(null);
  const menuOverlayContentRef = useRef<HTMLDivElement | null>(null);
  const menuMediaWrapperRef = useRef<HTMLDivElement | null>(null);

  const lenisRef = useRef<Lenis | null>(null);
  const menuOpenTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const menuCloseTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitTextGroupsRef = useRef<SplitTextInstance[][]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false });
    const handleScroll = () => ScrollTrigger.update();

    lenis.on('scroll', handleScroll);

    lenisRef.current = lenis;

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      gsap.ticker.lagSmoothing(1000, 16);
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      const scope = rootRef.current;
      const menuOverlay = menuOverlayRef.current;
      const menuOverlayContent = menuOverlayContentRef.current;
      const menuMediaWrapper = menuMediaWrapperRef.current;
      const menuToggleLabel = menuToggleLabelRef.current;

      if (
        !scope ||
        !menuOverlay ||
        !menuOverlayContent ||
        !menuMediaWrapper ||
        !menuToggleLabel
      ) {
        return;
      }

      const rootElement = document.documentElement;
      const menuColumns = Array.from(
        scope.querySelectorAll<HTMLElement>('.menu-col')
      );

      const splitGroups = menuColumns.map((col) => {
        const textElements = col.querySelectorAll<HTMLElement>('a, p');

        return Array.from(textElements).map((element) => {
          const split = new SplitTextCtor(element, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'line',
          });

          if (split.lines?.length) {
            gsap.set(split.lines, { yPercent: -110 });
          }

          return split;
        });
      });

      splitTextGroupsRef.current = splitGroups;

      gsap.set(rootElement, { '--menu-content-offset': '0svh' });
      gsap.set(menuOverlayContent, { yPercent: -50 });
      gsap.set(menuMediaWrapper, { opacity: 0 });
      gsap.set(menuColumns, { opacity: 0.25 });
      gsap.set([menuOverlay, menuOverlayContent], { pointerEvents: 'none' });

      const timeline = gsap.timeline({
        paused: true,
        defaults: { ease: 'hop' },
      });

      timeline
        .to(menuToggleLabel, {
          yPercent: -110,
          duration: MENU_SHIFT_DURATION,
        })
        .to(
          rootElement,
          {
            '--menu-content-offset': '100svh',
            duration: MENU_SHIFT_DURATION,
          },
          '<'
        )
        .to(
          menuOverlay,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: MENU_SHIFT_DURATION,
          },
          '<'
        )
        .to(
          menuOverlayContent,
          {
            yPercent: 0,
            duration: MENU_SHIFT_DURATION,
          },
          '<'
        )
        .call(
          () => {
            menuOverlay.style.pointerEvents = 'auto';
            menuOverlayContent.style.pointerEvents = 'auto';
          },
          undefined,
          '<'
        )
        .to(
          menuMediaWrapper,
          {
            opacity: 1,
            duration: MENU_MEDIA_DURATION,
            ease: 'power2.out',
          },
          '-=0.25'
        )
        .to(
          menuColumns,
          {
            opacity: 1,
            duration: MENU_MEDIA_DURATION,
          },
          '<'
        );

      splitGroups.forEach((group) => {
        const lines = group.flatMap((split) => split.lines ?? []);

        if (lines.length) {
          timeline.to(
            lines,
            {
              yPercent: 0,
              duration: MENU_COPY_DURATION,
              ease: 'hop',
              stagger: -0.05,
            },
            '-=0.55'
          );
        }
      });

      timeline.eventCallback('onComplete', () => {
        setIsAnimating(false);
        setIsMenuOpen(true);
        setIsOpening(false);
        lenisRef.current?.stop();
        ScrollTrigger.refresh();
      });

      timeline.eventCallback('onReverseComplete', () => {
        splitTextGroupsRef.current.forEach((group) => {
          group.forEach((split) => {
            if (split.lines?.length) {
              gsap.set(split.lines, { yPercent: -110 });
            }
          });
        });

        gsap.set(menuColumns, { opacity: 0.25 });
        gsap.set(menuMediaWrapper, { opacity: 0 });
        gsap.set(rootElement, { '--menu-content-offset': '0svh' });
        menuOverlay.style.pointerEvents = 'none';
        menuOverlayContent.style.pointerEvents = 'none';

        setIsAnimating(false);
        setIsMenuOpen(false);
        setIsHamburgerActive(false);
        setIsOpening(false);
        lenisRef.current?.start();
        ScrollTrigger.refresh();
      });

      menuOpenTimelineRef.current = timeline;

      const closeLines = splitGroups.flatMap((group) =>
        group.flatMap((split) => split.lines ?? [])
      );

      const closeTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: 'hop' },
      });

      closeTimeline
        .to(closeLines, {
          yPercent: -110,
          duration: MENU_CLOSE_COPY_DURATION,
          ease: 'hop',
        })
        .to(
          menuColumns,
          {
            opacity: 0.25,
            duration: MENU_CLOSE_COPY_DURATION,
          },
          '<'
        )
        .to(
          menuMediaWrapper,
          {
            opacity: 0,
            duration: MENU_CLOSE_MEDIA_DURATION,
            ease: 'power2.inOut',
          },
          '<'
        )
        .to(rootElement, {
          '--menu-content-offset': '0svh',
          duration: MENU_CLOSE_DURATION,
        })
        .to(
          menuOverlay,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: MENU_CLOSE_DURATION,
          },
          '<'
        )
        .to(
          menuOverlayContent,
          {
            yPercent: -50,
            duration: MENU_CLOSE_DURATION,
          },
          '<'
        )
        .to(
          menuToggleLabel,
          {
            yPercent: 0,
            duration: MENU_CLOSE_DURATION,
          },
          '<'
        );

      closeTimeline.eventCallback('onStart', () => {
        setIsAnimating(true);
      });

      closeTimeline.eventCallback('onComplete', () => {
        menuOverlay.style.pointerEvents = 'none';
        menuOverlayContent.style.pointerEvents = 'none';

        setIsAnimating(false);
        setIsMenuOpen(false);
        setIsHamburgerActive(false);
        setIsOpening(false);
        lenisRef.current?.start();
        ScrollTrigger.refresh();
        menuOpenTimelineRef.current?.pause(0);
      });

      menuCloseTimelineRef.current = closeTimeline;

      return () => {
        timeline.kill();
        closeTimeline.kill();
        menuOpenTimelineRef.current = null;
        menuCloseTimelineRef.current = null;

        splitTextGroupsRef.current.forEach((group) => {
          group.forEach((split) => split.revert?.());
        });
        splitTextGroupsRef.current = [];
      };
    },
    { scope: rootRef }
  );

  const handleMenuToggle = contextSafe(() => {
    if (isAnimating) {
      return;
    }

    if (isMenuOpen) {
      if (!menuCloseTimelineRef.current) {
        return;
      }

      setIsAnimating(true);
      setIsHamburgerActive(false);
      setIsOpening(false);
      lenisRef.current?.stop();
      menuCloseTimelineRef.current.play(0);
    } else {
      if (!menuOpenTimelineRef.current) {
        return;
      }

      setIsAnimating(true);
      setIsHamburgerActive(true);
      setIsOpening(true);
      lenisRef.current?.stop();
      menuOpenTimelineRef.current.play(0);
    }
  });

  return (
    <div className='home-root' ref={rootRef}>
      <nav>
        <div className='menu-bar'>
          <div className='menu-logo'>
            <a href='#'>
              <Logo />
            </a>
          </div>

          <button
            type='button'
            className='menu-toggle-btn'
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen || isOpening}
            aria-controls='menu-overlay'
            disabled={isAnimating}
          >
            <div className='menu-toggle-label'>
              <p ref={menuToggleLabelRef}>[ Menu ]</p>
            </div>
            <div
              className={`menu-hamburger-icon${
                isHamburgerActive ? ' active' : ''
              }`}
            >
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div
          id='menu-overlay'
          className='menu-overlay'
          ref={menuOverlayRef}
          role='dialog'
          aria-modal={isMenuOpen || isOpening ? 'true' : undefined}
          aria-hidden={isMenuOpen || isOpening ? 'false' : 'true'}
          tabIndex={-1}
        >
          <div className='menu-overlay-content' ref={menuOverlayContentRef}>
            <div className='menu-media-wrapper' ref={menuMediaWrapperRef}>
              <img
                src='https://images.unsplash.com/photo-1716066508192-7ccd1a71ac1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
                alt='Menu spiral image'
              />
            </div>
            <div className='menu-content-wrapper'>
              <div className='menu-content-main'>
                <div className='menu-col'>
                  <div className='menu-link'>
                    <a href='#'>Home</a>
                  </div>
                  <div className='menu-link'>
                    <a href='#'>About</a>
                  </div>
                  <div className='menu-link'>
                    <a href='#'>Projects</a>
                  </div>
                  <div className='menu-link'>
                    <a href='#'>Contact</a>
                  </div>
                </div>
              </div>
              <div className='menu-footer'>
                <div className='menu-col'>
                  <p>Leeds, UK</p>
                </div>
                <div className='menu-col'>
                  <p>© 2025 J-Lytn.</p>
                  <p>All rights reserved.</p>
                  <p>joshua.riz.layton@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
