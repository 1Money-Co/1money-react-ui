import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../index';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Button />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
