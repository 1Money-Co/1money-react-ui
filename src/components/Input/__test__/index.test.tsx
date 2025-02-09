import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed') ||
    message.includes('should not be null')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Input', () => {
  it('renders correctly', () => {
    const text = render(
      <Input />
    );
    const autocomplete = render(
      <Input type='autocomplete' />
    );
    const mask = render(
      <Input type='mask' mask='(999) 999-9999' />
    );
    const number = render(
      <Input type='number' />
    );
    const otp = render(
      <Input type='otp' />
    );
    const password = render(
      <Input type='password' />
    );
    const textarea = render(
      <Input type='textarea' />
    );
    expect(text).toMatchSnapshot();
    expect(autocomplete).toMatchSnapshot();
    expect(mask).toMatchSnapshot();
    expect(number).toMatchSnapshot();
    expect(otp).toMatchSnapshot();
    expect(password).toMatchSnapshot();
    expect(textarea).toMatchSnapshot();
  });
});
