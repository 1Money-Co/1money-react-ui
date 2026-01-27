---
name: Input
category: DataEntry
description: A comprehensive input component that supports multiple input types including text, number, mask, textarea, OTP, password, and autocomplete with enhanced styling and validation features.
---

# Input

## 组件概述

A comprehensive input component that supports multiple input types including text, number, mask, textarea, OTP, password, and autocomplete with enhanced styling and validation features.

### Features

- Multiple input types (text, number, mask, textarea, OTP, password, autocomplete)
- Built-in label and message support
- Prefix and suffix elements
- Size variants (large, small)
- Success and error states
- Character count for textarea
- Rounded corners option
- Required field indication
- Full PrimeReact compatibility

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
- 圆角（px，源码样式提取）：8, 12
- 字号（px，源码样式提取）：12, 14, 16
- 行高（px，源码样式提取）：15, 17, 18, 20, 22
- 高度/最大高度（px，源码样式提取）：16, 40, 44, 52, 56, 105, 120
- padding 数值（px，源码样式提取）：8, 11, 12, 15, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
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
| loading | Whether to show loading state | boolean | false |
| showMessageIcon | Whether to show message icon | boolean | true |
| type | Input type | 'text' \| 'number' \| 'mask' \| 'textarea' \| 'otp' \| 'password' \| 'autocomplete' | 'text' |
| ref | Input instance ref (varies by type) | RefObject<...> | - |

> `ref` 类型会随 `type` 变化（如 text/otp 为 `HTMLInputElement`，number 为 `InputNumber`，mask 为 `InputMask`，password 为 `Password`，autocomplete 为 `AutoComplete`，textarea 为 `HTMLTextAreaElement`）。各类型还继承对应 PrimeReact input props。

### Textarea Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| maxLength | Max length for textarea | number | - |
| showCount | Whether to show character count | boolean | false |

## 示例

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

```tsx
<Input
  type="text"
  label="Search"
  prefixEle={<SearchIcon />}
  suffixEle={<ClearButton onClick={clearSearch} />}
  placeholder="Search items..."
/>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Input } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
