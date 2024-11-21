import { fn } from '@storybook/test';
import { Select } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    rounded: { control: 'boolean' },
    filter: { control: 'boolean' }
  },
  args: {
    prefixCls: 'button',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Select>;

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];

export const Single: Story = {
  args: {
    prefixCls: 'select',
    placeholder: 'Select City',
    defaultValue: 'IST',
    options: cities,
    label: 'Cities',
    required: true
  },
  tags: ['!autodocs', 'dev'],
};

export const Multiple: Story = {
  args: {
    prefixCls: 'select',
    placeholder: 'Select Cities',
    multiple: true,
    options: cities,
    display: 'chip',
    label: 'Multiple Cities',
  },
};
