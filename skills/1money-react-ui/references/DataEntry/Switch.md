---
name: Switch
category: DataEntry
description: A versatile switch component that supports both traditional toggle switches and button-style toggles, built on top of PrimeReact's InputSwitch and ToggleButton components with enhanced functionality.
---

# Switch

## 组件概述

A versatile switch component that supports both traditional toggle switches and button-style toggles, built on top of PrimeReact's InputSwitch and ToggleButton components with enhanced functionality.

### Features

- Two switch types: normal toggle switch and button toggle
- Built-in state management with controlled/uncontrolled modes
- Custom styling with SCSS modules
- Disabled state support
- Form integration capabilities
- Accessible keyboard navigation
- Full PrimeReact compatibility for both variants

## 使用场景

### 何时使用
- 显式开关或少量选项选择（Checkbox/Radio）
- 需要在表单中表达布尔值（Switch）或多选/单选（Group）

### 不适用
- 选项很多且需要筛选（考虑 Select/Dropdown）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-info`, `$color-primary`
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "switch" |
| type | Switch variant type | 'normal' \| 'button' | 'normal' |
| defaultChecked | Default checked state for uncontrolled mode | boolean | false |
| className | Additional CSS classes | string | - |
| onChange | Callback when switch state changes | (e: SwitchChangeEvent) => void | - |

> 说明：Switch 内部管理 `checked` 状态，外部请使用 `defaultChecked` 设定初始值，并通过 `onChange` 获取变更。

## 示例

```tsx
import { Switch } from '@1money/react-ui';

// Basic normal switch (default)
<Switch />

// Button-style toggle
<Switch
  type="button"
  onLabel="ON"
  offLabel="OFF"
  onChange={(e) => console.log('Toggled:', e.value)}
/>

// With default checked state
<Switch
  defaultChecked
  onChange={(e) => console.log('State:', e.value)}
/>

// Disabled switch
<Switch disabled />
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Switch } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
