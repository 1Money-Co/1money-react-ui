import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Progress } from '../index';

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

describe('Progress', () => {
  it('renders correctly', () => {
    const ring = render(
      <Progress />
    );
    const bar = render(
      <Progress type="bar" />
    );
    expect(ring).toMatchSnapshot();
    expect(bar).toMatchSnapshot();
  });
});
