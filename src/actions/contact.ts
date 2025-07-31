'use server';
import type { Message } from '@/payload-types';
import { getPayload } from '.';
import { catchAction, contactSchema } from '@/lib';

export const sendMessageAction = catchAction(async (data) => {
  const _data = data as Message;

  const payload = await getPayload();
  payload.create({
    collection: 'messages',
    data: _data,
  });

  return { success: true };
}, contactSchema);
