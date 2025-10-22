import React, { useState } from 'react';
import { Sidebar as SidebarComponent, Stepper as StepperComponent } from './index';
import { Icons } from '../Icons';
import { Tooltip } from '../Tooltip';
import './style';
import '../Icons/style';
import '../Tooltip/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SidebarComponent> = {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'sidebar',
    collapsible: true,
    betaLogo: true,
    menus: [
      {
        label: 'Dashboard',
        icon: <Icons name='dashboard' size={16} color='inherit' />,
        link: <a href='/?path=/docs/components-sidebar--overview' />,
        active: true
      },
      {
        label: 'Transaction history',
        icon: <Icons name='transferHistory' size={16} color='inherit' />,
      },
      {
        label: 'Address book',
        icon: <Icons name='addressBook' size={16} color='inherit' />,
        disabled: true
      },
      {
        label: 'My external accounts',
        icon: <Icons name='bank' size={16} color='inherit' />,
        disabled: true
      },
      {
        label: 'Send addresses',
        icon: <Icons name='addressBook' size={16} color='inherit' />,
        defaultOpen: true,
        children: [
          {
            active: true,
            label: 'Digital wallets',
            icon: <Icons name='wallet' size={16} color='inherit' />,
            suffix: <Icons name='arrowRight' size={16} color='inherit' />,
          },
          {
            label: 'Bank accounts',
            icon: <Icons name='bank' size={16} color='inherit' />,
            suffix: <Icons name='arrowRight' size={16} color='inherit' />,
          },
          {
            label: 'Web3 addresses',
            icon: <Icons name='fiat' size={16} color='inherit' />,
            suffix: <Icons name='arrowRight' size={16} color='inherit' />,
          }
        ]
      }
    ]
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
  args: {
    prefixCls: 'sidebar'
  },
  render: (args) => {
    const { children, ...rest } = args;
    const [collapsed, setCollapsed] = useState(false);
    return <SidebarComponent {...rest} onCollapse={setCollapsed}>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: collapsed ? 'column' : 'row', alignItems: 'center', gap: '12px' }}>
          <i id='settings' style={{ cursor: 'pointer', width: '20px', height: '20px', lineHeight: '20px' }}>
            <Icons name='settings' size={20} color='#646465' />
          </i>
          <Tooltip place='top' anchorSelect='#settings' >
            <div style={{ width: '80px', textAlign: 'center' }}>
              <span>Overlay Data</span>
              <br />
              <span>Settings</span>
            </div>
          </Tooltip>
          <span style={{ fontSize: collapsed ? '10px' : '14px' }}>Settings</span>
        </div>
        <div style={{ display: 'flex', flexDirection: collapsed ? 'column' : 'row', alignItems: 'center', gap: '12px' }}>
          <i id='help' style={{ cursor: 'pointer', width: '20px', height: '20px', lineHeight: '20px' }}>
            <Icons name='help' size={20} color='#646465' />
          </i>
          <Tooltip place='top' anchorSelect='#help' >
            <div style={{ width: '80px', textAlign: 'center' }}>
              <span>Overlay Data</span>
              <br />
              <span>Supports</span>
            </div>
          </Tooltip>
          <span style={{ fontSize: collapsed ? '10px' : '14px' }}>Support</span>
        </div>
      </div>
    </SidebarComponent>;
  }
};

export const Stepper: StoryObj<typeof StepperComponent> = {
  render: () => {
    return <div style={{ backgroundColor: '#F8F8F8', padding: '16px' }}>
      <StepperComponent
        betaLogo
        steps={[
          {
            key: '1',
            label: '1. Business Overview',
            status: 'done'
          },
          {
            key: '2',
            label: '2. Business Address',
            status: 'active'
          },
          {
            key: '3',
            label: '3. Tax Information',
            status: 'done-active'
          },
          {
            key: '4',
            label: '4. Business Details',
            status: 'todo'
          },
          {
            key: '5',
            label: '5. Compliance Details',
            status: 'todo',
            disabled: true
          }
        ]}
        footer={<span>Auto-saved at 12:30, 25 Jan 2025</span>}
      />
    </div>;
  }
};