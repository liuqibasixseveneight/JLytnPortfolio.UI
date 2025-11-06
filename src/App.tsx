import { About, Contact, Home, Lab, Projects } from './components/pages';
import { VerticalNavBar } from './components/ui';
import { isLabEnabled } from './config';

export const App = () => {
  return (
    <div className='w-full h-screen bg-red-500'>
      <VerticalNavBar />

      <Home />
      <About />
      <Projects />
      <Contact />
      {isLabEnabled && <Lab />}
    </div>
  );
};
