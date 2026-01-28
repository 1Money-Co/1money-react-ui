---
name: ConfirmPopup
category: Feedback
description: A contextual confirmation dialog component that displays confirmation prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality. This component provides both declarative and imperative APIs for maximum flexibility.
source: src/components/ConfirmPopup
---

# ConfirmPopup

## Component Overview

A contextual confirmation dialog component that displays confirmation prompts positioned relative to trigger elements. Built on top of PrimeReact's ConfirmPopup, it features enhanced styling and functionality. This component offers both declarative and imperative APIs to ensure maximum flexibility in implementation.

### Features

- Context-aware positioning (automatically adjusts based on available space)
- Support for both declarative and imperative APIs
- Customizable accept/reject actions via callbacks
- Icon support for added visual context
- Built-in focus management and keyboard navigation
- Support for backdrop click dismissal and Escape key handling
- Accessible defaults for screen readers

## Usage Scenarios

### When to use

- When you need a blocking confirmation or input request in a specific context (unlike a Modal or Drawer).
- For in-place confirmation, such as "Are you sure?" checks directly attached to a button.

### When not to use

- For transient, non-blocking notifications. Consider using **Toast**, **Notification**, or **Message** components instead.

## Design Specifications

- **Global Class Prefix**: `om-react-ui` (derived from `$prefix` in `src/variable.scss`)
- **Standard Padding**: `6px`, `12px` (extracted from source styles)
- **Styling**: Detailed visual and interaction styles are defined in `style/*.scss`.
  - *Note*: Prioritize consolidating new or adjusted styles into Foundation tokens to avoid scattered "magic numbers".
- **References**:
  - [`DesignTokens`](../Foundation/DesignTokens.md)
  - [`Spacing`](../Foundation/Spacing.md)
  - [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact ConfirmPopup](https://primereact.org/confirmpopup/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"confirm-popup"` |
| id | Unique ID | `string` | - |
| className | Additional CSS classes | `string` | - |

> **Common Inherited Props**: `target`, `visible`, `onHide`, `message`, `accept`, `reject`, `icon`, `acceptLabel`, `rejectLabel`.

### Imperative API (Recommended)

The `confirmPopup` function is the primary method for triggering the popup.

```typescript
import { confirmPopup } from '@1money/react-ui';

confirmPopup(options: ConfirmPopupOptions);
```

**ConfirmPopupOptions:**

| Name | Description | Type |
| --- | --- | --- |
| target | The target element (trigger) | `HTMLElement` |
| message | Message content | `ReactNode` |
| icon | Icon class name | `string` |
| accept | Callback function for acceptance | `() => void` |
| reject | Callback function for rejection | `() => void` |
| acceptLabel | Label text for the accept button | `string` |
| rejectLabel | Label text for the reject button | `string` |

## Examples

### 1. Basic Imperative Usage

This is the standard pattern. Ensure `<ConfirmPopup />` is rendered once in your application root or container.

```tsx
import { ConfirmPopup, confirmPopup, Button } from '@1money/react-ui';

const MyComponent = () => {
  const confirm = (event: React.MouseEvent) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => console.log('Accepted'),
      reject: () => console.log('Rejected'),
      acceptLabel: 'Yes, do it',
      rejectLabel: 'Cancel'
    });
  };

  return (
    <>
      {/* Ensure this is present in the tree */}
      <ConfirmPopup />
      <Button onClick={confirm} icon="pi pi-check" label="Confirm" />
    </>
  );
};
```

### 2. Action Confirmation (Deletion)

Example showing a destructive action confirmation flow.

```tsx
import { ConfirmPopup, confirmPopup, Button } from '@1money/react-ui';

const ItemList = () => {
  const handleDelete = (event: React.MouseEvent) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Are you sure you want to delete this item?',
      accept: () => {
        // Handle deletion logic
        console.log('Item deleted');
      },
      reject: () => {
        // Handle cancellation logic
        console.log('Deletion cancelled');
      }
    });
  };

  return (
    <>
      <Button severity="danger" onClick={handleDelete}>
        Delete Item
      </Button>
      <ConfirmPopup />
    </>
  );
};
```

### 3. Declarative Usage

Use this approach when you need to control the `visible` state manually.

```tsx
import { ConfirmPopup, Button } from '@1money/react-ui';
import { useState } from 'react';

const DeclarativeExample = () => {
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState<any>(null);

  const showConfirm = (event: React.MouseEvent) => {
    setTarget(event.currentTarget);
    setVisible(true);
  };

  return (
    <>
      <Button onClick={showConfirm}>
        Show Confirmation
      </Button>
      <ConfirmPopup
        target={target}
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        accept={() => {
          console.log('Accepted');
          setVisible(false);
        }}
        reject={() => {
          console.log('Rejected');
          setVisible(false);
        }}
      />
    </>
  );
};
```

### 4. Minimal Imperative Call

```tsx
import { confirmPopup } from '@1money/react-ui';

// Call within an event handler
confirmPopup({
  target: buttonElement,
  message: 'Confirmation message',
  accept: () => {}, // Accept callback
  reject: () => {}, // Reject callback
});
```

## Core Principles

- **Imperative Preference**: Prefer the `confirmPopup` imperative API for standard "ask and act" flows. Reserve the declarative approach for scenarios requiring complex state synchronization.
- **Single Instance**: Typically, a single `<ConfirmPopup />` instance in the root or a high-level container is sufficient for imperative calls throughout the application.
- **Contextual Target**: You **MUST** provide a valid `target` (usually `event.currentTarget`). This is required to position the popup correctly relative to the trigger element.
- **Iconography**: Maintain consistency in icon usage. If integrating with strict design tokens, ensure the icon class strings match the approved icon set (e.g., standard `pi` classes or custom font classes).

