import { type AccessArgs } from 'payload';

import { Role } from '..';

export const isAuthenticated = ({ req: { user } }: AccessArgs) => !!user;

export const isAdmin = ({ req: { user } }: AccessArgs) => {
  if (!user) return false;

  return user.role === Role.Admin;
};

export const isAdminOrSelf = ({ req: { user }, id }: AccessArgs) => {
  if (!user) return false;
  // Check if user has the 'admin' role
  if (user.role === Role.Admin) return true;

  // Only allow user to read their own data
  return user.id === id;
};

export const isAdminOrCreatedBy = ({ req: { user } }: AccessArgs) => {
  // Check if user has the 'admin' role
  if (user && user.role === Role.Admin) true;

  // Allow only documents with the current user set to the 'createdBy' field
  if (user)
    // Will return access for only documents that were created by the current user
    return {
      createdBy: {
        equals: user.id,
      },
    };

  //  Disallow all others
  return false;
};
