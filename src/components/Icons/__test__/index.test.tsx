import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icons, IconWrapper } from '../index';

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

describe('Icons', () => {
  it('renders correctly', () => {
    const Icon = render(
      <Icons name='eyeOn' />
    );
    const wrapperIcon = render(
      <IconWrapper />
    );
    expect(Icon).toMatchSnapshot();
    expect(wrapperIcon).toMatchSnapshot();
  });
});
