import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Cell } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed') ||
    errorMessage.includes('React does not recognize')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Cell', () => {
  it('renders correctly', () => {
    const defaultRender = render(<Cell />);
    const active = render(<Cell active />);
      const disabled = render(<Cell disabled />);

    expect(defaultRender).toMatchSnapshot();
    expect(active).toMatchSnapshot();
    expect(disabled).toMatchSnapshot();
  });
});
