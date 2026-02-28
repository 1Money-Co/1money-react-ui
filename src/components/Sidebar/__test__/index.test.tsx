import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar, Stepper } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed')
  ) {
      return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Sidebar', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Sidebar
        menus={[
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
        ]}
      />
    );

    const stepperWrapper = render(
      <Stepper
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
    );

    expect(wrapper).toMatchSnapshot();
    expect(stepperWrapper).toMatchSnapshot();
  });
});
