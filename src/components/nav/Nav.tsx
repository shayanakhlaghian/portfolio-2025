import type { Nav as TNav } from '@/payload-types';
import { DesktopNav, MobileNav } from '.';

const Nav = ({ items }: { items: TNav['items'] }) => {
  return (
    <>
      <DesktopNav items={items} />
      <MobileNav items={items} />
    </>
  );
};

export default Nav;
