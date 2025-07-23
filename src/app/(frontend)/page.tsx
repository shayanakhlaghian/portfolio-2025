import { Hero } from './_components';
import { getPayload } from '@/actions';

const Home = async () => {
  const payload = await getPayload();
  const { hero } = await payload.findGlobal({
    slug: 'landing',
  });

  return (
    <>
      <Hero {...hero} />
    </>
  );
};

export default Home;
