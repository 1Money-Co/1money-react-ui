import * as React from 'react';
import { Input } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'button',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Input>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'input',
    children: 'Hello Input'
  },
};
