import { DesktopNav, MobileNav } from '.';
import { getPayload } from '@/actions';

const Nav = async () => {
  const payload = await getPayload();
  const { items } = await payload.findGlobal({
    slug: 'nav',
  });

  return (
    <>
      <DesktopNav items={items} />
      <MobileNav items={items} />
    </>
  );
};

export default Nav;
