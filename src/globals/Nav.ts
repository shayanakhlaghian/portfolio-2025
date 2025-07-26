import { type GlobalConfig } from 'payload';

import { isAdmin } from '@/lib';

export const Nav: GlobalConfig = {
  slug: 'nav',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
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
        {
          name: 'newTab',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
};
