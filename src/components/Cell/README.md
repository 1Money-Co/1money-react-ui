# Cell

A flexible cell component for building list items, menu options, and interactive elements with optional icons and click handling.

## Features

- Configurable prefix and suffix icons
- Active and disabled states
- Built-in click handling
- Icon support from the Icons component
- Customizable styling with SCSS
- Accessible and keyboard-friendly

## Basic Usage

```tsx
import { Cell } from '@1money/react-ui';

// Basic cell
<Cell title="Basic Cell" />

// With icons
<Cell 
  prefixIcon="user" 
  title="User Profile" 
  suffixIcon="chevron-right" 
/>

// Interactive cell
<Cell 
  title="Settings" 
  onClick={() => navigate('/settings')} 
/>

// Active state
<Cell title="Selected Item" active />

// Disabled state
<Cell title="Disabled Item" disabled />
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the cell | string | - |
| prefixCls | The classname prefix for component styling | string | "cell" |
| active | Whether the cell is in an active/selected state | boolean | false |
| disabled | Whether the cell is disabled | boolean | false |
| className | Additional CSS classes | string | - |
| prefixIcon | Icon to display before the title | IconName \| ReactNode | - |
| title | Main text content of the cell | string | - |
| suffixIcon | Icon to display after the title | IconName \| ReactNode | - |
| onClick | Click handler for the cell | (e: MouseEvent<HTMLDivElement>) => void | - |

## Styling

The Cell component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional styles
2. Overriding the `prefixCls` for complete style control
3. Targeting specific states (active, disabled) in your CSS

## Accessibility

- Proper semantic structure
- Keyboard navigation support when clickable
- Visual states for active and disabled
- Screen reader friendly

## Examples

### Navigation Menu
```tsx
const menuItems = [
  { id: 'profile', title: 'Profile', icon: 'user' },
  { id: 'settings', title: 'Settings', icon: 'settings' },
  { id: 'logout', title: 'Logout', icon: 'sign-out' }
];

{menuItems.map(item => (
  <Cell
    key={item.id}
    title={item.title}
    prefixIcon={item.icon}
    suffixIcon="chevron-right"
    onClick={() => handleNavigation(item.id)}
  />
))}
```

### Selectable List
```tsx
const [selectedItem, setSelectedItem] = useState('item1');

<Cell 
  title="Option 1" 
  active={selectedItem === 'item1'}
  onClick={() => setSelectedItem('item1')} 
/>
<Cell 
  title="Option 2" 
  active={selectedItem === 'item2'}
  onClick={() => setSelectedItem('item2')} 
/>
```

### With Custom Icons
```tsx
<Cell 
  prefixIcon={<CustomIcon />}
  title="Custom Content"
  suffixIcon={<Badge count={5} />}
/>
```