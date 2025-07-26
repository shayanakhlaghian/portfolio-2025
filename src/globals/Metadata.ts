import { type GlobalConfig } from 'payload';

import { isAdmin } from '@/lib';

export const Metadata: GlobalConfig = {
  slug: 'metadata',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'openGraph',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'siteName',
          type: 'text',
        },
      ],
    },
    {
      name: 'twitter',
      type: 'group',
      fields: [
        {
          name: 'card',
          type: 'select',
          options: [
            { label: 'Summary', value: 'summary' },
            { label: 'Summary Large Image', value: 'summary_large_image' },
          ],
          defaultValue: 'summary_large_image',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'icons',
      type: 'group',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'icons',
          required: true,
        },
        {
          name: 'apple',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'robots',
      type: 'text',
      defaultValue: 'index, follow',
      admin: {
        description: 'Robots meta tags',
      },
    },
  ],
};
