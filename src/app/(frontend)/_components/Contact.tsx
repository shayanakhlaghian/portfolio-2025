'use client';
import { useTheme } from 'next-themes';

import type { Landing } from '@/payload-types';
import { ContactForm } from '.';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  MagicCard,
  SectionWrapper,
  Container,
} from '@/components';

const Contact = (contact: Landing['contact']) => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="contact" className="mt-32 mb-16">
      <Container>
        <Card className="mx-auto w-full border-none p-0 shadow-none sm:w-4/5 md:w-[32.5rem] lg:w-[37.5rem] xl:w-[42.5rem]">
          <MagicCard gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}>
            <CardHeader className="border-b p-4 lg:p-6">
              <CardTitle className="font-accent text-xl text-primary lg:text-2xl">
                {contact?.title}
              </CardTitle>
              <CardDescription>{contact?.description}</CardDescription>
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
