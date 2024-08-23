import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch } from '../index';

configure({ adapter: new Adapter() });

describe('Switch', () => {
  it('renders correctly', () => {
    const NormalSwitch = render(
      <Switch />
    );
    const ButtonSwitch = render(
      <Switch type='button' />
    );
    expect(NormalSwitch).toMatchSnapshot();
    expect(ButtonSwitch).toMatchSnapshot();
  });
});
