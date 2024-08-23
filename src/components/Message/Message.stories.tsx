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
 
export const Primary: Story = {
  args: {
    prefixCls: 'message',
    children: 'Hello Message'
  },
};
