---
name: Input
category: DataEntry
description: A comprehensive input component that supports multiple input types including text, number, mask, textarea, OTP, password, and autocomplete, with enhanced styling and validation capabilities.
---

# Input

## Component Overview

A comprehensive input component that supports multiple input types—including text, number, mask, textarea, OTP, password, and autocomplete—featuring enhanced styling and validation capabilities.

### Features

- **Versatile Input Types**: Supports text, number, mask, textarea, OTP, password, and autocomplete.
- **Integrated Labeling**: Built-in support for labels and validation messages.
- **Adornments**: Support for prefix and suffix elements.
- **Size Variants**: Available in large and small sizes.
- **Validation States**: Visual indicators for success and error states.
- **Textarea Features**: Character counting support for textarea inputs.
- **Styling Options**: Toggleable rounded corners.
- **Required Fields**: Visual indication for mandatory fields.
- **PrimeReact Compatibility**: Fully compatible with PrimeReact functionality.

## Usage Scenarios

### When to use
- **Standard Data Entry**: For forms requiring unified labels, messages, or validation statuses (e.g., text, numbers, amounts).
- **Decorated Inputs**: When prefix/suffix elements are needed (e.g., currency symbols, units, icons).
- **State Feedback**: When consistent success, error, or disabled states are required.

### When not to use
- **Complex Rich Text**: For extensive text formatting, use a dedicated Rich Text Editor.
- **Advanced Filtering**: For complex filtering or remote search with extensive options, consider a specialized Autocomplete or Select solution.

## Design Specifications

- **Global Class Prefix**: `om-react-ui` (derived from `$prefix` in `src/variable.scss`).
- **Color Tokens**: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-success`.
- **Border Radius**: 8px, 12px.
- **Font Size**: 12px, 14px, 16px.
- **Line Height**: 15px, 17px, 18px, 20px, 22px.
- **Height/Max Height**: 16px, 40px, 44px, 52px, 56px, 105px, 120px.
- **Padding**: 8px, 11px, 12px, 15px, 16px.
- **Source of Truth**: Please refer to `style/*.scss` in the component source for detailed visual and interaction specifications. New or adjusted styles should be defined in Foundation tokens to avoid scattered magic numbers.
- **References**: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md).

## API

Inherits functionality from the following PrimeReact components based on the `type` prop:
- [PrimeReact InputText](https://primereact.org/inputtext/) (`type="text"`)
- [PrimeReact InputNumber](https://primereact.org/inputnumber/) (`type="number"`)
- [PrimeReact InputMask](https://primereact.org/inputmask/) (`type="mask"`)
- [PrimeReact InputTextarea](https://primereact.org/inputtextarea/) (`type="textarea"`)
- [PrimeReact InputOtp](https://primereact.org/inputotp/) (`type="otp"`)
- [PrimeReact Password](https://primereact.org/password/) (`type="password"`)
- [PrimeReact AutoComplete](https://primereact.org/autocomplete/) (`type="auto"`)

### Component Props

#### Base Props (All Types)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling. | `string` | `"input"` |
| wrapperCls | Additional classes for the wrapper element. | `string` | - |
| labelCls | Additional classes for the label. | `string` | - |
| messageCls | Additional classes for the message. | `string` | - |
| label | Label content (text or element). | `ReactNode` | - |
| message | Validation or help message content. | `ReactNode` | - |
| required | Indicates if the field is mandatory. | `boolean` | `false` |
| rounded | Applies rounded corners logic. | `boolean` | `false` |
| size | Input size variant. | `'large' \| 'small'` | `'large'` |
| success | Visual indicator for success state. | `boolean` | `false` |
| prefixEle | Element rendered before the input (e.g., icon). | `ReactNode` | - |
| suffixEle | Element rendered after the input. | `ReactNode` | - |
| prefixEleCls | CSS class for the prefix element. | `string` | - |
| suffixEleCls | CSS class for the suffix element. | `string` | - |
| loading | Indicates a loading state. | `boolean` | `false` |
| showMessageIcon | Displays an icon within the validation message. | `boolean` | `true` |
| type | Specifies the input variant. | `'text' \| 'number' \| 'mask' \| 'textarea' \| 'otp' \| 'password' \| 'autocomplete'` | `'text'` |
| ref | Reference to the underlying input instance. | `RefObject<...>` | - |

> **Note**: The `ref` type varies by `type` (e.g., `HTMLInputElement` for text/otp, `InputNumber` for number, `InputMask` for mask, `Password` for password, `AutoComplete` for autocomplete, `HTMLTextAreaElement` for textarea).

#### Variant-Specific Considerations

Each variant inherits standard props from its corresponding PrimeReact component (e.g., `value`, `onChange`, `placeholder`, `disabled`).

| Type | Corresponding Props Interface |
| --- | --- |
| `'text'` (default) | `InputTextProps` |
| `'number'` | `InputNumberProps` |
| `'mask'` | `InputMaskProps` |
| `'textarea'` | `InputTextareaProps` |
| `'otp'` | `InputOtpProps` |
| `'password'` | `InputPwdProps` |
| `'auto'` | `AutoCompleteProps` |

> Inherited props such as `toggleMask` and `feedback` are available specifically when `type="password"`.

### Textarea Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| maxLength | Maximum character length. | `number` | - |
| showCount | Displays the current character count. | `boolean` | `false` |

## Examples

```tsx
import { Input } from '@1money/react-ui';

// Basic text input
<Input type="text" placeholder="Enter text" />

// Text input with label and required indicator
<Input
  type="text"
  label="Username"
  placeholder="Enter username"
  required
/>

// Number input with constraints
<Input
  type="number"
  label="Amount"
  placeholder="0.00"
  min={0}
  max={1000}
/>

// Textarea with character counter
<Input
  type="textarea"
  label="Description"
  maxLength={500}
  showCount
  rows={4}
/>

// Password input with toggle mask
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

```tsx
// Controlled input with validation state
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

```tsx
// Search input with icons
<Input
  type="text"
  label="Search"
  prefixEle={<SearchIcon />}
  suffixEle={<ClearButton onClick={clearSearch} />}
  placeholder="Search items..."
/>
```

## Core Principles

- **Unified Component**: **MUST** use the single `Input` component with the logical `type` prop (e.g., `type="number"`) instead of importing individual sub-components like `InputNumber`.
- **Layout Encapsulation**: Utilize the built-in `label`, `message`, and `prefixEle`/`suffixEle` props for layout structure. **DO NOT** wrap the input in redundant divs purely for adding labels or icons.
- **Controlled State**: Always implement inputs as controlled components by providing distinct `value` and `onChange` props.
