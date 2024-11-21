import React, { useState } from 'react';
import { Input } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    type: { control: 'select', options: ['text', 'number', 'mask', 'textarea', 'otp'] },
    variant: { control: 'select', options: ['filled', 'outlined'] },
    invalid: { control: 'boolean' },
    rounded: { control: 'boolean' },
    errMsg: { control: 'text' },
  },
  args: {
    prefixCls: 'input',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Input>;
 
export const Normal: Story = {
  args: {
    type: 'text',
    prefixCls: 'input',
    variant: 'outlined',
    label: 'Email',
    addons: 'www'
  },
  tags: ['!autodocs'],
};

export const Number: Story = {
  args: {
    type: 'number',
    prefixCls: 'input',
    variant: 'outlined',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    prefixCls: 'input',
    variant: 'outlined',
    label: 'password',
    required: true,
    toggleMask: true,
    autoComplete: 'new-password',
  },
};

export const AutoComplete: Story = {
  args: {
    type: 'autocomplete',
    prefixCls: 'input',
    variant: 'outlined',
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    const [advices, setAdvices] = useState<string[]>([]);

    const search = (event) => {
      setAdvices([...Array(10).keys()].map(item => event.query + '-' + item));
    }
 
    return <Input {...args as any} type='autocomplete' value={value} suggestions={advices} completeMethod={search} onChange={(e) => setValue(e.value)} />;
  },
};

export const Mask: Story = {
  args: {
    type: 'mask',
    mask: '(999) 999-9999',
    prefixCls: 'input',
    variant: 'outlined',
  },
};

export const OtpCode: Story = {
  args: {
    type: 'otp',
    prefixCls: 'input',
    variant: 'outlined',
    integerOnly: true
  },
};

export const TextArea: Story = {
  args: {
    type: 'textarea',
    prefixCls: 'input',
    variant: 'outlined'
  },
};