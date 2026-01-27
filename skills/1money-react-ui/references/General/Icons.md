---
name: Icons
category: General
description: A comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling and accessibility features.
---

# Icons

## 组件概述

A comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling and accessibility features.

### Features

- Custom SVG icon library
- 1Money brand logos
- Illustration graphics
- Deprecated icon support for backward compatibility
- Icon wrapper with consistent styling
- Size variants
- Color customization support
- Accessibility attributes

## 使用场景

### 何时使用
- 统一使用组件库的图标/排版规范，避免自行引入不一致的 icon/font
- 保证文本层级、字号、字重与设计一致

### 不适用
- 需要完全自定义字体体系（应先更新 Foundation/Typography）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey-deep`, `$color-grey-light`
- 圆角（px，源码样式提取）：8
- padding 数值（px，源码样式提取）：8
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "icons" |
| name | Icon name from the available icon set | IconName | - |
| id | HTML id attribute | string | - |
| size | Icon size (px) | number \| `${number}` | 24 |
| width | Explicit width (overrides size) | number \| `${number}` | - |
| height | Explicit height (overrides size) | number \| `${number}` | - |
| color | Icon color (CSS color value) | string | '#131313' |
| viewBox | SVG viewBox | string | '0 0 24 24' |
| fill | Use currentColor for fill | boolean | false |
| stroke | Use currentColor for stroke | boolean | false |
| className | Additional CSS classes for svg | string | - |
| wrapperCls | Additional CSS classes for wrapper | string | - |
| style | Inline styles for wrapper | CSSProperties | - |
| ariaLabel | Accessible label | string | - |
| tabIndex | Tab index | number | - |
| onClick | Click handler | (e: MouseEvent<HTMLElement>) => any | - |
| onKeyDown | Keydown handler | (e: KeyboardEvent<HTMLElement>) => any | - |

### IconWrapper Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "icons" |
| id | HTML id attribute | string | - |
| size | Icon size (px) | number \| `${number}` | 24 |
| width | Explicit width (overrides size) | number \| `${number}` | - |
| height | Explicit height (overrides size) | number \| `${number}` | - |
| color | Icon color (CSS color value) | string | '#131313' |
| viewBox | SVG viewBox | string | '0 0 24 24' |
| fill | Use currentColor for fill | boolean | false |
| stroke | Use currentColor for stroke | boolean | false |
| className | Additional CSS classes for svg | string | - |
| wrapperCls | Additional CSS classes for wrapper | string | - |
| style | Inline styles for wrapper | CSSProperties | - |
| ariaLabel | Accessible label | string | - |
| tabIndex | Tab index | number | - |
| onClick | Click handler | (e: MouseEvent<HTMLElement>) => any | - |
| onKeyDown | Keydown handler | (e: KeyboardEvent<HTMLElement>) => any | - |
| children | Icon content to wrap | ReactNode | - |

### IconHover Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "icons-hover" |
| className | Additional CSS classes | string | - |
| disabled | Whether hover state is disabled | boolean | false |

## 示例

```tsx
import { Icons, IconWrapper } from '@1money/react-ui';

// Basic icon
<Icons name="arrow-right" />

// Icon with wrapper
<IconWrapper size={32}>
  <Icons name="user" />
</IconWrapper>

// Custom size and styling
<Icons
  name="settings"
  className="text-primary"
  size={24}
/>
```

```tsx
<button className="icon-button">
  <IconWrapper size={24}>
    <Icons name="settings" />
  </IconWrapper>
  Settings
</button>
```

```tsx
const NavigationMenu = () => (
  <nav>
    <a href="/dashboard">
      <Icons name="dashboard" />
      Dashboard
    </a>
    <a href="/profile">
      <Icons name="user" />
      Profile
    </a>
    <a href="/settings">
      <Icons name="settings" />
      Settings
    </a>
  </nav>
);
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Icons } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
