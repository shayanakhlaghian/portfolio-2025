import { type GlobalConfig } from 'payload';

import { isAdmin } from '@/lib';

export const Landing: GlobalConfig = {
  slug: 'landing',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'cta',
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
            {
              name: 'newTab',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
};
