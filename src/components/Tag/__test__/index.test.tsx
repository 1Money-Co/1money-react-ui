import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from '../index';

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

describe('Tag', () => {
  it('renders correctly', () => {

    const wrapper = render(
      <Tag
        rounded
        severity="success"
      >
        <span>Left</span>
      </Tag>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
