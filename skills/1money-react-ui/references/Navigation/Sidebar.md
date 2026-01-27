---
name: Sidebar
category: Navigation
description: A collapsible navigation sidebar component built on top of react-pro-sidebar with 1Money branding, featuring hierarchical menu structures, collapsible functionality, and responsive design for application navigation.
---

# Sidebar

## 组件概述

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

## 使用场景

### 何时使用
- 页面/模块导航与信息架构展示（Menu/Sidebar/Tab）
- 可点击的列表项/菜单项/设置项展示（Cell）

### 不适用
- 需要承载复杂表单录入（考虑单独页面或 Drawer/Modal）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-grey-night`, `$color-info-light`, `$color-primary`, `$color-primary-black`, `$color-primary-white`
- 圆角（px，源码样式提取）：8, 12
- 字号（px，源码样式提取）：10, 12, 14, 16
- 行高（px，源码样式提取）：13, 18
- 高度/最大高度（px，源码样式提取）：1, 16, 20, 32, 36, 40, 48
- padding 数值（px，源码样式提取）：4, 8, 12, 16, 24, 40, 64
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the sidebar | string | - |
| className | Additional CSS class for the sidebar | string | - |
| prefixCls | The classname prefix for component styling | string | "sidebar" |
| headerCls | Additional CSS class for the header section | string | - |
| bodyCls | Additional CSS class for the menu body | string | - |
| collapseCls | Additional CSS class for the collapse button | string | - |
| collapsible | Whether the sidebar can be collapsed | boolean | false |
| defaultCollapsed | Initial collapsed state | boolean | false |
| betaLogo | Whether to show beta logo variant | boolean | false |
| onCollapse | Callback when collapse state changes | (collapsed: boolean) => void | - |
| onLogoClick | Callback when logo is clicked | () => void | - |
| menus | Array of menu items to display | MenuItem[] | [] |
| menuPrefixCls | Additional CSS class for menu prefix | string | - |
| menuPrefix | Content rendered above menu list | ReactNode | - |

### MenuItem Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the menu item | string \| number | - |
| label | Display text for the menu item | ReactNode | - |
| icon | Icon to display before the label | ReactNode | - |
| suffix | Content to display after the label | ReactNode | - |
| link | Link component or URL string | string \| ReactElement | - |
| active | Whether the menu item is active | boolean | false |
| disabled | Whether the menu item is disabled | boolean | false |
| hidden | Whether the menu item is hidden | boolean | false |
| defaultOpen | Whether submenu is open by default | boolean | false |
| onOpenChange | Callback when submenu open state changes | (open: boolean) => void | - |
| onClick | Click handler for the menu item | (e: MouseEvent<HTMLAnchorElement>) => void | - |
| children | Array of child menu items | Omit<MenuItem, 'children'>[] | - |

> `hidden` 当前仅在 `SimplySidebar` 中生效；`Sidebar` 渲染时会忽略该字段。

### Ref API (SidebarHandlers)
| Method | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle the collapsed state | - |
| collapse | Set the collapsed state | collapsed: boolean |

## 示例

```tsx
import { Sidebar } from '@1money/react-ui';

// Basic sidebar
const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
    active: true
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <TransactionIcon />,
    link: '/transactions'
  }
];

<Sidebar menus={menuItems} />

// Collapsible sidebar
<Sidebar
  menus={menuItems}
  collapsible
  defaultCollapsed={false}
  onCollapse={(collapsed) => console.log('Collapsed:', collapsed)}
/>

// With hierarchical menus
const hierarchicalMenus = [
  {
    key: 'reports',
    label: 'Reports',
    icon: <ReportsIcon />,
    children: [
      { key: 'monthly', label: 'Monthly Reports', link: '/reports/monthly' },
      { key: 'yearly', label: 'Yearly Reports', link: '/reports/yearly' }
    ]
  }
];

<Sidebar menus={hierarchicalMenus} />
```

```tsx
const navigationMenus = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <i className="pi pi-home" />,
    link: '/dashboard',
    active: true
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <i className="pi pi-credit-card" />,
    link: '/transactions'
  },
  {
    key: 'accounts',
    label: 'Accounts',
    icon: <i className="pi pi-wallet" />,
    link: '/accounts'
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <i className="pi pi-cog" />,
    link: '/settings'
  }
];

<Sidebar
  menus={navigationMenus}
  collapsible
  onLogoClick={() => navigate('/')}
/>
```

```tsx
const hierarchicalMenus = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <i className="pi pi-home" />,
    link: '/dashboard'
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <i className="pi pi-credit-card" />,
    defaultOpen: true,
    children: [
      { key: 'all-transactions', label: 'All Transactions', link: '/transactions' },
      { key: 'income', label: 'Income', link: '/transactions/income' },
      { key: 'expenses', label: 'Expenses', link: '/transactions/expenses' },
      { key: 'transfers', label: 'Transfers', link: '/transactions/transfers' }
    ]
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: <i className="pi pi-chart-bar" />,
    children: [
      { key: 'monthly', label: 'Monthly Reports', link: '/reports/monthly' },
      { key: 'yearly', label: 'Yearly Reports', link: '/reports/yearly' },
      { key: 'custom', label: 'Custom Reports', link: '/reports/custom' }
    ]
  },
  {
    key: 'admin',
    label: 'Administration',
    icon: <i className="pi pi-users" />,
    children: [
      { key: 'users', label: 'User Management', link: '/admin/users' },
      { key: 'roles', label: 'Roles & Permissions', link: '/admin/roles', disabled: true },
      { key: 'audit', label: 'Audit Logs', link: '/admin/audit' }
    ]
  }
];

<Sidebar menus={hierarchicalMenus} collapsible />
```

## SimplySidebar

`SimplySidebar` 适用于更轻量的分组菜单，使用同一套 `SidebarProps`，但不支持折叠能力（`collapsible/defaultCollapsed/collapseCls/onCollapse` 与 `menuPrefix/menuPrefixCls` 会被忽略）。

```tsx
import { SimplySidebar } from '@1money/react-ui';

<SimplySidebar menus={navigationMenus} />
```

## Stepper

### Stepper Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | string | - |
| className | Additional CSS class | string | - |
| prefixCls | The classname prefix for component styling | string | "stepper" |
| logoCls | Additional CSS class for logo | string | - |
| headerCls | Additional CSS class for header | string | - |
| bodyCls | Additional CSS class for body | string | - |
| footerCls | Additional CSS class for footer | string | - |
| betaLogo | Whether to show beta logo variant | boolean | false |
| onLogoClick | Callback when logo is clicked | () => void | - |
| steps | Step list | Step[] | - |
| footer | Footer content | ReactNode | - |

### Step Interface
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | string | - |
| label | Step label | ReactNode | - |
| status | Step status | 'todo' \| 'active' \| 'done' \| 'done-active' | - |
| disabled | Whether the step is disabled | boolean | false |
| onClick | Click handler | (step: Step) => void | - |

```tsx
import { Stepper } from '@1money/react-ui';

const steps = [
  { key: 'a', label: 'Profile', status: 'done' },
  { key: 'b', label: 'Verification', status: 'active' },
  { key: 'c', label: 'Complete', status: 'todo' }
];

<Stepper steps={steps} />
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Sidebar } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
