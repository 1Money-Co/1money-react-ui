# Menu

A versatile menu component built on top of PrimeReact's Menu with enhanced styling and support for different menu types including standard menus and selectors for dropdown navigation, context menus, and item selection.

## Features

- Multiple menu types: standard menu and selector
- Hierarchical menu structure with submenus
- Icon support for menu items
- Keyboard navigation and accessibility
- Context menu and popup positioning
- Command callbacks for menu actions
- URL navigation support
- Disabled and separator items
- Custom styling and templates
- Ref-based imperative API for programmatic control

## Basic Usage

```tsx
import { Menu } from '@1money/react-ui';

// Basic menu
const menuItems = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      { label: 'New', icon: 'pi pi-plus', command: () => createNew() },
      { label: 'Open', icon: 'pi pi-folder-open', command: () => openFile() },
      { separator: true },
      { label: 'Quit', icon: 'pi pi-times', command: () => quit() }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy', command: () => copy() },
      { label: 'Paste', icon: 'pi pi-clone', command: () => paste() }
    ]
  }
];

<Menu model={menuItems} />

// Selector type menu
<Menu 
  model={menuItems}
  type="selector"
  popup
  ref={menuRef}
/>

// Context menu
<Menu 
  model={contextMenuItems}
  popup
  ref={contextMenuRef}
/>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the menu | string | - |
| prefixCls | The classname prefix for component styling | string | "menu" |
| type | Menu style variant | 'menu' \| 'selector' | 'menu' |

## Inherited Props

This component extends PrimeReact's Menu component and inherits all its props. Common inherited props include:

- `model?: MenuItem[]` - Array of menu items to display
- `popup?: boolean` - Whether to display as popup menu
- `popupAlignment?: 'left' | 'right'` - Popup alignment
- `id?: string` - Unique identifier for the menu
- `style?: CSSProperties` - Inline styles for the menu
- `onShow?: () => void` - Callback when menu is shown (popup mode)
- `onHide?: () => void` - Callback when menu is hidden (popup mode)

## MenuItem Interface (from PrimeReact)

Each menu item can include the following properties:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Display text for the menu item | string | - |
| icon | Icon CSS class or ReactNode | string \| ReactNode | - |
| command | Callback when item is clicked | (event: MenuItemCommandEvent) => void | - |
| url | URL for navigation | string | - |
| items | Submenu items | MenuItem[] | - |
| disabled | Whether the item is disabled | boolean | false |
| visible | Whether the item is visible | boolean | true |
| target | Link target attribute | string | - |
| separator | Whether item is a separator | boolean | false |
| style | Inline styles for the item | CSSProperties | - |
| className | CSS class for the item | string | - |
| template | Custom template function | Function | - |

## Ref API

The Menu component provides access to PrimeReact's Menu methods through refs:

| Method | Description | Parameters |
| --- | --- | --- |
| show | Show the popup menu | event: Event |
| hide | Hide the popup menu | - |
| toggle | Toggle popup menu visibility | event: Event |

## Styling

The Menu component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using the `type` prop to switch between menu and selector styles
4. Using CSS custom properties for theme customization

## Accessibility

- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Proper ARIA attributes for menu structure
- Focus management and roving tabindex
- Screen reader support for menu hierarchy
- Semantic HTML structure with proper menu roles

## Examples

### Application Menu Bar
```tsx
const appMenuItems = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      {
        label: 'New Project',
        icon: 'pi pi-plus',
        command: () => createNewProject()
      },
      {
        label: 'Open Project',
        icon: 'pi pi-folder-open',
        command: () => openProject()
      },
      { separator: true },
      {
        label: 'Recent Projects',
        icon: 'pi pi-history',
        items: recentProjects.map(project => ({
          label: project.name,
          command: () => openProject(project.id)
        }))
      },
      { separator: true },
      {
        label: 'Exit',
        icon: 'pi pi-times',
        command: () => confirmExit()
      }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    items: [
      {
        label: 'Undo',
        icon: 'pi pi-undo',
        command: () => undo(),
        disabled: !canUndo
      },
      {
        label: 'Redo',
        icon: 'pi pi-refresh',
        command: () => redo(),
        disabled: !canRedo
      },
      { separator: true },
      {
        label: 'Cut',
        icon: 'pi pi-scissors',
        command: () => cut()
      },
      {
        label: 'Copy',
        icon: 'pi pi-copy',
        command: () => copy()
      },
      {
        label: 'Paste',
        icon: 'pi pi-clone',
        command: () => paste(),
        disabled: !canPaste
      }
    ]
  },
  {
    label: 'View',
    icon: 'pi pi-eye',
    items: [
      {
        label: 'Zoom In',
        icon: 'pi pi-search-plus',
        command: () => zoomIn()
      },
      {
        label: 'Zoom Out',
        icon: 'pi pi-search-minus',
        command: () => zoomOut()
      },
      {
        label: 'Reset Zoom',
        icon: 'pi pi-refresh',
        command: () => resetZoom()
      },
      { separator: true },
      {
        label: 'Toggle Sidebar',
        icon: 'pi pi-bars',
        command: () => toggleSidebar()
      }
    ]
  }
];

