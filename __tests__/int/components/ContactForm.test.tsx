import { screen, waitFor } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';

import { render } from '__tests__/test-utils';
import { ContactForm } from '@/app/(frontend)/_components';

describe('ContactForm', () => {
  let user: UserEvent;

  beforeEach(() => {
    render(<ContactForm />);
    user = userEvent.setup();
  });

  const fields = {
    name: () => screen.getByRole('textbox', { name: /name/i }),
    email: () => screen.getByRole('textbox', { name: /email/i }),
    message: () => screen.getByRole('textbox', { name: /message/i }),
    submit: () => screen.getByRole('button'),
    error: (field: 'name' | 'email' | 'message') => screen.queryByTestId(`${field}-error`),
  };

  it('should render error if either name, email, or message is not provided.', async () => {
    await user.click(fields.submit());

    await waitFor(() =>
      (['name', 'email', 'message'] as const).forEach((field) =>
        expect(fields.error(field)).toBeInTheDocument(),
      ),
    );
  });

  it('should render error if an invalid email is provided.', async () => {
    await user.type(fields.email(), 'shayan@gmail');
    await user.click(fields.submit());

    await waitFor(() => expect(fields.error('email')).toHaveTextContent(/invalid/i));
  });

  it('should not render any error if valid inputs are provided.', async () => {
    await user.type(fields.name(), 'Shayan');
    await user.type(fields.email(), 'shayan@gmail.com');
    await user.type(fields.message(), 'test message');

    await user.click(fields.submit());

    await waitFor(() =>
      (['name', 'email', 'message'] as const).forEach((field) =>
        expect(fields.error(field)).not.toBeInTheDocument(),
      ),
    );
  });
});
