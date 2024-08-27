import { fn } from '@storybook/test';
import { Message } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'message',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Message>;
 
export const Success: Story = {
  args: {
    prefixCls: 'message',
    severity: 'success',
    text: 'Success Message',
  },
  tags: ['!autodocs'],
};

export const Warn: Story = {
  args: {
    prefixCls: 'message',
    severity: 'warn',
    text: 'Warning Message',
  },
};

export const Error: Story = {
  args: {
    prefixCls: 'message',
    severity: 'error',
    text: 'Error Message',
  },
};

export const Info: Story = {
  args: {
    prefixCls: 'message',
    severity: 'info',
    text: 'Info Message',
  },
};