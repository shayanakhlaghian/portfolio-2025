import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import { Header, Toaster } from '@/components';
import { cn } from '@/lib';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

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
