import { type GlobalConfig } from 'payload';

import { isAdmin } from '@/lib';

export const General: GlobalConfig = {
  slug: 'general',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'source',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'icons',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
