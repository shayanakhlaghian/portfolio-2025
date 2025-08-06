'use client';
import { useRef } from 'react';
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { useGSAP } from '@gsap/react';
import { SplitText, gsap } from 'gsap/all';

import { cn } from '@/lib';

const AnimatedRichText = ({
  data,
  className,
  gsapConfig,
  disableAnimation = false,
  ...props
}: {
  data: SerializedEditorState | undefined | null;
} & React.HTMLAttributes<HTMLElement> & {
    gsapConfig?: gsap.TweenVars;
    disableAnimation?: boolean;
  }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (disableAnimation) return;

      const q = gsap.utils.selector(containerRef);
      const paragraphs = q('.animated-rich-text');

      paragraphs.forEach((p) => {
        const split = SplitText.create(p as gsap.DOMTarget, { type: 'lines' });

        gsap.fromTo(
          split.lines,
          { opacity: 0, yPercent: 100 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.6,
            ease: 'expo.out',
            delay: 0.5,
            stagger: 0.075,
            ...gsapConfig,
            scrollTrigger: {
              trigger: p as gsap.DOMTarget,
              start: 'top 85%',
            },
          },
        );
      });
    },
    { scope: containerRef.current as HTMLElement, dependencies: [disableAnimation] },
  );

  if (!data) return null;
  return (
    <div ref={containerRef}>
      <RichTextConverter
        converters={({ defaultConverters }) => ({
          ...defaultConverters,
          paragraph: ({ node, nodesToJSX }) => (
            <p className="animated-rich-text">{nodesToJSX({ nodes: node.children })}</p>
          ),
        })}
        data={data}
        className={cn(
          // Base prose styles
          'prose',
          // Boost base font size
          'prose-lg',
          // Ensure headings get larger sizes
          'prose-headings:font-semibold',
          'prose-h1:mt-4 prose-h1:mb-3 prose-h1:text-2xl lg:prose-h1:text-3xl',
          'prose-h2:mt-3 prose-h2:mb-2 prose-h2:text-xl lg:prose-h2:text-2xl',
          'prose-h3:mt-2 prose-h3:mb-1 prose-h3:text-lg lg:prose-h3:text-xl',
          // Keep paragraphs at base size
          'prose-p:text-base prose-p:leading-relaxed lg:prose-p:text-lg',
          // Dark theme
          'dark:prose-invert',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default AnimatedRichText;
