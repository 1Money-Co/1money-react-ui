---
name: Typography
category: General
description: A comprehensive typography system providing semantic text components with consistent styling across your application. Includes Display, Headline, Title, Body, Link, and Label components with multiple size variants.
---

# Typography

## 组件概述

A comprehensive typography system providing semantic text components with consistent styling across your application. Includes Display, Headline, Title, Body, Link, and Label components with multiple size variants.

### Features

- Six semantic text components for different content hierarchy
- Multiple size variants for each component type
- Bold text support for emphasis
- Consistent font sizes and line heights
- Proper semantic HTML elements (h1, h2, h3, p, a, strong)
- Click handling for interactive text elements
- Customizable styling through className and prefixCls
- Full TypeScript support

## 使用场景

### 何时使用
- 统一使用组件库的图标/排版规范，避免自行引入不一致的 icon/font
- 保证文本层级、字号、字重与设计一致

### 不适用
- 需要完全自定义字体体系（应先更新 Foundation/Typography）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-primary-black`
- 字号（px，源码样式提取）：10, 12, 14, 16, 18, 24, 28, 32, 36, 45, 52, 64
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | HTML id attribute | string | - |
| className | Additional CSS classes | string | - |
| style | Inline styles | CSSProperties | - |
| prefixCls | Component class prefix | string | varies by variant |
| children | Text/content | ReactNode | - |

### Display
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'xl' \| 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Headline
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Whether text should be bold | boolean | false |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Title
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Body
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| onClick | Click event handler | MouseEventHandler<HTMLParagraphElement> | - |

### Link
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'm' \| 's' | - |
| href | Link URL | string | - |
| target | Link target | HTMLAttributeAnchorTarget | - |
| download | Download attribute | string | - |
| onClick | Click event handler | MouseEventHandler<HTMLAnchorElement> | - |

### Label
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'xl' \| 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Whether text should be bold | boolean | false |
| onClick | Click event handler | MouseEventHandler<HTMLSpanElement> | - |

## 示例

```tsx
import { Typography } from '@1money/react-ui';

// Display text
<Typography.Display size="xl">Welcome to 1Money</Typography.Display>

// Headlines
<Typography.Headline size="l">Account Overview</Typography.Headline>

// Titles
<Typography.Title size="m" bold>Recent Transactions</Typography.Title>

// Body text
<Typography.Body size="m">
  Your account balance has been updated successfully.
</Typography.Body>

// Links
<Typography.Link size="m" href="/settings">
  View Settings
</Typography.Link>

// Labels
<Typography.Label size="s" bold>Status:</Typography.Label>
```

```tsx
<header>
  <Typography.Display size="xl" bold>
    1Money Dashboard
  </Typography.Display>
  <Typography.Body size="l">
    Manage your digital assets with confidence
  </Typography.Body>
</header>
```

```tsx
<section>
  <Typography.Headline size="l">Portfolio Overview</Typography.Headline>

  <div className="portfolio-stats">
    <div>
      <Typography.Label size="s" bold>Total Balance</Typography.Label>
      <Typography.Title size="m">$12,345.67</Typography.Title>
    </div>

    <div>
      <Typography.Label size="s" bold>24h Change</Typography.Label>
      <Typography.Title size="m" className="positive">+2.34%</Typography.Title>
    </div>
  </div>

  <Typography.Body size="m">
    Your portfolio has increased by 2.34% over the last 24 hours.
    <Typography.Link size="m" href="/portfolio/details">
      View detailed analysis
    </Typography.Link>
  </Typography.Body>
</section>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Typography } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
