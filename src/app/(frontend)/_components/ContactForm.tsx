'use client';
import { startTransition } from 'react';
import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonalIcon } from 'lucide-react';
import { serialize } from 'object-to-formdata';
import { toast } from 'sonner';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Textarea,
  Button,
} from '@/components';
import { contactSchema } from '@/lib';

import { useAction } from '@/hooks';
import { sendMessageAction } from '@/actions';

type TFields = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const form = useForm<TFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { formAction, isPending } = useAction(sendMessageAction, null, () => {
    toast.success('Message sent.');
  });
  const processSubmit: SubmitHandler<TFields> = (data) =>
    startTransition(() => formAction(serialize(data)));

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(processSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your Message" className="min-h-20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full self-end sm:w-auto" pending={{ isPending, text: 'Sending...' }}>
          Send <SendHorizonalIcon />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
