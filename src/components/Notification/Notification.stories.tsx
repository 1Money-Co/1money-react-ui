import { fn } from '@storybook/test';
import { Notification } from './index';
import './style';
import '../Icons/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    severity: { control: 'radio', options: ['success', 'info', 'warn', 'error'] },
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
    title: 'Notification Title',
    description: 'You can now link multiple accounts to manage your finances all in one place.',
  },
};
