import { DotPattern } from '@/components';

const Hero = () => {
  return (
    <section className="relative min-h-dvh w-full">
      <DotPattern className="absolute top-0 left-0 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
    </section>
  );
};

export default Hero;
