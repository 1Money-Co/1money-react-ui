---
name: Switch
category: DataEntry
description: A versatile switch component that supports both traditional toggle switches and button-style toggles, built on top of PrimeReact's InputSwitch and ToggleButton components with enhanced functionality.
---

# Switch

## Component Overview

A versatile switch component that supports both traditional toggle switches and button-style toggles, built on top of PrimeReact's InputSwitch and ToggleButton components with enhanced functionality.

### Features

- Two switch types: normal toggle switch and button toggle
- Built-in state management with controlled/uncontrolled modes
- Custom styling with SCSS modules
- Disabled state support
- Form integration capabilities
- Accessible keyboard navigation
- Full PrimeReact compatibility for both variants

## Usage Scenarios

### When to use
- Explicit switch or selection from few options (Checkbox/Radio)
- Need to express boolean value (Switch) or multi/single selection (Group) in forms

### When not to use
- Large number of options and filtering is required (consider Select/Dropdown)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-info`, `$color-primary`
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact InputSwitch](https://primereact.org/inputswitch/) (Normal) or [PrimeReact ToggleButton](https://primereact.org/togglebutton/) (Button).

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | - |

#### Normal Mode
`type` is undefined or `'normal'`. Inherits `InputSwitchProps`.

| Name | Description | Type |
| --- | --- | --- |
| type | Switch type | `'normal'` |

#### Button Mode
`type` is `'button'`. Inherits `ToggleButtonProps`.

| Name | Description | Type |
| --- | --- | --- |
| type | Switch type | `'button'` |
| defaultChecked | Initial checked state | `boolean` | `false` |
| prefixCls | Component class prefix | `string` | `"switch"` |

#### Normal Switch (default)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Variant type | `'normal'` | `'normal'` |
| onChange | Change handler | `(e: InputSwitchChangeEvent) => void` | - |

#### Button Switch (`type="button"`)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Variant type | `'button'` | - |
| onLabel | Label when ON | `string` | - |
| offLabel | Label when OFF | `string` | - |
| onChange | Change handler | `(e: ToggleButtonChangeEvent) => void` | - |

## Examples

```tsx
import { Switch } from '@1money/react-ui';

// Basic normal switch
<Switch />

// With initial state
<Switch defaultChecked />

// Button-style toggle
<Switch
  type="button"
  onLabel="Enabled"
  offLabel="Disabled"
  onChange={(e) => console.log('Toggled:', e.value)}
/>
```

## Core Principles

- **Semantics**: Use `type="normal"` (default) for settings/preferences (On/Off). Use `type="button"` for state toggles that look like buttons (e.g., "Monthly/Yearly" toggle).
- **Labeling**: For accessibility, always provide an `aria-label` or link to a label via `id` if the visible label is ambiguous.
- **State**: Can be uncontrolled (`defaultChecked`) or controlled (`checked` + `onChange`). Prefer controlled for form integrations.

