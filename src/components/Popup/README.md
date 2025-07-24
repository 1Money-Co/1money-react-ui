# Popup

A contextual popup component that displays confirmation dialogs and action prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality.

## Features

- Context-aware positioning (auto-adjusts based on available space)
- Customizable accept/reject actions
- Icon support for visual context
- Focus management with default focus options
- Backdrop click to dismiss
- Escape key handling
- Accessible keyboard navigation
- Imperative API for programmatic control

## Basic Usage

```tsx
import { Popup, PopupHandlers } from '@1money/react-ui';
import { useRef } from 'react';

// Basic popup with ref
const popupRef = useRef<PopupHandlers>(null);

<Button 
  onClick={(e) => popupRef.current?.show({
    target: e.currentTarget,
    message: 'Are you sure you want to delete this item?',
    accept: () => handleDelete(),
    reject: () => console.log('Cancelled')
  })}
>
  Delete Item
</Button>

<Popup ref={popupRef} />
```

## Imperative API

The Popup component uses a ref-based imperative API for showing popups:

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

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the popup | string | - |
| prefixCls | The classname prefix for component styling | string | "popup" |

## Show Method Parameters (ConfirmPopupProps)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| target | The target element to position the popup relative to | HTMLElement \| EventTarget | - |
| message | The confirmation message to display | ReactNode | - |
| accept | Callback function when user confirms | () => void | - |
| reject | Callback function when user cancels | () => void | - |
| icon | Icon to display in the popup | string | - |
| acceptLabel | Label for the accept button | string | "Yes" |
| rejectLabel | Label for the reject button | string | "No" |
| acceptIcon | Icon for the accept button | string | - |
| rejectIcon | Icon for the reject button | string | - |
| acceptClassName | CSS class for accept button | string | - |
| rejectClassName | CSS class for reject button | string | - |
| position | Position of the popup relative to target | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' | 'top' |
| defaultFocus | Which button to focus by default | 'accept' \| 'reject' | 'accept' |
| dismissable | Whether clicking outside dismisses popup | boolean | true |
| onShow | Callback when popup is shown | () => void | - |
| onHide | Callback when popup is hidden | () => void | - |

## Inherited Props

This component extends PrimeReact's ConfirmPopup and inherits all its styling and behavior props.

## Styling

The Popup component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. Button-specific classes via `acceptClassName` and `rejectClassName`
4. CSS custom properties for theme customization

## Accessibility

- Automatic focus management
- Keyboard navigation (Tab, Enter, Escape)
- ARIA attributes for screen readers
- Proper semantic structure
- Focus trap within popup
- Configurable default focus

## Examples

### Delete Confirmation

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

### Save Changes Confirmation

```tsx
const SaveForm = ({ hasUnsavedChanges, onSave, onDiscard }) => {
  const popupRef = useRef<PopupHandlers>(null);

  const handleFormSubmit = (e) => {
    if (hasUnsavedChanges) {
      popupRef.current?.show({
        target: e.currentTarget,
        message: 'You have unsaved changes. Do you want to save them?',
        icon: 'pi pi-question-circle',
        acceptLabel: 'Save',
        rejectLabel: 'Discard',
        accept: onSave,
        reject: onDiscard,
        defaultFocus: 'accept'
      });
    } else {
      onSave();
    }
  };

  return (
    <>
      <Button onClick={handleFormSubmit}>
        Submit Form
      </Button>
      <Popup ref={popupRef} />
    </>
  );
};
```

### Custom Positioned Popup

```tsx
const OptionsMenu = () => {
  const popupRef = useRef<PopupHandlers>(null);

  const showArchiveConfirm = (e) => {
    popupRef.current?.show({
      target: e.currentTarget,
      message: 'Archive this item? You can restore it later from the archive.',
      icon: 'pi pi-archive',
      position: 'bottom-right',
      acceptLabel: 'Archive',
      rejectLabel: 'Keep',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      accept: () => handleArchive(),
      reject: () => console.log('Keep item active')
    });
  };

  return (
    <>
      <Button 
        icon="pi pi-ellipsis-v" 
        className="p-button-text"
        onClick={showArchiveConfirm}
      />
      <Popup ref={popupRef} />
    </>
  );
};
```

### With Toast Integration

```tsx
const ActionWithFeedback = () => {
  const popupRef = useRef<PopupHandlers>(null);
  const toastRef = useRef<ToastClass>(null);

  const handleAction = (e) => {
    popupRef.current?.show({
      target: e.currentTarget,
      message: 'This action will send notifications to all users. Continue?',
      icon: 'pi pi-send',
      accept: () => {
        // Perform action
        performNotificationSend();
        toastRef.current?.show({
          severity: 'success',
          summary: 'Sent',
          detail: 'Notifications sent successfully'
        });
      },
      reject: () => {
        toastRef.current?.show({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'No notifications were sent'
        });
      },
      onShow: () => console.log('Popup shown'),
      onHide: () => console.log('Popup hidden')
    });
  };

  return (
    <>
      <Button onClick={handleAction}>
        Send Notifications
      </Button>
      <Popup ref={popupRef} />
      <Toast ref={toastRef} />
    </>
  );
};
```