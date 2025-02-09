import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RadioGroup } from '../index';

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

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <RadioGroup items={[
        { name: 'US', key: 'USA', label: 'USA' },
        { name: 'CA', key: 'Canada', label: 'Canada', autoFocus: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico' },
        { name: 'BR', key: 'Brazil', label: 'Brazil' },
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
