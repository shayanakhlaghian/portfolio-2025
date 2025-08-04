'use client';
import { BackgroundBeams } from '@/components';
import { Greet, Canvas } from '.';
import type { Landing } from '@/payload-types';

const Hero = (hero: Landing['hero']) => {
  return (
    <section className="relative flex h-[calc(100vh-var(--header-height))] w-full flex-col lg:flex-row">
      <BackgroundBeams />
      <div className="relative flex-1">
        <div className="absolute-center size-56 md:size-64 lg:top-1/2 lg:size-80 xl:size-[26rem]">
          <div className="absolute-center size-5/6 rotate-45 rounded-3xl bg-secondary">
            <div className="size-full rotate-12 rounded-3xl bg-primary" />
          </div>
          <Canvas />
        </div>
      </div>
      <Greet {...hero} />
    </section>
  );
};

export default Hero;
