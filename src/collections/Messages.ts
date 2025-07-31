import { type CollectionConfig } from 'payload';

import { isAdmin } from '@/lib';

export const Messages: CollectionConfig = {
  slug: 'messages',
  access: {
    create: () => false,
    read: isAdmin,
    update: () => false,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
};
