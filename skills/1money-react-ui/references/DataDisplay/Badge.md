---
name: Badge
category: DataDisplay
description: A versatile badge component built on top of PrimeReact's Badge with enhanced severity variants and custom styling. Perfect for displaying status indicators, labels, counts, and other contextual information.
---

# Badge

## 组件概述

A versatile badge component built on top of PrimeReact's Badge with enhanced severity variants and custom styling. Perfect for displaying status indicators, labels, counts, and other contextual information.

### Features

- Multiple severity variants including custom 1Money styles
- Built on PrimeReact Badge for robust functionality
- Flexible content support (text, numbers, icons)
- Overlay positioning for notifications and counters
- Custom styling and theming support
- Consistent color system with semantic meanings
- Full TypeScript support

## 使用场景

### 何时使用
- 展示数量/状态标记（未读数、标签、状态点等）

### 不适用
- 需要可交互筛选（考虑 Tag/Filter 组件，如果存在）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-deep`, `$color-grey-midnight`, `$color-info`, `$color-info-light`, `$color-negative`, `$color-negative-background`, `$color-primary-black`, `$color-success`, `$color-success-background`, `$color-warning-background`, `$color-warning-dark`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：12
- 高度/最大高度（px，源码样式提取）：24
- padding 数值（px，源码样式提取）：8
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the badge | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "badge" |
| severity | Badge color variant | 'neutral' \| 'recommend' \| 'warning' \| 'negative' \| 'black' \| 'success' \| PrimeBadgeProps['severity'] | 'neutral' |

### Inherited Props（PrimeReact Badge）

该组件继承 PrimeReact Badge 的全部 props（除 `severity` 被重写扩展）。常用包括：

- `value?: any` - Badge 内容
- `size?: 'normal' | 'large' | 'xlarge'` - 尺寸
- `style?: CSSProperties` - 行内样式
- `children?: ReactNode` - 子节点（用于 overlay 场景）
- `pt?: BadgePassThroughOptions` - passthrough
- `ptOptions?: PassThroughOptions` - passthrough 配置
- `unstyled?: boolean` - 禁用 PrimeReact 默认样式
- 以及所有 `HTMLSpanElement` 的原生属性

## 示例

```tsx
import { Badge } from '@1money/react-ui';

// Basic badges with different severities
<Badge severity="success" value="Active" />
<Badge severity="warning" value="Pending" />
<Badge severity="negative" value="Failed" />
<Badge severity="neutral" value="Draft" />

// Badge with custom content
<Badge severity="recommend" value="New Feature" />

// Badge as overlay notification
<div style={{ position: 'relative', display: 'inline-block' }}>
  <button>Messages</button>
  <Badge value="3" severity="negative" />
</div>
```

```tsx
const orderStatus = 'completed';

const getStatusBadge = (status) => {
  const statusMap = {
    pending: { severity: 'warning', label: 'Pending' },
    processing: { severity: 'recommend', label: 'Processing' },
    completed: { severity: 'success', label: 'Completed' },
    failed: { severity: 'negative', label: 'Failed' },
    cancelled: { severity: 'neutral', label: 'Cancelled' },
  };

  const { severity, label } = statusMap[status] || statusMap.neutral;
  return <Badge severity={severity} value={label} />;
};

<div className="order-card">
  <h3>Order #12345</h3>
  {getStatusBadge(orderStatus)}
</div>
```

```tsx
const notifications = 5;
const messages = 12;

<div className="nav-menu">
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <button className="nav-button">
      Notifications
    </button>
    {notifications > 0 && (
      <Badge
        value={notifications > 99 ? '99+' : notifications.toString()}
        severity="negative"
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          minWidth: '20px',
          height: '20px',
        }}
      />
    )}
  </div>

  <div style={{ position: 'relative', display: 'inline-block', marginLeft: '16px' }}>
    <button className="nav-button">
      Messages
    </button>
    {messages > 0 && (
      <Badge
        value={messages}
        severity="recommend"
        size="large"
      />
    )}
  </div>
</div>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Badge } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
