import 'jsdom-global/register';
import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import sinon from 'sinon';
import { Popup } from '../index';

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

describe('Popup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Popup />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate events', () => {
    const onClick = sinon.spy(); 
    const wrapper = mount(
      <Popup onClick={onClick} />
    );
    wrapper.find('div').simulate('click');
    expect(onClick.called).toBe(true);
  });
});
