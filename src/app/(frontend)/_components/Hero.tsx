import type { Icon, Landing } from '@/payload-types';
import { AppLink, DotPattern, MediaIcon, RainbowButton, RichText } from '@/components';

const Hero = ({ title, description, cta }: Landing['hero']) => {
  return (
    <section className="relative flex h-[calc(100vh-var(--header-height))] w-full flex-col lg:flex-row">
      <DotPattern className="absolute top-0 left-0 -z-10 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
      <div className="flex flex-1 items-center justify-center">
        <div className="size-40 rotate-45 rounded-3xl bg-primary md:size-44 lg:size-64 xl:size-80"></div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-8 lg:justify-center lg:px-16">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-accent text-2xl font-bold text-transparent lg:text-3xl">
          {title}
        </h1>
        <RichText data={description} />
        <AppLink href={cta.href} newTab={cta.newTab}>
          <RainbowButton className="self-start capitalize">
            {cta.text} <MediaIcon icon={cta.icon as Icon} />
          </RainbowButton>
        </AppLink>
      </div>
    </section>
  );
};

export default Hero;
