---
name: Button
category: General
description: A versatile button component built on top of PrimeReact's Button with enhanced styling and customization options.
---

# Button

## 组件概述

A versatile button component built on top of PrimeReact's Button with enhanced styling and customization options.

### Features

- Multiple severity variants including custom 1Money styles
- Three sizes: small, medium, large
- Loading state with custom spinner
- Active state support
- Full PrimeReact Button compatibility
- Built-in accessibility features

## 使用场景

### 何时使用
- 触发主要/次要操作（提交、确认、保存、继续等）
- 表单提交或工具栏操作
- 与 Modal / Popup / Drawer 的 action 区配合使用

### 不适用
- 仅用于展示信息（请使用 Typography / Badge 等）
- 需要导航跳转但语义是链接（优先用 <a> 或 Link 组件/封装）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-midnight`, `$color-grey-night`, `$color-negative`, `$color-negative-active`, `$color-negative-hover`, `$color-primary`, `$color-primary-active`, `$color-primary-black`, `$color-primary-hover`, `$color-primary-white`, `$color-secondary`, `$color-secondary-active`, `$color-secondary-hover`, `$color-warning`, `$color-warning-active`, `$color-warning-hover`
- 圆角（px，源码样式提取）：8, 12, 36
- 字号（px，源码样式提取）：12, 14, 16
- 行高（px，源码样式提取）：8, 16, 20, 26
- 高度/最大高度（px，源码样式提取）：14, 16, 20, 32, 40, 52
- padding 数值（px，源码样式提取）：10, 12, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "button" |
| ref | Reference to button element | RefObject<HTMLButtonElement> | - |
| active | Whether the button is in an active state | boolean | false |
| size | Button size variant | 'small' \| 'medium' \| 'large' | 'large' |
| severity | Button style variant | 'primary' \| 'secondary' \| 'warning' \| 'grey' \| 'black' \| 'white' \| 'danger' \| 'danger-light' \| 'primary-landing' \| 'secondary-landing' \| 'primary-outline' \| 'secondary-outline' \| PrimeButtonProps['severity'] | 'primary' |

> 支持 `ref` 获取按钮实例（`RefObject<HTMLButtonElement>`）。

## 示例

```tsx
import { Button } from '@1money/react-ui';

// Basic button
<Button>Click me</Button>

// Different severities
<Button severity="primary">Primary</Button>
<Button severity="secondary">Secondary</Button>
<Button severity="danger">Danger</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading>Loading...</Button>

// Active state
<Button active>Active</Button>
```

```tsx
<div className="button-group">
  <Button severity="primary">Save</Button>
  <Button severity="secondary">Cancel</Button>
</div>
```

```tsx
<Button icon="pi pi-check" iconPos="left">
  Confirm
</Button>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Button } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
