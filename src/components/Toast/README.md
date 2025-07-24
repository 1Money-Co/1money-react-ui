# Toast

A toast notification system built on top of PrimeReact's Toast with enhanced styling and automatic message formatting. Toast notifications are non-blocking messages that appear temporarily to provide feedback about user actions or system status.

## Features

- Four severity levels with custom icons and styling (success, info, warn, error)
- Automatic message formatting with icons and typography
- Custom close icons
- Configurable display duration
- Stack multiple messages
- Built-in accessibility features
- Programmatic control via ref methods

## Basic Usage

```tsx
import { Toast } from '@1money/react-ui';
import { useRef } from 'react';

// Basic setup
const toast = useRef<ToastClass>(null);

<Toast ref={toast} />

// Show a simple success message
const showSuccess = () => {
  toast.current?.show({
    severity: 'success',
    summary: 'Success',
    detail: 'Operation completed successfully',
    life: 3000
  });
};

// Show multiple messages
const showMultiple = () => {
  toast.current?.show([
    {
      severity: 'success',
      summary: 'Payment Successful',
      detail: 'You successfully topped up $1000 USD',
    },
    {
      severity: 'info', 
      summary: 'Account Linked',
      detail: 'You can now manage multiple accounts in one place',
    }
  ]);
};
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | 'toast' |
| ref | Reference to access toast methods | RefObject<ToastClass> | - |

## Inherited Props

This component extends PrimeReact's Toast component and inherits all its props:

- `position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center'`
- `baseZIndex?: number` - Base z-index value
- `autoZIndex?: boolean` - Whether to automatically manage z-index
- `breakpoints?: object` - Responsive breakpoints
- `transitionOptions?: object` - Animation transition options

## Toast Methods (via ref)

| Method | Description | Parameters |
| --- | --- | --- |
| show | Display one or more toast messages | message: ToastMessage \| ToastMessage[] |
| clear | Clear all displayed messages | - |
| remove | Remove specific messages | message: ToastMessage \| ToastMessage[] |
| replace | Replace existing messages | message: ToastMessage \| ToastMessage[] |
| getElement | Get the toast DOM element | - |

## ToastMessage Properties

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| severity | Message severity level | 'success' \| 'info' \| 'warn' \| 'error' | - |
| summary | Message title/header | string | - |
| detail | Message content/description | string | - |
| life | Display duration in milliseconds | number | 5000 |
| closable | Whether message can be closed | boolean | true |
| sticky | Whether message persists until manually closed | boolean | false |
| content | Custom content component (overrides default formatting) | ReactNode | - |
| closeIcon | Custom close icon | ReactNode | - |

## Severity Levels

### Success
- **Icon**: Check mark
- **Color**: White on green background
- **Use for**: Successful operations, confirmations, completed tasks

### Info  
- **Icon**: Information
- **Color**: Blue on light blue background
- **Use for**: General information, tips, neutral updates

### Warning
- **Icon**: Warning triangle
- **Color**: Black on yellow background
- **Use for**: Cautions, potential issues, non-critical alerts

### Error
- **Icon**: Cross/X
- **Color**: White on red background
- **Use for**: Errors, failures, critical issues requiring attention

## Styling

The Toast component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization
4. Position-specific styling through PrimeReact props

## Accessibility

- ARIA live regions for screen reader announcements
- Keyboard navigation support
- Focus management for interactive elements
- High contrast mode compatible
- Proper color contrast ratios for all severity levels

## Examples

### Financial Transaction Notifications

```tsx
const TransactionToasts = () => {
  const toast = useRef<ToastClass>(null);

  const showTopUp = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'Top-up Successful',
      detail: 'You successfully added $500.00 to your account',
      life: 4000
    });
  };

  const showPaymentFailure = () => {
    toast.current?.show({
      severity: 'error',
      summary: 'Payment Failed',
      detail: 'Insufficient funds. Please add money to your account',
      life: 6000
    });
  };

  return (
    <>
      <Button onClick={showTopUp}>Complete Top-up</Button>
      <Button onClick={showPaymentFailure}>Simulate Error</Button>
      <Toast ref={toast} position="top-right" />
    </>
  );
};
```

### System Status Updates

```tsx
const SystemNotifications = () => {
  const toast = useRef<ToastClass>(null);

  const showMaintenanceWarning = () => {
    toast.current?.show({
      severity: 'warn',
      summary: 'Scheduled Maintenance',
      detail: 'System will be unavailable on Sunday from 2-4 AM EST',
      life: 8000,
      sticky: true
    });
  };

  const showFeatureInfo = () => {
    toast.current?.show({
      severity: 'info',
      summary: 'New Feature Available',
      detail: 'Try our new expense categorization tool in Settings',
      life: 5000
    });
  };

  return (
    <>
      <Toast ref={toast} position="bottom-center" />
    </>
  );
};
```

### Multiple Message Queue

```tsx
const showProgressUpdates = () => {
  toast.current?.show([
    {
      severity: 'info',
      summary: 'Processing Payment',
      detail: 'Your payment is being processed...',
      life: 2000
    },
    {
      severity: 'info', 
      summary: 'Verifying Transaction',
      detail: 'Verifying with your bank...',
      life: 3000
    },
    {
      severity: 'success',
      summary: 'Payment Complete',
      detail: 'Your payment of $250.00 has been processed',
      life: 4000
    }
  ]);
};
```

### Custom Positioned Toast

```tsx
<Toast 
  ref={toast}
  position="top-left"
  breakpoints={{ '640px': 'top-center' }}
  autoZIndex
  baseZIndex={1000}
/>
```
