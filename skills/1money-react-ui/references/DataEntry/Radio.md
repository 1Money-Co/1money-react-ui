---
name: Radio
category: DataEntry
description: A customizable radio button component built on top of PrimeReact's RadioButton with enhanced styling and additional features.
---

# Radio

## Component Overview

A customizable radio button component built on top of PrimeReact's RadioButton with enhanced styling and additional features.

### Features

- Three size variants: small (sm), medium (md), large (lg)
- Custom styling with SCSS modules
- Disabled and invalid states
- Built-in label support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact RadioButton compatibility

## Usage Scenarios

### When to use
- Explicit switch or selection from few options (Checkbox/Radio)
- Need to express boolean value (Switch) or multi/single selection (Group) in forms

### When not to use
- Large number of options and filtering is required (consider Select/Dropdown)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact RadioButton](https://primereact.org/radiobutton/).

### Component Props

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"radio"` |
| wrapperCls | Outer wrapper class | `string` | - |
| innerCls | Inner container class | `string` | - |
| radioCls | Radio element class | `string` | - |
| labelCls | Label element class | `string` | - |
| label | Label content | `ReactNode` | - |
| size | Component size | `'sm' \| 'md' \| 'lg'` | `'md'` |
| required | Required indicator | `boolean` | - |
| invalid | Invalid state | `boolean` | - |

> Inherits common props: `value`, `name`, `disabled`, `tooltip`, `checked`.
| innerCls | Class for container | `string` | - |
| radioCls | Class for radio element | `string` | - |
| labelCls | Class for label | `string` | - |
| invalid | Invalid state | `boolean` | `false` |
| required | Required state | `boolean` | `false` |

> Common inherited props: `value`, `checked`, `onChange`, `disabled`, `name`, `id`.

## Examples

```tsx
import { Radio } from '@1money/react-ui';

// Basic radio button
<Radio
  id="option1"
  name="group"
  value="option1"
/>

// Controlled radio button
const [selectedValue, setSelectedValue] = useState('');

<Radio
  id="option1"
  name="group"
  value="option1"
  checked={selectedValue === 'option1'}
  onChange={(e) => setSelectedValue(e.value)}
/>

// With label
<Radio
  id="option1"
  name="group"
  value="option1"
  label="Option 1"
  checked={selectedValue === 'option1'}
  onChange={(e) => setSelectedValue(e.value)}
/>

// Different sizes
<Radio size="sm" label="Small" />
<Radio size="md" label="Medium" />
<Radio size="lg" label="Large" />

// Disabled state
<Radio
  id="disabled"
  name="group"
  value="disabled"
  label="Disabled Option"
  disabled
/>

// Invalid state
<Radio
  id="invalid"
  name="group"
  value="invalid"
  label="Invalid Option"
  invalid
/>
```

```tsx
{
  originalEvent: Event;
  value: any;
  checked: boolean;
  stopPropagation(): void;
  preventDefault(): void;
  target: {
    name: string;
    id: string;
    value: any;
    checked: boolean;
  };
}
```

```tsx
const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = [
    { id: 'option1', value: 'option1', label: 'Option 1' },
    { id: 'option2', value: 'option2', label: 'Option 2' },
    { id: 'option3', value: 'option3', label: 'Option 3' }
  ];

  return (
    <fieldset>
      <legend>Choose an option:</legend>
      {options.map(option => (
        <Radio
          key={option.id}
          id={option.id}
          name="example-group"
          value={option.value}
          label={option.label}
          checked={selectedValue === option.value}
          onChange={(e) => setSelectedValue(e.value)}
        />
      ))}
    </fieldset>
  );
};
```

## Core Principles

- **Grouping**: Prefer **`RadioGroup`** over individual `Radio` buttons for standard mutually exclusive options. Use `Radio` only when custom layout requirements prevent grouping.
- **Accessibility**: When using standalone `Radio` components, ensure they share the same `name` attribute to function as a group.
- **Labeling**: Use the `label` prop instead of external `<label>` tags to ensure click targets are correctly sized and accessible.

