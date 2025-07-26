import Link from 'next/link';

import type { General, Icon } from '@/payload-types';
import { HeaderWrapper } from '.';
import {
  Button,
  Nav,
  ThemeToggle,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  MediaIcon,
  AppLink,
} from '..';
import { getPayload } from '@/actions';

const SourceCode = ({ source: { text, icon, href, newTab } }: { source: General['source'] }) => {
  return (
    <Tooltip>
      <TooltipTrigger className="header-item opacity-0">
        <Button asChild variant="ghost" size="icon">
          <AppLink href={href} newTab={newTab}>
            <MediaIcon icon={icon as Icon} />
          </AppLink>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{text}</TooltipContent>
    </Tooltip>
  );
};

const Header = async () => {
  const payload = await getPayload();
  const [general, nav] = await Promise.all([
    payload.findGlobal({
      slug: 'general',
    }),
    payload.findGlobal({
      slug: 'nav',
    }),
  ]);

  const { source } = general;
  const { items: navItems } = nav;

  return (
    <HeaderWrapper>
      <Nav items={navItems} />
      <div className="flex items-center gap-2">
        <ThemeToggle className="header-item opacity-0" />
        <SourceCode source={source} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
