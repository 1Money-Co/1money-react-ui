import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Checkbox } from '../index';

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
  it('basic renders correctly', async () => {
    const onCheckboxChange = jest.fn();
    const basic = render(
      <Checkbox
        label={<>
          I am over 18 years old and I have read, understand and agree to the
          <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
          , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
        </>}
        checked={false}
        onChange={onCheckboxChange}
      />
    );
    const user = userEvent.setup();
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(onCheckboxChange).toHaveBeenCalled();
    expect(basic).toMatchSnapshot();
  });

  it('checked renders correctly', async () => {
    const checked = render(
      <Checkbox
        label="Checked"
        checked={true}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checked).toMatchSnapshot();
  });

  it('invalid renders correctly', async () => {
    const invalid = render(
      <Checkbox
        tristate={true}
        invalid={true}
        label='Invalid'
        value={null}
      />
    );
    expect(invalid).toMatchSnapshot();
  });

  it('size small renders correctly', async () => {
    const size = render(
      <Checkbox
        size='sm'
        label='Small size'
        checked={false}
      />
    );
    expect(size).toMatchSnapshot();
  });

  it('size large renders correctly', async () => {
    const size = render(
      <Checkbox
        size='lg'
        label='Large size'
        checked={false}
      />
    );
    expect(size).toMatchSnapshot();
  });

  it('disabled renders correctly', async () => {
    const disabled = render(
      <Checkbox
        label='Disabled'
        disabled={true}
        checked={false}
      />
    );
    expect(disabled).toMatchSnapshot();
  });

  it('disabled checked renders correctly', async () => {
    const disabledChecked = render(
      <Checkbox
        label='Disabled & Checked'
        disabled={true}
        checked={true}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(disabledChecked).toMatchSnapshot();
  });

  it('tristate renders correctly', async () => {
    const tristate = render(
      <Checkbox
        tristate={true}
        label='Change State'
        value={null}
      />
    );
    expect(tristate).toMatchSnapshot();
  });

  it('tristate with true value renders correctly', async () => {
    const tristateTrue = render(
      <Checkbox
        tristate={true}
        label='Tristate True'
        value={true}
      />
    );
    expect(tristateTrue).toMatchSnapshot();
  });

  it('tristate with false value renders correctly', async () => {
    const tristateFalse = render(
      <Checkbox
        tristate={true}
        label='Tristate False'
        value={false}
      />
    );
    expect(tristateFalse).toMatchSnapshot();
  });

  it('no label renders correctly', async () => {
    const noLabel = render(
      <Checkbox checked={false} />
    );
    expect(noLabel).toMatchSnapshot();
  });
});
