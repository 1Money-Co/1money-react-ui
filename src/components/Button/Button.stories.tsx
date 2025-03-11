import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import './style';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    prefixCls: { control: 'text' },
  },
  args: {
    active: false,
    disabled: false,
    loading: false,
    rounded: false,
    size: 'large',
    prefixCls: 'button',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => {
    return <>
    <Button {...args} severity='primary' />
    <br />
    <br />
    <Button {...args} severity='secondary' />
    <br />
    <br />
    <Button {...args} severity='grey' />
    <br />
    <br />
    <Button {...args} severity='black' />
    <br />
    <br />
    <Button {...args} severity='white' />
    <br />
    <Button {...args} severity='negative'/>
    </>
  },
  args: {
    prefixCls: 'button',
    children: '1Money Network',
  },
  tags: ['!autodocs', 'dev']
};

export const PrimaryLanding: Story = {
  args: {
    prefixCls: 'button',
    children: 'Primary Landing',
    severity: 'primary-landing'
  }
};

export const SecondaryLanding: Story = {
  args: {
    prefixCls: 'button',
    children: 'Secondary Landing',
    severity: 'secondary-landing'
  }
};

