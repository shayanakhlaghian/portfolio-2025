import type { Nav } from '@/payload-types';
import { DesktopNav, MobileNav } from '.';

const Nav = ({ items }: { items: Nav['items'] }) => {
  return (
    <>
      <DesktopNav items={items} />
      <MobileNav items={items} />
    </>
  );
};

export default Nav;
