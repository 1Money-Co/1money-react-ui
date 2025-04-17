import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Table } from '../index';
import { Badge } from '../../Badge';
import { Icons } from '../../Icons';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Table', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Table
      columns={
        [
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
              />
              <Icons
                name='remove'
                size={20}
              />
            </span>
          },
        ]
      }
      value={[
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
      ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
