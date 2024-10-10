import 'jsdom-global/register';
import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import sinon from 'sinon';
import { Spinner } from '../index';

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

describe('Spinner', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Spinner />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate events', () => {
    const onClick = sinon.spy(); 
    const wrapper = mount(
      <Spinner onClick={onClick} />
    );
    wrapper.find('div').simulate('click');
    expect(onClick.called).toBe(true);
  });
});
