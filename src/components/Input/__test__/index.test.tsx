import 'jsdom-global/register';
import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Input } from '../index';

configure({ adapter: new Adapter() });

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed') ||
    message.includes('React does not recognize') ||
    message.includes('should not be null') ||
    message.includes('A component is changing an uncontrolled input to be controlled')
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
    const autocomplete = shallow(
      <Input type='autocomplete' />
    );
    const mask = mount(
      <Input type='mask' mask='(999) 999-9999' />
    );
    const number = render(
      <Input type='number' />
    );
    const otp = shallow(
      <Input type='otp' />
    );
    const password = mount(
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
