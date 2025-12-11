import React from 'react';
import { fn } from '@storybook/test';
import { InputAmount } from './index';
import Icons from '../Icons';
import Typography from '../Typography';
import './style';
import '../Icons/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputAmount> = {
  title: 'Components/InputAmount',
  component: InputAmount,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'radio', options: ['primary', 'normal'] },
    size: { control: 'radio', options: ['small', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    success: { control: 'boolean' },
    invalid: { control: 'boolean' },
    negative: { control: 'boolean' },
    maxFractionDigits: { control: 'number' },
  },
  args: {
    type: 'primary',
    min: -Infinity,
    max: Infinity,
    disabled: false,
    loading: false,
    success: false,
    invalid: false,
    negative: true,
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof InputAmount>;
 
export const Primary: Story = {
  args: {
    prefix: '$',
    currency: 'USD',
    invalid: false,
    maxFractionDigits: 2,
    suffix: <span style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#F0F0F0', color: '#131313', fontSize: '12px', cursor: 'pointer' }}>Max</span>,
    message: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <Icons name='error' color='inherit' size={16} />
      Amount exceeds maximum. The maximum purchase amount is $10,000 USD
    </span>,
    footnote: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#073387' }}>
      <Icons name='swap' color='#073387' size={24} />
      <Typography.Body size='m' bold style={{ color: '#073387' }}>
        0 USDT
      </Typography.Body>
    </span>,
  },
  render: props => {
    const [value, setValue] = React.useState<null | string>(null);

    return <InputAmount
      value={value}
      onChange={(_, _val) => {
        setValue(_val);
      }}
      {...props}
    />
  }
};

export const Normal: Story = {
  args: {
    prefix: <i style={{ backgroundColor: '#DDE6F4', borderRadius: '50%', padding: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icons name='logo' size={20} color='#073387' />
    </i>,
    type: 'normal',
    maxFractionDigits: 2,
    label: 'Send amount',
    placeholder: 'Enter amount',
    suffix: <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#073387', cursor: 'pointer' }}>Max</div>,
    message: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <Icons name='error' color='inherit' size={16} />
      Amount exceeds maximum. The maximum purchase amount is $10,000 USD
    </span>,
  },
  render: props => {
    return <InputAmount
      {...props}
    />
  }
};

export const WithFormOnChange: Story = {
  args: {
    prefix: '$',
    currency: 'USD',
    maxFractionDigits: 2,
  },
  render: props => {
    const [value, setValue] = React.useState<null | string>(null);
    const [formLog, setFormLog] = React.useState<string>('No form events yet');
    const [inputLog, setInputLog] = React.useState<string>('No input events yet');

    return <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <form onChange={(e) => {
        const target = e.target as HTMLInputElement;
        setFormLog(`Form onChange triggered - target value: ${target.value}`);
      }}>
        <InputAmount
          value={value}
          onChange={(e, _val) => {
            setInputLog(`Input onChange triggered - value: ${_val}`);
            setValue(_val);
          }}
          {...props}
        />
      </form>
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Event Log:</div>
        <div style={{ fontSize: '14px', marginBottom: '4px' }}>📝 {inputLog}</div>
        <div style={{ fontSize: '14px' }}>📋 {formLog}</div>
      </div>
    </div>
  }
};
