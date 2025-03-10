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
    onChange: fn() as any
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Single: Story = {
  args: {
    items: [
      { name: 'Agree', key: 'Agree',label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
      </> },
    ],
    prefixCls: 'checkbox',
  },
  tags: ['!autodocs', 'dev'],
};

export const Invalid: Story = {
  args: {
    tristate: true,
    items: [
      { name: 'invalid', key: 'invalid', invalid:true, label:'invalid'  },
      { name: 'checked', key: 'checked',  invalid:true, label:'checked ' , defaultValue: true },
      { name: 'notChecked', key: 'notChecked', invalid:true,label:'Not checked', defaultValue: false }],
    prefixCls: 'checkbox',
  }
}

export const Size: Story = {
  args: {
    size: 'sm',
    items: [
      { name: 'small', key: 'small', label: 'small' },
    ],
    prefixCls: 'checkbox',
  }
}

export const Disabled: Story = {
  args: {
    tristate: true,
    items: [
      { name: 'disabled', key: 'disabled', label: 'Empty value',   disabled: true, },
      { name: 'Achecked', key: 'Achecked',   label:'Checked ', disabled:true,   defaultValue: true },
      { name: 'BnotChecked', key: 'BnotChecked',  label:'Not checked ', disabled:true,  defaultValue: false }
    ],
    prefixCls: 'checkbox',
  }
}
export const SingleTristate: Story = {
  args: {
    tristate: true,
    items: [
      { name: 'State', key: 'Status', label: 'Change State' },
    ],
    prefixCls: 'checkbox',
  }
};

export const Multiple: Story = {
  args: {
    items: [
      { name: 'C', key: 'Cheese', label: 'Cheese' },
      { name: 'M', key: 'Mushroom', label: 'Mushroom',  autoFocus: true },
      { name: 'P', key: 'Pepper', label: 'Pepper' },
      { name: 'O', key: 'Onion', label: 'Onion' },
    ],
    prefixCls: 'checkbox',
  },
};

export const MultipleTristate: Story = {
  args: {
    tristate: true,
    size:'lg',
    items: [
      { name: 'A', key: 'Audi', label: 'Audi' },
      { name: 'B', key: 'BWM', label: 'BWM' },
      { name: 'B', key: 'Benz', label: 'Mercedes-Benz', defaultValue: true },
      { name: 'L', key: 'Lexus', label: 'Lexus' },
    ],
    onChange(itemsState) {
      console.info('itemsState', itemsState);
    },
    prefixCls: 'checkbox',
  },
};
