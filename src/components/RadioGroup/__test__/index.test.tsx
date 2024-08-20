import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RadioGroup } from '../index';

configure({ adapter: new Adapter() });

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <RadioGroup />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
