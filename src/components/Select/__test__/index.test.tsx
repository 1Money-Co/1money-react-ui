import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Select } from '../index';

configure({ adapter: new Adapter() });

describe('Select', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Select />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
