import { Loading } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'loading',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Loading>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'loading'
  },
};
