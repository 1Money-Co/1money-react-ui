import 'jsdom-global/register';
import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import sinon from 'sinon';
import { Checkbox } from '../index';

configure({ adapter: new Adapter() });

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed') ||
    message.includes('React does not recognize') ||
    message.includes('should not be null') ||
    message.includes('A component is changing an uncontrolled input to be controlled')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Checkbox', () => {
  it('renders correctly', () => {
    const onCheckboxChange = sinon.spy();
    const single = mount(
      <Checkbox 
        items={[
          { name: 'Agree', key: 'Agree', label: <>
          I am over 18 years old and I have read, understand and agree to the
          <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
          , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
          </> },
        ]}
        onChange={onCheckboxChange}
      />
    );
    single.find('input').simulate('change');
    expect(onCheckboxChange.called).toBe(true);
    expect(onCheckboxChange.calledWith(['Agree'])).toBe(true);

    const multiple = render(
      <Checkbox items={[
        { name: 'C', key: 'Cheese', label: 'Cheese' },
        { name: 'M', key: 'Mushroom', label: 'Mushroom', autoFocus: true },
        { name: 'P', key: 'Pepper', label: 'Pepper' },
        { name: 'O', key: 'Onion', label: 'Onion' },
      ]} />
    );

    const onTriStateCheckboxChange = sinon.spy();
    const singleTristate = mount(
      <Checkbox 
        tristate={true}
        items={[
          { name: 'State', key: 'Status', label: 'Change State' },
        ]}
        onChange={onTriStateCheckboxChange}
      />
    );
    singleTristate.find('input').simulate('change');
    expect(onTriStateCheckboxChange.called).toBe(true);
    expect(onTriStateCheckboxChange.calledWith({ Status: true })).toBe(true);

    const multipleTristate = shallow(
      <Checkbox 
        tristate={true}
        items={[
          { name: 'A', key: 'Audi', label: 'Audi' },
          { name: 'B', key: 'BWM', label: 'BWM' },
          { name: 'B', key: 'Benz', label: 'Mercedes-Benz', defaultValue: true },
          { name: 'L', key: 'Lexus', label: 'Lexus' },
        ]}
      />
    );
    expect(single).toMatchSnapshot();
    expect(multiple).toMatchSnapshot();
    expect(singleTristate).toMatchSnapshot();
    expect(multipleTristate).toMatchSnapshot();
  });
});
