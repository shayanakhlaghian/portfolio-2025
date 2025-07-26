import type { Landing } from '@/payload-types';
import { RichText, SectionWrapper, Title } from '@/components';

const About = (about: Landing['about']) => {
  return (
    <SectionWrapper id="about" className="mt-24">
      <Title as="h2">{about?.title}</Title>
      <RichText data={about?.description} />
    </SectionWrapper>
  );
};

export default About;
