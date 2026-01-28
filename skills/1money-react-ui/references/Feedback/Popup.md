---
name: Popup
category: Feedback
description: A contextual popup component that displays confirmation dialogs and action prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality.
source: src/components/Popup
---

# Popup

## Component Overview

A contextual popup component that displays confirmation dialogs and action prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality.

### Features

- Context-aware positioning (auto-adjusts based on available space)
- Customizable accept/reject actions
- Icon support for visual context
- Focus management with default focus options
- Backdrop click to dismiss
- Escape key handling
- Accessible keyboard navigation
- Imperative API for programmatic control

## Usage Scenarios

### When to use
- Need blocking confirmation/input (Modal) or side flow (Drawer)
- Need in-place confirmation/double confirmation (Popup/ConfirmPopup)

### When not to use
- Frequent notifications (consider Toast/Notification/Message)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact ConfirmPopup](https://primereact.org/confirmpopup/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"popup"` |
| id | HTML id | `string` | - |

> Inherits standard props like `visible`, `onHide`, `target`, but typically used via `ref`.

### Ref API (PopupHandlers)

| Method | Description | Parameters |
| --- | --- | --- |
| show | Trigger popup at target | `(params: ConfirmPopupProps) => void` |

### Show Parameters (ConfirmPopupProps)

| Property | Description |
| --- | --- |
| target | Target element (e.g., button) to attach to |
| message | Message content |
| accept | Callback on Confirm |
| reject | Callback on Cancel |
| icon | Icon class or node |
| acceptLabel | Label for confirm button |
| rejectLabel | Label for cancel button |

## Examples

```tsx
import { Popup } from '@1money/react-ui';

const MyPage = () => {
    const popupRef = useRef(null);

    const deleteItem = (event) => {
        popupRef.current.show({
            target: event.currentTarget,
            message: 'Confirm delete?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => console.log('Deleted'),
            reject: () => console.log('Cancelled')
        });
    };

    return (
        <>
            <Popup ref={popupRef} />
            <Button onClick={deleteItem} label="Delete" />
        </>
    );
};
```

```tsx
const popupRef = useRef<PopupHandlers>(null);

// Show popup with configuration
popupRef.current?.show({
  target: buttonElement,
  message: 'Confirmation message',
  accept: () => {}, // Accept callback
  reject: () => {}, // Reject callback
  // ... other options
});
```

```tsx
const DeleteButton = ({ onDelete, itemName }) => {
  const popupRef = useRef<PopupHandlers>(null);

  const handleDeleteClick = (e) => {
    popupRef.current?.show({
      target: e.currentTarget,
      message: `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-danger',
      accept: () => {
        onDelete();
        toast.current?.show({
          severity: 'success',
          summary: 'Deleted',
          detail: `${itemName} has been deleted`
        });
      },
      reject: () => {
        toast.current?.show({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Delete operation cancelled'
        });
      }
    });
  };

  return (
    <>
      <Button severity="danger" onClick={handleDeleteClick}>
        Delete {itemName}
      </Button>
      <Popup ref={popupRef} />
    </>
  );
};
```

## Core Principles

- **Imperative Only**: **MUST** use `ref.current.show()` to display the popup.
- **Reference Management**: Always initialize `useRef<PopupHandlers>(null)` to ensure type safety.
- **Targeting**: The `target` property in `show()` is critical; blindly passing null/undefined will cause the popup to appear incorrectly (often at top-left).

