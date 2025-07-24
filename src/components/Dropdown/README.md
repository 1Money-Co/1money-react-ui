# Dropdown

A versatile dropdown overlay component that displays a list of selectable items positioned relative to trigger elements, built on top of PrimeReact's OverlayPanel with enhanced styling and customization options.

## Features

- Context-aware positioning with collision detection
- Customizable item rendering with React nodes
- Active item state management
- Configurable dimensions (width/height)
- Prefix and suffix element support
- Rich styling customization options
- Imperative API for show/hide control
- Keyboard navigation support
- Accessible ARIA attributes

## Basic Usage

```tsx
import { Dropdown, DropdownHandler } from '@1money/react-ui';
import { useRef } from 'react';

// Basic dropdown with simple items
const dropdownRef = useRef<DropdownHandler>(null);

const basicItems = [
  { key: '1', children: 'Option 1' },
  { key: '2', children: 'Option 2' },
  { key: '3', children: 'Option 3', active: true }
];

<>
  <Button onClick={(e) => dropdownRef.current?.toggle(e)}>
    Show Dropdown
  </Button>
  <Dropdown 
    ref={dropdownRef}
    items={basicItems}
    width="200px"
    height="150px"
  />
</>
```

## Advanced Usage

```tsx
// Rich content dropdown with custom items
const currencyItems = [
  {
    key: 'usd',
    children: (
      <div className="flex items-center gap-2 p-2">
        <img src="/flags/us.svg" alt="US" className="w-6 h-6" />
        <div>
          <div className="font-semibold">USD</div>
          <div className="text-sm text-gray-500">US Dollar</div>
        </div>
      </div>
    )
  },
  {
    key: 'eur',
    active: true,
    children: (
      <div className="flex items-center gap-2 p-2">
        <img src="/flags/eu.svg" alt="EU" className="w-6 h-6" />
        <div>
          <div className="font-semibold">EUR</div>
          <div className="text-sm text-gray-500">Euro</div>
        </div>
      </div>
    )
  }
];

<Dropdown
  ref={dropdownRef}
  items={currencyItems}
  width="240px"
  prefixEle={<div className="p-2 border-b">Choose Currency</div>}
  suffixEle={<div className="p-2 border-t text-center">
    <button className="text-blue-500">Add Custom</button>
  </div>}
/>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| items | Array of dropdown items to display | DropdownItem[] | [] |
| width | Fixed width for the dropdown | CSSProperties['width'] | 'auto' |
| height | Fixed height for the dropdown | CSSProperties['height'] | 'auto' |
| prefixCls | The classname prefix for component styling | string | "dropdown" |
| className | Additional CSS classes for the overlay | string | - |
| wrapperCls | CSS classes for the wrapper element | string | - |
| listCls | CSS classes for the list element | string | - |
| itemCls | CSS classes for list items | string | - |
| itemActiveCls | CSS classes for active list items | string | - |
| prefixEle | Element to display before the list | ReactNode | - |
| suffixEle | Element to display after the list | ReactNode | - |

## DropdownItem Interface

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| active | Whether the item is in active state | boolean | false |
| children | Content to render inside the item | ReactNode | - |

## Inherited Props (from PrimeReact OverlayPanel)

### Core Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| appendTo | DOM element to append the overlay | HTMLElement \| 'body' \| 'self' | 'body' |
| autoZIndex | Whether to automatically manage z-index | boolean | true |
| baseZIndex | Base z-index value | number | 0 |
| breakpoints | Responsive breakpoints | object | - |
| closeOnEscape | Whether escape key closes overlay | boolean | true |
| dismissable | Whether clicking outside closes overlay | boolean | true |

### Positioning Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| my | Position of overlay relative to itself | string | 'left top' |
| at | Position relative to target element | string | 'left bottom' |
| collision | Collision detection behavior | string | 'flip' |

### Callback Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| onShow | Callback when overlay is shown | () => void | - |
| onHide | Callback when overlay is hidden | () => void | - |

## Handler Methods (DropdownHandler)

The component ref provides access to OverlayPanel methods:

| Method | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle overlay visibility | (event: React.SyntheticEvent) => void |
| show | Show the overlay | (event: React.SyntheticEvent, target?: HTMLElement) => void |
| hide | Hide the overlay | () => void |

## Styling

The Dropdown component uses SCSS modules with BEM-like naming conventions and CSS custom properties:

```scss
.dropdown {
  // CSS custom properties
  --dropdown-width: auto;
  --dropdown-height: auto;
  
  &__wrapper { /* wrapper styles */ }
  &__list { /* list styles */ }
  &__list-item { /* item styles */ }
  &__list-item--active { /* active item styles */ }
}
```

Customize through:

1. Component-specific class props (`wrapperCls`, `listCls`, etc.)
2. `prefixCls` override for complete style control
3. CSS custom properties for dimensions
4. Individual item styling via `itemCls` and `itemActiveCls`

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation support (Tab, Enter, Escape)
- Focus management for overlay content
- Role-based semantic structure
- Screen reader announcements for state changes

## Examples

### User Menu Dropdown

```tsx
const UserMenu = ({ user, onLogout }) => {
  const menuRef = useRef<DropdownHandler>(null);

  const menuItems = [
    {
      key: 'profile',
      children: (
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
          <img src={user.avatar} alt="" className="w-8 h-8 rounded-full" />
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'settings',
      children: (
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
          <i className="pi pi-cog" />
          <span>Settings</span>
        </div>
      )
    },
    {
      key: 'help',
      children: (
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
          <i className="pi pi-question-circle" />
          <span>Help & Support</span>
        </div>
      )
    },
    {
      key: 'logout',
      children: (
        <div 
          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer text-red-600"
          onClick={onLogout}
        >
          <i className="pi pi-sign-out" />
          <span>Sign Out</span>
        </div>
      )
    }
  ];

  return (
    <>
      <button 
        className="user-avatar"
        onClick={(e) => menuRef.current?.toggle(e)}
      >
        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
      </button>
      <Dropdown
        ref={menuRef}
        items={menuItems}
        width="280px"
        className="user-menu-dropdown"
      />
    </>
  );
};
```

### Currency Selector

```tsx
const CurrencySelector = ({ currencies, selectedCurrency, onSelect }) => {
  const dropdownRef = useRef<DropdownHandler>(null);

  const currencyItems = currencies.map(currency => ({
    key: currency.code,
    active: currency.code === selectedCurrency.code,
    children: (
      <div 
        className="flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer"
        onClick={() => {
          onSelect(currency);
          dropdownRef.current?.hide();
        }}
      >
        <div className="currency-flag">
          <img src={currency.flag} alt="" className="w-6 h-6 rounded-full" />
        </div>
        <div className="flex-1">
          <div className="font-semibold">{currency.code}</div>
          <div className="text-sm text-gray-500">{currency.name}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{currency.symbol}</div>
          <div className="text-xs text-gray-400">1 {currency.code}</div>
        </div>
      </div>
    )
  }));

  return (
    <>
      <Button 
        onClick={(e) => dropdownRef.current?.toggle(e)}
        className="currency-selector"
      >
        <img src={selectedCurrency.flag} alt="" className="w-4 h-4" />
        {selectedCurrency.code}
        <i className="pi pi-chevron-down ml-2" />
      </Button>
      <Dropdown
        ref={dropdownRef}
        items={currencyItems}
        width="320px"
        height="300px"
        prefixEle={
          <div className="p-3 border-b bg-gray-50">
            <input
              type="text"
              placeholder="Search currencies..."
              className="w-full p-2 border rounded"
            />
          </div>
        }
      />
    </>
  );
};
```

### Action Menu with Categories

```tsx
const ActionMenu = ({ actions, onAction }) => {
  const menuRef = useRef<DropdownHandler>(null);

  const groupedActions = actions.reduce((groups, action) => {
    const group = action.category || 'General';
    if (!groups[group]) groups[group] = [];
    groups[group].push(action);
    return groups;
  }, {});

  const menuItems = [];
  Object.entries(groupedActions).forEach(([category, categoryActions], groupIndex) => {
    // Add category header
    if (groupIndex > 0) {
      menuItems.push({
        key: `divider-${groupIndex}`,
        children: <div className="border-t my-1" />
      });
    }
    
    menuItems.push({
      key: `header-${category}`,
      children: (
        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {category}
        </div>
      )
    });

    // Add actions in category
    categoryActions.forEach(action => {
      menuItems.push({
        key: action.id,
        children: (
          <div 
            className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer ${
              action.disabled ? 'opacity-50 pointer-events-none' : ''
            } ${action.destructive ? 'text-red-600' : ''}`}
            onClick={() => {
              onAction(action);
              menuRef.current?.hide();
            }}
          >
            <i className={action.icon} />
            <div className="flex-1">
              <div className="font-medium">{action.label}</div>
              {action.description && (
                <div className="text-sm text-gray-500">{action.description}</div>
              )}
            </div>
            {action.shortcut && (
              <div className="text-xs text-gray-400">{action.shortcut}</div>
            )}
          </div>
        )
      });
    });
  });

  return (
    <>
      <Button 
        icon="pi pi-ellipsis-v"
        className="p-button-text"
        onClick={(e) => menuRef.current?.toggle(e)}
      />
      <Dropdown
        ref={menuRef}
        items={menuItems}
        width="280px"
        className="action-menu"
      />
    </>
  );
};
```

### Notification Dropdown

```tsx
const NotificationDropdown = ({ notifications, onMarkAsRead, onMarkAllAsRead }) => {
  const dropdownRef = useRef<DropdownHandler>(null);
  const unreadCount = notifications.filter(n => !n.read).length;

  const notificationItems = notifications.map(notification => ({
    key: notification.id,
    children: (
      <div 
        className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${
          !notification.read ? 'bg-blue-50' : ''
        }`}
        onClick={() => onMarkAsRead(notification.id)}
      >
        <div className="flex items-start gap-3">
          <div className={`w-2 h-2 rounded-full mt-2 ${
            !notification.read ? 'bg-blue-500' : 'bg-transparent'
          }`} />
          <div className="flex-1">
            <div className="font-medium text-sm">{notification.title}</div>
            <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
            <div className="text-xs text-gray-400 mt-2">{notification.timestamp}</div>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <>
      <button 
        className="relative p-2"
        onClick={(e) => dropdownRef.current?.toggle(e)}
      >
        <i className="pi pi-bell text-lg" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
      <Dropdown
        ref={dropdownRef}
        items={notificationItems}
        width="380px"
        height="400px"
        prefixEle={
          <div className="p-3 border-b bg-gray-50 flex items-center justify-between">
            <h3 className="font-semibold">Notifications</h3>
            {unreadCount > 0 && (
              <button 
                className="text-sm text-blue-600 hover:text-blue-800"
                onClick={onMarkAllAsRead}
              >
                Mark all as read
              </button>
            )}
          </div>
        }
        suffixEle={
          <div className="p-3 border-t text-center">
            <button className="text-sm text-gray-600 hover:text-gray-800">
              View all notifications
            </button>
          </div>
        }
      />
    </>
  );
};
```

### Language Selector with Search

```tsx
const LanguageSelector = ({ languages, selectedLanguage, onSelect }) => {
  const dropdownRef = useRef<DropdownHandler>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const languageItems = filteredLanguages.map(language => ({
    key: language.code,
    active: language.code === selectedLanguage.code,
    children: (
      <div 
        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
        onClick={() => {
          onSelect(language);
          dropdownRef.current?.hide();
          setSearchTerm('');
        }}
      >
        <span className="text-lg">{language.flag}</span>
        <div>
          <div className="font-medium">{language.name}</div>
          <div className="text-sm text-gray-500">{language.nativeName}</div>
        </div>
      </div>
    )
  }));

  return (
    <>
      <Button 
        onClick={(e) => dropdownRef.current?.toggle(e)}
        className="language-selector"
      >
        <span className="mr-2">{selectedLanguage.flag}</span>
        {selectedLanguage.code.toUpperCase()}
      </Button>
      <Dropdown
        ref={dropdownRef}
        items={languageItems}
        width="280px"
        height="320px"
        prefixEle={
          <div className="p-3 border-b">
            <input
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        }
        onHide={() => setSearchTerm('')}
      />
    </>
  );
};
```