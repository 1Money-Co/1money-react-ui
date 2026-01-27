---
name: Dropdown
category: DataEntry
description: A versatile dropdown overlay component that displays a list of selectable items positioned relative to trigger elements, built on top of PrimeReact's OverlayPanel with enhanced styling and customization options.
---

# Dropdown

## 组件概述

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

## 使用场景

### 何时使用
- 用户从有限选项中选择（单选/多选视组件能力而定）
- 需要节省页面空间（下拉交互）

### 不适用
- 选项数量非常大且需要复杂搜索（考虑 Autocomplete/自定义筛选）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-dark`, `$color-primary-white`
- 圆角（px，源码样式提取）：2, 12
- padding 数值（px，源码样式提取）：4, 8
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to OverlayPanel methods | RefObject<OverlayPanel> | - |
| items | Array of dropdown items to display | DropdownItem[] | [] |
| renderList | Custom render function for items | (items: DropdownItem[]) => ReactNode | - |
| width | Fixed width for the dropdown | CSSProperties['width'] | 'auto' |
| height | Fixed height for the dropdown | CSSProperties['height'] | 'auto' |
| maxWidth | Max width for the dropdown | CSSProperties['maxWidth'] | - |
| maxHeight | Max height for the dropdown | CSSProperties['maxHeight'] | - |
| prefixCls | The classname prefix for component styling | string | "dropdown" |
| className | Additional CSS classes for the overlay | string | - |
| wrapperCls | CSS classes for the wrapper element | string | - |
| listCls | CSS classes for the list element | string | - |
| itemCls | CSS classes for list items | string | - |
| itemActiveCls | CSS classes for active list items | string | - |
| prefixEle | Element to display before the list | ReactNode | - |
| suffixEle | Element to display after the list | ReactNode | - |
| refreshAfterShow | Recompute position after show | boolean | false |

### DropdownItem Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| active | Whether the item is in active state | boolean | false |
| children | Content to render inside the item | ReactNode | - |

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

### DropdownHandler Methods
| Method | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle overlay visibility | (event: React.SyntheticEvent) => void |
| show | Show the overlay | (event: React.SyntheticEvent, target?: HTMLElement) => void |
| hide | Hide the overlay | () => void |

## 示例

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

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Dropdown } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
