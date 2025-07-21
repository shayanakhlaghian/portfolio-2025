'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { Nav, ThemeToggle } from '.';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headerRef.current,
        {
          boxShadow: '0 0 10px rgba(255, 105, 0, 0)',
        },
        {
          boxShadow: '0 0 10px rgba(255, 105, 0, 1)',
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: document.documentElement,
            start: '120px top',
            toggleActions: 'play reverse play reverse',
          },
        },
      );

       gsap.fromTo(
        '.header-bg',
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: document.documentElement,
            start: '120px top',
            toggleActions: 'play reverse play reverse',
          },
        },
      );
    },
    { scope: headerRef.current as HTMLElement, dependencies: [] },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-2 right-1/2 z-50 flex h-[var(--header-height)] w-5/6 translate-x-1/2 items-center justify-between gap-2 overflow-hidden rounded-md px-2 sm:w-3/4 md:top-4 md:right-4 md:w-auto md:translate-x-0"
    >
      <div className="header-bg absolute top-0 left-0 -z-10 size-full bg-background" />
      <ThemeToggle />
      <Nav />
    </header>
  );
};

export default Header;
