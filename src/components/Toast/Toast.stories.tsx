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
 
    return <>
      <Button
        onClick={() => toast.current?.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' })}
      >
        Show Toast
      </Button>
      <Toast {...args as any} ref={toast} />
    </>;
  },
};
