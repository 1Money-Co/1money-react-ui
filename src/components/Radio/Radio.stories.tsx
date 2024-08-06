import * as React from 'react';
import { fn } from '@storybook/test';
import { Radio } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'button',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Radio>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'radio',
    children: 'Hello Radio'
  },
};
