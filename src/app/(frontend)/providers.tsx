import { ThemeProvider, GsapPlugins } from '@/components';

const providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <GsapPlugins>{children}</GsapPlugins>
    </ThemeProvider>
  );
};

export default providers;
