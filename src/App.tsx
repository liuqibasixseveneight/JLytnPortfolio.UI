import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import { About, Contact, Home, Lab, Projects } from './components/pages';
import { GridContainer, Header, VerticalNavBar } from './components/ui';
import { isLabEnabled } from './config';

gsap.registerPlugin(useGSAP, ScrollToPlugin);

export const App = () => {
  const gridContainerRef = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP({ scope: gridContainerRef });

  const handleNavItemClick = contextSafe((navItem: string) => {
    gsap.to(window, { scrollTo: { y: `#${navItem}`, offsetY: 0 } });
  });

  return (
    <div className='w-full h-screen bg-red-500'>
      <GridContainer ref={gridContainerRef}>
        <Header />
        <VerticalNavBar onNavItemClick={handleNavItemClick} />

        <Home id='home' />
        <About id='about' />
        <Projects id='projects' />
        <Contact id='contact' />
        {isLabEnabled && <Lab id='lab' />}
      </GridContainer>
    </div>
  );
};
