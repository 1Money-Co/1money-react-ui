import * as React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import "primereact/resources/themes/lara-light-cyan/theme.css";
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
    children: 'Hello Button'
  },
};