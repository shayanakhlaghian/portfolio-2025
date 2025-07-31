'use server';
import nodemailer from 'nodemailer';

import type { Message } from '@/payload-types';
import { getPayload } from '.';
import { catchAction, contactSchema } from '@/lib';

export const sendMessageAction = catchAction(async (data) => {
  const _data = data as Message;

  const payload = await getPayload();
  await payload.create({
    collection: 'messages',
    data: _data,
  });

  nodemailer
    .createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    .sendMail({
      from: `<${process.env.EMAIL_USER}>`,
      to: _data.email,
      subject: 'Thanks for your message!',
      text: 'Thank you for your message! I will get back to you as soon as I can.',
    });

  return { success: true };
}, contactSchema);
