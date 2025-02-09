import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Sidebar } from '../index';

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
    expect(wrapper).toMatchSnapshot();
  });
});
