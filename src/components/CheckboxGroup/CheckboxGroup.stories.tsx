import React from 'react';
import { CheckboxGroup } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    wrapperCls: { control: 'text' },
    innerCls: { control: 'text' },
    checkboxGroupCls: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
  args: {
    prefixCls: 'checkboxgroup',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Single: Story = {
  args: {
    items: [
      {
        key: 'Agree',
        label: <>
          I am over 18 years old and I have read, understand and agree to the
          <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
          , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
        </>,
      },
    ],
    prefixCls: 'checkboxgroup',
  },
  tags: ['!autodocs', 'dev'],
};

export const NoLabel: Story = {
  args: {
    items: [
      { key: 'NoLabel' },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const Invalid: Story = {
  args: {
    tristate: true,
    items: [
      { key: 'invalid', invalid: true, label: 'invalid' },
      { key: 'checked', invalid: true, label: 'checked', defaultValue: true },
      { key: 'notChecked', invalid: true, label: 'Not checked', defaultValue: false },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const Size: Story = {
  args: {
    size: 'sm',
    items: [
      { key: 'small', label: 'small' },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const Disabled: Story = {
  args: {
    tristate: true,
    items: [
      { key: 'disabled', label: 'Empty value', disabled: true },
      { key: 'Achecked', label: 'Checked', disabled: true, defaultValue: true },
      { key: 'BnotChecked', label: 'Not checked', disabled: true, defaultValue: false },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const SingleTristate: Story = {
  args: {
    tristate: true,
    items: [
      { key: 'Status', label: 'Change State' },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const Multiple: Story = {
  args: {
    items: [
      { key: 'Cheese', label: 'Cheese' },
      { key: 'Mushroom', label: 'Mushroom', defaultChecked: true },
      { key: 'Pepper', label: 'Pepper' },
      { key: 'Onion', label: 'Onion' },
    ],
    prefixCls: 'checkboxgroup',
  },
};

export const MultipleTristate: Story = {
  args: {
    tristate: true,
    size: 'lg',
    items: [
      { key: 'Audi', label: 'Audi' },
      { key: 'BWM', label: 'BWM' },
      { key: 'Benz', label: 'Mercedes-Benz', defaultValue: true },
      { key: 'Lexus', label: 'Lexus' },
    ],
    onChange(itemsState) {
      console.info('itemsState', itemsState);
    },
    prefixCls: 'checkboxgroup',
  },
};
