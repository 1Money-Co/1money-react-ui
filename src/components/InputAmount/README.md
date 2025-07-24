# InputAmount

A specialized numeric input component designed for currency and monetary amounts with automatic formatting, dynamic width adjustment, and precision control. Built with BigNumber.js for accurate decimal calculations.

## Features

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

## Basic Usage

```tsx
import { InputAmount } from '@1money/react-ui';

// Basic amount input
<InputAmount />

// With placeholder
<InputAmount placeholder="Enter amount" />

// Controlled input
const [amount, setAmount] = useState('');

<InputAmount
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

// With currency symbol
<InputAmount
  currency="$"
  placeholder="0.00"
  maxFractionDigits={2}
/>

// With prefix and suffix
<InputAmount
  prefix="$"
  suffix="USD"
  maxFractionDigits={2}
/>

// With validation
<InputAmount
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  invalid={parseFloat(amount) < 0}
  message={parseFloat(amount) < 0 ? "Amount must be positive" : ""}
/>
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to the input element | RefObject<HTMLInputElement \| null> | - |
| value | Current value of the input | string \| number \| bigint \| null | - |
| maxFractionDigits | Maximum number of decimal places allowed | number \| bigint | - |
| placeholder | Placeholder text for the input | string | "0" |
| className | Additional CSS classes for the input element | string | - |
| prefixCls | The classname prefix for component styling | string | "input-amount" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| messageCls | Additional classes for the message element | string | - |
| footnoteCls | Additional classes for the footnote element | string | - |
| invalid | Whether the input is in invalid state | boolean | false |
| prefix | Element to display before the input | ReactNode | - |
| currency | Currency symbol or element to display | ReactNode | - |
| suffix | Element to display after the input | ReactNode | - |
| message | Help text or error message | ReactNode | - |
| footnote | Additional footnote text | ReactNode | - |
| onChange | Callback when input value changes | (e: ChangeEvent<HTMLInputElement>) => void | - |
| onFocus | Callback when input receives focus | (e: FocusEvent<HTMLInputElement>) => void | - |
| onBlur | Callback when input loses focus | (e: FocusEvent<HTMLInputElement>) => void | - |
| onClick | Callback when input container is clicked | (e: MouseEvent<HTMLInputElement>) => void | - |
| onKeyDown | Callback for keydown events | (e: KeyboardEvent<HTMLInputElement>) => void | - |
| onKeyUp | Callback for keyup events | (e: KeyboardEvent<HTMLInputElement>) => void | - |

## Features in Detail

### Automatic Formatting
- Adds thousand separators (commas) automatically
- Preserves decimal point input during typing
- Handles negative numbers with proper formatting
- Real-time formatting without losing cursor position

### Dynamic Width
- Input width adjusts based on content length
- Maintains minimum width for usability
- Adapts to container size constraints
- Smart overflow handling with scroll

### Precision Control
- `maxFractionDigits` limits decimal places
- Prevents input beyond specified precision
- Maintains accuracy with BigNumber.js calculations

### Smart Cursor Management
- Preserves cursor position during formatting
- Handles insertion and deletion correctly
- Auto-scrolls to show current input position

## Styling

The InputAmount component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for input-specific styles
2. `wrapperCls` for wrapper container styles
3. `prefixCls` override for complete style control
4. Individual class props for specific elements
5. CSS custom properties for theme customization

## Accessibility

- Proper semantic input element
- Support for keyboard navigation
- Screen reader compatible
- Focus management and visual indicators
- Proper labeling with associated elements

## Examples

### Currency Input with Validation
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

  const handleChange = (e) => {
    setAmount(e.target.value);
    validateAmount(e.target.value);
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

### Budget Input with Categories
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

  const handleBudgetChange = (category) => (e) => {
    setBudgets(prev => ({
      ...prev,
      [category]: e.target.value
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

### Investment Calculator
```tsx
const InvestmentExample = () => {
  const [investment, setInvestment] = useState({
    principal: '',
    rate: '',
    years: ''
  });

  const calculateReturns = () => {
    const principal = parseFloat(investment.principal) || 0;
    const rate = parseFloat(investment.rate) || 0;
    const years = parseFloat(investment.years) || 0;
    
    return principal * Math.pow(1 + rate / 100, years);
  };

  const handleChange = (field) => (e) => {
    setInvestment(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="investment-calculator">
      <h3>Investment Calculator</h3>
      
      <div className="input-group">
        <label>Initial Investment</label>
        <InputAmount
          value={investment.principal}
          onChange={handleChange('principal')}
          currency="$"
          maxFractionDigits={2}
          placeholder="10000"
          message="Enter your initial investment amount"
        />
      </div>

      <div className="input-group">
        <label>Annual Return Rate</label>
        <InputAmount
          value={investment.rate}
          onChange={handleChange('rate')}
          suffix="%"
          maxFractionDigits={2}
          placeholder="7.5"
          message="Expected annual return percentage"
        />
      </div>

      <div className="input-group">
        <label>Investment Period</label>
        <InputAmount
          value={investment.years}
          onChange={handleChange('years')}
          suffix="years"
          maxFractionDigits={0}
          placeholder="10"
          message="Investment time horizon"
        />
      </div>

      <div className="result">
        <h4>Future Value: ${calculateReturns().toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</h4>
      </div>
    </div>
  );
};
```

### Multi-Currency Support
```tsx
const MultiCurrencyExample = () => {
  const [amounts, setAmounts] = useState({
    usd: '',
    eur: '',
    gbp: ''
  });

  const currencies = [
    { code: 'usd', symbol: '$', name: 'US Dollar' },
    { code: 'eur', symbol: '€', name: 'Euro' },
    { code: 'gbp', symbol: '£', name: 'British Pound' }
  ];

  const handleAmountChange = (currency) => (e) => {
    setAmounts(prev => ({
      ...prev,
      [currency]: e.target.value
    }));
  };

  return (
    <div className="currency-inputs">
      <h3>Multi-Currency Amounts</h3>
      
      {currencies.map(currency => (
        <div key={currency.code} className="currency-input">
          <label>{currency.name}</label>
          <InputAmount
            value={amounts[currency.code]}
            onChange={handleAmountChange(currency.code)}
            currency={currency.symbol}
            maxFractionDigits={2}
            placeholder="0.00"
            footnote={`Enter amount in ${currency.name}`}
          />
        </div>
      ))}
    </div>
  );
};
```

### Form Integration with Validation
```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    salary: '',
    bonus: '',
    expenses: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.salary || parseFloat(formData.salary) <= 0) {
      newErrors.salary = 'Salary is required and must be positive';
    }
    
    if (formData.expenses && parseFloat(formData.expenses) < 0) {
      newErrors.expenses = 'Expenses cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="financial-form">
      <div className="form-group">
        <label htmlFor="salary">Annual Salary *</label>
        <InputAmount
          id="salary"
          value={formData.salary}
          onChange={handleChange('salary')}
          currency="$"
          maxFractionDigits={2}
          placeholder="50000"
          invalid={!!errors.salary}
          message={errors.salary || "Enter your annual salary"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="bonus">Annual Bonus</label>
        <InputAmount
          id="bonus"
          value={formData.bonus}
          onChange={handleChange('bonus')}
          currency="$"
          maxFractionDigits={2}
          placeholder="0"
          message="Optional bonus amount"
        />
      </div>

      <div className="form-group">
        <label htmlFor="expenses">Monthly Expenses</label>
        <InputAmount
          id="expenses"
          value={formData.expenses}
          onChange={handleChange('expenses')}
          currency="$"
          maxFractionDigits={2}
          placeholder="2000"
          invalid={!!errors.expenses}
          message={errors.expenses || "Enter monthly expenses"}
        />
      </div>

      <button type="submit">Calculate Net Income</button>
    </form>
  );
};
```