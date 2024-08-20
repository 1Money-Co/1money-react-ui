import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Checkbox } from '../index';

configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Checkbox />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
