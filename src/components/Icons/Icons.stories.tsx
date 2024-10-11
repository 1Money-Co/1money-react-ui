import React from 'react';
import { 
  IconWrapper, 
  Icons,
 } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    prefixCls: 'icons',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Icons>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'icons',
    color: '#142D66',
    size: 32
  },
  render: function Render(args) {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='logo'  />
        <Icons {...args} name='logoWithWords' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='minus'  />
        <Icons {...args} name='add' />
        <Icons {...args} name='burger' />
        <Icons {...args} name='return' />
        <Icons {...args} name='close' />
        <Icons {...args} name='dropDown' />
        <Icons {...args} name='arrow' />
        <Icons {...args} name='eyeClose' />
        <Icons {...args} name='eyeOn' />
        <Icons {...args} name='circle' />
        <Icons {...args} name='doubleCheck' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='check' />
        <Icons {...args} name='times' />
        <Icons {...args} name='checkCircle' />
        <Icons {...args} name='timesCircle' />
        <Icons {...args} name='content' />
      </div>
    </div>;
  },
};
