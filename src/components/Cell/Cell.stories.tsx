import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import Cell from './index';

import './style';

const meta: Meta<typeof Cell> = {
  title: 'Components/Cell',
  component: Cell,
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    active: false,
    disabled: false,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Default: Story = {
  render: (args) => {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: 50 , width:'340px'}}>
      <div>
        <span>Default</span>
        <Cell  />
      </div>
      <div>
        <span>Active</span>
        <Cell active/>
      </div>
      <div>
        <span>Disabled</span>
        <Cell disabled />
      </div>
    </div>;
  },
};
