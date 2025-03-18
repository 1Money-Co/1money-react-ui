import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RadioGroup } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <RadioGroup items={[
        { name: 'US', key: 'USA', label: 'USA' },
        { name: 'CA', key: 'Canada', label: 'Canada', autoFocus: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico' },
        { name: 'BR', key: 'Brazil', label: 'Brazil' },
      ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('size renders correctly', async () => {
    const small = render(
      <RadioGroup size='sm' items={[
        { name: 'US1', key: 'USA-1', label: 'USA-1' },
        { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
        { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true }
      ]} />
    );
    expect(small).toMatchSnapshot();
  });
  it('disabled renders correctly', async () => {
    const disabled = render(
      <RadioGroup items={[
        { name: 'Janpan', key: 'Japan', label: 'Japan', disabled: true},
      { name: 'Janpan1', key: 'Janpan-1', label: 'Janpan (checked)', autoFocus: true, disabled: true }
      ]} />
    );
    expect(disabled).toMatchSnapshot();
  });
  it('Medium renders correctly', async () => {
    const medium = render(
      <RadioGroup size='md' items={[
        { name: 'US1', key: 'USA-1', label: 'USA-1' },
        { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
        { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true },
      ]} />
    );
    expect(medium).toMatchSnapshot();
  });
  it('Large renders correctly', async () => {
    const large = render(
      <RadioGroup size='lg' items={[
        { name: 'US1', key: 'USA-1', label: 'USA-1' },
        { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
        { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
        { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true }
      ]} />
    );
    expect(large).toMatchSnapshot();
  });

});
