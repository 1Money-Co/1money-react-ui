---
name: Menu
category: Navigation
description: A versatile menu component built on top of PrimeReact's Menu with enhanced styling and support for different menu types including standard menus and selectors for dropdown navigation, context menus, and item selection.
---

# Menu

## Component Overview

A versatile menu component built on top of PrimeReact's Menu with enhanced styling and support for different menu types including standard menus and selectors for dropdown navigation, context menus, and item selection.

### Features

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

## Usage Scenarios

### When to use

- Page/Module navigation and information architecture display (Menu/Sidebar/Tab)
- Clickable list items/menu items/settings display (Cell)

### When not to use

- Need to host complex form entry (consider separate page or Drawer/Modal)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-light`, `$color-primary-black`, `$color-primary-white`
- Border radius (px, extracted from source style): 12, 16
- Font size (px, extracted from source style): 16
- Padding values (px, extracted from source style): 8, 12, 16
- For detailed visual and interaction specifications, refer to the component source code `style/*.scss`. New or adjusted styles should be consolidated into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact Menu](https://primereact.org/menu/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS classes | `string` | - |
| prefixCls | Component class prefix | `string` | `"menu"` |
| type | Visual variant | `'menu' \| 'selector'` | - |

> Common inherited props: `model`, `popup`, `onShow`, `onHide`, `id`.

### MenuItem Interface

Inherits from PrimeReact `MenuItem`.

| Name | Description | Type |
| --- | --- | --- |
| label | Display text | `string \| ReactNode` |
| icon | Icon element/class | `string \| ReactNode` |
| command | Click handler | `(e) => void` |
| disabled | Disabled state | `boolean` |
| items | Sub-menus | `MenuItem[]` |
| separator | Is separator? | `boolean` |

### Ref API

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle visibility | `(event) => void` |
| show | Show popup | `(event) => void` |
| hide | Hide popup | `() => void` |

## Examples

```tsx
import { Menu } from '@1money/react-ui';
import { useRef } from 'react';

// 1. Static Inline Menu
const simpleItems = [
  { label: 'Profile', icon: 'pi pi-user' },
  { label: 'Settings', icon: 'pi pi-cog' }
];

<Menu model={simpleItems} />

// 2. Popup Menu (controlled via Ref)
const MyComponent = () => {
    const menuRef = useRef(null);

    const items = [
        { label: 'Edit', command: () => console.log('Edit') },
        { separator: true },
        { label: 'Delete', className: 'text-red-500' }
    ];

    return (
        <>
            <button onClick={(e) => menuRef.current.toggle(e)}>Options</button>
            <Menu model={items} popup ref={menuRef} />
        </>
    );
};

// 3. Selector Variant (Dropdown-like)
<Menu model={items} type="selector" />
```

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

## Core Principles

- **Mode Selection**: Use `popup={true}` with a `ref` for context menus or dropdown triggers. Use default (inline) for sidebars or static lists.
- **Model-Driven**: **MUST** define menu items via the `model` prop array. Avoid manually rendering children unless the component specifically supports smooth composition (which PrimeReact wrappers often don't).
- **Type Safety**: Strictly adhere to the `MenuItem` interface for the model to ensure commands and icons render correctly.
