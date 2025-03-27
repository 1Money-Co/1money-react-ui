import React, { useState } from 'react';
import { Sidebar as SidebarComponent, Stepper as StepperComponent } from './index';
import { Icons } from '../Icons';
import { Tooltip } from '../Tooltip';
import './style';
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
    menus: [
      {
        label: 'Dashboard',
        icon: <Icons name='dashboard' size={20} color='#131313' />,
        link: <a href='/?path=/docs/components-sidebar--overview' />,
        active: true
      },
      {
        label: 'Digital Assets',
        icon: <Icons name='digitalAsset' size={20} color='#131313' />,
      },
      {
        label: 'Address Book',
        icon: <Icons name='addressBook' size={20} color='#131313' />,
        disabled: true
      },
      {
        label: 'Banking accounts',
        icon: <Icons name='bank' size={20} color='#131313' />,
        disabled: true
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

type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
  args: {
    prefixCls: 'sidebar'
  },
  render: (args) => {
    const { children, ...rest } = args;
    const [collapsed, setCollapsed] = useState(false);
    return <SidebarComponent {...rest} onCollapse={setCollapsed}>
      <div style={{ display: 'flex', flexDirection: collapsed ? 'column' : 'row', alignItems: 'center', marginTop: 'auto', gap: '12px' }}>
        <i id='help' style={{ cursor: 'pointer', width: '20px', height: '20px', lineHeight: '20px' }}>
          <Icons name='help' size={20} color='#646465' />
        </i>
        <Tooltip place='top' anchorSelect='#help' >
          <div style={{ width: '80px', textAlign: 'center' }}>
            <span>Overlay Data</span>
            <br />
            <span>Tooltip</span>
          </div>
        </Tooltip>
        <span style={{ fontSize: collapsed ? '10px' : '14px' }}>Support</span>
      </div>
    </SidebarComponent>;
  }
};

export const Stepper: StoryObj<typeof StepperComponent> = {
  render: () => {
    return <div style={{ backgroundColor: '#F8F8F8', padding: '16px' }}>
      <StepperComponent
        steps={[
          {
            key: '1',
            label: '1.Business Overview',
            status: 'done'
          },
          {
            key: '2',
            label: '2.Business Address',
            status: 'active'
          },
          {
            key: '3',
            label: '3.Tax Information',
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