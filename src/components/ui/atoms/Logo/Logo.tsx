import type { LogoProps } from './types';

export const Logo = ({ withoutRole = false, className = '' }: LogoProps) => (
  <p
    className={`inline-flex items-center gap-2 uppercase text-xs text-zinc-100 border border-white/10 rounded bg-zinc-900/35 backdrop-blur-[20px] py-2 px-4 overflow-hidden ${className}`}
  >
    <span className='uppercase'>J-Lytn</span>
    {!withoutRole && ` // frontend engineer`}
  </p>
);
