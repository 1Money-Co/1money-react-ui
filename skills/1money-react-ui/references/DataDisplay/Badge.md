---
name: Badge
category: DataDisplay
description: A versatile badge component built on top of PrimeReact's Badge with enhanced severity variants and custom styling. Perfect for displaying status indicators, labels, counts, and other contextual information.
---

# Badge

## Component Overview

A versatile badge component built on top of PrimeReact's Badge with enhanced severity variants and custom styling. Perfect for displaying status indicators, labels, counts, and other contextual information.

### Features

- Multiple severity variants including custom 1Money styles
- Built on PrimeReact Badge for robust functionality
- Flexible content support (text, numbers, icons)
- Overlay positioning for notifications and counters
- Custom styling and theming support
- Consistent color system with semantic meanings
- Full TypeScript support

## Usage Scenarios

### When to use
- Display count/status tags (unread count, tags, status dots, etc.)

### When not to use
- Need interactive filtering (consider Tag/Filter component, if exists)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-deep`, `$color-grey-midnight`, `$color-info`, `$color-info-light`, `$color-negative`, `$color-negative-background`, `$color-primary-black`, `$color-success`, `$color-success-background`, `$color-warning-background`, `$color-warning-dark`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 12
- Height/Max-height (px, extracted from source style): 24
- Padding values (px, extracted from source style): 8
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact Badge](https://primereact.org/badge/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| severity | Color variant | `'neutral' \| 'recommend' \| 'warning' \| 'negative' \| 'black' \| 'success' \| PrimeSeverity` | `'neutral'` |
| prefixCls | Component class prefix | `string` | `"badge"` |

### Inherited Props (PrimeReact Badge)

This component inherits all props from PrimeReact Badge (except `severity` which is overridden or extended). Common properties include:

- `value?: any` - Badge content
- `size?: 'normal' | 'large' | 'xlarge'` - Size
- `style?: CSSProperties` - Inline styles
- `children?: ReactNode` - Child nodes (for overlay scenarios)
- `pt?: BadgePassThroughOptions` - Passthrough configuration
- `ptOptions?: PassThroughOptions` - Passthrough options
- `unstyled?: boolean` - Disable default PrimeReact styles
- And all native `HTMLSpanElement` attributes

## Examples

```tsx
import { Badge } from '@1money/react-ui';

// Basic badges with different severities
<Badge severity="success" value="Active" />
<Badge severity="warning" value="Pending" />
<Badge severity="negative" value="Failed" />
<Badge severity="neutral" value="Draft" />

// Badge with custom content
<Badge severity="recommend" value="New Feature" />

// Badge as overlay notification
<div style={{ position: 'relative', display: 'inline-block' }}>
  <button>Messages</button>
  <Badge value="3" severity="negative" />
</div>
```

```tsx
const orderStatus = 'completed';

const getStatusBadge = (status) => {
  const statusMap = {
    pending: { severity: 'warning', label: 'Pending' },
    processing: { severity: 'recommend', label: 'Processing' },
    completed: { severity: 'success', label: 'Completed' },
    failed: { severity: 'negative', label: 'Failed' },
    cancelled: { severity: 'neutral', label: 'Cancelled' },
  };

  const { severity, label } = statusMap[status] || statusMap.neutral;
  return <Badge severity={severity} value={label} />;
};

<div className="order-card">
  <h3>Order #12345</h3>
  {getStatusBadge(orderStatus)}
</div>
```

```tsx
const notifications = 5;
const messages = 12;

<div className="nav-menu">
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <button className="nav-button">
      Notifications
    </button>
    {notifications > 0 && (
      <Badge
        value={notifications > 99 ? '99+' : notifications.toString()}
        severity="negative"
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          minWidth: '20px',
          height: '20px',
        }}
      />
    )}
  </div>

  <div style={{ position: 'relative', display: 'inline-block', marginLeft: '16px' }}>
    <button className="nav-button">
      Messages
    </button>
    {messages > 0 && (
      <Badge
        value={messages}
        severity="recommend"
        size="large"
      />
    )}
  </div>
</div>
```

## Core Principles

- **Semantics**: Use specific severity levels (like `severity="recommend"` for pro/new features) rather than generic colors.
- **Content**: Primarily for short text (counts, labels); keep content minimal to fit the small form factor.
- **Positioning**: For overlay usage (notification dots), ensure the parent container has `position: relative`.

