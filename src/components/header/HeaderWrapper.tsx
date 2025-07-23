'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    gsap.to('.header-item', { opacity: 1, duration: 1, stagger: 0.1 });
  }, []);

  return (
    <header className="flex py-4 justify-between px-8 z-10">
      {children}
    </header>
  );
};

export default HeaderWrapper;
