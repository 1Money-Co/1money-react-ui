---
name: Select
category: DataEntry
description: A powerful and flexible select dropdown component built on top of PrimeReact's Dropdown and MultiSelect with enhanced styling, validation states, and custom dropdown functionality. Supports both single and multiple selection modes with advanced features.
---

# Select

## 组件概述

A powerful and flexible select dropdown component built on top of PrimeReact's Dropdown and MultiSelect with enhanced styling, validation states, and custom dropdown functionality. Supports both single and multiple selection modes with advanced features.

### Features

- Single and multiple selection modes
- Built-in form validation with success/error states
- Searchable options with filtering
- Custom item templates and display options
- Label and message support for form integration
- Multiple size variants (large, small)
- Unselectable mode for toggle behavior
- Custom dropdown component for advanced use cases
- Full keyboard navigation support
- Rich styling options and theming

## 使用场景

### 何时使用
- 用户从有限选项中选择（单选/多选视组件能力而定）
- 需要节省页面空间（下拉交互）

### 不适用
- 选项数量非常大且需要复杂搜索（考虑 Autocomplete/自定义筛选）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-white`, `$color-success`
- 圆角（px，源码样式提取）：2, 4, 8, 12
- 字号（px，源码样式提取）：12, 14, 16
- 行高（px，源码样式提取）：13, 15, 17, 18, 22
- 高度/最大高度（px，源码样式提取）：16, 44, 56
- padding 数值（px，源码样式提取）：2, 4, 7, 8, 11, 12, 15, 16, 43, 44
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | string | "select" |
| wrapperCls | Wrapper element classes | string | - |
| labelCls | Label element classes | string | - |
| messageCls | Message element classes | string | - |
| label | Label text or element | ReactNode | - |
| message | Help or error message | ReactNode | - |
| required | Show required indicator | boolean | false |
| value | Selected value(s) | any | - |
| size | Component size variant | 'large' \| 'small' | 'large' |
| success | Show success state styling | boolean | false |
| invalid | Show invalid state styling | boolean | false |
| loading | Show loading state | boolean | false |
| disabled | Disable the select | boolean | false |
| itemTemplate | Custom option rendering | (option: any) => ReactNode | - |
| refreshAfterShow | Recompute position after show | boolean | false |

### Single Select Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to Dropdown methods | RefObject<Dropdown> | - |
| multiple | Enable multiple selection | false | false |
| unselectable | Allow deselecting selected option | 'on' \| 'off' | 'off' |
| panelType | Panel display type | 'menu' \| 'selector' | 'menu' |
| onChange | Selection change handler | (e: DropdownChangeEvent) => void | - |

### Multiple Select Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to MultiSelect methods | RefObject<MultiSelect> | - |
| multiple | Enable multiple selection | true | - |
| onChange | Selection change handler | (e: MultiSelectChangeEvent) => void | - |

> 其余属性继承 PrimeReact Dropdown/MultiSelect（如 `className`、`placeholder`、`onBlur`、`onFocus` 等）。

### CustomDropdown Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to CustomDropdownHandler | RefObject<CustomDropdownHandler> | - |
| dataId | Unique identifier for focus management | string | - |
| invalid | Show invalid state styling | boolean | false |
| disabled | Disable the dropdown | boolean | false |
| placeholder | Placeholder text | string | '' |
| className | Additional CSS classes | string | - |
| editable | Enable content editing | boolean | false |
| selectedTemplate | Custom selected content renderer | (isFocus: boolean) => ReactNode | - |
| tailTemplate | Custom tail/icon renderer | (isFocus: boolean) => ReactNode | - |
| onClick | Click event handler | (e: MouseEvent) => void | - |
| onFocus | Focus event handler | () => void | - |
| onBlur | Blur event handler | () => void | - |

### CustomDropdown Handlers
| Method | Description | Parameters |
| --- | --- | --- |
| focus | Programmatically focus | () => void |
| blur | Programmatically blur | () => void |
| getDOMNode | Get root DOM node | () => HTMLDivElement \| null |

## 示例

```tsx
import { Select } from '@1money/react-ui';

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
];

// Single select
<Select
  options={cities}
  placeholder="Select a city"
  onChange={(e) => console.log(e.value)}
/>

// Multiple select
<Select
  multiple
  options={cities}
  placeholder="Select cities"
  onChange={(e) => console.log(e.value)}
/>

// Select with label and validation
<Select
  label="Preferred City"
  message="Please select your preferred city"
  required
  options={cities}
  invalid={!selectedCity}
/>
```

```tsx
const [selectedCity, setSelectedCity] = useState(null);

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
  { label: 'Paris', value: 'PRS' },
];

<Select
  label="Select City"
  placeholder="Choose a city"
  options={cities}
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.value)}
  required
/>
```

```tsx
const [selectedCities, setSelectedCities] = useState([]);

<Select
  multiple
  label="Select Multiple Cities"
  placeholder="Choose cities"
  options={cities}
  value={selectedCities}
  onChange={(e) => setSelectedCities(e.value)}
  filter
  display="chip"
  message="You can select multiple cities"
/>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Select } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
