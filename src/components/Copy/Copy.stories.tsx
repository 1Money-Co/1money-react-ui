import React from 'react';
import { Copy } from './index';
import { Toast } from '../Toast';

import './style';
import '../Icons/style';
import '../Toast/style';

import type { Meta, StoryObj } from '@storybook/react';
import type { ToastClass } from '../Toast';

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    value: '0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89',
    prefixCls: 'copy',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Copy>;

export const Primary: Story = {
  args: {
    value: '0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89',
    prefixCls: 'copy',
  },
  render: (props) => {
    const toast = React.useRef<ToastClass>(null);

    return <div style={{ display: 'flex', height: '30vh' }}>
      <Copy
        {...props}
        color='red'
        onSuccess={() => toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Copied to clipboard', life: 1500 })}
        onError={() => toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to copy', life: 1500 })}
      />
      <Toast ref={toast} />
    </div>
  }
};
