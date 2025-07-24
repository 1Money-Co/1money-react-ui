# Message

A message component built on top of PrimeReact's Message with enhanced styling. Messages are used to display inline information, warnings, errors, or success messages within forms or content areas.

## Features

- Multiple severity levels (success, info, warn, error)
- Inline display with automatic icon assignment
- Content flexibility through children or text prop
- Closable messages with dismiss functionality
- Built-in accessibility features
- Customizable styling and theming
- Full PrimeReact Message compatibility

## Basic Usage

```tsx
import { Message } from '@1money/react-ui';

// Basic info message
<Message severity="info" text="This is an informational message" />

// Success message
<Message severity="success" text="Operation completed successfully!" />

// Warning message
<Message severity="warn" text="Please review your input before proceeding" />

// Error message
<Message severity="error" text="An error occurred while processing your request" />

// Message with custom content
<Message severity="info">
  <div>
    <strong>Account Update</strong>
    <p>Your profile information has been updated successfully.</p>
  </div>
</Message>

// Closable message
<Message 
  severity="warn" 
  text="Your session will expire soon"
  closable
  onClose={() => console.log('Message dismissed')}
/>
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | 'message' |
| children | Custom content (overrides text prop) | ReactNode | - |

## Inherited Props

This component extends PrimeReact's Message component and inherits all its props:

- `severity?: 'success' | 'info' | 'warn' | 'error'` - Message severity level
- `text?: string` - Message text content
- `icon?: string` - Custom icon class
- `closable?: boolean` - Whether message can be dismissed
- `onClose?: () => void` - Callback when message is closed
- `content?: ReactNode` - Custom content component
- `className?: string` - Additional CSS classes
- `style?: CSSProperties` - Inline styles

## Severity Levels

### Success
- **Default Icon**: Check circle
- **Use for**: Successful operations, confirmations, positive feedback
- **Examples**: Form submitted, payment processed, settings saved

### Info
- **Default Icon**: Information circle
- **Use for**: General information, tips, neutral updates
- **Examples**: Account verification status, feature announcements

### Warning
- **Default Icon**: Warning triangle
- **Use for**: Cautions, potential issues, important notices
- **Examples**: Session expiring, incomplete data, recommended actions

### Error
- **Default Icon**: Error circle
- **Use for**: Errors, failures, validation issues
- **Examples**: Form validation errors, API failures, permission issues

## Styling

The Message component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization
4. PrimeReact theme variables for global styling

## Accessibility

- Proper ARIA attributes inherited from PrimeReact
- Screen reader support for message content
- Keyboard navigation for closable messages
- High contrast mode compatibility
- Semantic HTML structure

## Examples

### Form Validation Messages

```tsx
const FormValidation = ({ errors, success }) => {
  return (
    <div className="form-messages">
      {success && (
        <Message 
          severity="success" 
          text="Form submitted successfully!"
          closable
        />
      )}
      
      {errors.map((error, index) => (
        <Message 
          key={index}
          severity="error" 
          text={error.message}
        />
      ))}
    </div>
  );
};
```

### Account Status Messages

```tsx
const AccountMessages = ({ user }) => {
  return (
    <div className="account-status">
      {!user.emailVerified && (
        <Message severity="warn">
          <div>
            <strong>Email Verification Required</strong>
            <p>Please check your email and click the verification link to complete your account setup.</p>
          </div>
        </Message>
      )}
      
      {user.subscription?.isPremium && (
        <Message severity="success" text="You have premium access to all features!" />
      )}
      
      {user.profile?.isIncomplete && (
        <Message severity="info">
          <div>
            Complete your profile to unlock additional features.
            <a href="/profile">Update Profile</a>
          </div>
        </Message>
      )}
    </div>
  );
};
```

### Transaction Status Messages

```tsx
const TransactionMessages = ({ transaction }) => {
  const getMessageProps = (status) => {
    switch (status) {
      case 'completed':
        return {
          severity: 'success',
          text: `Transaction ${transaction.id} completed successfully`
        };
      case 'pending':
        return {
          severity: 'info',
          text: `Transaction ${transaction.id} is being processed`
        };
      case 'failed':
        return {
          severity: 'error',
          text: `Transaction ${transaction.id} failed. Please try again`
        };
      case 'cancelled':
        return {
          severity: 'warn',
          text: `Transaction ${transaction.id} was cancelled`
        };
      default:
        return {
          severity: 'info',
          text: 'Unknown transaction status'
        };
    }
  };

  const messageProps = getMessageProps(transaction.status);

  return <Message {...messageProps} />;
};
```

### System Notifications

```tsx
const SystemNotifications = ({ notifications }) => {
  return (
    <div className="system-notifications">
      {notifications.map((notification) => (
        <Message
          key={notification.id}
          severity={notification.type}
          closable={notification.dismissible}
          onClose={() => dismissNotification(notification.id)}
        >
          <div>
            <strong>{notification.title}</strong>
            <p>{notification.description}</p>
            {notification.action && (
              <button onClick={notification.action.handler}>
                {notification.action.label}
              </button>
            )}
          </div>
        </Message>
      ))}
    </div>
  );
};
```

### Custom Icon Messages

```tsx
// Using custom icon
<Message 
  severity="info" 
  icon="pi pi-users"
  text="New team member added to your organization"
/>

// Using custom content with icon
<Message severity="success">
  <div className="flex align-items-center">
    <i className="pi pi-shield text-green-500 mr-2"></i>
    <span>Your account security has been enhanced</span>
  </div>
</Message>
```

### Inline Form Messages

```tsx
const InlineFormMessages = () => {
  return (
    <form>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <Message 
          severity="error" 
          text="Please enter a valid email address"
          className="mt-1"
        />
      </div>
      
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <Message 
          severity="info" 
          text="Password must be at least 8 characters long"
          className="mt-1"
        />
      </div>
    </form>
  );
};
```

### Rich Content Messages

```tsx
<Message severity="info">
  <div className="message-content">
    <h4>Feature Update Available</h4>
    <p>New expense tracking features are now available in your dashboard.</p>
    <ul>
      <li>Automatic categorization</li>
      <li>Budget alerts</li>
      <li>Monthly reports</li>
    </ul>
    <button className="btn-primary">Learn More</button>
  </div>
</Message>
```
