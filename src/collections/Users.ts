import type { CollectionConfig } from 'payload';

import { Role } from '@/lib';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      defaultValue: Role.User,
      options: [
        {
          label: 'Admin',
          value: Role.Admin,
        },
        {
          label: 'User',
          value: Role.User,
        },
      ],
    },
  ],
};
