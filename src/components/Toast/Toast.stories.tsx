import { fn } from '@storybook/test';
import { Toast } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'toast',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Toast>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'toast',
    children: 'Hello Toast'
  },
};
