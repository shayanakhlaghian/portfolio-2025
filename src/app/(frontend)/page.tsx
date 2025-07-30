import { Hero, About, Skills, Works } from './_components';
import { getPayload } from '@/actions';

const Home = async () => {
  const payload = await getPayload();
  const { hero, about, skills, works } = await payload.findGlobal({
    slug: 'landing',
  });

  return (
    <>
      <Hero {...hero} />
      <About {...about} />
      <Skills {...skills} />
      <Works {...works} />
    </>
  );
};

export default Home;
