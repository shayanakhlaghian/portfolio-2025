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
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'cv',
          type: 'text',
        },
        {
          name: 'github',
          type: 'text',
        },
      ],
    },
    {
      name: 'skills',
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
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'icons',
              required: true,
            },
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'level',
              type: 'number',
              min: 1,
              max: 10,
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'works',
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
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'cover',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 150,
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
            },
            {
              name: 'demo',
              type: 'group',
              fields: [
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
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
                  name: 'newTab',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
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
      ],
    },
  ],
};
