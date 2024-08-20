import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RadioGroup } from '../index';

configure({ adapter: new Adapter() });

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <RadioGroup items={[
        { name: 'US', key: 'USA', label: 'USA' },
        { name: 'CA', key: 'Canada', label: 'Canada', autoFocus: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico' },
        { name: 'BR', key: 'Brazil', label: 'Brazil' },
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
