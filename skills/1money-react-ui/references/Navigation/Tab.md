---
name: Tab
category: Navigation
description: A tabbed navigation component built on top of PrimeReact's TabMenu with enhanced styling and support for tab counts, custom templates, and multiple visual styles for organizing content in horizontal tabs.
---

# Tab

## Component Overview

A tabbed navigation component built on top of PrimeReact's TabMenu with enhanced styling and support for tab counts, custom templates, and multiple visual styles for organizing content in horizontal tabs.

### Features

- Multiple tab items with custom labels and icons
- Support for tab counts/badges
- Two visual styles: default and segment
- Custom tab templates with flexible content
- Active tab state management
- Click handlers for tab interactions
- Keyboard navigation support
- Responsive design with overflow handling
- Built-in accessibility features

## Usage Scenarios

### When to use
- Page/Module navigation and information architecture display (Menu/Sidebar/Tab)
- Clickable list items/menu items/settings display (Cell)

### When not to use
- Need to host complex form entry (consider separate page or Drawer/Modal)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-primary-black`, `$color-white`
- Border radius (px, extracted from source style): 12, 40
- Font size (px, extracted from source style): 12, 16
- Height/Max-height (px, extracted from source style): 2, 24, 36, 53
- padding 数值（px，源码样式提取）：4, 7, 8, 9, 10, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact TabMenu](https://primereact.org/tabmenu/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Container class | `string` | - |
| prefixCls | Component class prefix | `string` | `"tab"` |
| lableClassName | Label class | `string` | - |
| model | Tab items list | `(TabMenuItem & { count?: number })[]` | - |
| type | Visual variant | `'default' \| 'segment'` | - |

> Common inherited props: `activeIndex`, `onTabChange`, `style`.

### TabMenuItem Interface
Inherits from PrimeReact `MenuItem`.

| Name | Description | Type |
| --- | --- | --- |
| label | Tab label | `ReactNode` |
| icon | Tab icon | `ReactNode` |
| count | Badge count | `number` |
| disabled | Disabled state | `boolean` |
| command | Click handler | `(e) => void` |

## Examples

```tsx
import { Tab } from '@1money/react-ui';
import { useState } from 'react';

// Basic tabs with counts
const tabItems = [
  { label: 'All', count: 12 },
  { label: 'Pending', count: 4, icon: <i className="pi pi-clock"/> },
  { label: 'Completed', count: 8, icon: <i className="pi pi-check"/> }
];

const MyTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Tab
            model={tabItems}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
        />
    );
};

// Segmented Style
<Tab model={tabItems} type="segment" />
```

## Core Principles

- **Variant Usage**: Use `type="default"` for main page distinct views. Use `type="segment"` for filtering lists or toggling view modes within a page.
- **State Control**: Always treat as a controlled component (`activeIndex` + `onTabChange`).
- **Data Model**: Use the `model` prop for tabs definition. Ensure labels are concise; use icons sparingly to avoid clutter.

