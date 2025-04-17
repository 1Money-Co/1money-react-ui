import React from 'react';
import { Badge } from './index';
import './style';
import '../Icons/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    severity: { control: 'select', options: ['neutral', 'warning', 'negative', 'success', 'black', 'recommend'] },
  },
  args: {
    prefixCls: 'badge',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Badge>;
 
export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <Badge severity="neutral" value="Neutral" {...args} />
        <br />
        <br />
        <Badge severity="warning" value="Warning" {...args} />
        <br />
        <br />
        <Badge severity="negative" value="Negative" {...args} />
        <br />
        <br />
        <Badge severity="success" value="Success" {...args} />
        <br />
        <br />
        <Badge severity="black" value="Black" {...args} />
        <br />
        <br />
        <Badge severity="recommend" value="Recommend" {...args} />
      </>
    );
  },
  args: {
    prefixCls: 'badge'
  },
};
