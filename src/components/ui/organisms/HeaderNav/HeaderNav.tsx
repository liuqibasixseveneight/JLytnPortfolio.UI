import type { HeaderNavProps } from './types';
import { Logo } from '../../atoms';

export const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <nav className='nav'>
      <Logo />
      <p>{`[ Scroll ]`}</p>
    </nav>
  );
};
