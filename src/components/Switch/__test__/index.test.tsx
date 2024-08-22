import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch } from '../index';

configure({ adapter: new Adapter() });

describe('Switch', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Switch />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
