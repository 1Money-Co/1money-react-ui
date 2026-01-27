---
name: InputAmount
category: DataEntry
description: A specialized numeric input component designed for currency and monetary amounts with automatic formatting, dynamic width adjustment, and precision control. Built with BigNumber.js for accurate decimal calculations.
---

# InputAmount

## 组件概述

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

## 使用场景

### 何时使用
- 表单输入（文本、数字、金额等）并需要统一的 label / message / 校验状态
- 需要前缀/后缀元素（如币种、单位、icon）
- 需要 success/error/disabled 等状态一致性

### 不适用
- 大段富文本编辑（应使用专用富文本编辑器）
- 需要复杂筛选/远程搜索且选项很多（考虑组合 Autocomplete/Select 方案）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-success`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：12, 14, 16, 52
- 行高（px，源码样式提取）：17, 18, 20, 22, 56
- 高度/最大高度（px，源码样式提取）：16, 32, 40, 44, 52, 56
- padding 数值（px，源码样式提取）：12, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props

### Base Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to the input element | RefObject<HTMLInputElement \| null> | - |
| value | Current value of the input | string \| number \| bigint \| null | - |
| name | Input name | string | - |
| min | Minimum value | number \| bigint | - |
| max | Maximum value | number \| bigint | - |
| maxFractionDigits | Maximum number of decimal places | number \| bigint | - |
| placeholder | Placeholder text | string | "0" |
| className | Additional CSS classes for the input element | string | - |
| prefixCls | The classname prefix for component styling | string | "input-amount" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| labelCls | Additional classes for the label element | string | - |
| messageCls | Additional classes for the message element | string | - |
| prefixEleCls | Additional classes for prefix element | string | - |
| suffixEleCls | Additional classes for suffix element | string | - |
| invalid | Whether the input is in invalid state | boolean | false |
| negative | Whether to allow negative values | boolean | false |
| required | Whether the input is required | boolean | false |
| loading | Whether to show loading state | boolean | false |
| success | Whether to show success state | boolean | false |
| disabled | Whether the input is disabled | boolean | false |
| readOnly | Whether the input is read-only | boolean | false |
| label | Label text or element | ReactNode | - |
| prefix | Element to display before the input | ReactNode | - |
| currency | Currency symbol or element to display | ReactNode | - |
| suffix | Element to display after the input | ReactNode | - |
| message | Help text or error message | ReactNode | - |
| onClick | Callback when input is clicked | (e: MouseEvent<HTMLInputElement>) => void | - |
| onChange | Callback when value changes | (e: ChangeEvent<HTMLInputElement>, value: string) => void | - |
| onKeyDown | Callback for keydown events | (e: KeyboardEvent<HTMLInputElement>) => void | - |
| onKeyUp | Callback for keyup events | (e: KeyboardEvent<HTMLInputElement>) => void | - |
| onFocus | Callback when input receives focus | (e: FocusEvent<HTMLInputElement>) => void | - |
| onBlur | Callback when input loses focus | (e: FocusEvent<HTMLInputElement>) => void | - |

### Primary Type (default)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | InputAmount type | 'primary' | 'primary' |
| footnote | Footnote content | ReactNode | - |
| footnoteCls | Additional classes for the footnote element | string | - |

### Normal Type
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | InputAmount type | 'normal' | - |
| size | Size variant | 'small' \| 'large' | 'large' |

## 示例

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
  onChange={(e, val) => setAmount(val)}
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
  onChange={(e, val) => setAmount(val)}
  invalid={parseFloat(amount) < 0}
  message={parseFloat(amount) < 0 ? "Amount must be positive" : ""}
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

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { InputAmount } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
