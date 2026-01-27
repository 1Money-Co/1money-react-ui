---
name: CheckboxGroup
category: DataEntry
description: A grouped checkbox component that manages multiple selections with consistent styling and behavior.
---

# CheckboxGroup

## 组件概述

A grouped checkbox component that manages multiple selections with consistent styling and behavior. Supports normal mode and tristate mode for complex selection scenarios.

### Features

- Grouped selection with consistent layout
- Normal and tristate modes
- Size variants
- Custom label and class hooks
- Form-friendly API

## 使用场景

### 何时使用
- 需要在一组选项中多选
- 需要批量表达布尔/三态状态

### 不适用
- 选项很多且需要筛选（考虑 Select/Dropdown）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`
- 字号（px，源码样式提取）：14
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props

### Base Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | HTML id attribute | string | - |
| prefixCls | The classname prefix for component styling | string | "checkboxgroup" |
| wrapperCls | Additional classes for wrapper | string | - |
| innerCls | Additional classes for inner container | string | - |
| checkboxGroupCls | Additional classes for group container | string | - |
| labelCls | Additional classes for label | string | - |
| size | Size variant | 'sm' \| 'md' \| 'lg' | 'md' |

### Normal Mode (tristate = false)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Enable tristate mode | false | false |
| items | Checkbox items | Array<{ key: string; label?: ReactNode; onChange?: (checked: boolean) => any; ...PrimeCheckboxProps }> | - |
| onChange | Callback when selection changes | (checkedList: string[]) => any | - |

### TriState Mode (tristate = true)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Enable tristate mode | true | - |
| items | Checkbox items | Array<{ key: string; label?: ReactNode; defaultValue?: boolean \| null; onChange?: (state: boolean \| null) => any; ...TriStateCheckboxProps }> | - |

> Normal 模式下可通过 item 的 `autoFocus` 设定默认选中项。
| onChange | Callback when selection changes | (itemsState: Record<string, boolean \| null>) => any | - |

## 示例

```tsx
import { CheckboxGroup } from '@1money/react-ui';

// Basic group
const items = [
  { key: 'a', label: 'Option A' },
  { key: 'b', label: 'Option B' },
  { key: 'c', label: 'Option C' }
];

<CheckboxGroup
  items={items}
  onChange={(checkedList) => console.log(checkedList)}
/>

// With size
<CheckboxGroup size="sm" items={items} />
```

```tsx
// TriState group
const triItems = [
  { key: 't1', label: 'Alpha', defaultValue: null },
  { key: 't2', label: 'Beta', defaultValue: true }
];

<CheckboxGroup
  tristate
  items={triItems}
  onChange={(itemsState) => console.log(itemsState)}
/>
```

```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    newsletter: false,
    terms: false,
    marketing: false
  });

  const handleChange = (field) => (checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  return (
    <form>
      <CheckboxGroup
        items={[
          { key: 'newsletter', label: 'Subscribe to newsletter', checked: formData.newsletter, onChange: handleChange('newsletter') },
          { key: 'terms', label: 'I agree to the terms *', checked: formData.terms, onChange: handleChange('terms') },
          { key: 'marketing', label: 'Receive marketing emails', checked: formData.marketing, onChange: handleChange('marketing') }
        ]}
      />
    </form>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { CheckboxGroup } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
