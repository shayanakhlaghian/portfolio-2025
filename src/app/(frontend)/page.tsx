import { Hero, About } from './_components';
import { getPayload } from '@/actions';

const Home = async () => {
  const payload = await getPayload();
  const { hero, about } = await payload.findGlobal({
    slug: 'landing',
  });

  return (
    <>
      <Hero {...hero} />
      <About {...about} />
    </>
  );
};

export default Home;
