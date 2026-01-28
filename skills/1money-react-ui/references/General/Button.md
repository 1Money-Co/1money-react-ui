---
name: Button
category: General
description: A versatile button component built on top of PrimeReact's Button with enhanced styling and customization options.
---

# Button

## Component Overview

A versatile button component built on top of PrimeReact's Button with enhanced styling and customization options.

### Features

- Multiple severity variants including custom 1Money styles
- Three sizes: small, medium, large
- Loading state with custom spinner
- Active state support
- Full PrimeReact Button compatibility
- Built-in accessibility features

## Usage Scenarios

### When to use
- Trigger primary/secondary actions (submit, confirm, save, continue, etc.)
- Form submission or toolbar actions
- Use with Modal / Popup / Drawer action areas

### When not to use
- Purely for displaying information (please use Typography / Badge etc.)
- Need navigation link but semantic is link (prioritize `<a>` or Link component/wrapper)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-grey-night`, `$color-negative`, `$color-negative-active`, `$color-negative-hover`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`, `$color-primary-white`, `$color-secondary`, `$color-secondary-active`, `$color-secondary-hover`, `$color-warning`, `$color-warning-active`, `$color-warning-hover`
- Border radius (px, extracted from source style): 8, 12, 36
- Font size (px, extracted from source style): 12, 14, 16
- Line height (px, extracted from source style): 8, 16, 20, 26
- Height/Max-height (px, extracted from source style): 14, 16, 20, 32, 40, 52
- Padding values (px, extracted from source style): 10, 12, 16
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact Button](https://primereact.org/button/).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| severity | Button style variant | `'primary' \| 'secondary' \| 'grey' \| 'black' \| 'white' \| 'danger' \| 'danger-light' \| 'primary-landing' \| 'secondary-landing' \| 'primary-outline' \| 'secondary-outline' \| PrimeSeverity` | `'primary'` |
| size | Button size variant | `'small' \| 'medium' \| 'large'` | `'large'` |
| active | Active state | `boolean` | `false` |
| prefixCls | Component class prefix | `string` | `"button"` |
| ref | Reference to HTML button | `RefObject<HTMLButtonElement>` | - |

> Common inherited props: `onClick`, `disabled`, `loading`, `icon`, `iconPos`, `rounded`, `text`, `outlined`, `link`, `tooltip`.

## Examples

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

```tsx
<div className="button-group">
  <Button severity="primary">Save</Button>
  <Button severity="secondary">Cancel</Button>
</div>
```

```tsx
<Button icon="pi pi-check" iconPos="left">
  Confirm
</Button>
```

## Core Principles

- **Strict Component Usage**: Always import `Button` from `@1money/react-ui`. **NEVER** import directly from `primereact/button`.
- **Styling Integrity**: Do not override button colors or dimensions via `style` or `className`. Use the `severity` and `size` props.
- **Loading State**: Use the `loading` prop; do not manually swap the button label or icon for a spinner.
- **Accessibility**: Ensure `onClick` handlers are present for interactive buttons (unless type="submit").

