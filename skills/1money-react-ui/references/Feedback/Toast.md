---
name: Toast
category: Feedback
description: A toast notification system built on top of PrimeReact's Toast with enhanced styling and automatic message formatting. Toast notifications are non-blocking messages that appear temporarily to provide feedback about user actions or system status.
source: src/components/Toast
---

# Toast

## 组件概述

A toast notification system built on top of PrimeReact's Toast with enhanced styling and automatic message formatting. Toast notifications are non-blocking messages that appear temporarily to provide feedback about user actions or system status.

### Features

- Four severity levels with custom icons and styling (success, info, warn, error)
- Automatic message formatting with icons and typography
- Custom close icons
- Configurable display duration
- Stack multiple messages
- Built-in accessibility features
- Programmatic control via ref methods

## 使用场景

### 何时使用
- 给用户反馈（成功/失败/告警/信息），不打断主流程（Toast/Notification）
- 表单或区域内的状态提示（Message）
- 对图标/按钮提供补充说明（Tooltip）

### 不适用
- 必须用户确认才能继续（考虑 Modal/ConfirmPopup）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey-light`, `$color-grey-night`
- 圆角（px，源码样式提取）：16
- 高度/最大高度（px，源码样式提取）：20
- padding 数值（px，源码样式提取）：2, 8, 12
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | 'toast' |
| ref | Reference to access toast methods | RefObject<ToastClass> | - |

> 其余属性继承 PrimeReact Toast（如 `position`、`baseZIndex` 等）。

### Toast Methods
| Method | Description | Parameters |
| --- | --- | --- |
| show | Display one or more toast messages | message: ToastMessage \| ToastMessage[] |
| clear | Clear all displayed messages | - |
| remove | Remove specific messages | message: ToastMessage \| ToastMessage[] |
| replace | Replace existing messages | message: ToastMessage \| ToastMessage[] |
| getElement | Get the toast DOM element | - |

### ToastMessage Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| severity | Message severity level | 'success' \| 'info' \| 'warn' \| 'error' | - |
| summary | Message title/header | string | - |
| detail | Message content/description | string | - |
| life | Display duration in milliseconds | number | 5000 |
| closable | Whether message can be closed | boolean | true |
| sticky | Whether message persists until manually closed | boolean | false |
| content | Custom content component (overrides default formatting) | ReactNode | - |
| closeIcon | Custom close icon | ReactNode | - |

## 示例

```tsx
import { Toast } from '@1money/react-ui';
import { useRef } from 'react';

// Basic setup
const toast = useRef<ToastClass>(null);

<Toast ref={toast} />

// Show a simple success message
const showSuccess = () => {
  toast.current?.show({
    severity: 'success',
    summary: 'Success',
    detail: 'Operation completed successfully',
    life: 3000
  });
};

// Show multiple messages
const showMultiple = () => {
  toast.current?.show([
    {
      severity: 'success',
      summary: 'Payment Successful',
      detail: 'You successfully topped up $1000 USD',
    },
    {
      severity: 'info', 
      summary: 'Account Linked',
      detail: 'You can now manage multiple accounts in one place',
    }
  ]);
};
```

```tsx
const TransactionToasts = () => {
  const toast = useRef<ToastClass>(null);

  const showTopUp = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'Top-up Successful',
      detail: 'You successfully added $500.00 to your account',
      life: 4000
    });
  };

  const showPaymentFailure = () => {
    toast.current?.show({
      severity: 'error',
      summary: 'Payment Failed',
      detail: 'Insufficient funds. Please add money to your account',
      life: 6000
    });
  };

  return (
    <>
      <Button onClick={showTopUp}>Complete Top-up</Button>
      <Button onClick={showPaymentFailure}>Simulate Error</Button>
      <Toast ref={toast} position="top-right" />
    </>
  );
};
```

```tsx
const SystemNotifications = () => {
  const toast = useRef<ToastClass>(null);

  const showMaintenanceWarning = () => {
    toast.current?.show({
      severity: 'warn',
      summary: 'Scheduled Maintenance',
      detail: 'System will be unavailable on Sunday from 2-4 AM EST',
      life: 8000,
      sticky: true
    });
  };

  const showFeatureInfo = () => {
    toast.current?.show({
      severity: 'info',
      summary: 'New Feature Available',
      detail: 'Try our new expense categorization tool in Settings',
      life: 5000
    });
  };

  return (
    <>
      <Toast ref={toast} position="bottom-center" />
    </>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Toast } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
