---
name: Toast
category: Feedback
description: A toast notification system built on top of PrimeReact's Toast with enhanced styling and automatic message formatting. Toast notifications are non-blocking messages that appear temporarily to provide feedback about user actions or system status.
source: src/components/Toast
---

# Toast

## Component Overview

A toast notification system built on top of PrimeReact's Toast with enhanced styling and automatic message formatting. Toast notifications are non-blocking messages that appear temporarily to provide feedback about user actions or system status.

### Features

- Four severity levels with custom icons and styling (success, info, warn, error)
- Automatic message formatting with icons and typography
- Custom close icons
- Configurable display duration
- Stack multiple messages
- Built-in accessibility features
- Programmatic control via ref methods

## Usage Scenarios

### When to use

- Give user feedback (success/failure/warning/info) without interrupting main flow (Toast/Notification)
- Status hints within form or area (Message)
- Provide supplementary explanation for icons/buttons (Tooltip)

### When not to use

- Must require user confirmation to continue (consider Modal/ConfirmPopup)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey-light`, `$color-grey-night`
- Border radius (px, extracted from source style): 16
- Height/Max-height (px, extracted from source style): 20
- Padding values (px, extracted from source style): 2, 8, 12
- Detailed visuals and interactions are based on the component source code `style/*.scss`; for new or adjusted styles, prioritize defining them in Foundation tokens to avoid scattered magic numbers.
- Reference: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact Toast](https://primereact.org/toast/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"toast"` |
| ref | Reference for methods | `RefObject<ToastClass>` | - |

> Common inherited props: `position` ('top-right', etc.), `baseZIndex`, `onRemove`, `onShow`.

### Toast Methods (via Ref)

| Method | Description | Type |
| --- | --- | --- |
| show | Show one/multiple messages | `(msg: ToastMessage \| ToastMessage[]) => void` |
| replace | Replace current messages | `(msg: ToastMessage \| ToastMessage[]) => void` |
| remove | Remove specific message | `(msg: ToastMessage) => void` |
| clear | Clear all messages | `() => void` |
| getElement | Get DOM element | `() => HTMLElement` |

### ToastMessage Interface

Standard message configuration object.

| Name | Description | Type |
| --- | --- | --- |
| severity | Alert level | `'success' \| 'info' \| 'warn' \| 'error'` |
| summary | Title | `string` |
| detail | Content | `string` |
| life | Duration (ms) | `number` |
| sticky | Sticky mode | `boolean` |
| closable | Show close button | `boolean` |
| content | Custom content | `ReactNode` |

## Examples

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

## Core Principles

- **Global Context**: Generally, a single `<Toast />` instance should be placed at the root of the application (or one per major layout context). Avoid rendering `Toast` components deep in the component tree to prevent z-index issues.
- **State Independence**: `Toast` is inherently imperative. Do not try to drive it with `useEffect` monitoring state variables unless strictly necessary; just call `.show()` when the event happens.
- **Reference**: Always use `useRef<ToastClass>(null)` (import type from interface) to access methods.
