import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from '../index';

configure({ adapter: new Adapter() });

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Input />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
