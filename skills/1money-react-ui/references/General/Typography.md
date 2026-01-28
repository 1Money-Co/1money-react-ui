---
name: Typography
category: General
description: A comprehensive typography system providing semantic text components with consistent styling across your application. Includes Display, Headline, Title, Body, Link, and Label components with multiple size variants.
---

# Typography

## Component Overview

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

## Usage Scenarios

### When to use
- Use the component library's icon/typography specifications uniformly to avoid introducing inconsistent icon/font yourself
- Ensure text hierarchy, font size, and font weight consistent with design

### When not to use
- Need a completely custom font system (should update Foundation/Typography first)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-primary-black`
- Font sizes (px, extracted from source style): 10, 12, 14, 16, 18, 24, 28, 32, 36, 45, 52, 64
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Component grouping).

### Component Props

Root component that simply groups the semantic text components. Use the sub-components directly.

### Typography.Display
For large, high-impact headings.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'xl' \| 'l' \| 'm' \| 's' | - |
| bold | Bold weight | boolean | false |
| children | Text content | ReactNode | - |

### Typography.Headline
For section headings.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Bold weight | boolean | false |

### Typography.Title
For card or item titles.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'l' \| 'm' \| 's' | - |
| bold | Bold weight | boolean | false |

### Typography.Body
For standard body text.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'l' \| 'm' \| 's' | - |
| bold | Bold weight | boolean | false |

### Typography.Label
For small labels or metadata.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'xl' \| 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Bold weight | boolean | false |

### Typography.Link
For hyperlinks.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Font size variant | 'm' \| 's' | - |
| href | URL destination | string | - |
| target | Link target attribute | `HTMLAttributeAnchorTarget` | - |
| download | Download filename | string | - |
| onClick | Click handler | `MouseEventHandler` | - |

> All components accept `className`, `style`, `id`.

## Examples

```tsx
import { Typography } from '@1money/react-ui';

const { Display, Headline, Title, Body, Label, Link } = Typography;

// 1. Heading Hierarchy
<Display size="xl">Main Hero Title</Display>
<Headline size="l">Section Heading</Headline>
<Title size="m">Card Title</Title>

// 2. Body Text
<Body size="m">
    Regular body text with <Link href="#">inline link</Link>.
</Body>

// 3. Metadata Label
<Label size="s" className="text-gray-500">
    Last updated: Today
</Label>
```

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

## Core Principles

- **Semantic Hierarchy**: **MUST** use the specific sub-component (`Typography.Display`, `Headline`, `Title`, `Body`) that matches the content's structural role.
- **No Manual Styling**: **PROHIBIT** standard HTML headings (`<h1>`-`<h6>`) or paragraphs (`<p>`) without these wrappers. **NEVER** set `font-size`, `font-weight`, or `line-height` manually in `style` or `className`; rely solely on the `size` and `bold` props.
- **Link Usage**: Use `Typography.Link` for text-based navigation. For button-like navigation, use `Button`.
- **Composition**: Text components can be composed (e.g., `Label` inside a flex container), but do not nest semantic text components (e.g., no `Headline` inside a `Body`).

