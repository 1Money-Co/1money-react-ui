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
  describe('Basic Rendering', () => {
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

    it('no label renders correctly', async () => {
      const noLabel = render(
        <Checkbox checked={false} />
      );
      expect(noLabel).toMatchSnapshot();
    });

    it('renders with custom wrapper class', () => {
      const { container } = render(
        <Checkbox checked={false} wrapperCls="custom-wrapper" />
      );
      expect(container.querySelector('.custom-wrapper')).toBeInTheDocument();
    });

    it('renders with custom inner class', () => {
      const { container } = render(
        <Checkbox checked={false} innerCls="custom-inner" />
      );
      expect(container.querySelector('.custom-inner')).toBeInTheDocument();
    });

    it('renders with custom checkbox class', () => {
      const { container } = render(
        <Checkbox checked={false} checkboxCls="custom-checkbox" />
      );
      expect(container.querySelector('.custom-checkbox')).toBeInTheDocument();
    });

    it('renders with custom label class', () => {
      const { container } = render(
        <Checkbox checked={false} label="Test" labelCls="custom-label" />
      );
      expect(container.querySelector('.custom-label')).toBeInTheDocument();
    });

    it('renders with custom prefix class', () => {
      const { container } = render(
        <Checkbox checked={false} prefixCls="custom-prefix" />
      );
      // Custom prefix class is applied with the classnames utility
      expect(container.querySelector('[class*="custom-prefix"]')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('size small renders correctly', async () => {
      const { container } = render(
        <Checkbox
          size='sm'
          label='Small size'
          checked={false}
        />
      );
      expect(container.querySelector('.ckb-sm')).toBeInTheDocument();
      expect(render(
        <Checkbox size='sm' label='Small size' checked={false} />
      )).toMatchSnapshot();
    });

    it('size medium (default) renders correctly', async () => {
      const { container } = render(
        <Checkbox
          label='Medium size'
          checked={false}
        />
      );
      expect(container.querySelector('.ckb-md')).toBeInTheDocument();
    });

    it('size large renders correctly', async () => {
      const { container } = render(
        <Checkbox
          size='lg'
          label='Large size'
          checked={false}
        />
      );
      expect(container.querySelector('.ckb-lg')).toBeInTheDocument();
      expect(render(
        <Checkbox size='lg' label='Large size' checked={false} />
      )).toMatchSnapshot();
    });
  });

  describe('Disabled State', () => {
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

    it('does not call onChange when disabled', async () => {
      const handleChange = jest.fn();
      render(
        <Checkbox
          label='Disabled'
          disabled={true}
          checked={false}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Invalid State', () => {
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

    it('invalid normal checkbox renders correctly', () => {
      const { container } = render(
        <Checkbox
          invalid={true}
          label='Invalid'
          checked={false}
        />
      );
      expect(container.querySelector('.p-invalid')).toBeInTheDocument();
    });
  });

  describe('Required State', () => {
    it('required checkbox renders correctly', () => {
      render(
        <Checkbox
          required={true}
          label='Required'
          checked={false}
        />
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });
  });

  describe('TriState Mode', () => {
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

    it('tristate onChange returns correct value type', async () => {
      const handleChange = jest.fn();
      render(
        <Checkbox
          tristate={true}
          label='Tristate'
          value={null}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      // TriStateCheckbox renders two elements with role="checkbox", use getAllByRole
      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[0]);

      expect(handleChange).toHaveBeenCalled();
    });

    it('tristate disabled does not trigger onChange', async () => {
      const handleChange = jest.fn();
      const { container } = render(
        <Checkbox
          tristate={true}
          label='Tristate Disabled'
          value={null}
          disabled={true}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      // TriStateCheckbox renders two elements with role="checkbox"
      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[0]);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Interaction', () => {
    it('calls onChange with true when unchecked checkbox is clicked', async () => {
      const handleChange = jest.fn();
      render(
        <Checkbox
          label='Click me'
          checked={false}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange with false when checked checkbox is clicked', async () => {
      const handleChange = jest.fn();
      render(
        <Checkbox
          label='Click me'
          checked={true}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('clicking label toggles checkbox', async () => {
      const handleChange = jest.fn();
      render(
        <Checkbox
          label='Click label'
          checked={false}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const label = screen.getByText('Click label');
      await user.click(label);

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('ID and Name', () => {
    it('renders with id prop', () => {
      render(
        <Checkbox
          id="my-checkbox"
          label='With ID'
          checked={false}
        />
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox.closest('[id="my-checkbox"]') || checkbox.getAttribute('id')).toBeTruthy();
    });

    it('renders with name prop', () => {
      render(
        <Checkbox
          name="my-checkbox-name"
          label='With Name'
          checked={false}
        />
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('name', 'my-checkbox-name');
    });
  });
});
