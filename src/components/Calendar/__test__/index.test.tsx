import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Calendar } from '../index';

configure({ adapter: new Adapter() });

describe('Calendar', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Calendar />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
