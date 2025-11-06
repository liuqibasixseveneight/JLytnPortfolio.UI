import type { LogoProps } from './types';

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`text-zinc-100 font-bold text-xl ${className}`}>
      j-lytn
    </div>
  );
};

