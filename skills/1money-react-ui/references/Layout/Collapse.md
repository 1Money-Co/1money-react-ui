---
name: Collapse
category: Layout
description: A collapsible accordion component built on top of PrimeReact's Accordion with enhanced styling and customization options for organizing content in expandable sections.
---

# Collapse

## 组件概述

A collapsible accordion component built on top of PrimeReact's Accordion with enhanced styling and customization options for organizing content in expandable sections.

### Features

- Multiple collapsible items with unique keys
- Custom expand/collapse icons with chevron animations
- Flexible content structure with support for any React nodes
- Customizable styling for wrapper, items, and content
- Built-in accessibility features from PrimeReact
- Smooth transitions and animations
- Single or multiple active panels support

## 使用场景

### 何时使用
- 需要折叠/展开信息块（FAQ、过滤器、设置项）以节省空间

### 不适用
- 核心内容需要默认可见（避免把主内容藏在折叠里）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 字号（px，源码样式提取）：16, 20
- 行高（px，源码样式提取）：24, 28
- 高度/最大高度（px，源码样式提取）：24
- padding 数值（px，源码样式提取）：16, 24, 28
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| items | Array of collapsible items | ItemProps[] | - |
| wrapperCls | Additional CSS class for the wrapper | string | - |
| itemCls | Additional CSS class for each item | string | - |
| contentCls | Additional CSS class for item content | string | - |
| prefixCls | The classname prefix for component styling | string | "collapse" |

> 其余属性继承 PrimeReact Accordion（如 `multiple`、`activeIndex` 等）。

### Item Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| header | Header content for the accordion tab | ReactNode | - |
| children | Content to display when expanded | ReactNode | - |
| headerTemplate | Custom header template | Function | - |
| disabled | Whether the item is disabled | boolean | false |

## 示例

```tsx
import { Collapse } from '@1money/react-ui';

// Basic collapse
const items = [
  {
    key: 'panel1',
    header: 'What is React?',
    children: <p>React is a JavaScript library for building user interfaces.</p>
  },
  {
    key: 'panel2',
    header: 'Why use TypeScript?',
    children: <p>TypeScript adds static typing to JavaScript for better development experience.</p>
  }
];

<Collapse items={items} />

// Multiple panels can be open
<Collapse items={items} multiple />

// Custom styling
<Collapse
  items={items}
  wrapperCls="custom-collapse"
  itemCls="custom-item"
  contentCls="custom-content"
/>
```

```tsx
const faqItems = [
  {
    key: 'billing',
    header: 'How does billing work?',
    children: (
      <div>
        <p>We bill monthly based on your usage.</p>
        <ul>
          <li>First 1000 transactions are free</li>
          <li>$0.01 per transaction after that</li>
        </ul>
      </div>
    )
  },
  {
    key: 'support',
    header: 'How to contact support?',
    children: (
      <p>Email us at <a href="mailto:support@1money.com">support@1money.com</a></p>
    )
  }
];

<Collapse items={faqItems} />
```

```tsx
const settingsItems = [
  {
    key: 'account',
    header: 'Account Settings',
    children: (
      <div className="settings-form">
        <label>
          Email: <input type="email" defaultValue="user@example.com" />
        </label>
        <label>
          Name: <input type="text" defaultValue="John Doe" />
        </label>
      </div>
    )
  },
  {
    key: 'privacy',
    header: 'Privacy Settings',
    children: (
      <div className="privacy-options">
        <label>
          <input type="checkbox" /> Email notifications
        </label>
        <label>
          <input type="checkbox" /> Data sharing
        </label>
      </div>
    )
  }
];

<Collapse items={settingsItems} multiple />
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Collapse } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
