import React, { useState } from 'react';
import { Input } from './index';
import { Icons } from '../Icons';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    size: { control: 'radio', options: ['large', 'small'] },
    type: { control: 'select', options: ['text', 'number', 'mask', 'textarea', 'otp'] },
    disabled: { control: 'boolean' },
    success: { control: 'boolean' },
    invalid: { control: 'boolean' },
    rounded: { control: 'boolean' },
    addons: { control: 'text' },
    message: { control: 'text' },
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

type Story = StoryObj<typeof Input>;
 
export const Normal: Story = {
  args: {
    type: 'text',
    label: 'Email',
    prefix: <h4 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
      Title
    </h4>,
    placeholder: 'Enter your email',
  },
  tags: ['!autodocs'],
};

export const Number: Story = {
  args: {
    type: 'number',
    prefix: <i style={{ backgroundColor: '#DDE6F4', borderRadius: '50%', padding: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icons name='logo' size={20} color='#073387' />
    </i>,
    suffix: <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#073387', cursor: 'pointer' }}>Max</div>,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'password',
    required: true,
    toggleMask: true,
    autoComplete: 'new-password',
  },
};

export const AutoComplete: Story = {
  args: {
    type: 'autocomplete',
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    const [advices, setAdvices] = useState<string[]>([]);

    const search = (event) => {
      setAdvices([...Array(10).keys()].map(item => event.query + '-' + item));
    }
 
    return <Input {...args as any} type='autocomplete' value={value} suggestions={advices} completeMethod={search} onChange={(e) => setValue(e.value)} />;
  },
};

export const Mask: Story = {
  args: {
    type: 'mask',
    mask: '(999) 999-9999',
  },
};

export const OtpCode: Story = {
  args: {
    type: 'otp',
    integerOnly: true,
  },
};

export const TextArea: Story = {
  args: {
    type: 'textarea',
  },
};