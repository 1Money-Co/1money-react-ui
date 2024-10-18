import React, { useState } from 'react';
import { Sidebar } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'sidebar',
    collapsible: true,
    menus: [
      {
        label: 'Dashboard',
        icon: <i className="pi pi-home" style={{ fontSize: '16px' }} />,
        link: <a href='/?path=/docs/components-sidebar--overview' />,
        active: true
      },
      {
        label: 'Digital Assets',
        icon: <i className="pi pi-wallet" style={{ fontSize: '16px' }} />,
      },
      {
        label: 'Address Book',
        icon: <i className="pi pi-book" style={{ fontSize: '16px' }} />,
      },
      {
        label: 'Banking accounts',
        icon: <i className="pi pi-credit-card" style={{ fontSize: '16px' }} />,
      },
      {
        label: 'Account',
        icon: <i className="pi pi-user" style={{ fontSize: '16px' }} />,
        defaultOpen: true,
        children: [
          {
            label: 'Profile',
            icon: <i className="pi pi-user-edit" style={{ fontSize: '16px' }} />,
          },
          {
            label: 'Security',
            icon: <i className="pi pi-shield" style={{ fontSize: '16px' }} />,
          }
        ]
      }
    ]
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Sidebar>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'sidebar'
  },
  render: (args) => {
    const { children, ...rest } = args;
    const [collapsed, setCollapsed] = useState(false);
    return <Sidebar {...rest} onCollapse={setCollapsed}>
      <div style={{ display: collapsed ? 'none' : 'flex', alignItems: 'end', flexShrink: 0, flexGrow: 1, padding: '16px 0' }}>
        <div style={{ padding: '16px', backgroundColor: '#E5EFFF', borderRadius: '16px', height: '95px' }}>
          <h4 style={{ margin: '0' }}>Complete verification</h4>
          <span>Unlock the full power of 1Money</span>
        </div>
      </div>
    </Sidebar>;
  }
};
