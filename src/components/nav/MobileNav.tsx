import { MenuIcon } from 'lucide-react';

import { Button } from '..';

const Toggle = () => {
  return (
    <Button size="icon" variant="ghost" className='lg:hidden header-item opacity-0'>
      <MenuIcon className="size-5" />
    </Button>
  );
};

const MobileNav = () => {
  return (
    <>
      <Toggle />
    </>
  );
};

export default MobileNav;
