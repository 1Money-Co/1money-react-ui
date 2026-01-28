---
name: InputAmount
category: DataEntry
description: A specialized numeric input component designed for currency and monetary amounts with automatic formatting, dynamic width adjustment, and precision control. Built with BigNumber.js for accurate decimal calculations.
---

# InputAmount

## Component Overview

A specialized numeric input component designed for currency and monetary amounts with automatic formatting, dynamic width adjustment, and precision control. Built with BigNumber.js for accurate decimal calculations.

### Features

- Automatic thousand separators and numeric formatting
- Dynamic input width based on content
- Precision control with max fraction digits
- Support for negative numbers
- Real-time validation and formatting
- Prefix, suffix, and currency display options
- Message and footnote support for additional information
- Smart cursor positioning during input
- Invalid state indication
- Controlled and uncontrolled modes

## Usage Scenarios

### When to use
- Form input (text, number, amount, etc.) needing unified label / message / validation status
- Need prefix/suffix elements (currency, unit, icon)
- Need consistent success/error/disabled states

### When not to use
- Large rich text editing (use dedicated Rich Text Editor)
- Need complex filtering/remote search with many options (consider combined Autocomplete/Select solution)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-success`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 12, 14, 16, 52
- Line height (px, extracted from source style): 17, 18, 20, 22, 56
- Height/Max Height (px, extracted from source style): 16, 32, 40, 44, 52, 56
- Padding values (px, extracted from source style): 12, 16
- For detailed visuals and interactions, refer to component source code in `style/*.scss`. New/adjusted styles should act as Foundation tokens first to avoid scattered magic numbers.
- Reference: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Implementation).
Uses BigNumber.js for arithmetic.

### Component Props

#### Base Props (All Variants)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to input element | `RefObject<HTMLInputElement>` | - |
| value | Numeric value | `string \| number \| bigint \| null` | - |
| name | Input name | `string` | - |
| min | Minimum value | `number \| bigint` | - |
| max | Maximum value | `number \| bigint` | - |
| maxFractionDigits | Decimal precision | `number \| bigint` | - |
| placeholder | Placeholder text | `string` | - |
| prefixCls | Component class prefix | `string` | `"input-amount"` |
| wrapperCls | Wrapper class | `string` | - |
| labelCls | Label class | `string` | - |
| messageCls | Message class | `string` | - |
| invalid | Invalid state styling | `boolean` | - |
| success | Success state | `boolean` | - |
| loading | Loading state | `boolean` | - |
| negative | Allow negative numbers | `boolean` | - |
| disabled | Disabled state | `boolean` | - |
| readOnly | ReadOnly state | `boolean` | - |
| message | Validation message | `ReactNode` | - |
| label | Label content | `ReactNode` | - |
| prefix | Prefix element | `ReactNode` | - |
| currency | Currency symbol | `ReactNode` | - |
| suffix | Suffix element | `ReactNode` | - |
| onChange | Value change handler | `(e: ChangeEvent<HTMLInputElement>, value: string) => void` | - |
| onClick | Click handler | `(e: MouseEvent<HTMLInputElement>) => void` | - |
| onFocus | Focus handler | `(e: FocusEvent<HTMLInputElement>) => void` | - |
| onBlur | Blur handler | `(e: FocusEvent<HTMLInputElement>) => void` | - |

#### Primary Variant
`type` is undefined or `'primary'`.

| Name | Description | Type |
| --- | --- | --- |
| type | Visual variant | `'primary'` |
| footnote | Subtext below input | `ReactNode` |
| footnoteCls | Footnote class | `string` |

#### Normal Variant
`type` is `'normal'`.

| Name | Description | Type |
| --- | --- | --- |
| type | Visual variant | `'normal'` |
| size | Input height | `'small' \| 'large'` |

> Note: The `value` prop accepts various number types but `onChange` usually returns the standardized string representation.

## Examples

```tsx
import { InputAmount } from '@1money/react-ui';

// 1. Primary Currency Input (Default)
<InputAmount
  currency="$"
  value={amount}
  onChange={(e, val) => setAmount(val)}
  footnote={`Balance: ${balance}`}
/>

// 2. Normal Input (Small)
<InputAmount
  type="normal"
  size="small"
  currency="ETH"
  maxFractionDigits={18}
/>

// 3. Validation
<InputAmount
  invalid={amount > balance}
  message={amount > balance ? "Insufficient funds" : null}
/>
```

```tsx
const CurrencyExample = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const validateAmount = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) {
    setError('Please enter a valid amount');
  } else if (num < 0) {
    setError('Amount cannot be negative');
  } else if (num > 10000) {
    setError('Amount cannot exceed $10,000');
  } else {
    setError('');
  }
  };

  const handleChange = (e, val) => {
  setAmount(val);
  validateAmount(val);
  };

  return (
  <div className="form-field">
    <label htmlFor="amount">Enter Amount</label>
    <InputAmount
    id="amount"
    value={amount}
    onChange={handleChange}
    currency="$"
    maxFractionDigits={2}
    placeholder="0.00"
    invalid={!!error}
    message={error || "Enter the amount in USD"}
    footnote="Maximum amount: $10,000"
    />
  </div>
  );
};
```

```tsx
const BudgetExample = () => {
  const [budgets, setBudgets] = useState({
  food: '',
  transport: '',
  entertainment: ''
  });

  const categories = [
  { key: 'food', label: 'Food & Dining', prefix: '🍽️' },
  { key: 'transport', label: 'Transportation', prefix: '🚗' },
  { key: 'entertainment', label: 'Entertainment', prefix: '🎬' }
  ];

  const handleBudgetChange = (category) => (e, val) => {
  setBudgets(prev => ({
    ...prev,
    [category]: val
  }));
  };

  const getTotalBudget = () => {
  return Object.values(budgets)
    .filter(amount => amount !== '')
    .reduce((total, amount) => total + parseFloat(amount), 0);
  };

  return (
  <div className="budget-form">
    <h3>Monthly Budget</h3>

    {categories.map(category => (
    <div key={category.key} className="budget-item">
      <label>{category.label}</label>
      <InputAmount
      value={budgets[category.key]}
      onChange={handleBudgetChange(category.key)}
      prefix={category.prefix}
      currency="$"
      maxFractionDigits={2}
      placeholder="0.00"
      />
    </div>
    ))}

    <div className="budget-total">
    <strong>
      Total Budget: ${getTotalBudget().toLocaleString()}
    </strong>
    </div>
  </div>
  );
};
```

## Core Principles

- **Data Integrity**: Pass unformatted numeric values (`number` or `string` of number) to `value`, not formatted strings like "$1,000".
- **Ref Usage**: Use `ref` only for focus management or integration with external libraries that require DOM access; do not use it to manipulate the value directly.
- **Library Dependency**: This component relies on `BigNumber.js`. Do not bypass its precision features by pre-rounding values loosely.
