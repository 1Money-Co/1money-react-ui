# Badge

A versatile badge component built on top of PrimeReact's Badge with enhanced severity variants and custom styling. Perfect for displaying status indicators, labels, counts, and other contextual information.

## Features

- Multiple severity variants including custom 1Money styles
- Built on PrimeReact Badge for robust functionality  
- Flexible content support (text, numbers, icons)
- Overlay positioning for notifications and counters
- Custom styling and theming support
- Consistent color system with semantic meanings
- Full TypeScript support

## Basic Usage

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

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the badge | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "badge" |
| severity | Badge color variant | 'neutral' \| 'recommend' \| 'warning' \| 'negative' \| 'black' \| 'success' \| PrimeBadgeProps['severity'] | 'neutral' |

### Inherited Props

Extends PrimeReact's Badge component with all its props:

- `value?: string | number` - Content to display in the badge
- `size?: 'normal' | 'large' | 'xlarge'` - Badge size variant
- `style?: CSSProperties` - Inline styles
- `children?: ReactNode` - Child content (for overlay mode)

## Severity Variants

### Custom 1Money Severities
- **neutral**: Default gray badge for general information
- **recommend**: Blue badge for recommendations and highlights  
- **warning**: Orange badge for warnings and cautions
- **negative**: Red badge for errors and critical states
- **black**: Black badge for primary emphasis
- **success**: Green badge for success states and completion

### PrimeReact Severities
Also supports standard PrimeReact severities:
- **info**: Informational blue badge
- **danger**: Danger red badge
- **contrast**: High contrast badge

## Styling

The Badge component uses SCSS modules with BEM-like naming:

1. Use `className` prop for additional styles
2. Override `prefixCls` for complete style control
3. Severity variants automatically apply color schemes
4. Inherits PrimeReact Badge positioning and sizing

## Accessibility

- Proper semantic markup for screen readers
- Color schemes meet accessibility contrast requirements
- Support for ARIA attributes via inherited props
- Keyboard navigation compatible when interactive

## Examples

### Status Indicators
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

### Notification Badges
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

### Feature Badges
```tsx
const features = [
  { name: 'Premium Feature', isNew: true, isPro: false },
  { name: 'Basic Feature', isNew: false, isPro: false },
  { name: 'Pro Feature', isNew: false, isPro: true },
  { name: 'Beta Feature', isNew: true, isPro: true },
];

<div className="feature-list">
  {features.map((feature, index) => (
    <div key={index} className="feature-item">
      <span className="feature-name">{feature.name}</span>
      <div className="feature-badges">
        {feature.isNew && (
          <Badge severity="recommend" value="New" size="normal" />
        )}
        {feature.isPro && (
          <Badge severity="black" value="Pro" size="normal" />
        )}
      </div>
    </div>
  ))}
</div>
```

### Transaction Status
```tsx
const transactions = [
  { id: 1, amount: '$100', status: 'completed', type: 'deposit' },
  { id: 2, amount: '$250', status: 'pending', type: 'withdrawal' },
  { id: 3, amount: '$50', status: 'failed', type: 'transfer' },
];

<div className="transaction-list">
  {transactions.map(transaction => (
    <div key={transaction.id} className="transaction-row">
      <div className="transaction-info">
        <span className="amount">{transaction.amount}</span>
        <span className="type">{transaction.type}</span>
      </div>
      <Badge 
        severity={
          transaction.status === 'completed' ? 'success' :
          transaction.status === 'pending' ? 'warning' :
          'negative'
        }
        value={transaction.status}
      />
    </div>
  ))}
</div>
```

### User Role Badges
```tsx
const users = [
  { name: 'John Doe', role: 'admin', isOnline: true },
  { name: 'Jane Smith', role: 'user', isOnline: false },
  { name: 'Bob Wilson', role: 'moderator', isOnline: true },
];

const getRoleBadge = (role) => {
  const roleConfig = {
    admin: { severity: 'black', label: 'Admin' },
    moderator: { severity: 'recommend', label: 'Moderator' },  
    user: { severity: 'neutral', label: 'User' },
  };
  
  return roleConfig[role] || roleConfig.user;
};

<div className="user-list">
  {users.map((user, index) => (
    <div key={index} className="user-card">
      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <div className="user-badges">
          <Badge 
            severity={getRoleBadge(user.role).severity}
            value={getRoleBadge(user.role).label}
          />
          <Badge 
            severity={user.isOnline ? 'success' : 'neutral'}
            value={user.isOnline ? 'Online' : 'Offline'}
          />
        </div>
      </div>
    </div>
  ))}
</div>
```

### Product Categories
```tsx
const products = [
  { name: 'iPhone 14', category: 'Electronics', inStock: true, isPopular: true },
  { name: 'Wireless Headphones', category: 'Audio', inStock: false, isPopular: false },
  { name: 'Smart Watch', category: 'Wearables', inStock: true, isPopular: true },
];

<div className="product-grid">
  {products.map((product, index) => (
    <div key={index} className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <div className="product-badges">
        <Badge severity="neutral" value={product.category} />
        <Badge 
          severity={product.inStock ? 'success' : 'negative'}
          value={product.inStock ? 'In Stock' : 'Out of Stock'}
        />
        {product.isPopular && (
          <Badge severity="recommend" value="Popular" />
        )}
      </div>
    </div>
  ))}
</div>
```

### Priority Levels
```tsx
const tasks = [
  { title: 'Fix critical bug', priority: 'high' },
  { title: 'Update documentation', priority: 'medium' },
  { title: 'Code review', priority: 'low' },
];

const getPriorityBadge = (priority) => {
  const priorityMap = {
    high: { severity: 'negative', label: 'High Priority' },
    medium: { severity: 'warning', label: 'Medium Priority' },
    low: { severity: 'success', label: 'Low Priority' },
  };
  
  return priorityMap[priority] || priorityMap.medium;
};

<div className="task-list">
  {tasks.map((task, index) => (
    <div key={index} className="task-item">
      <span className="task-title">{task.title}</span>
      <Badge 
        severity={getPriorityBadge(task.priority).severity}
        value={getPriorityBadge(task.priority).label}
        size="large"
      />
    </div>
  ))}
</div>
```

### Custom Styling
```tsx
<div className="custom-badges">
  <Badge 
    severity="recommend"
    value="Custom Style"
    style={{
      fontSize: '14px',
      fontWeight: 'bold',
      padding: '8px 16px',
      textTransform: 'uppercase',
    }}
  />
  
  <Badge 
    severity="success"
    value="✓ Verified"
    className="verified-badge"
  />
  
  <Badge 
    severity="black"
    value="VIP"
    size="xlarge"
  />
</div>

<style>
.verified-badge {
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
```
