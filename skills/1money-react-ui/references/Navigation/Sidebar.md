---
name: Sidebar
category: Navigation
description: A collapsible navigation sidebar component built on top of react-pro-sidebar with 1Money branding, featuring hierarchical menu structures, collapsible functionality, and responsive design for application navigation.
---

# Sidebar

## Component Overview

A collapsible navigation sidebar component built on top of react-pro-sidebar with 1Money branding, featuring hierarchical menu structures, collapsible functionality, and responsive design for application navigation.

### Features

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

## Usage Scenarios

### When to use

- Page/Module navigation and information architecture display (Menu/Sidebar/Tab)
- Clickable list items/menu items/settings display (Cell)

### When not to use

- Need to host complex form entry (consider separate page or Drawer/Modal)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-grey-night`, `$color-info-light`, `$color-primary`, `$color-primary-black`, `$color-primary-white`
- Border radius (px, extracted from source style): 8, 12
- Font sizes (px, extracted from source style): 10, 12, 14, 16
- Line heights (px, extracted from source style): 13, 18
- Height/Max-height (px, extracted from source style): 1, 16, 20, 32, 36, 40, 48
- Padding values (px, extracted from source style): 4, 8, 12, 16, 24, 40, 64
- Detailed visual and interaction specifications are based on component source `style/*.scss`; new or adjusted styles should be prioritized for consolidation into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [React Pro Sidebar](https://github.com/azouaoui-med/react-pro-sidebar) (Internal Implementation).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | `string` | - |
| className | Additional CSS classes | `string` | - |
| prefixCls | Component class prefix | `string` | `"sidebar"` |
| headerCls | Header container class | `string` | - |
| bodyCls | Body container class | `string` | - |
| collapseCls | Collapse button class | `string` | - |
| collapsible | Enable collapse | `boolean` | - |
| defaultCollapsed | Initial collapse state | `boolean` | - |
| betaLogo | Show beta flag | `boolean` | - |
| onCollapse | Collapse handler | `(collapsed: boolean) => void` | - |
| onLogoClick | Logo click handler | `() => void` | - |
| menus | Menu items | `(MenuItem \| SimpleMenuItem)[]` | - |
| menuPrefixCls | Menu prefix class | `string` | - |
| menuPrefix | Element above menu | `ReactNode` | - |

> Standard properties: `id`, `className`.

### MenuItem Interface

| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string \| number` |
| label | Display content | `ReactNode` |
| icon | Leading icon | `ReactNode` |
| suffix | Trailing content | `ReactNode` |
| link | Navigation target | `string \| ReactElement` |
| active | Active state | `boolean` |
| disabled | Disabled state | `boolean` |
| hidden | Hidden state | `boolean` |
| children | Sub-menus | `MenuItem[]` |
| defaultOpen | Initial expanded state | `boolean` |
| onClick | Click handler | `(e) => void` |

### SidebarHandlers

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle collapse | `() => void` |
| collapse | Set collapse state | `(v: boolean) => void` |

## Examples

- **Responsive Behavior**: `Sidebar` handles its own width transitions. Do not force external width overrides that conflict with the collapsed/expanded states.
- **Structure**: Ensure `menus` items have unique keys to maintain state correctly across re-renders.

