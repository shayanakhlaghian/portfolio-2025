'use client';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

import type { Nav, Icon } from '@/payload-types';
import { Button, Backdrop, ScrollArea, MediaIcon } from '..';

const Toggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="header-item opacity-0 lg:hidden"
      onClick={onClick}
    >
      <MenuIcon className="size-5" />
    </Button>
  );
};

const MobileNav = ({ items }: { items: Nav['items'] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tl = gsap.timeline({ defaults: { duration: 0.5 } });

  useGSAP(() => {
    if (!isOpen) return;

    tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1 })
      .to(navRef.current, {
        y: 0,
        duration: 0.7,
        boxShadow: '0px 0px 12px rgba(255, 105, 0, 1)',
      })
      .fromTo('.mobile-nav-close', { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(
        '.mobile-nav-item',
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 1.2, stagger: 0.07 },
      );
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => tl.reverse().then(() => setIsOpen(false));

  const router = useRouter();
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    newTab: boolean | undefined | null,
  ) => {
    e.preventDefault();

    newTab ? window.open(href, '_blank') : tl.reverse().then(() => router.push(href));
  };

  return (
    <>
      <Toggle onClick={handleOpen} />
      <Backdrop ref={backdropRef} isShown={isOpen} onClick={handleClose} />
      <nav
        ref={navRef}
        className="fixed bottom-0 left-0 z-50 h-5/6 w-full translate-y-full rounded-t-4xl bg-background"
      >
        <Button
          size="icon"
          variant="outline"
          className="mobile-nav-close absolute top-4 left-4"
          onClick={handleClose}
        >
          <XIcon className="size-6" />
        </Button>
        <div className="flex size-full items-center justify-center">
          <ScrollArea>
            <ul className="flex max-h-96 flex-col items-center gap-8">
              {items?.map(({ id, text, href, icon, newTab }, index) => (
                <li key={id} className="mobile-nav-item font-accent text-lg font-bold">
                  <Link
                    href={href}
                    onClick={(e) => handleNavLinkClick(e, href, newTab)}
                    className="flex items-center gap-1"
                  >
                    {index + 1}. {text}
                    <MediaIcon icon={icon as Icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
