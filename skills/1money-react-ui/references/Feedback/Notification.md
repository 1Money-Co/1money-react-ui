---
name: Notification
category: Feedback
description: A notification component that displays inline status messages with custom icons and styling. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.
source: src/components/Notification
---

# Notification

## Component Overview

A notification component that displays inline status messages with custom icons and styling. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.

### Features

- Four severity levels with custom icons (success, info, warn, error)
- Inline display with content wrapping
- Clickable interaction support
- Custom content support through children
- Accessibility-friendly design
- Customizable styling and theming

## Usage Scenarios

### When to use
- Give user feedback (success/failure/warning/info) without interrupting main flow (Toast/Notification)
- Status hints within form or area (Message)
- Provide supplementary explanation for icons/buttons (Tooltip)

### When not to use
- Must require user confirmation to continue (consider Modal/ConfirmPopup)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey-light`, `$color-grey-midnight`, `$color-grey-night`, `$color-info-light`, `$color-negative-background`, `$color-success-background`, `$color-warning-background`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 14
- Padding values (px, extracted from source style): 8, 12
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Component).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | `string` | - |
| className | Additional CSS classes | `string` | - |
| prefixCls | Component class prefix | `string` | `"notification"` |
| severity | Status severity | `'info' \| 'success' \| 'warn' \| 'error'` | - |
| title | Title content | `ReactNode` | - |
| description | Description content | `ReactNode` | - |
| onClick | Click handler | `MouseEventHandler<HTMLDivElement>` | - |

## Examples

```tsx
import { Notification } from '@1money/react-ui';

// 1. Basic Info
<Notification>
    System maintenance scheduled for tonight.
</Notification>

// 2. Severity Variants
<Notification severity="success">Operation Successful</Notification>
<Notification severity="error">Unexpected Error</Notification>

// 3. With Title and Description (if supported by implementation)
<Notification
    severity="warn"
    title="Session Expiring"
    description="Please save your work."
/>

// 4. Clickable
<Notification onClick={() => openLog()}>
    Click to view logs
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

## Core Principles

- **Usage Priority**: `Notification` is for **persistent** inline status (typically at the top of a page/section). For auto-dismissing feedback, use `Toast`. For simple form errors, use `Message`.
- **Content Persistence**: Notifications usually remain visible until dismissed by the user or the condition resolves.
- **Composition**: Can be used in lists (e.g., a notification center).

