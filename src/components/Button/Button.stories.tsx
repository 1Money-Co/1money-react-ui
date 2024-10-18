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
    size: { control: 'radio', options: ['small', 'large'] },
    loading: { control: 'boolean' }
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
    children: 'Primary',
    rounded: true
  },
  tags: ['!autodocs', 'dev']
};

export const Secondary: Story = {
  args: {
    prefixCls: 'button',
    children: 'Secondary',
    severity: 'secondary',
    rounded: true
  }
};

export const Disabled: Story = {
  args: {
    prefixCls: 'button',
    children: 'Disabled',
    disabled: true,
    rounded: true
  }
};

export const Flat: Story = {
  args: {
    prefixCls: 'button',
    children: 'Flat',
    severity: 'success',
    rounded: false
  },
};

export const Text: Story = {
  args: {
    prefixCls: 'button',
    children: 'Text',
    severity: 'info',
    text: true,
    rounded: true
  },
};

export const Outlined: Story = {
  args: {
    prefixCls: 'button',
    children: 'Outlined',
    severity: 'warning',
    outlined: true,
    rounded: true
  },
};
