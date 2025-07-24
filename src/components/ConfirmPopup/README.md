# ConfirmPopup

A contextual confirmation dialog component that displays confirmation prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality. This component provides both declarative and imperative APIs for maximum flexibility.

## Features

- Context-aware positioning (auto-adjusts based on available space)
- Declarative and imperative API support
- Customizable accept/reject actions
- Icon support for visual context
- Focus management with default focus options
- Backdrop click to dismiss
- Escape key handling
- Accessible keyboard navigation
- Built-in confirmation dialogs

## Basic Usage

### Imperative API (Recommended)

```tsx
import { ConfirmPopup, confirmPopup } from '@1money/react-ui';

// Using the imperative API
const handleDelete = (event) => {
  confirmPopup({
    target: event.currentTarget,
    message: 'Are you sure you want to delete this item?',
    accept: () => {
      // Handle deletion
      console.log('Item deleted');
    },
    reject: () => {
      // Handle cancellation
      console.log('Deletion cancelled');
    }
  });
};

// Component setup
<>
  <Button severity="danger" onClick={handleDelete}>
    Delete Item
  </Button>
  <ConfirmPopup />
</>
```

### Declarative API

```tsx
import { ConfirmPopup } from '@1money/react-ui';
import { useState } from 'react';

const [visible, setVisible] = useState(false);
const [target, setTarget] = useState(null);

const showConfirm = (event) => {
  setTarget(event.currentTarget);
  setVisible(true);
};

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
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the popup | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | The classname prefix for component styling | string | "confirm-popup" |

## Inherited Props (from PrimeReact ConfirmPopup)

### Core Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| target | The target element to position popup relative to | HTMLElement \| EventTarget | - |
| visible | Whether the popup is visible (declarative API) | boolean | false |
| onHide | Callback when popup should be hidden | () => void | - |
| message | The confirmation message to display | ReactNode | - |
| accept | Callback function when user confirms | () => void | - |
| reject | Callback function when user cancels | () => void | - |

### Customization Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon to display in the popup | string | - |
| acceptLabel | Label for the accept button | string | "Yes" |
| rejectLabel | Label for the reject button | string | "No" |
| acceptIcon | Icon for the accept button | string | - |
| rejectIcon | Icon for the reject button | string | - |
| acceptClassName | CSS class for accept button | string | - |
| rejectClassName | CSS class for reject button | string | - |

### Positioning Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| position | Position of popup relative to target | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' | 'top' |
| defaultFocus | Which button to focus by default | 'accept' \| 'reject' | 'accept' |

### Behavior Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| dismissable | Whether clicking outside dismisses popup | boolean | true |
| closeOnEscape | Whether escape key closes popup | boolean | true |

### Callback Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| onShow | Callback when popup is shown | () => void | - |
| beforeShow | Callback before popup is shown | () => void | - |
| beforeHide | Callback before popup is hidden | () => void | - |

## Imperative API

The `confirmPopup` function provides an imperative way to show confirmation dialogs:

```tsx
import { confirmPopup } from '@1money/react-ui';

confirmPopup({
  target: buttonElement,
  message: 'Confirmation message',
  accept: () => {}, // Accept callback
  reject: () => {}, // Reject callback
  // ... other options
});
```

## Styling

The ConfirmPopup component uses SCSS modules with BEM-like naming conventions. Customize through:

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

### Delete Confirmation with Feedback

```tsx
import { ConfirmPopup, confirmPopup } from '@1money/react-ui';
import { Toast } from '@1money/react-ui';
import { useRef } from 'react';

