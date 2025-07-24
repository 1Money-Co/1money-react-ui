# Select

A powerful and flexible select dropdown component built on top of PrimeReact's Dropdown and MultiSelect with enhanced styling, validation states, and custom dropdown functionality. Supports both single and multiple selection modes with advanced features.

## Features

- Single and multiple selection modes
- Built-in form validation with success/error states
- Searchable options with filtering
- Custom item templates and display options
- Label and message support for form integration
- Multiple size variants (large, small)
- Unselectable mode for toggle behavior
- Custom dropdown component for advanced use cases
- Full keyboard navigation support
- Rich styling options and theming

## Components

### Select
Main select component supporting both single and multiple selection modes.

### Select.CustomDropdown
Custom dropdown component for advanced use cases with editable content and custom templates.

## Basic Usage

```tsx
import { Select } from '@1money/react-ui';

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
];

// Single select
<Select
  options={cities}
  placeholder="Select a city"
  onChange={(e) => console.log(e.value)}
/>

// Multiple select
<Select
  multiple
  options={cities}
  placeholder="Select cities"
  onChange={(e) => console.log(e.value)}
/>

// Select with label and validation
<Select
  label="Preferred City"
  message="Please select your preferred city"
  required
  options={cities}
  invalid={!selectedCity}
/>
```

## Select Component Props

### Base Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | string | "select" |
| wrapperCls | Wrapper element classes | string | - |
| labelCls | Label element classes | string | - |
| messageCls | Message element classes | string | - |
| label | Label text or element | ReactNode | - |
| message | Help or error message | ReactNode | - |
| required | Show required indicator | boolean | false |
| size | Component size variant | 'large' \| 'small' | 'large' |
| success | Show success state styling | boolean | false |
| itemTemplate | Custom option rendering | (option: any) => ReactNode | - |

### Single Select Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| multiple | Enable multiple selection | false | false |
| unselectable | Allow deselecting selected option | 'on' \| 'off' | 'off' |
| panelType | Panel display type | 'menu' \| 'selector' | 'menu' |
| onChange | Selection change handler | (e: DropdownChangeEvent) => void | - |

### Multiple Select Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| multiple | Enable multiple selection | true | - |
| onChange | Selection change handler | (e: MultiSelectChangeEvent) => void | - |

### Inherited Props

Extends PrimeReact's Dropdown/MultiSelect components:

- `options?: any[]` - Array of selectable options
- `value?: any` - Current selected value(s)
- `placeholder?: string` - Placeholder text
- `disabled?: boolean` - Disable the select
- `invalid?: boolean` - Show invalid state
- `filter?: boolean` - Enable option filtering
- `showClear?: boolean` - Show clear button
- `display?: 'comma' | 'chip'` - Multiple selection display mode
- `onShow?: () => void` - Panel open callback
- `onHide?: () => void` - Panel close callback

## CustomDropdown Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| dataId | Unique identifier for focus management | string | - |
| invalid | Show invalid state styling | boolean | false |
| disabled | Disable the dropdown | boolean | false |
| placeholder | Placeholder text | string | '' |
| className | Additional CSS classes | string | - |
| editable | Enable content editing | boolean | false |
| selectedTemplate | Custom selected content renderer | (isFocus: boolean) => ReactNode | - |
| tailTemplate | Custom tail/icon renderer | (isFocus: boolean) => ReactNode | - |
| onClick | Click event handler | (e: MouseEvent) => void | - |
| onFocus | Focus event handler | () => void | - |
| onBlur | Blur event handler | () => void | - |

## Styling

The Select components use SCSS modules with BEM-like naming:

1. Use `className` and related class props for styling customization
2. Override `prefixCls` for complete style control
3. Size variants affect height and padding
4. State classes (success, invalid, disabled) are automatically applied

## Accessibility

- Full keyboard navigation support (arrow keys, Enter, Escape)
- Screen reader friendly with proper ARIA attributes
- Focus management and visual focus indicators
- Proper form field semantics with labels
- Error state announcements

## Examples

### Basic Single Select
```tsx
const [selectedCity, setSelectedCity] = useState(null);

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
  { label: 'Paris', value: 'PRS' },
];

<Select
  label="Select City"
  placeholder="Choose a city"
  options={cities}
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.value)}
  required
/>
```

