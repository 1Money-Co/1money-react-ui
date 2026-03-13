import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TagBeta } from '../index';

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

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('TagBeta', () => {
  it('renders correctly', () => {
    const wrapper = render(<TagBeta label="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const wrapper = render(<TagBeta label="Test" icon="add" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders removable', () => {
    const wrapper = render(<TagBeta label="Test" removable />);
    expect(wrapper).toMatchSnapshot();
  });
});
