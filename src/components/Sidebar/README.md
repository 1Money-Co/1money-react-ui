# Sidebar

A collapsible navigation sidebar component built on top of react-pro-sidebar with 1Money branding, featuring hierarchical menu structures, collapsible functionality, and responsive design for application navigation.

## Features

- Collapsible sidebar with smooth animations
- Hierarchical menu structure with submenus
- Built-in 1Money logo with responsive sizing
- Icon support for menu items
- Active state management
- Disabled menu items support
- Custom expand/collapse icons
- Ref-based imperative API for external control
- Responsive width adjustment (280px expanded, 84px collapsed)
- Custom suffixes for menu items
- Click handlers for menu interactions

## Basic Usage

```tsx
import { Sidebar } from '@1money/react-ui';

// Basic sidebar
const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
    active: true
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <TransactionIcon />,
    link: '/transactions'
  }
];

<Sidebar menus={menuItems} />

// Collapsible sidebar
<Sidebar 
  menus={menuItems}
  collapsible
  defaultCollapsed={false}
  onCollapse={(collapsed) => console.log('Collapsed:', collapsed)}
/>

// With hierarchical menus
const hierarchicalMenus = [
  {
    key: 'reports',
    label: 'Reports',
    icon: <ReportsIcon />,
    children: [
      { key: 'monthly', label: 'Monthly Reports', link: '/reports/monthly' },
      { key: 'yearly', label: 'Yearly Reports', link: '/reports/yearly' }
    ]
  }
];

<Sidebar menus={hierarchicalMenus} />
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the sidebar | string | - |
| className | Additional CSS class for the sidebar | string | - |
| prefixCls | The classname prefix for component styling | string | "sidebar" |
| headerCls | Additional CSS class for the header section | string | - |
| bodyCls | Additional CSS class for the menu body | string | - |
| collapseCls | Additional CSS class for the collapse button | string | - |
| collapsible | Whether the sidebar can be collapsed | boolean | false |
| defaultCollapsed | Initial collapsed state | boolean | false |
| onCollapse | Callback when collapse state changes | (collapsed: boolean) => void | - |
| onLogoClick | Callback when logo is clicked | () => void | - |
| menus | Array of menu items to display | MenuItem[] | [] |

## MenuItem Interface

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the menu item | string \| number | - |
| label | Display text for the menu item | ReactNode | - |
| icon | Icon to display before the label | ReactNode | - |
| suffix | Content to display after the label | ReactNode | - |
| link | Link component or URL string | string \| ReactElement | - |
| active | Whether the menu item is active | boolean | false |
| disabled | Whether the menu item is disabled | boolean | false |
| defaultOpen | Whether submenu is open by default | boolean | false |
| onOpenChange | Callback when submenu open state changes | (open: boolean) => void | - |
| onClick | Click handler for the menu item | (e: MouseEvent<HTMLAnchorElement>) => void | - |
| children | Array of child menu items | Omit<MenuItem, 'children'>[] | - |

## Ref API (SidebarHandlers)

The Sidebar component provides an imperative API through refs:

| Method | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle the collapsed state | - |
| collapse | Set the collapsed state | collapsed: boolean |

## Styling

The Sidebar component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className`, `headerCls`, `bodyCls`, and `collapseCls` props for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using CSS custom properties for theme customization
4. Customizing react-pro-sidebar theme variables

## Accessibility

- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Proper ARIA attributes for menu structure
- Focus management and focus trap
- Screen reader support for menu hierarchy
- Semantic HTML structure with proper navigation landmarks
- Logo serves as navigation landmark

## Examples

### Basic Navigation Sidebar
```tsx
const navigationMenus = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <i className="pi pi-home" />,
    link: '/dashboard',
    active: true
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <i className="pi pi-credit-card" />,
    link: '/transactions'
  },
  {
    key: 'accounts',
    label: 'Accounts',
    icon: <i className="pi pi-wallet" />,
    link: '/accounts'
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <i className="pi pi-cog" />,
    link: '/settings'
  }
];

<Sidebar 
  menus={navigationMenus}
  collapsible
  onLogoClick={() => navigate('/')}
/>
```

