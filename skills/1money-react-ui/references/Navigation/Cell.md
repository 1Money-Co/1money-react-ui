---
name: Cell
category: Navigation
description: A flexible cell component for building list items, menu options, and interactive elements with optional icons and click handling.
---

# Cell

## Component Overview

A flexible cell component for building list items, menu options, and interactive elements with optional icons and click handling.

### Features

- Configurable prefix and suffix icons
- Active and disabled states
- Built-in click handling
- Icon support from the Icons component
- Customizable styling with SCSS
- Accessible and keyboard-friendly

## Usage Scenarios

### When to use
- Page/Module navigation and information architecture display (Menu/Sidebar/Tab)
- Clickable list items/menu items/settings display (Cell)

### When not to use
- Need to host complex form entry (consider separate page or Drawer/Modal)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-deep`
- Border radius (px, extracted from source style): 16
- Height/Max-height (px, extracted from source style): 48
- Padding values (px, extracted from source style): 8, 16
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Component).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | `string` | - |
| prefixCls | Component class prefix | `string` | `"cell"` |
| active | Active state | `boolean` | - |
| disabled | Disabled state | `boolean` | - |
| className | Additional CSS classes | `string` | - |
| prefixIcon | Leading icon | `IconName \| ReactNode` | - |
| title | Main title text | `string` | - |
| suffixIcon | Trailing icon | `IconName \| ReactNode` | - |
| onClick | Click handler | `(e: MouseEvent<HTMLDivElement>) => void` | - |

## Examples

```tsx
import { Cell } from '@1money/react-ui';

// 1. Basic Link Cell
<Cell
    title="User Profile"
    prefixIcon="user"
    suffixIcon="chevron-right"
    onClick={() => navigate('/profile')}
/>

// 2. Active State
<Cell
    title="Selected Option"
    active
    prefixIcon="check"
/>

// 3. Custom Icon Nodes
<Cell
    title="Notifications"
    suffixIcon={<Badge value="3" />}
/>
```

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

## Core Principles

- **Usage Scope**: Use `Cell` for interactive list items (like settings, navigation menus). Do not use it for complex data grid rows (use `Table` instead) or static layout (use `Flex`/Grid).
- **Semantics**: If the cell acts as a link, consider wrapping or ensuring accessible `onClick` handling.
- **Consistency**: Use `prefixIcon` for meaningful identifiers (user avatar, action icon) and `suffixIcon` for state (chevron, checkmark, badge).

