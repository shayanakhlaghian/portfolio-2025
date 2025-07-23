'use client';
import { Greet } from '.';
import type { Landing } from '@/payload-types';
import { DotPattern } from '@/components';

const Hero = (hero: Landing['hero']) => {
  return (
    <section className="relative flex h-[calc(100vh-var(--header-height))] w-full flex-col lg:flex-row">
      <DotPattern className="absolute top-0 left-0 -z-10 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
      <div className="flex flex-1 items-center justify-center">
        <div className="size-40 rotate-45 rounded-3xl bg-primary md:size-44 lg:size-64 xl:size-80"></div>
      </div>
      <Greet {...hero} />
    </section>
  );
};

export default Hero;
