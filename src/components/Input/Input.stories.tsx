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
    variant: 'outlined'
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
