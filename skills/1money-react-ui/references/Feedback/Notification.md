---
name: Notification
category: Feedback
description: A notification component that displays inline status messages with custom icons and styling. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.
source: src/components/Notification
---

# Notification

## 组件概述

A notification component that displays inline status messages with custom icons and styling. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.

### Features

- Four severity levels with custom icons (success, info, warn, error)
- Inline display with content wrapping
- Clickable interaction support
- Custom content support through children
- Accessibility-friendly design
- Customizable styling and theming

## 使用场景

### 何时使用
- 给用户反馈（成功/失败/告警/信息），不打断主流程（Toast/Notification）
- 表单或区域内的状态提示（Message）
- 对图标/按钮提供补充说明（Tooltip）

### 不适用
- 必须用户确认才能继续（考虑 Modal/ConfirmPopup）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey-light`, `$color-grey-midnight`, `$color-grey-night`, `$color-info-light`, `$color-negative-background`, `$color-success-background`, `$color-warning-background`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：14
- padding 数值（px，源码样式提取）：8, 12
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | Notification content | ReactNode | - |
| severity | Notification severity level | 'success' \| 'info' \| 'warn' \| 'error' | 'info' |
| className | Additional CSS class for styling | string | - |
| prefixCls | The classname prefix for component styling | string | 'notification' |
| onClick | Click event handler for interactive notifications | MouseEventHandler<HTMLDivElement> | - |
| id | HTML id attribute | string | - |
| title | Notification title (currently not rendered by component) | ReactNode | - |
| description | Notification description (currently not rendered by component) | ReactNode | - |

> 当前组件以 `children` 为主渲染内容，`title/description` 仅作为接口预留，业务侧请自行组合内容结构。

## 示例

```tsx
import { Notification } from '@1money/react-ui';

// Basic notification
<Notification severity="info">
  Your account verification is in progress.
</Notification>

// Success notification
<Notification severity="success">
  Payment completed successfully!
</Notification>

// Warning notification
<Notification severity="warn">
  Your session will expire in 5 minutes.
</Notification>

// Error notification
<Notification severity="error">
  Unable to process payment. Please try again.
</Notification>

// Clickable notification
<Notification 
  severity="info"
  onClick={() => console.log('Notification clicked')}
>
  Click here to view transaction details.
</Notification>
```

```tsx
const AccountNotifications = ({ user }) => {
  return (
    <div className="notifications-container">
      {!user.isVerified && (
        <Notification severity="warn">
          Please verify your email address to access all features.
        </Notification>
      )}
      
      {user.hasUnreadMessages && (
        <Notification 
          severity="info"
          onClick={() => navigateToMessages()}
        >
          You have {user.unreadCount} unread messages.
        </Notification>
      )}
      
      {user.subscription?.isExpiring && (
        <Notification severity="warn">
          Your subscription expires in {user.subscription.daysLeft} days.
        </Notification>
      )}
    </div>
  );
};
```

```tsx
const TransactionStatus = ({ transaction }) => {
  const getSeverity = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'info';
      case 'failed': return 'error';
      case 'cancelled': return 'warn';
      default: return 'info';
    }
  };

  const getMessage = (status) => {
    switch (status) {
      case 'completed': return 'Transaction completed successfully';
      case 'pending': return 'Transaction is being processed';
      case 'failed': return 'Transaction failed. Please try again';
      case 'cancelled': return 'Transaction was cancelled';
      default: return 'Unknown transaction status';
    }
  };

  return (
    <Notification severity={getSeverity(transaction.status)}>
      {getMessage(transaction.status)}
    </Notification>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Notification } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
