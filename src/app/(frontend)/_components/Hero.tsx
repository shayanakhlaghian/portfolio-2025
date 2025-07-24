'use client';
import { Greet, Canvas } from '.';
import type { Landing } from '@/payload-types';
import { DotPattern } from '@/components';

const Hero = (hero: Landing['hero']) => {
  return (
    <section className="relative flex h-[calc(100vh-var(--header-height))] w-full flex-col lg:flex-row">
      <DotPattern className="absolute top-0 left-0 -z-10 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
      <div className="flex flex-1 items-center justify-center">
        <div className="relative size-56 md:size-64 lg:size-80 xl:size-[26rem]">
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
