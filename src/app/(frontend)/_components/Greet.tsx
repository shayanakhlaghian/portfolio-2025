'use client';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText } from 'gsap/all';

import type { Icon, Landing } from '@/payload-types';
import { AppLink, MediaIcon, RainbowButton, RichText } from '@/components';

const Greet = ({ title, description, cta }: Landing['hero']) => {
  useGSAP(() => {
    const titleSplit = SplitText.create('.hero-title', { type: 'chars' });
    const descriptionSplit = SplitText.create('.hero-description', { type: 'lines, words' });

    gsap.fromTo(
      titleSplit.chars,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.05 },
    );

    gsap.fromTo(
      descriptionSplit.lines,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1.2, delay: 0.5, ease: 'expo.out', stagger: 0.05 },
    );

    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 0.6, delay: 1, ease: 'expo.out' },
    );
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 px-8 lg:justify-center lg:px-16">
      <h1 className="hero-title bg-clip-text font-accent text-2xl font-bold text-primary lg:text-3xl">
        {title}
      </h1>
      <RichText data={description} className="hero-description prose-p:my-0" />
      <AppLink href={cta.href} newTab={cta.newTab} className="hero-cta">
        <RainbowButton className="self-start capitalize">
          {cta.text} <MediaIcon icon={cta.icon as Icon} />
        </RainbowButton>
      </AppLink>
    </div>
  );
};

export default Greet;
