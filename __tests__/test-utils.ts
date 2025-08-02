import { render as testingLibraryRender, type RenderOptions } from '@testing-library/react';

import AllProviders from './all-providers';

export const render = (ui: React.ReactNode, options?: RenderOptions) =>
  testingLibraryRender(ui, {
    wrapper: AllProviders,
    ...options,
  });
