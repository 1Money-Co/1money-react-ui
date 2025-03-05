import { fn } from '@storybook/test';
import { Notification } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'notification',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Notification>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'notification',
    children: 'Hello Notification'
  },
};
