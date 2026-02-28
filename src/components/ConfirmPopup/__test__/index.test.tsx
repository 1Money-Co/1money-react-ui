import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfirmPopup } from '../index';

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

describe('ConfirmPopup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <ConfirmPopup />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
