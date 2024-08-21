import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Select } from '../index';

configure({ adapter: new Adapter() });

describe('Select', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Select options={[
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
