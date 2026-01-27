---
name: Calendar
category: DataEntry
description: A flexible date picker component built on top of PrimeReact's Calendar with enhanced styling and 1Money-specific features.
---

# Calendar

## 组件概述

A flexible date picker component built on top of PrimeReact's Calendar with enhanced styling and 1Money-specific features.

### Features

- Single, multiple, and range date selection modes
- Custom icon support with 1Money icon set
- Two size variants: large and small
- Optional labels with required field indicators
- Enhanced range selection styling
- Full PrimeReact Calendar compatibility
- Built-in accessibility features

## 使用场景

### 何时使用
- 选择日期/时间范围（按组件能力）
- 表单中需要标准化日期输入

### 不适用
- 仅展示日期文本（Typography 即可）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-info-light`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-white`, `$color-success`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：12, 14, 16, 18
- 行高（px，源码样式提取）：17, 18, 20, 22
- 高度/最大高度（px，源码样式提取）：44, 56
- padding 数值（px，源码样式提取）：4, 7, 8, 15, 16, 24
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "calendar" |
| wrapperCls | Additional wrapper class name | string | - |
| labelCls | Additional label class name | string | - |
| messageCls | Additional message class name | string | - |
| label | Label text displayed above the calendar | ReactNode | - |
| message | Help text or error message | ReactNode | - |
| required | Whether the field is required (adds asterisk to label) | boolean | false |
| size | Calendar size variant | 'large' \| 'small' | 'large' |
| success | Whether to show success state | boolean | false |
| invalid | Whether to show invalid state | boolean | false |
| defaultValue | Default selected date(s) | Date \| Date[] \| null | - |
| contentWidth | Panel content width | CSSProperties['width'] | - |

> 其余属性继承 PrimeReact Calendar（如 `value`、`selectionMode`、`placeholder` 等）。

## 示例

```tsx
import { Calendar } from '@1money/react-ui';

// Basic single date picker
<Calendar />

// With label
<Calendar label="Date of Birth" />

// Required field
<Calendar label="Date of Incorporation" required />

// Small size
<Calendar size="small" />

// Date range picker
<Calendar selectionMode="range" numberOfMonths={2} />

// Multiple date selection
<Calendar selectionMode="multiple" />
```

```tsx
const [dateRange, setDateRange] = useState<Date[]>([]);

<Calendar
  label="Project Duration"
  selectionMode="range"
  value={dateRange}
  onChange={(e) => setDateRange(e.value as Date[])}
  numberOfMonths={2}
  placeholder="Select start and end dates"
/>
```

```tsx
const [selectedDates, setSelectedDates] = useState<Date[]>([]);

<Calendar
  label="Available Dates"
  selectionMode="multiple"
  value={selectedDates}
  onChange={(e) => setSelectedDates(e.value as Date[])}
  placeholder="Select multiple dates"
/>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Calendar } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
