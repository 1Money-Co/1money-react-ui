import * as React from 'react';
import { fn } from '@storybook/test';
import { Progress } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'progress',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Progress>;
 
export const Ring: Story = {
  args: {
    prefixCls: 'progress',
    value: '33.5',
    size: 120,
    stroke: 10,
    bgColor: '#FAFAFC',
    fillColor: '#3D73F2',
    trailColor: '#E0E2EE',
    children: <i className="pi pi-sign-in" style={{ fontSize: '36px', color: '#3D73F2' }} />
  },
};

export const Bar: Story = {
  args: {
    prefixCls: 'progress',
    type: 'bar',
    value: '12.6'
  },
};