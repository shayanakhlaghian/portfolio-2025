'use client';
import { createPortal } from 'react-dom';
import { forwardRef } from 'react';

import { useDomReady } from '@/hooks';

const Backdrop = forwardRef<HTMLDivElement, { isShown: boolean; onClick?: () => void }>(
  ({ isShown, onClick }, ref) => {
    const isDomReady = useDomReady();

    if (!isDomReady || !isShown) return null;
    return createPortal(
      <div
        ref={ref}
        className="fixed top-0 left-0 z-40 h-dvh w-full bg-black/50"
        onClick={onClick}
      />,
      document.body,
    );
  },
);
Backdrop.displayName = 'Backdrop';

export default Backdrop;
