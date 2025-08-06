import { type Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getPayload } from '@/actions';

import type { Icon, Media } from '@/payload-types';
import './globals.css';
import { Header, Toaster } from '@/components';
import { cn } from '@/lib';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const generateMetadata = async (): Promise<Metadata> => {
  const payload = await getPayload();
  const { title, description, icons, openGraph, twitter, robots } = await payload.findGlobal({
    slug: 'metadata',
  });

  const openGraphImages = openGraph?.images?.map((img) => ({
    url: (img.image as Media)?.url || '',
  }));

  return {
    title,
    description,
    icons: {
      icon: (icons.icon as Icon)?.url || undefined,
      apple: (icons.apple as Icon)?.url || undefined,
    },
    openGraph: {
      title: openGraph?.title || undefined,
      description: openGraph?.description || undefined,
      url: openGraph?.url || undefined,
      images: openGraphImages,
      siteName: openGraph?.siteName || undefined,
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      title: twitter?.title || undefined,
      description: twitter?.description || undefined,
      images: [(twitter?.image as Media)?.url || ''],
    },
    robots,
  };
};

export const revalidate = 0;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, jetBrainsMono.variable, 'font-primary')}>
        <Providers>
          <Header />
          <main className="w-full overflow-x-hidden">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
