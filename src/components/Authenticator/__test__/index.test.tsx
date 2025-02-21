import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Authenticator } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed') ||
    message.includes('React does not recognize')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Authenticator', () => {
  it('renders correctly', () => {
    const defaultRender = render(<Authenticator />);
    const active = render(<Authenticator active />);
    const disabled = render(<Authenticator disabled />);

    expect(defaultRender).toMatchSnapshot();
    expect(active).toMatchSnapshot();
    expect(disabled).toMatchSnapshot();
  });
});
