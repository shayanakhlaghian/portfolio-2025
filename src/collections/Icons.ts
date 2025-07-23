import { type CollectionConfig } from 'payload';

import { isAdmin } from '@/lib';

export const Icons: CollectionConfig = {
  slug: 'icons',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  upload: {
    mimeTypes: ['image/svg+xml', 'image/x-icon'], // allow svg and ico
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};
