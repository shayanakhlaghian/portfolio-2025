import './globals.css';
import { Header } from '@/components';
import Providers from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main className="w-full overflow-x-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
