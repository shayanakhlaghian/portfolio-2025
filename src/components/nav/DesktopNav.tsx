import type { Nav, Icon } from '@/payload-types';
import { AppLink, MediaIcon } from '..';

const DesktopNav = ({ items }: { items: Nav['items'] }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {items?.map(({ id, text, href, icon, newTab }) => (
          <li key={id} className="header-item font-accent text-sm opacity-0">
            <AppLink href={href} newTab={newTab} className="flex items-center gap-1">
              {text}
              <MediaIcon icon={icon as Icon} />
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
