'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/all';

import type { Icon, Landing } from '@/payload-types';
import { AppLink, MediaIcon, RainbowButton, RichText, Title } from '@/components';

const Greet = ({ title, description, cta }: Landing['hero']) => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 0.6, delay: 1.6, ease: 'expo.out' },
    );
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 px-8 lg:justify-center lg:px-16">
      <Title as="h1" gsapConfig={{ delay: 0.3 }}>
        {title}
      </Title>
      <RichText data={description} gsapConfig={{ delay: 0.9 }} />
      <AppLink href={cta.href} newTab={cta.newTab} className="hero-cta">
        <RainbowButton className="self-start capitalize">
          {cta.text} <MediaIcon icon={cta.icon as Icon} />
        </RainbowButton>
      </AppLink>
    </div>
  );
};

export default Greet;