const DeleteButton = ({ item, onDelete }) => {
  const toastRef = useRef(null);

  const handleDelete = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Are you sure you want to delete "${item.name}"? This action cannot be undone.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-danger',
      accept: () => {
        onDelete(item.id);
        toastRef.current?.show({
          severity: 'success',
          summary: 'Deleted',
          detail: `${item.name} has been deleted successfully`
        });
      },
      reject: () => {
        toastRef.current?.show({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Delete operation was cancelled'
        });
      }
    });
  };

  return (
    <>
      <Button severity="danger" onClick={handleDelete}>
        Delete {item.name}
      </Button>
      <ConfirmPopup />
      <Toast ref={toastRef} />
    </>
  );
};
```

### Save Changes Confirmation

```tsx
const FormComponent = ({ isDirty, onSave, onDiscard }) => {
  const handleSubmit = (event) => {
    if (isDirty) {
      confirmPopup({
        target: event.currentTarget,
        message: 'You have unsaved changes. Would you like to save them before leaving?',
        icon: 'pi pi-question-circle',
        acceptLabel: 'Save Changes',
        rejectLabel: 'Discard',
        accept: async () => {
          try {
            await onSave();
            // Navigate away or close form
          } catch (error) {
            console.error('Save failed:', error);
          }
        },
        reject: () => {
          onDiscard();
          // Navigate away without saving
        }
      });
    } else {
      // No changes, safe to proceed
      handleNavigation();
    }
  };

  return (
    <>
      <Button onClick={handleSubmit}>
        Submit Form
      </Button>
      <ConfirmPopup />
    </>
  );
};
```

### Multi-action Confirmation

```tsx
const AdminActions = ({ user }) => {
  const handleSuspend = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Suspend user ${user.email}? They will not be able to access the system.`,
      icon: 'pi pi-user-minus',
      position: 'bottom',
      acceptLabel: 'Suspend',
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-warning',
      accept: () => suspendUser(user.id),
      reject: () => console.log('Suspend cancelled')
    });
  };

  const handleDelete = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Permanently delete user ${user.email}? This action cannot be undone and will remove all associated data.`,
      icon: 'pi pi-trash',
      position: 'bottom-left',
      acceptLabel: 'Delete Permanently',
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-danger',
      defaultFocus: 'reject', // Focus cancel button by default for destructive action
      accept: () => deleteUser(user.id),
      reject: () => console.log('Delete cancelled')
    });
  };

  return (
    <>
      <div className="admin-actions">
        <Button severity="warning" onClick={handleSuspend}>
          Suspend User
        </Button>
        <Button severity="danger" onClick={handleDelete}>
          Delete User
        </Button>
      </div>
      <ConfirmPopup />
    </>
  );
};
```

### Async Operations with Loading States

```tsx
const AsyncActionButton = ({ action, actionName }) => {
  const [loading, setLoading] = useState(false);

  const handleAction = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Are you sure you want to ${actionName.toLowerCase()}? This will take a few moments to complete.`,
      icon: 'pi pi-cog',
      acceptLabel: actionName,
      accept: async () => {
        setLoading(true);
        try {
          await action();
          toast.current?.show({
            severity: 'success',
            summary: 'Success',
            detail: `${actionName} completed successfully`
          });
        } catch (error) {
          toast.current?.show({
            severity: 'error',
            summary: 'Error',
            detail: `${actionName} failed: ${error.message}`
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return (
    <>
      <Button 
        onClick={handleAction} 
        loading={loading}
        disabled={loading}
      >
        {loading ? 'Processing...' : actionName}
      </Button>
      <ConfirmPopup />
    </>
  );
};
```

### Custom Positioning and Styling

```tsx
const CustomStyledConfirm = () => {
  const showCustomConfirm = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'This is a custom styled confirmation popup.',
      icon: 'pi pi-star',
      position: 'right-start',
      acceptLabel: 'Awesome!',
      rejectLabel: 'Maybe Later',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptClassName: 'p-button-success p-button-raised',
      rejectClassName: 'p-button-text',
      onShow: () => console.log('Custom popup shown'),
      onHide: () => console.log('Custom popup hidden')
    });
  };

  return (
    <>
      <Button 
        className="p-button-outlined"
        onClick={showCustomConfirm}
      >
        Show Custom Popup
      </Button>
      <ConfirmPopup prefixCls="custom-confirm-popup" />
    </>
  );
};
```

### Batch Operations Confirmation

```tsx
const BatchOperations = ({ selectedItems, onBatchDelete }) => {
  const handleBatchDelete = (event) => {
    const count = selectedItems.length;
    
    confirmPopup({
      target: event.currentTarget,
      message: `Delete ${count} selected item${count > 1 ? 's' : ''}? This action cannot be undone.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: `Delete ${count} Item${count > 1 ? 's' : ''}`,
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-danger',
      accept: () => {
        onBatchDelete(selectedItems.map(item => item.id));
      }
    });
  };

  return (
    <>
      <Button 
        severity="danger" 
        onClick={handleBatchDelete}
        disabled={selectedItems.length === 0}
      >
        Delete Selected ({selectedItems.length})
      </Button>
      <ConfirmPopup />
    </>
  );
};
```