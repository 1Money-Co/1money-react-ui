import React from 'react';
import { fn } from '@storybook/test';
import { Checkbox } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    wrapperCls: { control: 'text' },
    innerCls: { control: 'text' },
    checkboxCls: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'checkbox',
    onChange: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Single: Story = {
  args: {
    items: [
      { name: 'Agree', key: 'Agree', label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
      </> },
    ],
    prefixCls: 'checkbox',
  },
  tags: ['!autodocs', 'dev'],
};

export const Multiple: Story = {
  args: {
    items: [
      { name: 'C', key: 'Cheese', label: 'Cheese' },
      { name: 'M', key: 'Mushroom', label: 'Mushroom', autoFocus: true },
      { name: 'P', key: 'Pepper', label: 'Pepper' },
      { name: 'O', key: 'Onion', label: 'Onion' },
    ],
    prefixCls: 'checkbox',
  },
};
