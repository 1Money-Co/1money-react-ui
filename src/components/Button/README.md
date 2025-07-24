# Button

A versatile button component built on top of PrimeReact's Button with enhanced styling and customization options.

## Features

- Multiple severity variants including custom 1Money styles
- Three sizes: small, medium, large
- Loading state with custom spinner
- Active state support
- Full PrimeReact Button compatibility
- Built-in accessibility features

## Basic Usage

```tsx
import { Button } from '@1money/react-ui';

// Basic button
<Button>Click me</Button>

// Different severities
<Button severity="primary">Primary</Button>
<Button severity="secondary">Secondary</Button>
<Button severity="danger">Danger</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading>Loading...</Button>

// Active state
<Button active>Active</Button>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "button" |
| active | Whether the button is in an active state | boolean | false |
| size | Button size variant | 'small' \| 'medium' \| 'large' | 'large' |
| severity | Button style variant | 'primary' \| 'secondary' \| 'grey' \| 'black' \| 'white' \| 'danger' \| 'primary-landing' \| 'secondary-landing' \| 'primary-outline' \| 'secondary-outline' \| PrimeButtonProps['severity'] | 'primary' |

## Inherited Props

This component extends PrimeReact's Button component and inherits all its props except `label`, `severity`, and `size` which are overridden. Common inherited props include:

- `onClick?: (event: MouseEvent<HTMLButtonElement>) => void`
- `disabled?: boolean`
- `loading?: boolean`
- `icon?: string`
- `iconPos?: 'left' | 'right' | 'top' | 'bottom'`
- `rounded?: boolean`
- `text?: boolean`
- `raised?: boolean`
- `outlined?: boolean`
- `link?: boolean`
- `badge?: string`
- `badgeClassName?: string`

## Styling

The Button component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using CSS custom properties for theme customization

## Accessibility

- Supports keyboard navigation
- Proper ARIA attributes inherited from PrimeReact
- Loading state announces to screen readers
- Focus management built-in

## Examples

### Button Group
```tsx
<div className="button-group">
  <Button severity="primary">Save</Button>
  <Button severity="secondary">Cancel</Button>
</div>
```

### Icon Button
```tsx
<Button icon="pi pi-check" iconPos="left">
  Confirm
</Button>
```

### Async Action
```tsx
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await submitForm();
  } finally {
    setLoading(false);
  }
};

<Button loading={loading} onClick={handleSubmit}>
  Submit Form
</Button>
```
