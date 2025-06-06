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
    maxFractionDigits: { control: 'number' },
  },
  args: {
    onClick: fn(),
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
  }
};
