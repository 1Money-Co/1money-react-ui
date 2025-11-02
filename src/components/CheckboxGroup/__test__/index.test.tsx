import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxGroup } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed') ||
    message.includes('React does not recognize')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Checkbox', () => {
  it('single renders correctly', async () => {
    const onCheckboxChange = jest.fn();
    const single =render(
      <CheckboxGroup
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
    const user = userEvent.setup();
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox)
    expect(onCheckboxChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
    expect(single).toMatchSnapshot();
  });
  it('size renders correctly', async () => {
    const Invalid = render(
      <CheckboxGroup
        tristate={true}
        items={[
          { name: 'invalid', key: 'invalid', invalid: true, label: 'invalid' },
          { name: 'checked', key: 'checked', invalid: true, label: 'checked', defaultValue: true },
          { name: 'notChecked', key: 'notChecked', invalid: true, label: 'Not checked', defaultValue: false }
        ]}
      />
    );
    expect(Invalid).toMatchSnapshot();
  });
  it('size renders correctly', async () => {
    const size = render(
      <CheckboxGroup size='sm' items={[
        { name: 'C', key: 'Cheese', label: 'Cheese' },
      ]} />
    );
    expect(size).toMatchSnapshot();
  });
  it('disabled renders correctly', async () => {
    const disabled = render(
      <CheckboxGroup  tristate={true}  items={[
        { name: 'disabled', key: 'disabled', label: 'disabled',   disabled: true, },
      { name: 'Achecked', key: 'Achecked',   label:'checked ', disabled:true,   defaultValue: true },
      { name: 'BnotChecked', key: 'BnotChecked',  label:'Not checked ', disabled:true,  defaultValue: false }
      ]} />
    );
    expect(disabled).toMatchSnapshot();
  });
  it('singleTristate renders correctly', async () => {
    const singleTristate = render(
      <CheckboxGroup
        tristate={true}
        items={[
          { name: 'State', key: 'Status', label: 'Change State' },
        ]}
      />
    );
    expect(singleTristate).toMatchSnapshot();
  });
  it('multiple renders correctly', async () => {
    const multiple = render(
      <CheckboxGroup items={[
        { name: 'C', key: 'Cheese', label: 'Cheese' },
        { name: 'M', key: 'Mushroom', label: 'Mushroom', autoFocus: true },
        { name: 'P', key: 'Pepper', label: 'Pepper' },
        { name: 'O', key: 'Onion', label: 'Onion' },
      ]} />
    );

    expect(multiple).toMatchSnapshot();
  });
  it('multipleTristate renders correctly', async () => {
    const multipleTristate = render(
      <CheckboxGroup
        tristate={true}
        items={[
          { name: 'A', key: 'Audi', label: 'Audi' },
          { name: 'B', key: 'BWM', label: 'BWM' },
          { name: 'B', key: 'Benz', label: 'Mercedes-Benz', defaultValue: true },
          { name: 'L', key: 'Lexus', label: 'Lexus' },
        ]}
      />
    );

    expect(multipleTristate).toMatchSnapshot();
  });
});
