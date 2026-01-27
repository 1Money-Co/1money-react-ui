---
name: Tab
category: Navigation
description: A tabbed navigation component built on top of PrimeReact's TabMenu with enhanced styling and support for tab counts, custom templates, and multiple visual styles for organizing content in horizontal tabs.
---

# Tab

## 组件概述

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

## 使用场景

### 何时使用
- 页面/模块导航与信息架构展示（Menu/Sidebar/Tab）
- 可点击的列表项/菜单项/设置项展示（Cell）

### 不适用
- 需要承载复杂表单录入（考虑单独页面或 Drawer/Modal）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-primary-black`, `$color-white`
- 圆角（px，源码样式提取）：12, 40
- 字号（px，源码样式提取）：12, 16
- 高度/最大高度（px，源码样式提取）：2, 24, 36, 53
- padding 数值（px，源码样式提取）：4, 7, 8, 9, 10, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the tab container | string | - |
| prefixCls | The classname prefix for component styling | string | "tab" |
| lableClassName | Additional CSS class for each tab item (note: prop name is `lableClassName`) | string | - |
| model | Array of tab items to display | TabMenuItem[] | - |
| type | Visual style variant | 'default' \| 'segment' | 'default' |

### TabMenuItem Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Display text for the tab | ReactNode | - |
| icon | Icon to display in the tab | ReactNode | - |
| count | Badge count to display (custom property) | number | - |
| command | Callback when tab is clicked | (event: MenuItemCommandEvent) => void | - |
| url | URL for navigation | string | - |
| items | Submenu items (inherited from PrimeReact) | MenuItem[] | - |
| disabled | Whether the tab is disabled | boolean | false |
| visible | Whether the tab is visible | boolean | true |
| target | Link target attribute | string | - |
| separator | Whether item is a separator | boolean | false |
| style | Inline styles for the tab | CSSProperties | - |
| className | CSS class for the tab item | string | - |

## 示例

```tsx
import { Tab } from '@1money/react-ui';

// Basic tabs
const tabItems = [
  { label: 'Dashboard', icon: <i className="pi pi-home" /> },
  { label: 'Profile', icon: <i className="pi pi-user" /> },
  { label: 'Settings', icon: <i className="pi pi-cog" /> }
];

<Tab model={tabItems} />

// Tabs with counts
const tabsWithCounts = [
  { label: 'All Transactions', count: 45 },
  { label: 'Pending', count: 3 },
  { label: 'Completed', count: 42 }
];

<Tab model={tabsWithCounts} />

// Segment style tabs
<Tab
  model={tabItems}
  type="segment"
  activeIndex={0}
  onTabChange={(e) => setActiveTab(e.index)}
/>
```

```tsx
const [activeTab, setActiveTab] = useState(0);

const navigationTabs = [
  {
    label: 'Overview',
    icon: <i className="pi pi-chart-line" />,
    command: () => setActiveContent('overview')
  },
  {
    label: 'Analytics',
    icon: <i className="pi pi-chart-bar" />,
    command: () => setActiveContent('analytics')
  },
  {
    label: 'Reports',
    icon: <i className="pi pi-file-pdf" />,
    command: () => setActiveContent('reports')
  },
  {
    label: 'Settings',
    icon: <i className="pi pi-cog" />,
    command: () => setActiveContent('settings')
  }
];

<Tab
  model={navigationTabs}
  activeIndex={activeTab}
  onTabChange={(e) => setActiveTab(e.index)}
/>
```

```tsx
const tabsWithCounts = [
  {
    label: 'All Items',
    count: 156,
    command: () => showAllItems()
  },
  {
    label: 'Active',
    count: 23,
    command: () => showActiveItems()
  },
  {
    label: 'Pending Review',
    count: 8,
    command: () => showPendingItems()
  },
  {
    label: 'Archived',
    count: 125,
    command: () => showArchivedItems()
  }
];

<Tab model={tabsWithCounts} />
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Tab } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
