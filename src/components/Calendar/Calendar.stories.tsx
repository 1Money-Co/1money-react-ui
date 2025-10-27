import { Calendar } from './index';
import './style';
import '../Icons/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'radio', options: ['large', 'small'] },
    disabled: { control: 'boolean' },
    showButtonBar: { control: 'boolean' },
    invalid: { control: 'boolean' },
    appendTo: { control: 'radio', options: ['self', null]},
    contentWidth: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    required: true,
    appendTo: null,
  },
};


export const Range: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    required: true,
    appendTo: null,
    selectionMode: 'range',
    numberOfMonths: 2
  },
};

export const multiple: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    required: true,
    appendTo: null,
    selectionMode: 'multiple',
  },
};
