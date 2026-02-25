import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Badge } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Badge', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Badge />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate events', async () => {
    const onClick = jest.fn(); 
    render(
      <Badge data-testid='id-badge' onClick={onClick} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByTestId('id-badge'))
    expect(onClick).toHaveBeenCalled();
  });
});