<Menu model={appMenuItems} />
```

### Context Menu
```tsx
const contextMenuRef = useRef<Menu>(null);
const [selectedItem, setSelectedItem] = useState(null);

const contextMenuItems = [
  {
    label: 'View Details',
    icon: 'pi pi-info-circle',
    command: () => viewDetails(selectedItem)
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    command: () => editItem(selectedItem)
  },
  {
    label: 'Duplicate',
    icon: 'pi pi-copy',
    command: () => duplicateItem(selectedItem)
  },
  { separator: true },
  {
    label: 'Archive',
    icon: 'pi pi-archive',
    command: () => archiveItem(selectedItem)
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => deleteItem(selectedItem),
    className: 'danger-item'
  }
];

const handleRightClick = (event, item) => {
  setSelectedItem(item);
  contextMenuRef.current?.show(event);
};

<div>
  <div 
    className="item-list"
    onContextMenu={(e) => handleRightClick(e, item)}
  >
    {/* Your content */}
  </div>
  
  <Menu 
    model={contextMenuItems}
    popup
    ref={contextMenuRef}
    id="context-menu"
  />
</div>
```

### Dropdown Action Menu
```tsx
const actionMenuRef = useRef<Menu>(null);

const actionMenuItems = [
  {
    label: 'Export',
    icon: 'pi pi-download',
    items: [
      {
        label: 'Export as PDF',
        icon: 'pi pi-file-pdf',
        command: () => exportToPDF()
      },
      {
        label: 'Export as Excel',
        icon: 'pi pi-file-excel',
        command: () => exportToExcel()
      },
      {
        label: 'Export as CSV',
        icon: 'pi pi-file',
        command: () => exportToCSV()
      }
    ]
  },
  {
    label: 'Share',
    icon: 'pi pi-share-alt',
    items: [
      {
        label: 'Copy Link',
        icon: 'pi pi-link',
        command: () => copyShareLink()
      },
      {
        label: 'Send Email',
        icon: 'pi pi-envelope',
        command: () => sendEmail()
      },
      {
        label: 'Generate Report',
        icon: 'pi pi-file-pdf',
        command: () => generateReport()
      }
    ]
  },
  { separator: true },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    command: () => openSettings()
  }
];

<div className="action-menu-container">
  <Button 
    icon="pi pi-ellipsis-v"
    onClick={(e) => actionMenuRef.current?.toggle(e)}
    aria-label="More actions"
  />
  
  <Menu 
    model={actionMenuItems}
    popup
    ref={actionMenuRef}
    type="selector"
  />
</div>
```

### Navigation Menu with User Profile
```tsx
const profileMenuItems = [
  {
    label: 'Profile',
    icon: 'pi pi-user',
    command: () => navigate('/profile')
  },
  {
    label: 'Account Settings',
    icon: 'pi pi-cog',
    command: () => navigate('/settings')
  },
  {
    label: 'Billing',
    icon: 'pi pi-credit-card',
    command: () => navigate('/billing')
  },
  { separator: true },
  {
    label: 'Help & Support',
    icon: 'pi pi-question-circle',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-book',
        command: () => window.open('/docs', '_blank')
      },
      {
        label: 'Contact Support',
        icon: 'pi pi-envelope',
        command: () => openSupportChat()
      },
      {
        label: 'Report Bug',
        icon: 'pi pi-exclamation-triangle',
        command: () => reportBug()
      }
    ]
  },
  { separator: true },
  {
    label: 'Sign Out',
    icon: 'pi pi-sign-out',
    command: () => signOut()
  }
];

const profileMenuRef = useRef<Menu>(null);

<div className="user-profile">
  <Button 
    className="profile-button"
    onClick={(e) => profileMenuRef.current?.toggle(e)}
  >
    <Avatar src={user.avatar} />
    <span>{user.name}</span>
    <i className="pi pi-chevron-down" />
  </Button>
  
  <Menu 
    model={profileMenuItems}
    popup
    ref={profileMenuRef}
    popupAlignment="right"
  />
</div>
```

### Mobile-Friendly Menu
```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

const mobileMenuItems = isMobile 
  ? [
      { label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
      { label: 'Transactions', icon: 'pi pi-credit-card', command: () => navigate('/transactions') },
      { label: 'Reports', icon: 'pi pi-chart-bar', command: () => navigate('/reports') },
      { label: 'Settings', icon: 'pi pi-cog', command: () => navigate('/settings') }
    ]
  : menuItems;

<Menu 
  model={mobileMenuItems}
  className={isMobile ? 'mobile-menu' : 'desktop-menu'}
/>
```