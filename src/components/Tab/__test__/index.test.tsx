import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tab } from '../index';

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

describe('Tab', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Tab model={[
        { label: 'Password' },
        { label: '2FA settings' },
        { label: 'Limits' },
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
