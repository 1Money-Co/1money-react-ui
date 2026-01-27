---
name: Radio
category: DataEntry
description: A customizable radio button component built on top of PrimeReact's RadioButton with enhanced styling and additional features.
---

# Radio

## 组件概述

A customizable radio button component built on top of PrimeReact's RadioButton with enhanced styling and additional features.

### Features

- Three size variants: small (sm), medium (md), large (lg)
- Custom styling with SCSS modules
- Disabled and invalid states
- Built-in label support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact RadioButton compatibility

## 使用场景

### 何时使用
- 显式开关或少量选项选择（Checkbox/Radio）
- 需要在表单中表达布尔值（Switch）或多选/单选（Group）

### 不适用
- 选项很多且需要筛选（考虑 Select/Dropdown）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
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

> 其余属性继承 PrimeReact RadioButton。

## 示例

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

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Radio } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
