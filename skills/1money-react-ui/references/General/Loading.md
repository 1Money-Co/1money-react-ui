---
name: Loading
category: General
description: An animated loading component powered by Lottie animations. Provides smooth, professional loading indicators with two distinct animation styles.
---

# Loading

## Component Overview

An animated loading component powered by Lottie animations. Provides smooth, professional loading indicators with two distinct animation styles.

### Features

- Lottie-based animations for smooth performance
- Two animation types: pure and pattern
- Automatic animation lifecycle management
- Lightweight with dynamic Lottie import
- Customizable styling and sizing
- Memory-safe cleanup on unmount
- SVG rendering for crisp visuals

## Usage Scenarios

### When to use
- Display loading/execution progress (Progress) or loading placeholder (Loading/Spinner)
- Provide feedback during network requests or asynchronous task waiting

### When not to use
- Long-running tasks that require more complete task status/history (consider dedicated page/logs)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: None (Custom Lottie Implementation).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier | `string` | - |
| className | Additional CSS classes | `string` | - |
| prefixCls | The classname prefix for component styling | `string` | `"loading"` |
| type | Animation type to display | `'pure' \| 'pattern'` | `'pure'` |

## Examples

```tsx
import { Loading } from '@1money/react-ui';

// 1. Pure Animation (Default) - Standard loading indicator
<Loading />

// 2. Pattern Animation - stylized background animation
<Loading type="pattern" />

// 3. Custom ID/Class
<Loading id="page-loader" className="my-loading-overlay" />
```

```tsx
const DataPanel = ({ isReady }) => (
    <div className="panel">
        {!isReady ? (
            // Centered loading pure animation
            <div className="flex justify-content-center">
                <Loading type="pure" />
            </div>
        ) : (
            <Content />
        )}
    </div>
);
```

## Core Principles

- **Usage Priority**: Use `Loading` for page-level or section-level loading states. For button states, use `Button`'s `loading` prop.
- **Type Selection**: Use `type="pure"` for standard context and `type="pattern"` for branded/landing contexts.
- **Implementation**: **PROHIBIT** creating custom Lottie implementations or importing Lottie libraries directly.

