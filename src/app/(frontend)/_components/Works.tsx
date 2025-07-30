import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { PlusIcon } from 'lucide-react';

import type { Media, Icon, Landing } from '@/payload-types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  Container,
  SectionWrapper,
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogImage,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  Button,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  MorphingDialogClose,
  Title,
  RichText,
  MediaIcon,
  AppLink,
} from '@/components';

type TWork = {
  id?: string | null;
  cover: number | Media;
  name: string;
  excerpt: string;
  description: SerializedEditorState;
  demo: {
    href: string;
    text: string;
    icon?: (number | null) | Icon;
    newTab?: boolean | null;
  };
};

const Shadows = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-6 rounded-r-full bg-gradient-to-r from-background lg:w-10" />
      <div className="absolute top-0 right-0 h-full w-6 rounded-l-full bg-gradient-to-l from-background lg:w-10" />
    </>
  );
};

const WorkCard = ({ cover, name, excerpt, description, demo }: TWork) => {
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0.1, duration: 0.7 }}>
      <MorphingDialogTrigger className="flex h-96 w-full flex-col overflow-hidden rounded-3xl border bg-card">
        <MorphingDialogImage
          src={(cover as Media).url as string}
          alt={(cover as Media).alt as string}
          className="h-1/2 w-full rounded-2xl object-cover"
        />
        <div className="flex flex-1 flex-col items-start gap-1.5 p-4">
          <MorphingDialogTitle className="font-accent text-lg font-bold text-primary lg:text-xl">
            {name}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="mb-auto text-left text-sm text-muted-foreground">
            {excerpt}
          </MorphingDialogSubtitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-8 self-end rounded-full p-0.5"
              >
                <PlusIcon className="text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Read More</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative flex h-auto max-h-11/12 w-full flex-col overflow-hidden rounded-3xl border border-zinc-950/10 bg-white sm:w-[32rem] lg:w-[40rem] xl:w-[45rem] 2xl:w-[47.5rem] dark:border-zinc-50/10 dark:bg-zinc-900">
          <MorphingDialogImage
            src={(cover as Media).url as string}
            alt={(cover as Media).alt as string}
            className="h-44 w-full rounded-2xl object-cover lg:h-52"
          />
          <div className="h-1/2 space-y-1.5 p-4">
            <MorphingDialogTitle className="font-accent text-lg font-bold text-primary lg:text-xl">
              {name}
            </MorphingDialogTitle>
            <MorphingDialogDescription>
              <RichText
                data={description}
                disableAnimation
                className="text-muted-foreground prose-p:!text-xs lg:prose-p:!text-sm"
              />
            </MorphingDialogDescription>
            <div className="mt-2.5 flex w-full justify-end lg:mt-8">
              <AppLink href={demo.href} newTab={demo.newTab}>
                <Button className="w-full lg:w-auto">
                  {demo.text}
                  <MediaIcon icon={demo.icon as Icon} />
                </Button>
              </AppLink>
            </div>
          </div>
          <MorphingDialogClose className="text-muted-foreground" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

const WorksCarousel = ({ items }: { items: TWork[] | undefined | null }) => {
  if (!items || items.length === 0) return null;

  return (
    <Container>
      <Carousel className="relative py-12" disableDrag>
        <CarouselContent>
          {items.map((work) => (
            <CarouselItem key={work.id} className="w-full px-4 md:w-[22.5rem] md:pl-8">
              <WorkCard {...work} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          alwaysShow
          className="absolute top-full left-0 z-10 flex w-full justify-end gap-4"
          classNameButton="!bg-primary *:stroke-white"
        />
        <Shadows />
      </Carousel>
    </Container>
  );
};

const Works = (works: Landing['works']) => {
  return (
    <SectionWrapper id="works" className='mt-28'>
      <Title as="h2">{works?.title}</Title>
      <RichText data={works?.description} />
      <WorksCarousel items={works?.items} />
    </SectionWrapper>
  );
};

export default Works;
