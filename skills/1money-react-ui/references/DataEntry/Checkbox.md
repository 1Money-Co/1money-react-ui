---
name: Checkbox
category: DataEntry
description: A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.
---

# Checkbox

## Component Overview

A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.

### Features

- Single checkbox and checkbox group support
- Indeterminate state for partial selections
- Custom styling with SCSS modules
- Disabled state support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact Checkbox compatibility

## Usage Scenarios

### When to use
- Explicit switch or selection from few options (Checkbox/Radio)
- Need to express boolean value (Switch) or multi/single selection (Group) in forms

### When not to use
- Large number of options and filtering is required (consider Select/Dropdown)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`
- Font size (px, extracted from source style): 14
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Wrapper). Wraps [PrimeReact Checkbox](https://primereact.org/checkbox/) or [TriStateCheckbox](https://primereact.org/tristatecheckbox/).

### Component Props

#### Base Props (All Modes)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | `string` | - |
| wrapperCls | Wrapper class | `string` | - |
| innerCls | Inner container class | `string` | - |
| checkboxCls | Checkbox element class | `string` | - |
| prefixCls | Component class prefix | `string` | `"checkbox"` |
| labelCls | Label class | `string` | - |
| size | Size variant | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | Label content | `ReactNode` | - |
| disabled | Disabled state | `boolean` | - |
| required | Show required indicator | `boolean` | - |
| name | Input name | `string` | - |
| invalid | Invalid state | `boolean` | - |

#### Normal Mode
`tristate` is undefined or false.

| Name | Description | Type |
| --- | --- | --- |
| tristate | Mode flag | `false` |
| checked | Checked state | `boolean` |
| onChange | Change handler | `(checked: boolean) => void` |

#### TriState Mode
`tristate` is true.

| Name | Description | Type |
| --- | --- | --- |
| tristate | Mode flag | `true` |
| value | Current value | `boolean \| null` |
| onChange | Change handler | `(state: boolean \| null) => void` |
| label | Label content | `ReactNode` | - |
| size | Component size | `'sm' \| 'md' \| 'lg'` | `'md'` |
| prefixCls | Component class prefix | `string` | `"checkbox"` |
| wrapperCls | Class for outer wrapper | `string` | - |
| innerCls | Class for item container | `string` | - |
| checkboxCls | Class for checkbox element | `string` | - |
| labelCls | Class for label | `string` | - |
| message | Validation/Help message | `ReactNode` | - |
| invalid | Invalid state | `boolean` | `false` |
| required | Required state | `boolean` | `false` |

#### Normal Mode (tristate=false)
Inherits from [PrimeReact Checkbox](https://primereact.org/checkbox/) (via `CheckboxNormalProps`).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Mode indicator | `false` | - |
| checked | Checked state | `boolean` | - |
| onChange | Check handler | `(checked: boolean) => void` | - |

#### TriState Mode (tristate=true)
Inherits from [PrimeReact TriStateCheckbox](https://primereact.org/tristatecheckbox/) (via `CheckboxTriStateProps`).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Mode indicator | `true` | - |
| value | Current state | `boolean \| null` | - |
| onChange | State change handler | `(state: boolean \| null) => void` | - |

## Examples

```tsx
import { Checkbox } from '@1money/react-ui';

// Basic checkbox
<Checkbox />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox
  checked={checked}
  onChange={(next) => setChecked(next)}
/>

// With label
<Checkbox
  checked={checked}
  label="I accept the terms and conditions"
  onChange={(next) => setChecked(next)}
/>

// Disabled state
<Checkbox disabled checked />

// TriState mode
const [state, setState] = useState<boolean | null>(null);
<Checkbox
  tristate
  value={state}
  onChange={(e) => setState(e)}
  label="TriState Checkbox"
/>
```
<Checkbox
  tristate
  value={state}
  onChange={(next) => setState(next)}
/>
```

```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    newsletter: false,
    terms: false,
    marketing: false
  });

  const handleChange = (field) => (checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  return (
    <form>
      <div className="field">
        <Checkbox
          inputId="newsletter"
          checked={formData.newsletter}
          onChange={handleChange('newsletter')}
        />
        <label htmlFor="newsletter">Subscribe to newsletter</label>
      </div>

      <div className="field">
        <Checkbox
          inputId="terms"
          checked={formData.terms}
          onChange={handleChange('terms')}
          required
        />
        <label htmlFor="terms">I agree to the terms *</label>
      </div>

      <div className="field">
        <Checkbox
          inputId="marketing"
          checked={formData.marketing}
          onChange={handleChange('marketing')}
        />
        <label htmlFor="marketing">Receive marketing emails</label>
      </div>
    </form>
  );
};
```

## Core Principles

- **Mode Consistency**: Explicitly set `tristate` prop (`true`/`false`) to match your data model. Do not mix boolean and null values in normal mode.
- **Grouping**: For multiple options, **MUST** use `CheckboxGroup` instead of multiple individual `Checkbox` components.
- **Input Association**: Ensure `id` and `label` are correctly associated if not using the built-in `label` prop.

