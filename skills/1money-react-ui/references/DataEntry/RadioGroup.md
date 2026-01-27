---
name: RadioGroup
category: DataEntry
description: A comprehensive radio group component that provides grouped radio button functionality with support for default and card variants, multiple layout directions, and advanced customization options.
---

# RadioGroup

## 组件概述

A comprehensive radio group component that provides grouped radio button functionality with support for default and card variants, multiple layout directions, and advanced customization options.

### Features

- Two display variants: default radio buttons and card-style selection
- Horizontal and vertical layout directions
- Three size variants: small (sm), medium (md), large (lg)
- Built-in label support with required field indication
- Custom styling for each variant
- Programmatic reset functionality via ref
- Auto-focus support for default selection
- Accessible keyboard navigation
- Full control over styling with multiple className props

## 使用场景

### 何时使用
- 显式开关或少量选项选择（Checkbox/Radio）
- 需要在表单中表达布尔值（Switch）或多选/单选（Group）

### 不适用
- 选项很多且需要筛选（考虑 Select/Dropdown）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-light`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-hover`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：16
- padding 数值（px，源码样式提取）：8, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to RadioGroupHandlers for programmatic control | RefObject<RadioGroupHandlers \| null> | - |
| prefixCls | The classname prefix for component styling | string | "radiogroup" |
| wrapperCls | Additional classes for the wrapper element | string | - |
| innerCls | Additional classes for the inner container | string | - |
| radioCls | Additional classes for radio buttons | string | - |
| cardCls | Additional classes for card variant items | string | - |
| cardCheckedCls | Additional classes for checked card items | string | - |
| cardDisabledCls | Additional classes for disabled card items | string | - |
| cardInvalidCls | Additional classes for invalid card items | string | - |
| labelCls | Additional classes for the group label | string | - |
| size | Size variant for radio buttons | 'sm' \| 'md' \| 'lg' | 'md' |
| variant | Display variant | 'default' \| 'card' | 'default' |
| direction | Layout direction | 'horizontal' \| 'vertical' | 'horizontal' |
| label | Group label text or element | ReactNode | - |
| required | Whether the group is required | boolean | false |
| items | Array of radio button items | RadioItemProps[] | [] |
| onChange | Callback when selection changes | (selected: RadioItemProps) => any | - |

### RadioGroupHandlers
| Method | Description | Parameters |
| --- | --- | --- |
| reset | Clear current selection | () => void |

### RadioItem Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| label | Label text for default variant | string | - |
| children | Content for card variant (can be function) | ReactNode \| ((selected: boolean) => ReactNode) | - |
| disabled | Whether the item is disabled | boolean | false |
| invalid | Whether the item is in invalid state | boolean | false |
| autoFocus | Whether this item should be selected by default | boolean | false |

## 示例

```tsx
import { RadioGroup } from '@1money/react-ui';

// Basic radio group
const items = [
  { key: 'option1', label: 'Option 1' },
  { key: 'option2', label: 'Option 2' },
  { key: 'option3', label: 'Option 3' }
];

<RadioGroup
  items={items}
  onChange={(selected) => console.log(selected)}
/>

// With label and required field
<RadioGroup
  label="Choose an option"
  required
  items={items}
  onChange={(selected) => setSelectedOption(selected)}
/>

// Card variant
<RadioGroup
  variant="card"
  items={cardItems}
  onChange={(selected) => setSelectedCard(selected)}
/>

// Vertical layout
<RadioGroup
  direction="vertical"
  items={items}
  onChange={(selected) => setSelectedVertical(selected)}
/>

// Different sizes
<RadioGroup size="sm" items={items} />
<RadioGroup size="md" items={items} />
<RadioGroup size="lg" items={items} />
```

```tsx
interface RadioGroupHandlers {
  reset: () => void; // Clears the current selection
}
```

```tsx
const FormExample = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { key: 'basic', label: 'Basic Plan - $10/month' },
    { key: 'premium', label: 'Premium Plan - $25/month' },
    { key: 'enterprise', label: 'Enterprise Plan - $50/month' }
  ];

  return (
    <div className="form-field">
      <RadioGroup
        label="Select a plan"
        required
        items={plans}
        onChange={(selected) => setSelectedPlan(selected)}
        direction="vertical"
      />
    </div>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { RadioGroup } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
