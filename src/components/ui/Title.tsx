'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText, gsap } from 'gsap/all';

import { cn } from '@/lib';

const Title = ({
  as: Tag,
  children,
  className,
  gsapConfig,
  disableAnimation = false,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gsapConfig?: gsap.TweenVars;
  disableAnimation?: boolean;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (disableAnimation) return;

      const split = SplitText.create(ref.current as gsap.DOMTarget, { type: 'words, chars' });

      gsap.fromTo(
        split.chars,
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'expo.out',
          ...gsapConfig,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 95%',
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={cn('mb-6 font-accent text-lg font-bold lg:text-xl 2xl:text-2xl', className, {
        'text-2xl text-primary lg:text-3xl 2xl:text-4xl': Tag === 'h1',
        'text-xl text-primary lg:text-2xl 2xl:text-3xl': Tag === 'h2',
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Title;
