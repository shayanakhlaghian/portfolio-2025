import { Code2Icon } from 'lucide-react';
import Link from 'next/link';

import { HeaderWrapper } from '.';
import { Button, Nav, ThemeToggle, Tooltip, TooltipTrigger, TooltipContent } from '..';

const SourceCode = ({ href }: { href: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger className="header-item opacity-0">
        <Button asChild variant="ghost" size="icon">
          <Link href={href} target="_blank">
            <Code2Icon className="size-5" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Source Code</TooltipContent>
    </Tooltip>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
      <div className="flex items-center gap-2">
        <ThemeToggle className="header-item opacity-0" />
        <SourceCode href="/" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
