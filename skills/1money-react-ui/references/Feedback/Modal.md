---
name: Modal
category: Feedback
description: A flexible modal dialog component built on top of PrimeReact's Dialog with enhanced styling and functionality.
source: src/components/Modal
---

# Modal

## Component Overview

A flexible modal dialog component built on top of PrimeReact's Dialog with enhanced styling and functionality.

### Features

- Customizable header and footer
- Backdrop click to close
- Escape key to close
- Responsive design
- Animation support
- Accessibility features
- Position control (center, top, left, right, etc.)
- Resizable and draggable options

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

Inherits from: [PrimeReact Dialog](https://primereact.org/dialog/) (type='normal') or [PrimeReact ConfirmDialog](https://primereact.org/confirmdialog/) (type='confirm').

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Modal type | `'normal' \| 'confirm'` | `'normal'` |
| prefixCls | Component class prefix | `string` | `"modal"` |
| ref | Reference to handlers | `RefObject<ModalHandlers>` | - |

> Common inherited props: `header`, `footer`, `modal`, `closable`, `className`, `style`.

### Methods (via Ref)

| Name | Parameters | Description |
| --- | --- | --- |
| show | `(params?: ConfirmDialogProps)` | Shows the modal. Params are used for 'confirm' type configuration. |
| hide | - | Hides the modal. |

> **Note**: Visibility is controlled exclusively via the `ref` methods (`show`/`hide`), not via a `visible` prop.

#### ModalNormalProps (type='normal')
Inherits from `DialogProps` (excluding `visible`, `onHide`).

#### ModalConfirmProps (type='confirm')
Inherits from `ConfirmDialogProps` (excluding `visible`, `onHide`).

## Examples

```tsx
import { Modal, Button } from '@1money/react-ui';
import { useRef } from 'react';
import type { ModalHandlers } from '@1money/react-ui/es/components/Modal/interface';

// Normal Modal
const MyComponent = () => {
    const modalRef = useRef<ModalHandlers>(null);

    return (
        <>
            <Button onClick={() => modalRef.current?.show()}>Open Modal</Button>
            <Modal ref={modalRef} header="My Modal">
                <p>Content goes here...</p>
                <div className="flex justify-end mt-4">
                     <Button severity="secondary" onClick={() => modalRef.current?.hide()}>Close</Button>
                </div>
            </Modal>
        </>
    );
};

// Confirm Modal
const MyConfirm = () => {
    const confirmRef = useRef<ModalHandlers>(null);

    const handleDelete = () => {
        confirmRef.current?.show({
            message: 'Are you sure?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => console.log('Deleted'),
            reject: () => console.log('Cancelled'),
            acceptLabel: 'Yes, Delete',
            rejectLabel: 'No'
        });
    };

    return (
        <>
            <Button onClick={handleDelete} severity="danger">Delete Item</Button>
            <Modal ref={confirmRef} type="confirm" />
        </>
    );
};
```

### ModalHandlers
| Method | Description | Parameters |
| --- | --- | --- |
| show | Show the modal | (params?: ConfirmDialogProps) => any |
| hide | Hide the modal | () => any |

## Examples

```tsx
import { Modal } from '@1money/react-ui';

// Basic modal (imperative)
const modalRef = useRef<ModalHandlers>(null);

<>
  <Button onClick={() => modalRef.current?.show()}>Open</Button>
  <Modal ref={modalRef} header="Modal Title">
    <p>Modal content goes here.</p>
  </Modal>
</>

// With custom footer
<Modal
  ref={modalRef}
  header="Confirm Action"
  footer={
    <div>
      <Button severity="secondary" onClick={() => modalRef.current?.hide()}>
        Cancel
      </Button>
      <Button severity="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  }
>
  <p>Are you sure you want to perform this action?</p>
</Modal>

// Full screen modal
<Modal
  ref={modalRef}
  maximizable
  maximized
  header="Full Screen Modal"
>
  <p>This modal takes up the full screen.</p>
</Modal>
```

```tsx
const ConfirmDialog = ({ onConfirm, message }) => {
  const modalRef = useRef<ModalHandlers>(null);
  return (
    <>
      <Button severity="danger" onClick={() => modalRef.current?.show()}>
        Delete
      </Button>
      <Modal
        ref={modalRef}
        header="Confirm"
        footer={
          <div className="flex justify-end gap-2">
            <Button severity="secondary" onClick={() => modalRef.current?.hide()}>
              Cancel
            </Button>
            <Button severity="danger" onClick={onConfirm}>
              Delete
            </Button>
          </div>
        }
        style={{ width: '450px' }}
      >
        <div className="flex align-items-center">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          <span>{message}</span>
        </div>
      </Modal>
    </>
  );
};
```

## Core Principles

- **Imperative Control**: **MUST** use the `ref` API (`show()`/`hide()`) to control visibility. **PROHIBIT** treating `visible` as a reactive prop passed from parent state (unless wrapping for legacy reasons).
- **Structure**: Header and Footer content should be passed via `header` and `footer` props, not embedded in children (unless necessary for custom focus order).
- **Containment**: Modals should generally be placed at a high level in the DOM or use React Portals (handled internally by PrimeReact) to avoid z-index wars.
- **Type Safety**: Always use `ModalHandlers` type for the ref to ensure correct method access.

