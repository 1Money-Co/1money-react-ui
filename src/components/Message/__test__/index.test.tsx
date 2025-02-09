import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Message } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Message', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Message severity="success" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate events', async () => {
    const onClick = jest.fn();
    render(<Message severity="error" text="Error Message" onClick={onClick} />);
    const user = userEvent.setup();
    await user.click(screen.getByText('Error Message'))
    expect(onClick).toHaveBeenCalled();
  });
});
