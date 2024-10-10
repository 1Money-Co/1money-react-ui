import 'jsdom-global/register';
import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import sinon from 'sinon';
import { Icons, IconWrapper } from '../index';

configure({ adapter: new Adapter() });

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
