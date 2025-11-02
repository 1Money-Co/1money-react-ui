import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Checkbox } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    wrapperCls: { control: 'text' },
    innerCls: { control: 'text' },
    checkboxCls: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    tristate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  args: {
    prefixCls: 'checkbox',
    onChange: fn() as any
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Wrapper component for controlled checkbox
const ControlledCheckbox = (props: any) => {
  const [checked, setChecked] = useState(props.checked || false);
  return <Checkbox {...props} checked={checked} onChange={(value) => {
    setChecked(value);
    props.onChange?.(value);
  }} />;
};

// Wrapper component for controlled tristate checkbox
const ControlledTristateCheckbox = (props: any) => {
  const [value, setValue] = useState<boolean | null>(props.value ?? null);
  return <Checkbox {...props} value={value} onChange={(newValue) => {
    setValue(newValue);
    props.onChange?.(newValue);
  }} />;
};

export const Basic: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'> 1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
    </>,
    prefixCls: 'checkbox',
  },
  tags: ['!autodocs', 'dev'],
};

export const NoLabel: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    prefixCls: 'checkbox',
  },
};

export const Checked: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: 'Checked',
    checked: true,
    prefixCls: 'checkbox',
  },
};

export const Invalid: Story = {
  render: (args) => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    invalid: true,
    label: 'Invalid',
    prefixCls: 'checkbox',
  }
};

export const Small: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    size: 'sm',
    label: 'Small size',
    prefixCls: 'checkbox',
  }
};

export const Medium: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    size: 'md',
    label: 'Medium size',
    prefixCls: 'checkbox',
  }
};

export const Large: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    size: 'lg',
    label: 'Large size',
    prefixCls: 'checkbox',
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    checked: false,
    prefixCls: 'checkbox',
  }
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & Checked',
    disabled: true,
    checked: true,
    prefixCls: 'checkbox',
  }
};

export const Tristate: Story = {
  render: (args) => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    label: 'Change State',
    prefixCls: 'checkbox',
  }
};

export const TristateChecked: Story = {
  render: (args) => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    label: 'Tristate with initial true',
    value: true,
    prefixCls: 'checkbox',
    onChange(state) {
      console.info('state', state);
    },
  }
};
