import { About, Contact, Home, Lab, Projects } from './components/pages';
import { GridContainer, VerticalNavBar } from './components/ui';
import { isLabEnabled } from './config';

export const App = () => {
  return (
    <div className='w-full h-screen bg-red-500'>
      <GridContainer>
        <VerticalNavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        {isLabEnabled && <Lab />}
      </GridContainer>
    </div>
  );
};
