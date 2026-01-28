---
name: Dropdown
category: DataEntry
description: A versatile dropdown overlay component that displays a list of selectable items positioned relative to trigger elements, built on top of PrimeReact's OverlayPanel with enhanced styling and customization options.
---

# Dropdown

## Component Overview

A versatile dropdown overlay component that displays a list of selectable items positioned relative to trigger elements, built on top of PrimeReact's OverlayPanel with enhanced styling and customization options.

### Features

- Context-aware positioning with collision detection
- Customizable item rendering with React nodes
- Active item state management
- Configurable dimensions (width/height)
- Prefix and suffix element support
- Rich styling customization options
- Imperative API for show/hide control
- Keyboard navigation support
- Accessible ARIA attributes

## Usage Scenarios

### When to use
- User selects from limited options (Single/Multi depending on component capability)
- Need to save page space (dropdown interaction)

### When not to use
- Number of options is very large and requires complex search (consider Autocomplete/Custom Filter)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-dark`, `$color-primary-white`
- Border radius (px, extracted from source style): 2, 12
- Padding values (px, extracted from source style): 4, 8
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact OverlayPanel](https://primereact.org/overlaypanel/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to OverlayPanel | `RefObject<OverlayPanel>` | - |
| items | Dropdown items | `DropdownItem[]` | `[]` |
| renderList | Custom list renderer | `(items: DropdownItem[]) => ReactNode` | - |
| height | Panel height | `CSSProperties['height']` | - |
| width | Panel width | `CSSProperties['width']` | - |
| maxWidth | Max width | `CSSProperties['maxWidth']` | - |
| maxHeight | Max height | `CSSProperties['maxHeight']` | - |
| prefixCls | Component class prefix | `string` | `"dropdown"` |
| wrapperCls | Wrapper class | `string` | - |
| listCls | List items container class | `string` | - |
| itemCls | Item class | `string` | - |
| itemActiveCls | Active item class | `string` | - |
| prefixEle | Element before list | `ReactNode` | - |
| suffixEle | Element after list | `ReactNode` | - |
| refreshAfterShow | Force update on show | `boolean` | - |

> Common inherited props: `appendTo`, `dismissable`, `showCloseIcon`, `closeOnEscape`, `onShow`, `onHide`.

### DropdownItem Interface
| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string` |
| active | Active/Highlighted state | `boolean` |
| children | Item content | `ReactNode` |

### Ref API (DropdownHandler)

| Method | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle visibility | `(event) => void` |
| show | Show overlay | `(event, target?) => void` |
| hide | Hide overlay | `() => void` |

## Examples

```tsx
import { Dropdown } from '@1money/react-ui';

// 1. Basic List Dropdown
const MyComponent = () => {
    const ref = useRef(null);
    const items = [
        { key: '1', children: 'Option 1' },
        { key: '2', children: 'Option 2', active: true }
    ];

    return (
        <>
            <Button onClick={(e) => ref.current.toggle(e)} label="Options" />
            <Dropdown ref={ref} items={items} />
        </>
    );
};

// 2. Custom Content (Header/Footer)
<Dropdown
    ref={ref}
    items={items}
    prefixEle={<div className="p-2 font-bold">Select Item</div>}
    suffixEle={<Button label="Add New" className="w-full"/>}
/>
```

## Examples

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

## Core Principles

- **Controller Pattern**: **MUST** use `ref.current.toggle(event)` to show the dropdown. This is an imperative component, not state-driven (`visible` prop).
- **Positioning**: Always pass the event object or target element to `toggle`/`show` to ensure correct relative positioning.
- **Content**: Use `items` for standard lists. Use `children` only for custom complex content.

