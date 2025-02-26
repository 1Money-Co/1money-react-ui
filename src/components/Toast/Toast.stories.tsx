import React, { useRef } from 'react';
import { fn } from '@storybook/test';
import { Button } from '../Button';
import { Toast, ToastClass } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'toast',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Toast>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'toast',
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
 
    return <div style={{ minHeight: '420px' }}>
      <Button
        onClick={() => toast.current?.show([
          {
            severity: 'success',
            summary: 'Success Message',
            detail: 'You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)',
            life: 1500
          },
          {
            severity: 'info',
            summary: 'Info Message',
            detail: 'You can now link multiple accounts to manage your finances all in one place.',
            life: 1600
          },
          {
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'Update your card details to avoid interruptions.',
            life: 1700
          },
          {
            severity: 'error',
            summary: 'Error Message',
            detail: 'Please check your account balance and try again.',
            life: 1800
          }
        ])}
      >
        Show Toast
      </Button>
      <Toast {...args as any} ref={toast} />
    </div>;
  },
};
