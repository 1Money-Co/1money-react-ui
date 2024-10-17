import { fn } from '@storybook/test';
import { Sidebar } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'sidebar',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Sidebar>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'sidebar',
    children: 'Hello Sidebar'
  },
};
