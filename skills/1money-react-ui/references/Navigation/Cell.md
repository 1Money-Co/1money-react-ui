---
name: Cell
category: Navigation
description: A flexible cell component for building list items, menu options, and interactive elements with optional icons and click handling.
---

# Cell

## 组件概述

A flexible cell component for building list items, menu options, and interactive elements with optional icons and click handling.

### Features

- Configurable prefix and suffix icons
- Active and disabled states
- Built-in click handling
- Icon support from the Icons component
- Customizable styling with SCSS
- Accessible and keyboard-friendly

## 使用场景

### 何时使用
- 页面/模块导航与信息架构展示（Menu/Sidebar/Tab）
- 可点击的列表项/菜单项/设置项展示（Cell）

### 不适用
- 需要承载复杂表单录入（考虑单独页面或 Drawer/Modal）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-deep`
- 圆角（px，源码样式提取）：16
- 高度/最大高度（px，源码样式提取）：48
- padding 数值（px，源码样式提取）：8, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
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

## 示例

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

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Cell } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
