import { fn } from '@storybook/test';
import { Popup } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'popup',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Popup>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'popup',
    children: 'Hello Popup'
  },
};
