import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Switch } from '../index';

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

describe('Switch', () => {
  it('renders correctly', () => {
    const NormalSwitch = render(
      <Switch />
    );
    const ButtonSwitch = render(
      <Switch type='button' />
    );
    expect(NormalSwitch).toMatchSnapshot();
    expect(ButtonSwitch).toMatchSnapshot();
  });
});
