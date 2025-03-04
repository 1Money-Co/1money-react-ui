import React, { useState } from 'react';
import { Sidebar as SidebarComponent, Stepper as StepperComponent } from './index';
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

type Story = StoryObj<typeof SidebarComponent>;
 
export const Sidebar: Story = {
  args: {
    prefixCls: 'sidebar'
  },
  render: (args) => {
    const { children, ...rest } = args;
    const [collapsed, setCollapsed] = useState(false);
    return <SidebarComponent {...rest} onCollapse={setCollapsed}>
      <div style={{ display: collapsed ? 'none' : 'flex', alignItems: 'end', flexShrink: 0, flexGrow: 1, padding: '16px 0' }}>
        <div style={{ padding: '16px', backgroundColor: '#E5EFFF', borderRadius: '16px', height: '95px' }}>
          <h4 style={{ margin: '0' }}>Complete verification</h4>
          <span>Unlock the full power of 1Money</span>
        </div>
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