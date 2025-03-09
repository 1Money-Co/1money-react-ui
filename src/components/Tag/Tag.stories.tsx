import React from 'react';
import { Tag } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    rounded: { control: 'boolean' },
  },
  args: {
    prefixCls: '',
    rounded: false,
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    prefixCls: 'tag',
  },
  render: args => {
    return <div style={{ display: 'flex', gap: 10 }}>
      <Tag {...args} rounded severity="success" > success Tag</Tag>
      <Tag {...args} rounded severity="warning" > warning Tag</Tag>
      <Tag {...args} rounded severity="danger" > danger Tag</Tag>
      <Tag {...args} rounded severity="info" > info Tag</Tag>
    </div>
  }
};



