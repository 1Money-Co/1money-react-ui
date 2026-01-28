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
- Support for title, description, links, and custom actions
- Closable option

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
| prefixCls | Component class prefix | `string` | `'notification'` |
| severity | Status severity | `'info' \| 'success' \| 'warn' \| 'error'` | `'info'` |
| title | Title content | `ReactNode` | - |
| description | Description content | `ReactNode` | - |
| link | Link configuration object | `NotificationLink` | - |
| action | Custom action content | `ReactNode` | - |
| closable | Whether the notification can be closed | `boolean` | `false` |
| onClose | Handler for close button click | `MouseEventHandler<HTMLButtonElement>` | - |
| showIcon | Whether to show the severity icon | `boolean` | `true` |
| onClick | Click handler for the container | `MouseEventHandler<HTMLDivElement>` | - |

#### NotificationLink Interface
```typescript
interface NotificationLink {
  label: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
```

## Examples

```tsx
import { Notification, Button } from '@1money/react-ui';

// 1. Basic Info
<Notification>
    System maintenance scheduled for tonight.
</Notification>

// 2. Severity Variants
<Notification severity="success" title="Success">Operation Successful</Notification>
<Notification severity="error" title="Error">Unexpected Error</Notification>

// 3. With Title and Description
<Notification
    severity="warn"
    title="Session Expiring"
    description="Please save your work."
/>

// 4. With Link
<Notification
    severity="info"
    title="Update Available"
    description="A new version is available."
    link={{
        label: 'Download now',
        href: '/downloads',
        target: '_blank'
    }}
/>

// 5. With Custom Action and Closable
<Notification
    severity="info"
    title="Cookie Policy"
    description="We use cookies to improve your experience."
    closable
    onClose={() => console.log('closed')}
    action={<Button size="s">Accept</Button>}
/>

// 6. Without Icon
<Notification
    showIcon={false}
    title="Notice"
    description="This is a simple notification without an icon."
/>

// 7. Clickable Container
<Notification onClick={() => openLog()}>
    Click to view logs
</Notification>
```

```tsx
const AccountNotifications = ({ user }) => {
  return (
    <div className="notifications-container">
      {!user.isVerified && (
        <Notification
            severity="warn"
            title="Verification Needed"
            description="Please verify your email address to access all features."
            link={{ label: 'Verify Email', href: '/verify' }}
        />
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

