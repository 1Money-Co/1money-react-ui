# Notification

A notification component that displays inline status messages with custom icons and styling. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.

## Features

- Four severity levels with custom icons (success, info, warn, error)
- Inline display with content wrapping
- Clickable interaction support
- Custom content support through children
- Accessibility-friendly design
- Customizable styling and theming

## Basic Usage

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | Notification content | ReactNode | - |
| severity | Notification severity level | 'success' \| 'info' \| 'warn' \| 'error' | 'info' |
| className | Additional CSS class for styling | string | - |
| prefixCls | The classname prefix for component styling | string | 'notification' |
| onClick | Click event handler for interactive notifications | MouseEventHandler<HTMLDivElement> | - |
| id | HTML id attribute | string | - |

## Severity Levels

### Success
- **Icon**: Check mark with white color
- **Use for**: Successful operations, confirmations, positive outcomes
- **Examples**: Payment successful, account verified, settings saved

### Info
- **Icon**: Information icon with blue color
- **Use for**: General information, neutral updates, tips
- **Examples**: Account verification in progress, new features available

### Warning
- **Icon**: Warning triangle with black color
- **Use for**: Cautions, potential issues, important reminders
- **Examples**: Session expiring, incomplete profile, pending actions

### Error
- **Icon**: Cross with white color
- **Use for**: Errors, failures, issues requiring immediate attention
- **Examples**: Payment failed, validation errors, system issues

## Styling

The Notification component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization
4. Severity-specific styling classes

## Accessibility

- Proper semantic structure with div wrapper
- Icon descriptions for screen readers
- Keyboard navigation support for clickable notifications
- Color contrast compliance for all severity levels
- ARIA attributes where appropriate

## Examples

### Account Status Notifications

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

### Transaction Status Display

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

### Form Validation Notifications

```tsx
const FormNotifications = ({ errors, warnings, success }) => {
  return (
    <div className="form-notifications">
      {success && (
        <Notification severity="success">
          {success}
        </Notification>
      )}
      
      {warnings.map((warning, index) => (
        <Notification key={index} severity="warn">
          {warning}
        </Notification>
      ))}
      
      {errors.map((error, index) => (
        <Notification key={index} severity="error">
          {error}
        </Notification>
      ))}
    </div>
  );
};
```

### Interactive System Notifications

```tsx
const SystemNotifications = () => {
  return (
    <div className="system-notifications">
      <Notification 
        severity="info"
        onClick={() => window.open('/help', '_blank')}
      >
        New help center available. Click to explore.
      </Notification>
      
      <Notification 
        severity="warn"
        onClick={() => window.location.href = '/settings/security'}
      >
        Update your security settings for better protection.
      </Notification>
      
      <Notification 
        severity="success"
        onClick={() => window.location.href = '/features'}
      >
        Congratulations! You've unlocked premium features.
      </Notification>
    </div>
  );
};
```

### Custom Styled Notifications

```tsx
<Notification 
  severity="info"
  className="custom-notification"
  prefixCls="custom-notify"
>
  This notification uses custom styling.
</Notification>

// With custom CSS
.custom-notification {
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
}
```

### Notification with Rich Content

```tsx
<Notification severity="success">
  <div>
    <strong>Payment Successful!</strong>
    <br />
    Amount: $250.00
    <br />
    Reference: TXN-123456789
  </div>
</Notification>
```
