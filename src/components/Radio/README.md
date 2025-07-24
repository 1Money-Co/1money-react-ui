# Radio

A customizable radio button component built on top of PrimeReact's RadioButton with enhanced styling and additional features.

## Features

- Three size variants: small (sm), medium (md), large (lg)
- Custom styling with SCSS modules
- Disabled and invalid states
- Built-in label support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact RadioButton compatibility

## Basic Usage

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "radio" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| innerCls | Additional classes for the inner container | string | - |
| radioCls | Additional classes for the radio button | string | - |
| labelCls | Additional classes for the label | string | - |
| size | Radio button size variant | 'sm' \| 'md' \| 'lg' | 'md' |
| label | Label text or element | ReactNode | - |
| required | Whether the radio button is required | boolean | false |
| invalid | Whether the radio button is in invalid state | boolean | false |
| id | Identifier for the input element | string | - |
| name | Name attribute for grouping radio buttons | string | - |
| value | Value of the radio button | any | - |
| checked | Whether the radio button is checked | boolean | false |
| disabled | Whether the radio button is disabled | boolean | false |
| onChange | Callback when radio button state changes | (e: RadioButtonChangeEvent) => void | - |
| onFocus | Callback when radio button receives focus | (e: FocusEvent) => void | - |
| onBlur | Callback when radio button loses focus | (e: FocusEvent) => void | - |

## Inherited Props

This component extends PrimeReact's RadioButton component and inherits most of its props except `className`, `inputId`, and `size` which are overridden. Common inherited props include:

- `tooltip?: string` - Tooltip text
- `tooltipOptions?: TooltipOptions` - Tooltip configuration
- `style?: CSSProperties` - Inline styles
- `tabIndex?: number` - Tab index for keyboard navigation

## Events

### RadioButtonChangeEvent
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

## Styling

The Radio component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. Individual class props for specific elements
4. CSS custom properties for theme customization

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation (Arrow keys to navigate, Space to select)
- Focus management within radio groups
- Support for form labels and fieldsets
- High contrast mode compatibility

## Examples

### Basic Radio Group
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

### Form Integration
```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    preference: '',
    notification: ''
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.value
    }));
  };

  return (
    <form>
      <div className="field-group">
        <label className="field-label">Email Preference *</label>
        <Radio
          id="daily"
          name="preference"
          value="daily"
          label="Daily digest"
          checked={formData.preference === 'daily'}
          onChange={handleChange('preference')}
          required
        />
        <Radio
          id="weekly"
          name="preference"
          value="weekly"
          label="Weekly summary"
          checked={formData.preference === 'weekly'}
          onChange={handleChange('preference')}
          required
        />
        <Radio
          id="never"
          name="preference"
          value="never"
          label="Never"
          checked={formData.preference === 'never'}
          onChange={handleChange('preference')}
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Notification Type</label>
        <Radio
          id="push"
          name="notification"
          value="push"
          label="Push notifications"
          checked={formData.notification === 'push'}
          onChange={handleChange('notification')}
        />
        <Radio
          id="email"
          name="notification"
          value="email"
          label="Email notifications"
          checked={formData.notification === 'email'}
          onChange={handleChange('notification')}
        />
        <Radio
          id="both"
          name="notification"
          value="both"
          label="Both"
          checked={formData.notification === 'both'}
          onChange={handleChange('notification')}
        />
      </div>
    </form>
  );
};
```

### Custom Styled Radio Buttons
```tsx
<Radio
  id="custom"
  name="custom-group"
  value="custom"
  label="Custom Style"
  checked={customValue === 'custom'}
  onChange={(e) => setCustomValue(e.value)}
  size="lg"
  wrapperCls="custom-radio-wrapper"
  labelCls="custom-radio-label"
  style={{
    '--radio-size': '20px',
    '--radio-border-color': '#e0e0e0',
    '--radio-checked-bg': '#007bff'
  }}
/>
```

### Validation States
```tsx
<Radio
  id="valid"
  name="validation"
  value="valid"
  label="Valid option"
  checked={value === 'valid'}
  onChange={(e) => setValue(e.value)}
/>

<Radio
  id="invalid"
  name="validation"
  value="invalid"
  label="Invalid option"
  checked={value === 'invalid'}
  onChange={(e) => setValue(e.value)}
  invalid
/>

<Radio
  id="required"
  name="validation"
  value="required"
  label="Required option *"
  checked={value === 'required'}
  onChange={(e) => setValue(e.value)}
  required
/>
```