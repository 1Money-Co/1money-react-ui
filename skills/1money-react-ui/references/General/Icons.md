---
name: Icons
category: General
description: A comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling and accessibility features.
---

# Icons

## Component Overview

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

## Usage Scenarios

### When to use
- Use the component library's icon/typography specifications uniformly to avoid introducing inconsistent icon/font yourself
- Ensure text hierarchy, font size, and font weight consistent with design

### When not to use
- Need a completely custom font system (should update Foundation/Typography first)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey-deep`, `$color-grey-light`
- Border radius (px, extracted from source style): 8
- Padding values (px, extracted from source style): 8
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Renders SVG icons from the internal library.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name identifier | `IconName` | - |
| size | Icon size (width/height) | number \| string | 24 |
| color | Icon fill/stroke color | string | '#131313' |
| className | Class for the SVG element | string | - |
| wrapperCls | Class for the wrapper div | string | - |
| onClick | Click handler | `MouseEventHandler` | - |

> Also supports standard SVG attributes: `viewBox`, `fill`, `stroke`, `width`, `height`.

### IconWrapper Props

Wrapper component for custom SVG content.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | SVG or content to wrap | ReactNode | - |
| size | Wrapper size | number \| string | 24 |

## Examples

```tsx
import { Icons, IconWrapper } from '@1money/react-ui';

// 1. Standard Icon
<Icons name="arrow-right" />

// 2. Custom Size & Color
<Icons
    name="check"
    size={32}
    color="green"
/>

// 3. Interactive Icon
<Icons
    name="close"
    className="cursor-pointer"
    onClick={handleClose}
/>

// 4. Icon with wrapper
<IconWrapper size={32}>
  <Icons name="user" />
</IconWrapper>

// 5. Custom size and styling
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

## Core Principles

- **Unified Icon System**: **MUST** use `Icons` component for all iconography. **PROHIBIT** importing raw primitives (e.g., `<svg>`, `<img>` for icons) or third-party libraries (e.g., `react-icons`, FontAwesome) unless strictly authorized.
- **Styling**: Use the `size` and `color` props for customization. Do not use CSS to override SVG path fills directly unless necessary (use `color="currentColor"` if inheriting).
- **Interaction**: If an icon is clickable, pass `onClick` directly to `Icons`, or wrap it in a `Button` if it requires focus states.
- **Naming**: Use string literals for `name` prop (e.g., `name="arrow-right"`) to ensure type safety.

