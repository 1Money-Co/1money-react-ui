# Input

A comprehensive input component that supports multiple input types including text, number, mask, textarea, OTP, password, and autocomplete with enhanced styling and validation features.

## Features

- Multiple input types (text, number, mask, textarea, OTP, password, autocomplete)
- Built-in label and message support
- Prefix and suffix elements
- Size variants (large, small)
- Success and error states
- Character count for textarea
- Rounded corners option
- Required field indication
- Full PrimeReact compatibility

## Basic Usage

```tsx
import { Input } from '@1money/react-ui';

// Text input
<Input type="text" placeholder="Enter text" />

// With label
<Input 
  type="text" 
  label="Username" 
  placeholder="Enter username"
  required 
/>

// Number input
<Input 
  type="number" 
  label="Amount" 
  placeholder="0.00"
  min={0}
  max={1000}
/>

// Textarea with character count
<Input 
  type="textarea" 
  label="Description"
  maxLength={500}
  showCount
  rows={4}
/>

// Password input
<Input 
  type="password" 
  label="Password"
  feedback={false}
  toggleMask
/>

// OTP input
<Input 
  type="otp" 
  length={6}
  label="Verification Code"
/>
```

## Input Types

### Text Input (`type="text"`)
Standard text input field.

### Number Input (`type="number"`)
Numeric input with built-in formatting and validation.

### Mask Input (`type="mask"`)
Input with pattern masking (e.g., phone numbers, dates).

### Textarea (`type="textarea"`)
Multi-line text input with optional character counting.

### OTP Input (`type="otp"`)
One-time password input with individual character boxes.

### Password Input (`type="password"`)
Password field with visibility toggle and strength feedback.

### Autocomplete Input (`type="autocomplete"`)
Input with dropdown suggestions.

## Common Props (InputBaseProps)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "input" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| labelCls | Additional classes for the label | string | - |
| messageCls | Additional classes for the message | string | - |
| label | Label text or element | ReactNode | - |
| message | Help text or error message | ReactNode | - |
| required | Whether the field is required | boolean | false |
| rounded | Whether to use rounded corners | boolean | false |
| size | Input size variant | 'large' \| 'small' | 'large' |
| success | Whether to show success state | boolean | false |
| prefixEle | Element to show before the input | ReactNode | - |
| suffixEle | Element to show after the input | ReactNode | - |
| prefixEleCls | Classes for prefix element | string | - |
| suffixEleCls | Classes for suffix element | string | - |
| showMessageIcon | Whether to show message icon | boolean | true |

## Type-Specific Props

### TextareaProps (when `type="textarea"`)
- `maxLength?: number` - Maximum character count
- `showCount?: boolean` - Show character counter

### NumberProps (when `type="number"`)
- All PrimeReact InputNumber props except `size`, `prefix`, `suffix`

### MaskProps (when `type="mask"`)
- All PrimeReact InputMask props except `size`, `prefix`, `suffix`

### OtpProps (when `type="otp"`)
- All PrimeReact InputOtp props except `size`, `prefix`, `suffix`

### PasswordProps (when `type="password"`)
- All PrimeReact Password props except `size`, `prefix`, `suffix`

### AutoCompleteProps (when `type="autocomplete"`)
- All PrimeReact AutoComplete props except `size`, `prefix`, `suffix`

## Styling

The Input component uses SCSS modules with BEM-like naming conventions. Styling can be customized through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. Individual class props for specific elements
4. CSS custom properties for theme customization

## Examples

### Form Field with Validation
```tsx
const [value, setValue] = useState('');
const [error, setError] = useState('');

<Input
  type="text"
  label="Email Address"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  message={error || "Enter your email address"}
  success={!error && value.includes('@')}
  required
  placeholder="user@example.com"
/>
```

### Input with Icons
```tsx
<Input
  type="text"
  label="Search"
  prefixEle={<SearchIcon />}
  suffixEle={<ClearButton onClick={clearSearch} />}
  placeholder="Search items..."
/>
```

### Textarea with Counter
```tsx
<Input
  type="textarea"
  label="Comments"
  maxLength={500}
  showCount
  rows={4}
  placeholder="Enter your comments..."
/>
```

### Currency Input
```tsx
<Input
  type="number"
  label="Price"
  prefixEle="$"
  currency
  currencyDisplay="symbol"
  locale="en-US"
  minFractionDigits={2}
  maxFractionDigits={2}
/>
```
