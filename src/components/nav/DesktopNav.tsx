import Link from 'next/link';

const dummies = [
  {
    id: 1,
    title: 'About Me',
    href: '/#about',
  },
  {
    id: 2,
    title: 'My Skills',
    href: '/#skills',
  },
  {
    id: 3,
    title: 'My Works',
    href: '/#works',
  },
  {
    id: 4,
    title: 'Contact Me',
    href: '/#contact',
  },
];

const DesktopNav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className="flex items-center gap-6">
        {dummies.map(({ id, title, href }) => (
          <li key={id} className="header-item font-accent text-sm opacity-0">
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
