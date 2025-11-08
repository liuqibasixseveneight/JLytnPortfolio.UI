import type { HeaderNavProps } from './types';

export const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <nav className='nav'>
      <p className='logo'>
        <span className='lowercase'>j-lytn</span> / frontend engineer
      </p>
      <p>{`[ Scrollable Motion Slider ]`}</p>
    </nav>
  );
};
