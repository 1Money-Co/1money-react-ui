import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Authenticator } from './index';

import './style';

const meta: Meta<typeof Authenticator> = {
  title: 'Components/Authenticator',
  component: Authenticator,
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onAuthenticate: { control: 'function' },
  },
  args: {
    active: false,
    disabled: false,
    onAuthenticate: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Authenticator>;

export const Default: Story = {
  args: {
    active: false,
  },
  render: (args) => {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: 50 , width:'340px'}}>
      <div>
        <span>Default</span>
        <Authenticator  />
      </div>
      <div>
        <span>Active</span>
        <Authenticator active/>
      </div>
      <div>
        <span>Disabled</span>
        <Authenticator disabled />
      </div>
    </div>;
  },
};
