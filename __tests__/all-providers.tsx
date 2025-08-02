import { ThemeProvider, GsapPlugins } from '@/components';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <GsapPlugins>{children}</GsapPlugins>
    </ThemeProvider>
  );
};

export default AllProviders;
