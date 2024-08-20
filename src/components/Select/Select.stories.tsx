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
  },
  args: {
    prefixCls: 'button',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Select>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'select',
    children: 'Hello Select'
  },
};
