import { cn } from '@/lib';

const SectionWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn('mx-auto min-h-dvh w-full max-w-7xl px-8 py-4 lg:p-4', className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
