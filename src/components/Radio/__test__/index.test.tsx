import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Radio } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed') ||
    errorMessage.includes('React does not recognize')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Radio', () => {
  it('renders correctly', () => {
    const radio = render(
      <Radio id="test-radio" value="test" label="Test Radio" />
    );

    expect(radio).toMatchSnapshot();
    expect(screen.getByText('Test Radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('renders checked state correctly', () => {
    render(
      <Radio id="test-radio" value="test" label="Test Radio" checked />
    );

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('renders disabled state correctly', () => {
    render(
      <Radio id="test-radio" value="test" label="Test Radio" disabled />
    );

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('renders invalid state correctly', () => {
    const { container } = render(
      <Radio id="test-radio" value="test" label="Test Radio" invalid />
    );

    // PrimeReact RadioButton会添加p-invalid类名
    const radioElement = container.querySelector('.p-invalid');
    expect(radioElement).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(
      <Radio id="test-radio" value="test" label="Small Radio" size="sm" />
    );

    expect(screen.getByText('Small Radio')).toBeInTheDocument();
    expect(document.querySelector('.rd-sm')).toBeInTheDocument();

    rerender(
      <Radio id="test-radio" value="test" label="Medium Radio" size="md" />
    );
    expect(screen.getByText('Medium Radio')).toBeInTheDocument();
    expect(document.querySelector('.rd-md')).toBeInTheDocument();

    rerender(
      <Radio id="test-radio" value="test" label="Large Radio" size="lg" />
    );
    expect(screen.getByText('Large Radio')).toBeInTheDocument();
    expect(document.querySelector('.rd-lg')).toBeInTheDocument();
  });

  it('calls onChange when clicked', async () => {
    const handleChange = jest.fn();
    render(
      <Radio
        id="test-radio"
        value="test"
        label="Test Radio"
        onChange={handleChange}
      />
    );

    const user = userEvent.setup();
    const radio = screen.getByRole('radio');

    await user.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    render(
      <Radio
        id="test-radio"
        value="test"
        label="Test Radio"
        onChange={handleChange}
        disabled
      />
    );

    const user = userEvent.setup();
    const radio = screen.getByRole('radio');

    await user.click(radio);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
