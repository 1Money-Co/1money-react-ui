import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Checkbox } from '../index';

configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Checkbox items={[
        { name: 'C', key: 'Cheese', label: 'Cheese' },
        { name: 'M', key: 'Mushroom', label: 'Mushroom', autoFocus: true },
        { name: 'P', key: 'Pepper', label: 'Pepper' },
        { name: 'O', key: 'Onion', label: 'Onion' },
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
