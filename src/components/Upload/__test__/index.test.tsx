import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Upload } from '../index';

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

describe('Upload', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Upload />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('basic render', () => {
    const wrapper = render(
      <Upload mode='basic' auto />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
