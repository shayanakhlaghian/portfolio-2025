import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

import { cn } from '@/lib';

const RichText = ({
  data,
  className,
  ...props
}: {
  data: SerializedEditorState | undefined | null;
} & React.HTMLAttributes<HTMLElement>) => {
  if (!data) return null;
  return (
    <RichTextConverter
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
  );
};

export default RichText;
