import { Hero, About, Skills } from './_components';
import { getPayload } from '@/actions';

const Home = async () => {
  const payload = await getPayload();
  const { hero, about, skills } = await payload.findGlobal({
    slug: 'landing',
  });

  return (
    <>
      <Hero {...hero} />
      <About {...about} />
      <Skills {...skills} />
    </>
  );
};

export default Home;
