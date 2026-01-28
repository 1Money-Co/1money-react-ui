# Notification

A notification component that displays inline status messages with optional title, description, link, and action content. Notifications are typically used for persistent status information that doesn't auto-dismiss like toast messages.

## Features

- Four severity levels with icons (success, info, warn, error)
- Optional title and description content
- Link and action slots for follow-up actions
- Optional close button and icon visibility toggle
- Clickable interaction support
- Customizable styling and theming

## Basic Usage

```tsx
import { Button, Notification } from '@1money/react-ui';

// Basic notification (uses children as body content)
<Notification severity="info">
  Your account verification is in progress.
</Notification>

// With title + description
<Notification
  severity="success"
  title="Payment completed"
  description="Your transfer has been scheduled."
/>

// With link and action
<Notification
  severity="warn"
  title="Session expiring"
  description="Save your work to avoid data loss."
  link={{ label: 'Review session policy', href: '/help/session' }}
  action={<Button size="small">Extend</Button>}
/>

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
| children | Body content (used when `description` is not provided) | ReactNode | - |
| severity | Notification severity level | 'success' \| 'info' \| 'warn' \| 'error' | 'info' |
| title | Title content | ReactNode | - |
| description | Body content (takes precedence over `children`) | ReactNode | - |
| link | Optional link content and behavior | NotificationLink | - |
| action | Action slot (usually a button) | ReactNode | - |
| closable | Shows a close button on the right | boolean | false |
| onClose | Close button click handler | MouseEventHandler<HTMLButtonElement> | - |
| showIcon | Shows the leading icon | boolean | true |
| className | Additional CSS class for styling | string | - |
| prefixCls | The classname prefix for component styling | string | 'notification' |
| onClick | Click event handler for interactive notifications | MouseEventHandler<HTMLDivElement> | - |
| id | HTML id attribute | string | - |

## NotificationLink

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Link label content | ReactNode | - |
| href | Link href (omit to render button-like link) | string | - |
| target | Link target | string | - |
| rel | Link rel attribute | string | - |
| onClick | Link click handler | MouseEventHandler<HTMLAnchorElement> | - |

## Severity Levels

### Success
- **Use for**: Successful operations, confirmations, positive outcomes
- **Examples**: Payment successful, account verified, settings saved

### Info
- **Use for**: General information, neutral updates, tips
- **Examples**: Account verification in progress, new features available

### Warning
- **Use for**: Cautions, potential issues, important reminders
- **Examples**: Session expiring, incomplete profile, pending actions

### Error
- **Use for**: Errors, failures, issues requiring immediate attention
- **Examples**: Payment failed, validation errors, system issues

## Styling

The Notification component uses SCSS with a prefixed BEM-style class structure. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. Severity-specific styling classes

## Accessibility

- Close button includes `aria-label="Close notification"`
- Link renders with button role when `href` is omitted
- Keyboard navigation supported for clickable elements

## Examples

### Account Status Notifications

```tsx
const AccountNotifications = ({ user }) => {
  return (
    <div className="notifications-container">
      {!user.isVerified && (
        <Notification severity="warn" title="Verify your email">
          Please verify your email address to access all features.
        </Notification>
      )}

      {user.hasUnreadMessages && (
        <Notification
          severity="info"
          onClick={() => navigateToMessages()}
          title="Unread messages"
          description={`You have ${user.unreadCount} unread messages.`}
        />
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
        <Notification severity="success" title="Success">
          {success}
        </Notification>
      )}

      {warnings.map((warning, index) => (
        <Notification key={index} severity="warn">
          {warning}
        </Notification>
      ))}

      {errors.map((error, index) => (
        <Notification key={index} severity="error" title="Error">
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

### Closable Notification

```tsx
<Notification
  severity="error"
  title="Payment failed"
  description="Please update your payment method."
  closable
  onClose={() => console.log('Dismissed')}
/>
```

### Notification with Hidden Icon

```tsx
<Notification
  severity="info"
  showIcon={false}
  title="Minimal notice"
  description="This notification hides the leading icon."
/>
```
