import * as React from 'react';
import { Table } from './index';
import { Icons } from '../Icons';
import { Toast } from '../Toast';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Typography } from '../Typography';
import './style';
import '../Toast/style';
import '../Icons/style';
import '../Badge/style';
import '../Button/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';
import type { ToastClass } from '../Toast';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    rowBorder: { control: 'boolean' },
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
    const [expandedRow, setExpandedRow] = React.useState<any>(null);

    return <>
      <Table
        {...args}
        selectionMode='single'
        selection={selectedRow}
        expandedRows={expandedRow}
        onSelectionChange={e => setSelectedRow(e.value)}
        onRowToggle={e => setExpandedRow(e.data)}
        columns={[
          { expander: rowData => rowData.dataKey <= 1, body: (data, options) => {
            if (data.dataKey > 1) return null;
            const isExpanded = expandedRow?.some(item => item.dataKey === data.dataKey);
            const { expander } = options;
            const { onClick } = expander || {};
            return <span onClick={e => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
              <Icons name='chevronDown' size='16' onClick={onClick} style={{ cursor: 'pointer', transform: isExpanded ? 'rotate(180deg)' : '' }} />
            </span>;
          } },
          { field: 'nickname', header: 'Wallet nickname' },
          { field: 'asset', header: 'Asset' },
          { field: 'network', header: 'Network' },
          { field: 'address', header: 'Address' },
          { field: 'updatedAt', header: 'Update Time' },
          { field: 'status', header: 'Status', body: (data) => <Badge severity={data.status.severity} value={data.status.value} /> },
          {
            field: 'action', header: 'Action', align: 'right', body: (data) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
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
        rowExpansionTemplate={(data, options) => <ul
          style={{
            margin: '0',
            padding: '0 12px 0 40px',
            backgroundColor: '#F0F0F0',
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
          }}
        >
          <li style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '180px' }}>
              <img src='/tokens/USDT.svg' alt='USDT' style={{ width: '32px', height: '32px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                <Typography.Title size='m' bold>
                  {data.asset}
                </Typography.Title>
                <Typography.Body size='s'>
                  Solana
                </Typography.Body>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
              <Typography.Title size='m' bold>
                {`8,650.00 ${data.asset}`}
              </Typography.Title>
              <Typography.Body size='s'>
                $8,650.00 USD
              </Typography.Body>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '4px' }}>
              <Button severity='white' size='small'>
                Deposit
              </Button>
              <Button severity='white' size='small'>
                Withdraw
              </Button>
            </div>
          </li>
          <li style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '180px' }}>
              <img src='/tokens/USDT.svg' alt='USDT' style={{ width: '32px', height: '32px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                <Typography.Title size='m' bold>
                  {data.asset}
                </Typography.Title>
                <Typography.Body size='s'>
                  Ethereum
                </Typography.Body>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
              <Typography.Title size='m' bold>
                {`5,000.00 ${data.asset}`}
              </Typography.Title>
              <Typography.Body size='s'>
                $5,000.00 USD
              </Typography.Body>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '4px' }}>
              <Button severity='white' size='small'>
                Deposit
              </Button>
              <Button severity='white' size='small'>
                Withdraw
              </Button>
            </div>
          </li>
          <li style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '180px' }}>
              <img src='/tokens/USDT.svg' alt='USDT' style={{ width: '32px', height: '32px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                <Typography.Title size='m' bold>
                  {data.asset}
                </Typography.Title>
                <Typography.Body size='s'>
                  Polygon
                </Typography.Body>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
              <Typography.Title size='m' bold>
                {`25,000.00 ${data.asset}`}
              </Typography.Title>
              <Typography.Body size='s'>
                $25,000.00 USD
              </Typography.Body>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '4px' }}>
              <Button severity='white' size='small'>
                Deposit
              </Button>
              <Button severity='white' size='small'>
                Withdraw
              </Button>
            </div>
          </li>
        </ul>}
      />
      <Toast ref={toast} />
    </>;
  },
};
