'use client';
import { startTransition } from 'react';
import { useTheme } from 'next-themes';
import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonalIcon } from 'lucide-react';
import { serialize } from 'object-to-formdata';
import { toast } from 'sonner';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  MagicCard,
  SectionWrapper,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Textarea,
  Button,
  Container,
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
                <Input placeholder="bla@example.com" {...field} />
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

const Contact = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="contact" className="mt-32 mb-16">
      <Container>
        <Card className="mx-auto w-full border-none p-0 shadow-none sm:w-4/5 md:w-[32.5rem] lg:w-[37.5rem] xl:w-[42.5rem]">
          <MagicCard gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}>
            <CardHeader className="border-b p-4 lg:p-6">
              <CardTitle className="font-accent text-xl text-primary lg:text-2xl">
                Contact
              </CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quaerat sed quae.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 lg:p-6">
              <ContactForm />
            </CardContent>
          </MagicCard>
        </Card>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;
