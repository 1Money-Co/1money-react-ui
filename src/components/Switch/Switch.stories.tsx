import { fn } from '@storybook/test';
import { Switch } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'switch',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Switch>;
 
export const NormalSwitch: Story = {
  args: {
    prefixCls: 'switch'
  },
  tags: ['!autodocs'],
};

export const ButtonSwitch: Story = {
  args: {
    prefixCls: 'switch',
    type: 'button',
    defaultChecked: true,
  },
};