### Hierarchical Menu Structure
```tsx
const hierarchicalMenus = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <i className="pi pi-home" />,
    link: '/dashboard'
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <i className="pi pi-credit-card" />,
    defaultOpen: true,
    children: [
      { key: 'all-transactions', label: 'All Transactions', link: '/transactions' },
      { key: 'income', label: 'Income', link: '/transactions/income' },
      { key: 'expenses', label: 'Expenses', link: '/transactions/expenses' },
      { key: 'transfers', label: 'Transfers', link: '/transactions/transfers' }
    ]
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: <i className="pi pi-chart-bar" />,
    children: [
      { key: 'monthly', label: 'Monthly Reports', link: '/reports/monthly' },
      { key: 'yearly', label: 'Yearly Reports', link: '/reports/yearly' },
      { key: 'custom', label: 'Custom Reports', link: '/reports/custom' }
    ]
  },
  {
    key: 'admin',
    label: 'Administration',
    icon: <i className="pi pi-users" />,
    children: [
      { key: 'users', label: 'User Management', link: '/admin/users' },
      { key: 'roles', label: 'Roles & Permissions', link: '/admin/roles', disabled: true },
      { key: 'audit', label: 'Audit Logs', link: '/admin/audit' }
    ]
  }
];

<Sidebar menus={hierarchicalMenus} collapsible />
```

### Sidebar with Ref Control
```tsx
const sidebarRef = useRef<SidebarHandlers>(null);

const handleToggleSidebar = () => {
  sidebarRef.current?.toggle();
};

const handleCollapseSidebar = () => {
  sidebarRef.current?.collapse(true);
};

<div className="app-layout">
  <header className="app-header">
    <button onClick={handleToggleSidebar}>
      Toggle Menu
    </button>
    <button onClick={handleCollapseSidebar}>
      Collapse Menu
    </button>
  </header>
  
  <Sidebar
    ref={sidebarRef}
    menus={menuItems}
    collapsible
    onCollapse={(collapsed) => {
      console.log('Sidebar collapsed:', collapsed);
      // Adjust main content layout
    }}
  />
  
  <main className="app-content">
    <Routes>
      {/* Your app routes */}
    </Routes>
  </main>
</div>
```

### Menu with Badges and Custom Actions
```tsx
const menuWithBadges = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <i className="pi pi-home" />,
    link: '/dashboard'
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: <i className="pi pi-bell" />,
    suffix: <span className="notification-badge">3</span>,
    link: '/notifications',
    onClick: (e) => {
      // Mark notifications as read
      markNotificationsAsRead();
    }
  },
  {
    key: 'messages',
    label: 'Messages',
    icon: <i className="pi pi-envelope" />,
    suffix: <span className="message-count">12</span>,
    link: '/messages'
  },
  {
    key: 'help',
    label: 'Help & Support',
    icon: <i className="pi pi-question-circle" />,
    children: [
      { 
        key: 'docs', 
        label: 'Documentation', 
        onClick: () => window.open('/docs', '_blank')
      },
      { 
        key: 'contact', 
        label: 'Contact Support', 
        onClick: () => openSupportChat()
      }
    ]
  }
];

<Sidebar 
  menus={menuWithBadges}
  collapsible
  defaultCollapsed={false}
/>
```

### Responsive Sidebar
```tsx
const [isMobile, setIsMobile] = useState(false);
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, [sidebarCollapsed]);

<Sidebar
  menus={menuItems}
  collapsible
  defaultCollapsed={isMobile}
  onCollapse={setSidebarCollapsed}
  className={isMobile ? 'mobile-sidebar' : 'desktop-sidebar'}
/>
```