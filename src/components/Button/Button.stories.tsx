import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import './style';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'button',
    children: 'Primary'
  },
  tags: ['!autodocs', 'dev']
};

export const Rounded: Story = {
  args: {
    prefixCls: 'button',
    children: 'Rounded',
    severity: 'success',
    rounded: true
  },
};

export const Text: Story = {
  args: {
    prefixCls: 'button',
    children: 'Text',
    severity: 'info',
    text: true
  },
};

export const Outlined: Story = {
  args: {
    prefixCls: 'button',
    children: 'Outlined',
    severity: 'warning',
    outlined: true
  },
};
