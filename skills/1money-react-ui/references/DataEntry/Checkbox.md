---
name: Checkbox
category: DataEntry
description: A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.
---

# Checkbox

## 组件概述

A customizable checkbox component built on top of PrimeReact's Checkbox with enhanced styling and additional features.

### Features

- Single checkbox and checkbox group support
- Indeterminate state for partial selections
- Custom styling with SCSS modules
- Disabled state support
- Form integration with validation
- Accessible keyboard navigation
- Full PrimeReact Checkbox compatibility

## 使用场景

### 何时使用
- 显式开关或少量选项选择（Checkbox/Radio）
- 需要在表单中表达布尔值（Switch）或多选/单选（Group）

### 不适用
- 选项很多且需要筛选（考虑 Select/Dropdown）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`
- 字号（px，源码样式提取）：14
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props

### Base Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | HTML id attribute | string | - |
| prefixCls | The classname prefix for component styling | string | "checkbox" |
| wrapperCls | Additional classes for wrapper | string | - |
| innerCls | Additional classes for inner container | string | - |
| checkboxCls | Additional classes for checkbox element | string | - |
| labelCls | Additional classes for label | string | - |
| size | Size variant | 'sm' \| 'md' \| 'lg' | 'md' |
| label | Label text or element | ReactNode | - |
| disabled | Whether the checkbox is disabled | boolean | false |
| required | Whether the checkbox is required | boolean | false |
| name | Name attribute for the input | string | - |
| invalid | Whether the checkbox is in invalid state | boolean | false |

### Normal Mode (tristate = false)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Enable tristate mode | false | false |
| checked | Whether the checkbox is checked | boolean | false |
| onChange | Callback when checkbox state changes | (checked: boolean) => any | - |

### TriState Mode (tristate = true)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Enable tristate mode | true | - |
| value | Tristate value | boolean \| null | - |
| onChange | Callback when state changes | (state: boolean \| null) => any | - |

## 示例

```tsx
import { Checkbox } from '@1money/react-ui';

// Basic checkbox
<Checkbox />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox
  checked={checked}
  onChange={(next) => setChecked(next)}
/>

// With label
<Checkbox
  checked={accepted}
  label="I accept the terms and conditions"
  onChange={(next) => setAccepted(next)}
/>

// Disabled state
<Checkbox disabled checked />

// TriState mode
const [state, setState] = useState<boolean | null>(null);
<Checkbox
  tristate
  value={state}
  onChange={(next) => setState(next)}
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
      <div className="field">
        <Checkbox
          inputId="newsletter"
          checked={formData.newsletter}
          onChange={handleChange('newsletter')}
        />
        <label htmlFor="newsletter">Subscribe to newsletter</label>
      </div>

      <div className="field">
        <Checkbox
          inputId="terms"
          checked={formData.terms}
          onChange={handleChange('terms')}
          required
        />
        <label htmlFor="terms">I agree to the terms *</label>
      </div>

      <div className="field">
        <Checkbox
          inputId="marketing"
          checked={formData.marketing}
          onChange={handleChange('marketing')}
        />
        <label htmlFor="marketing">Receive marketing emails</label>
      </div>
    </form>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Checkbox } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
