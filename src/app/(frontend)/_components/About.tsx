'use client';
import {
  type SerializedEditorState,
  type SerializedLexicalNode,
} from '@payloadcms/richtext-lexical/lexical';
import { ArrowRight, FileUserIcon } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

import type { Landing, Media } from '@/payload-types';
import { RichText, SectionWrapper, Title, Pointer, AppLink } from '@/components';
import { images } from '@/assets';

const TitleCell = ({ children, avatar }: { children: React.ReactNode; avatar: Media }) => {
  return (
    <div className="about-grid-cell col-span-full col-start-1 flex items-center gap-4 lg:col-end-4">
      <Pointer>
        <span className="text-4xl">👋</span>
      </Pointer>
      {avatar && (
        <div className="relative size-14 shrink-0 overflow-hidden rounded-full border lg:size-20">
          <Image src={avatar.url as string} alt="Avatar" fill className="object-cover" />
        </div>
      )}
      <Title as="h2" disableAnimation className="my-0 text-lg lg:!text-xl">
        {children}
      </Title>
    </div>
  );
};

const CvCell = ({ href }: { href: string | undefined | null }) => {
  return (
    <div className="about-grid-cell col-span-full col-start-1 !bg-primary lg:col-span-1 lg:col-start-4">
      <AppLink
        href={href || '#'}
        newTab
        className="relative flex h-full w-full items-center justify-center"
      >
        <Pointer>
          <span className="text-4xl">📒</span>
        </Pointer>
        <div className="flex flex-col items-center gap-2 text-white">
          <FileUserIcon className="size-14 lg:size-20" />
          <p className="font-accent text-sm font-bold">Download CV</p>
        </div>
      </AppLink>
    </div>
  );
};

const GithubCell = ({ href }: { href: string | undefined | null }) => {
  return (
    <div className="about-grid-cell col-span-full col-start-1 min-h-44 !bg-black !p-0 lg:col-start-5">
      <AppLink
        href={href || '#'}
        newTab
        className="relative flex h-full w-full items-center justify-center"
      >
        <Pointer>
          <span className="text-4xl">👨‍💻</span>
        </Pointer>
        <div className="relative size-16 lg:size-24">
          <Image src={images.githubMark} alt="Github" fill />
        </div>
        <div className="absolute right-6 bottom-4 flex items-center gap-2 text-primary">
          <p className="font-accent text-sm font-medium">Check out</p>
          <ArrowRight className="size-5" />
        </div>
      </AppLink>
    </div>
  );
};

const DescriptionCell = ({
  data,
}: {
  data: SerializedEditorState<SerializedLexicalNode> | null | undefined;
}) => {
  return (
    <div className="about-grid-cell col-span-full col-start-1 text-3xl">
      <Pointer>
        <span className="text-4xl">🤨</span>
      </Pointer>
      <RichText data={data} disableAnimation />
    </div>
  );
};

const About = (about: Landing['about']) => {
  useGSAP(() => {
    const cells = gsap.utils.toArray('.about-grid-cell') as gsap.DOMTarget[];
    cells.forEach((cell) =>
      gsap.fromTo(
        cell,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cell,
            start: 'top 90%',
          },
        },
      ),
    );
  }, []);

  return (
    <SectionWrapper id="about" className="mt-24">
      <div className="grid auto-rows-max grid-cols-8 gap-4">
        <TitleCell avatar={about?.avatar as Media}>{about?.title}</TitleCell>
        <CvCell href={about?.cv} />
        <GithubCell href={about?.github} />
        <DescriptionCell data={about?.description} />
      </div>
    </SectionWrapper>
  );
};

export default About;
