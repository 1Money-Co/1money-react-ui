import * as React from 'react';
import { Table } from './index';
import { Icons } from '../Icons';
import { Toast } from '../Toast';
import { Badge } from '../Badge';
import './style';
import '../Toast/style';
import '../Icons/style';
import '../Badge/style';
import type { Meta, StoryObj } from '@storybook/react';
import type { ToastClass } from '../Toast';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'table',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    prefixCls: 'table',
    value: [
      {
        dataKey: 1,
        nickname: 'My income address 1',
        asset: 'USD1',
        network: 'Ethereum',
        address: '0x7c4b****25s2',
        updatedAt: '25 Jan 2025, 12:30',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 1,
      },
      {
        dataKey: 2,
        nickname: 'My income address 2',
        asset: 'USDC',
        network: 'Polygon',
        address: '0x7c4b****25s2',
        updatedAt: '25 Jan 2025, 12:30',
        status: {
          value: 'In Progress',
          severity: 'warning',
        },
        action: 2,
      }
    ],
  },
  render: function Render(args) {
    const toast = React.useRef<ToastClass>(null);
    const [selectedRow, setSelectedRow] = React.useState<any>(null);

    return <>
      <Table
        {...args}
        selectionMode='single'
        selection={selectedRow}
        onSelectionChange={e => setSelectedRow(e.value)}
        columns={[
          { field: 'nickname', header: 'Wallet nickname' },
          { field: 'asset', header: 'Asset' },
          { field: 'network', header: 'Network' },
          { field: 'address', header: 'Address' },
          { field: 'updatedAt', header: 'Update Time' },
          { field: 'status', header: 'Status', body: (data) => <Badge severity={data.status.severity} value={data.status.value} /> },
          {
            field: 'action', header: 'Action', body: (data) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <Icons
                name='editFile'
                size={20}
                onClick={() => toast.current?.show({
                  severity: 'info',
                  summary: 'Edit',
                  detail: `Edit wallet ${data.action}`,
                })}
              />
              <Icons
                name='remove'
                size={20}
                onClick={() => toast.current?.show({
                  severity: 'warn',
                  summary: 'Delete',
                  detail: `Delete wallet ${data.action}`,
                })}
              />
            </span>
          },
        ]}
      />
      <Toast ref={toast} />
    </>;
  },
};
