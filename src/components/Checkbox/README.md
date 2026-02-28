# Checkbox

A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.

## Features

- Normal (boolean) and tristate (true/false/null) modes
- Three sizes: `sm`, `md`, `lg`
- Controlled and uncontrolled usage
- Custom styling via className props
- Disabled and invalid states
- Label support with built-in layout

## Basic Usage

```tsx
import { Checkbox } from '@1money/react-ui';

// Uncontrolled checkbox
<Checkbox defaultChecked={false} label="Accept terms" />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onChange={setChecked} label="Accept terms" />

// Tristate checkbox
const [value, setValue] = useState<boolean | null>(null);
<Checkbox tristate value={value} onChange={setValue} label="Select all" />

// Disabled state
<Checkbox disabled checked label="Disabled" />

// With size
<Checkbox size="lg" label="Large checkbox" />
```

## Props

### Base Props (shared)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Classname prefix for component styling | `string` | `"checkbox"` |
| size | Checkbox size variant | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | Label content rendered next to checkbox | `ReactNode` | - |
| disabled | Whether the checkbox is disabled | `boolean` | - |
| required | Whether the checkbox is required | `boolean` | - |
| invalid | Whether the checkbox is in invalid state | `boolean` | - |
| id | HTML id attribute | `string` | - |
| name | HTML name attribute | `string` | - |
| wrapperCls | Additional class for wrapper div | `string` | - |
| innerCls | Additional class for inner div | `string` | - |
| checkboxCls | Additional class for checkbox element | `string` | - |
| labelCls | Additional class for label element | `string` | - |

### Normal Mode Props (`tristate` omitted or `false`)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Must be `false` or omitted | `false` | - |
| checked | Controlled checked state | `boolean` | - |
| defaultChecked | Initial checked state (uncontrolled) | `boolean` | `false` |
| onChange | Callback when checked state changes | `(checked: boolean) => void` | - |

### Tristate Mode Props (`tristate={true}`)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Must be `true` | `true` | - |
| value | Controlled tristate value | `boolean \| null` | - |
| defaultValue | Initial tristate value (uncontrolled) | `boolean \| null` | `null` |
| onChange | Callback when value changes | `(state: boolean \| null) => void` | - |

## Examples

### Controlled Checkbox

```tsx
const ControlledExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Subscribe to newsletter"
    />
  );
};
```

### Tristate Checkbox

```tsx
const TristateExample = () => {
  const [value, setValue] = useState<boolean | null>(null);

  return (
    <Checkbox
      tristate
      value={value}
      onChange={setValue}
      label="Select all items"
    />
  );
};
```

### Size Variants

```tsx
<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />
<Checkbox size="lg" label="Large" />
```
