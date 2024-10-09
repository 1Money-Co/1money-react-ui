import React from 'react';
import { 
  IconWrapper, 
  MinusIcon, 
  AddIcon,
  BurgerIcon,
  ReturnIcon,
  CloseIcon,
  ArrowIcon,
  DropDownIcon,
  EyeCloseIcon,
  EyeOnIcon,
  CircleIcon,
  CheckIcon,
  Logo,
  LogoWithWords,
 } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MinusIcon> = {
  title: 'Components/Icons',
  component: IconWrapper,
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

type Story = StoryObj<typeof IconWrapper>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'icons',
    color: '#142D66',
    size: 32
  },
  render: function Render(args) {
    return <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Logo {...args} />
        <LogoWithWords {...args} />
      </div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <MinusIcon {...args} />
        <AddIcon {...args} />
        <BurgerIcon {...args} />
        <ReturnIcon {...args} />
        <CloseIcon {...args} />
        <DropDownIcon {...args} />
        <ArrowIcon {...args} />
        <EyeCloseIcon {...args} />
        <EyeOnIcon {...args} />
        <CircleIcon {...args} />
        <CheckIcon {...args} />
      </div>
    </>;
  },
};
