---
name: RadioGroup
category: DataEntry
description: A comprehensive radio group component that provides grouped radio button functionality with support for default and card variants, multiple layout directions, and advanced customization options.
---

# RadioGroup

## Component Overview

A comprehensive radio group component that provides grouped radio button functionality with support for default and card variants, multiple layout directions, and advanced customization options.

### Features

- Two display variants: default radio buttons and card-style selection
- Horizontal and vertical layout directions
- Three size variants: small (sm), medium (md), large (lg)
- Built-in label support with required field indication
- Custom styling for each variant
- Programmatic reset functionality via ref
- Auto-focus support for default selection
- Accessible keyboard navigation
- Full control over styling with multiple className props

## Usage Scenarios

### When to use
- Explicit switch or selection from few options (Checkbox/Radio)
- Need to express boolean value (Switch) or multi/single selection (Group) in forms

### When not to use
- Large number of options and filtering is required (consider Select/Dropdown)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-light`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-hover`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 16
- Padding values (px, extracted from source style): 8, 16
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Component).

### Component Props

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to RadioGroupHandlers | `RefObject<RadioGroupHandlers \| null>` | - |
| prefixCls | Component class prefix | `string` | `"radiogroup"` |
| wrapperCls | Outer wrapper class | `string` | - |
| innerCls | Inner container class | `string` | - |
| radioCls | Radio items container class | `string` | - |
| cardCls | Card variant class | `string` | - |
| cardCheckedCls | Card checked class | `string` | - |
| cardDisabledCls | Card disabled class | `string` | - |
| cardInvalidCls | Card invalid class | `string` | - |
| labelCls | Label class | `string` | - |
| size | Size variant | `'sm' \| 'md' \| 'lg'` | - |
| variant | Visual variant | `'default' \| 'card'` | `'default'` |
| direction | Layout direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| label | Group label | `ReactNode` | - |
| required | Required indicator | `boolean` | - |
| onChange | Change handler | `(selected: RadioItemProps) => void` | - |
| items | Radio items | `RadioItemProps[]` | - |

### RadioItemProps
Extends `RadioButtonProps`.

| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string` |
| label | Item label | `string` |
| children | Item content | `ReactNode \| ((selected: boolean) => ReactNode)` |

### RadioGroupHandlers
| Name | Description | Type |
| --- | --- | --- |
| reset | Reset selection | `() => void` |
Inherits from: None (Custom Container).
Renders a group of [RadioButton](https://primereact.org/radiobutton/) components.

### RadioGroup Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| items | Array of radio items | `RadioItemProps[]` | `[]` |
| variant | Visual style variant | `'default' \| 'card'` | `'default'` |
| direction | Layout direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | Component size | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | Group label content | `ReactNode` | - |
| required | Whether selection is mandatory | `boolean` | `false` |
| wrapperCls | Class for the outer wrapper | `string` | - |
| innerCls | Class for the item container | `string` | - |
| radioCls | Class for radio buttons | `string` | - |
| cardCls | Class for card item wrapper | `string` | - |
| cardCheckedCls | Class for checked card item | `string` | - |
| cardDisabledCls | Class for disabled card item | `string` | - |
| cardInvalidCls | Class for invalid card item | `string` | - |
| labelCls | Class for the group label | `string` | - |
| ref | Ref to access handlers | `Ref<RadioGroupHandlers>` | - |
| onChange | Callback when selection changes | `(selected: RadioItemProps) => void` | - |

### RadioItemProps
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string` | - |
| label | Label text (default variant) | `string` | - |
| children | Content for card variant | `ReactNode \| ((selected: boolean) => ReactNode)` | - |
| disabled | Whether item is disabled | `boolean` | `false` |
| invalid | Whether item is invalid | `boolean` | `false` |
| autoFocus | Whether to focus/select by default? | `boolean` | `false` |
| ... | Other `RadioButtonProps` | | |

### RadioGroupHandlers
| Name | Description | Type |
| --- | --- | --- |
| reset | Clears the current selection | `() => void` |

## Examples

```tsx
import { RadioGroup } from '@1money/react-ui';

// Basic radio group
const items = [
  { key: 'option1', label: 'Option 1' },
  { key: 'option2', label: 'Option 2' },
  { key: 'option3', label: 'Option 3' }
];

<RadioGroup
  items={items}
  onChange={(selected) => console.log(selected)}
/>

// With label and required field
<RadioGroup
  label="Choose an option"
  required
  items={items}
  onChange={(selected) => setSelectedOption(selected)}
/>

// Card variant
<RadioGroup
  variant="card"
  items={cardItems}
  onChange={(selected) => setSelectedCard(selected)}
/>

// Vertical layout
<RadioGroup
  direction="vertical"
  items={items}
  onChange={(selected) => setSelectedVertical(selected)}
/>

// Different sizes
<RadioGroup size="sm" items={items} />
<RadioGroup size="md" items={items} />
<RadioGroup size="lg" items={items} />
```

```tsx
interface RadioGroupHandlers {
  reset: () => void; // Clears the current selection
}
```

```tsx
const FormExample = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { key: 'basic', label: 'Basic Plan - $10/month' },
    { key: 'premium', label: 'Premium Plan - $25/month' },
    { key: 'enterprise', label: 'Enterprise Plan - $50/month' }
  ];

  return (
    <div className="form-field">
      <RadioGroup
        label="Select a plan"
        required
        items={plans}
        onChange={(selected) => setSelectedPlan(selected)}
        direction="vertical"
      />
    </div>
  );
};
```

## Core Principles

- **Variant Usage**: Use the `variant="card"` style for high-priority choices (like subscription tier selection) and `default` for standard forms.
- **Controlled Mode**: Treat `RadioGroup` as a controlled component; always provide `onChange` to handle selection updates.
- **Direction**: Use `direction="vertical"` for long labels to improve readability; use `horizontal` for short options (Yes/No).

