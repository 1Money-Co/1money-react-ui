# RadioGroup

A comprehensive radio group component that provides grouped radio button functionality with support for default and card variants, multiple layout directions, and advanced customization options.

## Features

- Two display variants: default radio buttons and card-style selection
- Horizontal and vertical layout directions
- Three size variants: small (sm), medium (md), large (lg)
- Built-in label support with required field indication
- Custom styling for each variant
- Programmatic reset functionality via ref
- Auto-focus support for default selection
- Accessible keyboard navigation
- Full control over styling with multiple className props

## Basic Usage

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to RadioGroupHandlers for programmatic control | RefObject<RadioGroupHandlers \| null> | - |
| prefixCls | The classname prefix for component styling | string | "radiogroup" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| innerCls | Additional classes for the inner container | string | - |
| radioCls | Additional classes for radio buttons | string | - |
| cardCls | Additional classes for card variant items | string | - |
| labelCls | Additional classes for the group label | string | - |
| size | Size variant for radio buttons | 'sm' \| 'md' \| 'lg' | 'md' |
| variant | Display variant | 'default' \| 'card' | 'default' |
| direction | Layout direction | 'horizontal' \| 'vertical' | 'horizontal' |
| label | Group label text or element | ReactNode | - |
| required | Whether the group is required | boolean | false |
| items | Array of radio button items | RadioItemProps[] | [] |
| onChange | Callback when selection changes | (selected: RadioItemProps) => any | - |

## RadioItemProps Interface

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| label | Label text for default variant | string | - |
| children | Content for card variant (can be function) | ReactNode \| ((selected: boolean) => ReactNode) | - |
| disabled | Whether the item is disabled | boolean | false |
| invalid | Whether the item is in invalid state | boolean | false |
| autoFocus | Whether this item should be selected by default | boolean | false |

Plus all PrimeReact RadioButton props except `children`, `inputId`, `value`, `onChange`, `checked`, and `className`.

## RadioGroupHandlers Interface

```tsx
interface RadioGroupHandlers {
  reset: () => void; // Clears the current selection
}
```

## Variants

### Default Variant
Standard radio buttons with labels, ideal for form inputs and simple selections.

### Card Variant
Custom card-style selection items with full content control, perfect for visual selections like plans, themes, or complex options.

## Styling

The RadioGroup component uses SCSS modules with BEM-like naming conventions. Customize through:

1. Individual class props for granular control
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization
4. Variant-specific styling classes

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation (Arrow keys, Tab, Space)
- Focus management within the group
- Support for fieldset and legend elements
- Required field indication for screen readers

## Examples

### Basic Form Selection
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

### Card Variant with Custom Content
```tsx
const CardExample = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  
  const themes = [
    {
      key: 'light',
      children: (selected) => (
        <div className={`theme-card ${selected ? 'selected' : ''}`}>
          <div className="theme-preview light-preview"></div>
          <h4>Light Theme</h4>
          <p>Clean and bright interface</p>
        </div>
      )
    },
    {
      key: 'dark',
      children: (selected) => (
        <div className={`theme-card ${selected ? 'selected' : ''}`}>
          <div className="theme-preview dark-preview"></div>
          <h4>Dark Theme</h4>
          <p>Easy on the eyes</p>
        </div>
      )
    },
    {
      key: 'auto',
      children: (selected) => (
        <div className={`theme-card ${selected ? 'selected' : ''}`}>
          <div className="theme-preview auto-preview"></div>
          <h4>Auto Theme</h4>
          <p>Matches system preference</p>
        </div>
      )
    }
  ];

  return (
    <RadioGroup
      label="Choose your theme"
      variant="card"
      items={themes}
      onChange={(selected) => setSelectedTheme(selected)}
    />
  );
};
```

### With Ref for Programmatic Control
```tsx
const ControlledExample = () => {
  const radioGroupRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(null);
  
  const options = [
    { key: 'option1', label: 'Option 1', autoFocus: true },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3', disabled: true }
  ];

  const handleReset = () => {
    radioGroupRef.current?.reset();
    setSelectedValue(null);
  };

  return (
    <div>
      <RadioGroup
        ref={radioGroupRef}
        label="Select an option"
        items={options}
        onChange={(selected) => setSelectedValue(selected)}
      />
      
      <button onClick={handleReset}>
        Reset Selection
      </button>
      
      {selectedValue && (
        <p>Selected: {selectedValue.label}</p>
      )}
    </div>
  );
};
```

### Validation and Error States
```tsx
const ValidationExample = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [hasError, setHasError] = useState(false);
  
  const options = [
    { key: 'valid', label: 'Valid Option' },
    { key: 'invalid', label: 'Invalid Option', invalid: hasError },
    { key: 'disabled', label: 'Disabled Option', disabled: true }
  ];

  const handleSubmit = () => {
    if (!selectedValue) {
      setHasError(true);
      return;
    }
    setHasError(false);
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit}>
      <RadioGroup
        label="Required Selection"
        required
        items={options}
        onChange={(selected) => {
          setSelectedValue(selected);
          setHasError(false);
        }}
        direction="vertical"
      />
      
      {hasError && (
        <div className="error-message">
          Please select an option
        </div>
      )}
      
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Custom Styled RadioGroup
```tsx
<RadioGroup
  label="Custom Styled Options"
  items={customItems}
  onChange={(selected) => setCustomValue(selected)}
  size="lg"
  direction="horizontal"
  wrapperCls="custom-radio-group"
  innerCls="custom-inner"
  labelCls="custom-label"
  radioCls="custom-radio"
  style={{
    '--radio-group-gap': '20px',
    '--radio-group-border': '1px solid #e0e0e0',
    '--radio-group-padding': '16px'
  }}
/>
```