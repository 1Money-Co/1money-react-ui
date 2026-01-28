---
name: Message
category: Feedback
description: A message component built on top of PrimeReact's Message with enhanced styling. Messages are used to display inline information, warnings, errors, or success messages within forms or content areas.
source: src/components/Message
---

# Message

## Component Overview

A message component built on top of PrimeReact's Message with enhanced styling. Messages are used to display inline information, warnings, errors, or success messages within forms or content areas.

### Features

- Multiple severity levels (success, info, warn, error)
- Inline display with automatic icon assignment
- Content flexibility through children or text prop
- Closable messages with dismiss functionality
- Built-in accessibility features
- Customizable styling and theming
- Full PrimeReact Message compatibility

## Usage Scenarios

### When to use

- Give user feedback (success/failure/warning/info) without interrupting main flow (Toast/Notification)
- Status hints within form or area (Message)
- Provide supplementary explanation for icons/buttons (Tooltip)

### When not to use

- Must require user confirmation to continue (consider Modal/ConfirmPopup)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Border radius (px, extracted from source style): 6
- Font size (px, extracted from source style): 14
- Height/Max-height (px, extracted from source style): 14
- Padding values (px, extracted from source style): 10
- For detailed visual and interaction specifications, refer to the component source code in `style/*.scss`. New or adjusted styles should prioritize consolidation into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact Message](https://primereact.org/message/).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"message"` |

> Common inherited props: `severity` ('success'\|'info'\|'warn'\|'error'), `text`, `closable`, `icon`.

## Examples

```tsx
import { Message } from '@1money/react-ui';

// Basic messages with text prop
<Message severity="info" text="This is an informational message" />
<Message severity="success" text="Operation completed successfully!" />
<Message severity="warn" text="Please review your input before proceeding" />
<Message severity="error" text="An error occurred while processing your request" />

// Message with custom content (children)
<Message severity="info">
  <div className="flex flex-column">
    <strong>Account Update</strong>
    <span>Your profile information has been updated.</span>
  </div>
</Message>

// Closable message
<Message
  severity="warn"
  text="Your session will expire soon"
  closable
  style={{ width: '100%' }}
/>
```

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

## Core Principles

- **Usage Priority**: `Message` is for *inline* content (e.g., forms, lists). For global overlay messages, MUST use `Toast`.
- **Content Structure**: Use `text` prop for simple strings. For complex layouts (e.g., text with links/buttons), nest elements as `children`.
- **Visibility Control**: If `closable` is true, ensure the layout handles the component removal gracefully (or controls it via state if fully controlled).
- **Semantics**: **MUST** match `severity` to the message type (e.g., error for blocking issues, warn for non-blocking).
