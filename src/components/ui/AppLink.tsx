import Link, { type LinkProps } from 'next/link';

const AppLink = ({
  href,
  children,
  newTab,
  className,
}: {
  newTab?: boolean | null | undefined;
  children: React.ReactNode;
  className?: string;
} & LinkProps) => {
  return (
    <Link href={href || '#'} target={newTab ? '_blank' : '_self'} className={className}>
      {children}
    </Link>
  );
};

export default AppLink;
