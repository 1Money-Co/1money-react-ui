import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Radio } from '../index';

configure({ adapter: new Adapter() });

describe('Radio', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Radio />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
