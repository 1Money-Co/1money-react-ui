import { fn } from '@storybook/test';
import { Calendar } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'radio', options: ['large', 'small'] },
    rounded: { control: 'boolean' },
    showButtonBar: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Calendar>;
 
export const Primary: Story = {
  args: {
    size: 'large',
    label: 'Date of Incorporation',
    required: true,
  },
};
