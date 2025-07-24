'use client';
import { BackgroundBeams } from '@/components';
import { Greet, Canvas } from '.';
import type { Landing } from '@/payload-types';

const Hero = (hero: Landing['hero']) => {
  return (
    <section className="relative flex h-[calc(100vh-var(--header-height))] w-full flex-col lg:flex-row">
      <BackgroundBeams />
      <div className="relative flex-1">
        {/* 
            The reason for top-[44%] class here is that it prevents 
            react three drei's Html component from being mispositioned. Anything 
            above that messes up the position in mobile phones 
        */}
        <div className="absolute top-[44%] left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 md:size-64 lg:top-1/2 lg:size-80 xl:size-[26rem]">
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
