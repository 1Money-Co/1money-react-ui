import { fn } from '@storybook/test';
import { Scroller } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Scroller> = {
  title: 'Components/Scroller',
  component: Scroller,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'scroller',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Scroller>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'scroller',
    children: 'Hello Scroller'
  },
};
