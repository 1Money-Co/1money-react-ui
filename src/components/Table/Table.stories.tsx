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
    scrollable: { control: 'boolean' },
    rowBorder: { control: 'boolean' },
    transparent: { control: 'boolean' },
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
    scrollable: true,
    rowBorder: true,
    transparent: false,
    scrollHeight: '50vh',
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
      },
      {
        dataKey: 3,
        nickname: 'Trading Wallet 1',
        asset: 'BTC',
        network: 'Bitcoin',
        address: 'bc1q****3xyz',
        updatedAt: '24 Jan 2025, 15:45',
        status: {
          value: 'Failed',
          severity: 'negative',
        },
        action: 3,
      },
      {
        dataKey: 4,
        nickname: 'Savings Wallet',
        asset: 'ETH',
        network: 'Ethereum',
        address: '0x9f2d****8abc',
        updatedAt: '23 Jan 2025, 09:15',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 4,
      },
      {
        dataKey: 5,
        nickname: 'DeFi Wallet',
        asset: 'USDT',
        network: 'BSC',
        address: '0x3f5a****7def',
        updatedAt: '22 Jan 2025, 18:20',
        status: {
          value: 'Pending',
          severity: 'recommend',
        },
        action: 5,
      },
      {
        dataKey: 6,
        nickname: 'NFT Wallet',
        asset: 'ETH',
        network: 'Arbitrum',
        address: '0x2e8b****4ghi',
        updatedAt: '21 Jan 2025, 11:30',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 6,
      },
      {
        dataKey: 7,
        nickname: 'Staking Wallet',
        asset: 'SOL',
        network: 'Solana',
        address: '7v91****2jkl',
        updatedAt: '20 Jan 2025, 14:25',
        status: {
          value: 'In Progress',
          severity: 'warning',
        },
        action: 7,
      },
      {
        dataKey: 8,
        nickname: 'Gaming Wallet',
        asset: 'USDC',
        network: 'Avalanche',
        address: 'X-avax****5mno',
        updatedAt: '19 Jan 2025, 16:40',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 8,
      },
      {
        dataKey: 9,
        nickname: 'Yield Farming',
        asset: 'USDT',
        network: 'Optimism',
        address: '0x1c7d****9pqr',
        updatedAt: '18 Jan 2025, 10:10',
        status: {
          value: 'Failed',
          severity: 'negative',
        },
        action: 9,
      },
      {
        dataKey: 10,
        nickname: 'Main Wallet',
        asset: 'ETH',
        network: 'Ethereum',
        address: '0x5b3e****6stu',
        updatedAt: '17 Jan 2025, 13:55',
        status: {
          value: 'Pending',
          severity: 'recommend',
        },
        action: 10,
      },
      {
        dataKey: 11,
        nickname: 'Lending Pool',
        asset: 'USDC',
        network: 'Avalanche',
        address: 'X-avax****7vwx',
        updatedAt: '16 Jan 2025, 09:20',
        status: {
          value: 'Failed',
          severity: 'negative',
        },
        action: 11,
      },
      {
        dataKey: 12,
        nickname: 'DAO Treasury',
        asset: 'ETH',
        network: 'Arbitrum',
        address: '0x8d2e****3yza',
        updatedAt: '15 Jan 2025, 14:45',
        status: {
          value: 'Pending',
          severity: 'recommend',
        },
        action: 12,
      },
      {
        dataKey: 13,
        nickname: 'Bridge Wallet',
        asset: 'USDT',
        network: 'Polygon',
        address: '0x4f7c****9bcd',
        updatedAt: '14 Jan 2025, 11:30',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 13,
      },
      {
        dataKey: 14,
        nickname: 'Staking Pool',
        asset: 'SOL',
        network: 'Solana',
        address: '8k2m****5nop',
        updatedAt: '13 Jan 2025, 16:15',
        status: {
          value: 'In Progress',
          severity: 'warning',
        },
        action: 14,
      },
      {
        dataKey: 15,
        nickname: 'Trading Pool',
        asset: 'BTC',
        network: 'Bitcoin',
        address: 'bc1q****8rst',
        updatedAt: '12 Jan 2025, 10:40',
        status: {
          value: 'Failed',
          severity: 'negative',
        },
        action: 15,
      },
      {
        dataKey: 16,
        nickname: 'Yield Aggregator',
        asset: 'USDC',
        network: 'Optimism',
        address: '0x6e9f****2uvw',
        updatedAt: '11 Jan 2025, 15:25',
        status: {
          value: 'Pending',
          severity: 'recommend',
        },
        action: 16,
      },
      {
        dataKey: 17,
        nickname: 'NFT Marketplace',
        asset: 'ETH',
        network: 'Ethereum',
        address: '0x3b8d****7xyz',
        updatedAt: '10 Jan 2025, 09:50',
        status: {
          value: 'Completed',
          severity: 'success',
        },
        action: 17,
      },
      {
        dataKey: 18,
        nickname: 'Liquidity Pool',
        asset: 'USDT',
        network: 'BSC',
        address: '0x5c2a****4def',
        updatedAt: '09 Jan 2025, 13:15',
        status: {
          value: 'In Progress',
          severity: 'warning',
        },
        action: 18,
      },
      {
        dataKey: 19,
        nickname: 'Cross-chain Bridge',
        asset: 'SOL',
        network: 'Solana',
        address: '9n3m****6pqr',
        updatedAt: '08 Jan 2025, 17:30',
        status: {
          value: 'Failed',
          severity: 'negative',
        },
        action: 19,
      },
      {
        dataKey: 20,
        nickname: 'Governance Pool',
        asset: 'ETH',
        network: 'Polygon',
        address: '0x7f4e****1abc',
        updatedAt: '07 Jan 2025, 11:45',
        status: {
          value: 'Pending',
          severity: 'recommend',
        },
        action: 20,
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
            backgroundColor: '#F8F8F8',
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
