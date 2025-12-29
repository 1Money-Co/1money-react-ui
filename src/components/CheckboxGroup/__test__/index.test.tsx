import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
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

describe('CheckboxGroup', () => {
  describe('Basic Rendering', () => {
    it('single item renders correctly', async () => {
      const onCheckboxChange = jest.fn();
      const single = render(
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
      await user.click(checkbox);
      expect(onCheckboxChange).toHaveBeenCalled();
      expect(checkbox).toBeChecked();
      expect(single).toMatchSnapshot();
    });

    it('multiple items render correctly', async () => {
      const multiple = render(
        <CheckboxGroup items={[
          { name: 'C', key: 'Cheese', label: 'Cheese' },
          { name: 'M', key: 'Mushroom', label: 'Mushroom', autoFocus: true },
          { name: 'P', key: 'Pepper', label: 'Pepper' },
          { name: 'O', key: 'Onion', label: 'Onion' },
        ]} />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(4);
      expect(multiple).toMatchSnapshot();
    });

    it('renders with custom wrapper class', () => {
      const { container } = render(
        <CheckboxGroup
          wrapperCls="custom-wrapper"
          items={[{ key: 'test', label: 'Test' }]}
        />
      );
      expect(container.querySelector('.custom-wrapper')).toBeInTheDocument();
    });

    it('renders with custom inner class', () => {
      const { container } = render(
        <CheckboxGroup
          innerCls="custom-inner"
          items={[{ key: 'test', label: 'Test' }]}
        />
      );
      expect(container.querySelector('.custom-inner')).toBeInTheDocument();
    });

    it('renders with custom checkbox group class', () => {
      const { container } = render(
        <CheckboxGroup
          checkboxGroupCls="custom-checkbox"
          items={[{ key: 'test', label: 'Test' }]}
        />
      );
      expect(container.querySelector('.custom-checkbox')).toBeInTheDocument();
    });

    it('renders with custom prefix class', () => {
      const { container } = render(
        <CheckboxGroup
          prefixCls="custom-prefix"
          items={[{ key: 'test', label: 'Test' }]}
        />
      );
      // Custom prefix will create class like "custom-prefix-wrapper"
      expect(container.querySelector('[class*="custom-prefix"]')).toBeInTheDocument();
    });

    it('renders empty group without items', () => {
      const { container } = render(
        <CheckboxGroup items={[]} />
      );
      // Wrapper should still render even without items
      expect(container.firstChild).toBeInTheDocument();
      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('size small renders correctly', async () => {
      const { container } = render(
        <CheckboxGroup size='sm' items={[
          { name: 'C', key: 'Cheese', label: 'Cheese' },
        ]} />
      );
      expect(container.querySelector('.ckbg-sm')).toBeInTheDocument();
      expect(render(
        <CheckboxGroup size='sm' items={[{ key: 'test', label: 'Test' }]} />
      )).toMatchSnapshot();
    });

    it('size medium (default) renders correctly', () => {
      const { container } = render(
        <CheckboxGroup items={[
          { name: 'C', key: 'Cheese', label: 'Cheese' },
        ]} />
      );
      expect(container.querySelector('.ckbg-md')).toBeInTheDocument();
    });

    it('size large renders correctly', () => {
      const { container } = render(
        <CheckboxGroup size='lg' items={[
          { name: 'C', key: 'Cheese', label: 'Cheese' },
        ]} />
      );
      expect(container.querySelector('.ckbg-lg')).toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    it('disabled items render correctly', async () => {
      const disabled = render(
        <CheckboxGroup tristate={true} items={[
          { name: 'disabled', key: 'disabled', label: 'disabled', disabled: true },
          { name: 'Achecked', key: 'Achecked', label: 'checked', disabled: true, defaultValue: true },
          { name: 'BnotChecked', key: 'BnotChecked', label: 'Not checked', disabled: true, defaultValue: false }
        ]} />
      );
      expect(disabled).toMatchSnapshot();
    });

    it('disabled item does not trigger onChange', async () => {
      const handleChange = jest.fn();
      const handleItemChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'disabled', label: 'Disabled', disabled: true, onChange: handleItemChange },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).not.toHaveBeenCalled();
      expect(handleItemChange).not.toHaveBeenCalled();
    });

    it('mixed disabled and enabled items work correctly', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'enabled', label: 'Enabled' },
            { key: 'disabled', label: 'Disabled', disabled: true },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith(['enabled']);

      handleChange.mockClear();
      await user.click(checkboxes[1]);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Invalid State', () => {
    it('invalid items render correctly', async () => {
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

    it('invalid normal checkbox group renders correctly', () => {
      const { container } = render(
        <CheckboxGroup
          items={[
            { key: 'invalid', label: 'Invalid', invalid: true },
          ]}
        />
      );
      expect(container.querySelector('.p-invalid')).toBeInTheDocument();
    });
  });

  describe('TriState Mode', () => {
    it('single tristate renders correctly', async () => {
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

    it('multiple tristate items render correctly', async () => {
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

    it('tristate with different default values renders correctly', () => {
      const { container } = render(
        <CheckboxGroup
          tristate={true}
          items={[
            { key: 'null', label: 'Null', defaultValue: null },
            { key: 'true', label: 'True', defaultValue: true },
            { key: 'false', label: 'False', defaultValue: false },
          ]}
        />
      );

      // TriStateCheckbox renders multiple checkbox elements per item
      // Check that we have 3 checkbox group items (direct children with ckbg-md class)
      const innerDivs = container.querySelectorAll('.ckbg-md');
      expect(innerDivs).toHaveLength(3);
    });

    it('tristate onChange returns correct state object', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          tristate={true}
          items={[
            { key: 'item1', label: 'Item 1' },
            { key: 'item2', label: 'Item 2' },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[0]);

      expect(handleChange).toHaveBeenCalled();
      const callArg = handleChange.mock.calls[0][0];
      expect(typeof callArg).toBe('object');
      expect('item1' in callArg).toBe(true);
      expect('item2' in callArg).toBe(true);
    });
  });

  describe('Normal Mode Interaction', () => {
    it('onChange returns array of checked keys', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Item 1' },
            { key: 'item2', label: 'Item 2' },
            { key: 'item3', label: 'Item 3' },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith(['item1']);

      await user.click(checkboxes[1]);
      expect(handleChange).toHaveBeenCalledWith(['item1', 'item2']);
    });

    it('unchecking removes key from array', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Item 1', autoFocus: true },
            { key: 'item2', label: 'Item 2' },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkboxes = screen.getAllByRole('checkbox');

      // item1 is auto-focused (pre-checked), uncheck it
      await user.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith([]);
    });

    it('individual item onChange is called', async () => {
      const handleGroupChange = jest.fn();
      const handleItemChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Item 1', onChange: handleItemChange },
          ]}
          onChange={handleGroupChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleGroupChange).toHaveBeenCalled();
      expect(handleItemChange).toHaveBeenCalledWith(true);
    });

    it('autoFocus items are pre-checked', () => {
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Item 1' },
            { key: 'item2', label: 'Item 2', autoFocus: true },
            { key: 'item3', label: 'Item 3', autoFocus: true },
          ]}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[0]).not.toBeChecked();
      expect(checkboxes[1]).toBeChecked();
      expect(checkboxes[2]).toBeChecked();
    });
  });

  describe('Label Interaction', () => {
    it('clicking label toggles checkbox in normal mode', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Click me' },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const label = screen.getByText('Click me');
      await user.click(label);

      expect(handleChange).toHaveBeenCalled();
    });

    it('renders with custom label class', () => {
      const { container } = render(
        <CheckboxGroup
          labelCls="custom-label"
          items={[{ key: 'test', label: 'Test' }]}
        />
      );
      expect(container.querySelector('.custom-label')).toBeInTheDocument();
    });
  });

  describe('Required Items', () => {
    it('required items render correctly', () => {
      render(
        <CheckboxGroup
          items={[
            { key: 'required', label: 'Required', required: true },
          ]}
        />
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Edge Cases', () => {
    it('handles items without labels', () => {
      render(
        <CheckboxGroup
          items={[
            { key: 'noLabel1' },
            { key: 'noLabel2' },
          ]}
        />
      );
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(2);
    });

    it('handles rapid clicks correctly', async () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          items={[
            { key: 'item1', label: 'Item 1' },
          ]}
          onChange={handleChange}
        />
      );

      const user = userEvent.setup();
      const checkbox = screen.getByRole('checkbox');

      await user.click(checkbox);
      await user.click(checkbox);
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalledTimes(3);
    });
  });
});
