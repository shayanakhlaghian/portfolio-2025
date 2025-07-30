import type { Icon, Landing } from '@/payload-types';
import {
  SectionWrapper,
  Marquee,
  Card,
  CardHeader,
  CardTitle,
  Container,
  Badge,
  CardContent,
  Progress,
  Title,
  RichText,
  MediaIcon,
} from '@/components';

type TSkill = {
  id?: string | null;
  logo: number | Icon;
  name: string;
  level: number;
};

const SkillCard = ({ logo, name, level }: TSkill) => {
  return (
    <Card className="w-48 border-none duration-500 hover:shadow-[0_0_6px_2px_var(--color-primary)]">
      <CardHeader>
        <div className="flex items-center gap-2.5">
          <MediaIcon
            icon={logo as Icon}
            className="size-9 overflow-hidden rounded-full dark:invert-0"
          />
          <CardTitle>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-end gap-2.5">
        <Progress value={level * 10} />
        <Badge>{level}/10</Badge>
      </CardContent>
    </Card>
  );
};

const Shadows = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </>
  );
};

const SkillsMarquee = ({ items }: { items: TSkill[] | undefined | null }) => {
  if (!items || items.length === 0) return null;

  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);
  const thirdRow = items.slice(0, items.length / 2);
  const fourthRow = items.slice(items.length / 2);

  return (
    <Container className="relative mt-20 flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
      </div>

      <Shadows />
    </Container>
  );
};

const Skills = (skills: Landing['skills']) => {
  return (
    <SectionWrapper id="skills" className="mt-24">
      <Title as="h2">{skills?.title}</Title>
      <RichText data={skills?.description} />
      <SkillsMarquee items={skills?.items} />
    </SectionWrapper>
  );
};

export default Skills;
