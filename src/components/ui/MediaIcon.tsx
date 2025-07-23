import Image from 'next/image';

import { type Icon } from '@/payload-types';
import { cn } from '@/lib';

const MediaIcon = ({ icon, className }: { icon: Icon; className?: string }) => {
  if (!icon?.url) return null;
  return (
    <div
      className={cn(
        'poniter-events-none relative size-5 overflow-hidden filter dark:invert',
        className,
      )}
    >
      <Image src={icon.url} alt="" fill className="object-contain" />
    </div>
  );
};

export default MediaIcon;
