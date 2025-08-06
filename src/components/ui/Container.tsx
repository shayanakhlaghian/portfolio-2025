'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';

import React from 'react';

const Container = ({
  children,
  className,
  gsapConfig,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { gsapConfig?: gsap.TweenVars }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ...gsapConfig,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default Container;
