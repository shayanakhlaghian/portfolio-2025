import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string({ error: 'Name is required.' }).nonempty('Name is required.'),
  email: z.email({ error: 'Invalid Email.' }).nonempty('Email is required.'),
  message: z.string({ error: 'Message is required.' }).nonempty('Message is required.'),
});
