# Checkbox

A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.

## Features

- Single checkbox and checkbox group support
- Indeterminate state for partial selections
- Custom styling with SCSS modules
- Disabled state support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact Checkbox compatibility

## Basic Usage

```tsx
import { Checkbox } from '@1money/react-ui';

// Basic checkbox
<Checkbox />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox 
  checked={checked} 
  onChange={(e) => setChecked(e.checked)} 
/>

// With label
<Checkbox 
  inputId="terms" 
  checked={accepted}
  onChange={(e) => setAccepted(e.checked)}
/>
<label htmlFor="terms">I accept the terms and conditions</label>

// Disabled state
<Checkbox disabled checked />

// Indeterminate state
<Checkbox 
  checked={false}
  indeterminate={true}
  onChange={handleParentChange}
/>
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "checkbox" |
| checked | Whether the checkbox is checked | boolean | false |
| indeterminate | Whether the checkbox is in indeterminate state | boolean | false |
| disabled | Whether the checkbox is disabled | boolean | false |
| value | Value of the checkbox | any | - |
| name | Name attribute for the input | string | - |
| inputId | Identifier for the input element | string | - |
| required | Whether the checkbox is required | boolean | false |
| readOnly | Whether the checkbox is read-only | boolean | false |
| tabIndex | Tab index for keyboard navigation | number | - |
| className | Additional CSS classes | string | - |
| style | Inline styles | CSSProperties | - |
| onChange | Callback when checkbox state changes | (e: CheckboxChangeEvent) => void | - |
| onFocus | Callback when checkbox receives focus | (e: FocusEvent) => void | - |
| onBlur | Callback when checkbox loses focus | (e: FocusEvent) => void | - |

## Events

### CheckboxChangeEvent
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

The Checkbox component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. CSS custom properties for theme customization

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation (Space to toggle)
- Focus management
- Support for form labels
- High contrast mode compatibility

## Examples

### Basic Form
```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    newsletter: false,
    terms: false,
    marketing: false
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.checked
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

### Checkbox Group with Select All
```tsx
const CheckboxGroup = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
  const allSelected = selectedItems.length === items.length;
  const partialSelected = selectedItems.length > 0 && selectedItems.length < items.length;

  const handleSelectAll = (e) => {
    setSelectedItems(e.checked ? [...items] : []);
  };

  const handleItemChange = (item) => (e) => {
    if (e.checked) {
      setSelectedItems(prev => [...prev, item]);
    } else {
      setSelectedItems(prev => prev.filter(i => i !== item));
    }
  };

  return (
    <div>
      <div className="select-all">
        <Checkbox
          checked={allSelected}
          indeterminate={partialSelected}
          onChange={handleSelectAll}
          inputId="selectAll"
        />
        <label htmlFor="selectAll">Select All</label>
      </div>
      
      <div className="options">
        {items.map(item => (
          <div key={item} className="option">
            <Checkbox
              inputId={item}
              checked={selectedItems.includes(item)}
              onChange={handleItemChange(item)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Custom Styled Checkbox
```tsx
<Checkbox
  inputId="custom"
  checked={customValue}
  onChange={(e) => setCustomValue(e.checked)}
  className="custom-checkbox"
  style={{ 
    '--checkbox-size': '24px',
    '--checkbox-border-color': '#e0e0e0',
    '--checkbox-checked-bg': '#007bff'
  }}
/>
```
