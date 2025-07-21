import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { Header } from '@/components';
import { cn } from '@/lib';
import Providers from './providers';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geist.variable, geistMono.variable, 'font-primary')}>
        <Providers>
          <Header />
          <main className="w-full overflow-x-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