### Multiple Select with Filtering
```tsx
const [selectedCities, setSelectedCities] = useState([]);

<Select
  multiple
  label="Select Multiple Cities"
  placeholder="Choose cities"
  options={cities}
  value={selectedCities}
  onChange={(e) => setSelectedCities(e.value)}
  filter
  display="chip"
  message="You can select multiple cities"
/>
```

### Form Validation Integration
```tsx
const [formData, setFormData] = useState({
  city: null,
  country: null,
});

const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  if (!formData.city) newErrors.city = 'City is required';
  if (!formData.country) newErrors.country = 'Country is required';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

<form onSubmit={handleSubmit}>
  <Select
    label="City"
    placeholder="Select your city"
    options={cities}
    value={formData.city}
    onChange={(e) => setFormData(prev => ({...prev, city: e.value}))}
    invalid={!!errors.city}
    message={errors.city}
    required
  />

  <Select
    label="Country"
    placeholder="Select your country"
    options={countries}
    value={formData.country}
    onChange={(e) => setFormData(prev => ({...prev, country: e.value}))}
    success={formData.country && !errors.country}
    message={formData.country ? 'Valid selection' : 'Country is required'}
    required
  />
</form>
```

### Custom Item Template
```tsx
const users = [
  { 
    label: 'John Doe', 
    value: 'john', 
    avatar: '/avatars/john.jpg',
    role: 'Admin' 
  },
  { 
    label: 'Jane Smith', 
    value: 'jane', 
    avatar: '/avatars/jane.jpg',
    role: 'User' 
  },
];

<Select
  label="Assign User"
  options={users}
  itemTemplate={(option) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img 
        src={option.avatar} 
        alt={option.label}
        style={{ width: '24px', height: '24px', borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 'bold' }}>{option.label}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>{option.role}</div>
      </div>
    </div>
  )}
  placeholder="Select a user"
/>
```

### Unselectable Single Select
```tsx
<Select
  label="Optional Selection"
  placeholder="Click to toggle selection"
  options={cities}
  unselectable="on"
  showClear={false}
  message="Click the same option again to deselect"
/>
```

### Different Sizes
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Select
    size="large"
    label="Large Select"
    options={cities}
    placeholder="Large size"
  />
  
  <Select
    size="small"
    label="Small Select"
    options={cities}
    placeholder="Small size"
  />
</div>
```

### Custom Dropdown Examples
```tsx
// Basic custom dropdown
<Select.CustomDropdown
  label="Custom Dropdown"
  placeholder="Click to focus"
  onClick={() => console.log('Clicked')}
  onFocus={() => console.log('Focused')}
  onBlur={() => console.log('Blurred')}
/>

// Custom dropdown with tail template
<Select.CustomDropdown
  label="With Custom Icon"
  placeholder="Custom dropdown"
  tailTemplate={(isFocus) => (
    <Icons 
      name={isFocus ? 'chevronUp' : 'chevronDown'} 
      size={20} 
      color="#131313" 
    />
  )}
/>

// Editable custom dropdown
<Select.CustomDropdown
  label="Editable Field"
  placeholder="Type here..."
  editable
  onFocus={() => console.log('Started editing')}
  onBlur={() => console.log('Finished editing')}
/>

// Custom dropdown with selected template
const [selectedUser, setSelectedUser] = useState(null);

<Select.CustomDropdown
  label="User Selection"
  placeholder="Select user"
  selectedTemplate={(isFocus) => (
    selectedUser ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={selectedUser.avatar} width="20" height="20" />
        <span>{selectedUser.name}</span>
      </div>
    ) : (
      <span style={{ color: '#999' }}>Select user</span>
    )
  )}
/>
```

### Advanced Integration with External Panel
```tsx
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState(null);

<div>
  <Select.CustomDropdown
    dataId="external-panel"
    label="External Panel Control"
    placeholder={selectedOption?.label || "Select option"}
    onClick={() => setIsOpen(!isOpen)}
    selectedTemplate={() => selectedOption?.label || "Select option"}
  />
  
  {isOpen && (
    <div 
      data-select-custom-dropdown-id="external-panel"
      style={{
        position: 'absolute',
        zIndex: 1000,
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginTop: '4px',
        minWidth: '200px',
      }}
    >
      {cities.map(city => (
        <div
          key={city.value}
          style={{ padding: '8px', cursor: 'pointer' }}
          onClick={() => {
            setSelectedOption(city);
            setIsOpen(false);
          }}
          onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.background = 'white'}
        >
          {city.label}
        </div>
      ))}
    </div>
  )}
</div>
```
