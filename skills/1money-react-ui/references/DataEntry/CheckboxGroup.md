---
name: CheckboxGroup
category: DataEntry
description: A grouped checkbox component that manages multiple selections with consistent styling and behavior.
---

# CheckboxGroup

## Component Overview

A grouped checkbox component that manages multiple selections with consistent styling and behavior. Supports normal mode and tristate mode for complex selection scenarios.

### Features

- Grouped selection with consistent layout
- Normal and tristate modes
- Size variants
- Custom label and class hooks
- Form-friendly API

## Usage Scenarios

### When to use
- Need multiple selection from a group of options
- Need to express boolean/tristate status in batch

### When not to use
- Large number of options and filtering is required (consider Select/Dropdown)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`
- Font size (px, extracted from source style): 14
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Component).

### Component Props

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | HTML id attribute | `string` | - |
| prefixCls | Component class prefix | `string` | `"checkboxgroup"` |
| wrapperCls | Additional classes for wrapper | `string` | - |
| innerCls | Additional classes for inner container | `string` | - |
| checkboxGroupCls | Additional classes for group container | `string` | - |
| labelCls | Additional classes for label | `string` | - |
| size | Size variant | `'sm' \| 'md' \| 'lg'` | - |

#### Normal Mode
`tristate` is undefined or false.

| Name | Description | Type |
| --- | --- | --- |
| tristate | Mode flag | `false` |
| onChange | Change handler | `(checkedList: string[]) => void` |
| items | Checkbox items | `(CheckboxItemProps)[]` |

#### TriState Mode
`tristate` is true.

| Name | Description | Type |
| --- | --- | --- |
| tristate | Mode flag | `true` |
| onChange | Change handler | `(itemsState: Record<string, boolean \| null>) => void` |
| items | TriState Items | `(TriStateItemProps)[]` |
Inherits from: None (Custom Container).
Renders a group of [Checkbox](https://primereact.org/checkbox/) or [TriStateCheckbox](https://primereact.org/tristatecheckbox/) components.

### Common Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Component size | `'sm' \| 'md' \| 'lg'` | `'md'` |
| wrapperCls | Class for outer wrapper | `string` | - |
| innerCls | Class for item container | `string` | - |
| checkboxGroupCls | Class for group container | `string` | - |
| labelCls | Class for label | `string` | - |
| prefixCls | Prefix for CSS classes | `string` | - |
| id | DOM ID | `string` | - |

### Normal Mode (tristate = false)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Mode indicator | `false` | `false` |
| items | Array of checkbox items | `CheckboxItemNormal[]` | `[]` |
| onChange | Callback when selection list changes | `(checkedList: string[]) => void` | - |

#### CheckboxItemNormal
Inherits from [PrimeReact CheckboxProps](https://primereact.org/checkbox/#api) (omitting `checked`, `value`, `onChange`).
| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string` |
| label | Label content | `ReactNode` |
| checked | Controlled check state | `boolean` |
| onChange | Item specific change handler | `(checked: boolean) => void` |

### TriState Mode (tristate = true)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Mode indicator | `true` | - |
| items | Array of tristate items | `CheckboxItemTriState[]` | `[]` |
| onChange | Callback when state map changes | `(itemsState: Record<string, boolean \| null>) => void` | - |

#### CheckboxItemTriState
Inherits from [PrimeReact TriStateCheckboxProps](https://primereact.org/tristatecheckbox/#api) (omitting `value`, `onChange`).
| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string` |
| label | Label content | `ReactNode` |
| checked | **Deprecated**? Use `defaultValue` or state map | `boolean` |
| defaultValue | Initial state | `boolean \| null` |
| onChange | Item specific change handler | `(state: boolean \| null) => void` |

## Examples

```tsx
import { CheckboxGroup } from '@1money/react-ui';

// Basic group
const items = [
  { key: 'a', label: 'Option A' },
  { key: 'b', label: 'Option B' },
  { key: 'c', label: 'Option C' }
];

<CheckboxGroup
  items={items}
  onChange={(checkedList) => console.log(checkedList)}
/>

// With size
<CheckboxGroup size="sm" items={items} />
```

```tsx
// TriState group
const triItems = [
  { key: 't1', label: 'Alpha', defaultValue: null },
  { key: 't2', label: 'Beta', defaultValue: true }
];

<CheckboxGroup
  tristate
  items={triItems}
  onChange={(itemsState) => console.log(itemsState)}
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
      <CheckboxGroup
        items={[
          { key: 'newsletter', label: 'Subscribe to newsletter', checked: formData.newsletter, onChange: handleChange('newsletter') },
          { key: 'terms', label: 'I agree to the terms *', checked: formData.terms, onChange: handleChange('terms') },
          { key: 'marketing', label: 'Receive marketing emails', checked: formData.marketing, onChange: handleChange('marketing') }
        ]}
      />
    </form>
  );
};
```

## Core Principles

- **Data Driven**: **MUST** use the `items` prop to define checkboxes. Avoid manually iterating `Checkbox` children.
- **State Management**: The `onChange` callback provides the *entire* new state (array of IDs or record of states), not just the changed item.
- **Layout**: Use `checkboxGroupCls` to control the layout (flex/grid) of the items if the default stacking is insufficient.

