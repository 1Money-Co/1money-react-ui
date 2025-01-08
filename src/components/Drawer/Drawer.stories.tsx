import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '../Button';
import { Drawer } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    position: { control: 'select', options: ['right', 'left', 'top', 'bottom'] },
  },
  args: {
    prefixCls: 'drawer',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    prefixCls: 'drawer',
    fullScreen: false,
  },
  render: function Render(args: any) {
    const [visible, setVisible] = useState(false);
    return <>
      <Button
        onClick={() => setVisible(true)}
      >
        Show Drawer
      </Button>
      <Drawer visible={visible} onHide={() => setVisible(false)} {...args}>
        <h2>Drawer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Drawer>
    </>;
  },
};
