import React from 'react';
import { Select } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    appendTo: { control: 'radio', options: [null, 'self'] },
    size: { control: 'radio', options: ['large', 'small'] },
    disabled: { control: 'boolean' },
    success: { control: 'boolean' },
    invalid: { control: 'boolean' },
    filter: { control: 'boolean' },
    message: { control: 'text' },
    unselectable: { control: 'radio', options: ['on', 'off'] },
  },
  args: {
    size: 'large',
    disabled: false,
    success: false,
    invalid: false,
    required: false,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'Administrative and Support and waste Management and remediation services', value: 'TT' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
  { label: 'Beijing', value: 'BJ' },
  { label: 'Shanghai', value: 'SH' },
  { label: 'Tokyo', value: 'TK' },
  { label: 'Seoul', value: 'SE' },
];

export const Single: Story = {
  render: (props) => <div style={{ width: '320px' }}>
    <Select {...props} />
  </div>,
  args: {
    placeholder: 'Select City',
    defaultValue: 'IST',
    label: 'Cities',
    message: 'Please select a city',
    options: cities,
    required: true,
    showClear: false,
    unselectable: 'on'
  },
  tags: ['!autodocs', 'dev'],
};

export const Multiple: Story = {
  render: (props) => <div style={{ width: '360px' }}>
    <Select {...props} />
  </div>,
  args: {
    appendTo: 'self',
    placeholder: 'Select Cities',
    multiple: true,
    filter: true,
    options: cities,
    display: 'chip',
    label: 'Multiple Cities',
    defaultValue: []
  },
};

export const CustomDropdown: Story = {
  args: {
    placeholder: 'Select Cities',
    options: cities,
    label: 'Custom Dropdown',
    defaultValue: [],
    customDropdown: true,
  },
};

export const CustomItemTemplate: Story = {
  args: {
    placeholder: 'Select Cities',
    options: cities,
    label: 'CustomItemTemplate',
    defaultValue: []
  },
  tags: ['!autodocs', 'dev'],
  render: (props) =>  <div style={{ width: '360px' }}>
    <Select {...props} itemTemplate={(option) => <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span>xxx  </span>
      <span>{option.label}</span>
    </div>} />
  </div>,
};
