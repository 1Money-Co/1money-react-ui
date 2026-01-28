---
name: Spinner
category: General
description: A loading spinner component built on top of PrimeReact's ProgressSpinner with enhanced styling. Spinners are used to indicate loading states, background processes, or waiting periods to provide visual feedback to users.
---

# Spinner

## Component Overview

A loading spinner component built on top of PrimeReact's ProgressSpinner with enhanced styling. Spinners are used to indicate loading states, background processes, or waiting periods to provide visual feedback to users.

### Features

- Customizable size and stroke width
- Configurable animation duration and colors
- Client-side rendering support with 'use client' directive
- Built-in accessibility features
- Responsive design compatibility
- Full PrimeReact ProgressSpinner compatibility
- Lightweight and performant

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

### Component Props

Inherits from: [PrimeReact ProgressSpinner](https://primereact.org/progressspinner/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"spinner"` |

> Common inherited props: `style`, `className`, `strokeWidth`, `fill`, `animationDuration`.

### Common Styling Props (Inherited)
| Property | Description | Example |
| --- | --- | --- |
| style | Inline styles (width/height) | `{ width: '30px', height: '30px' }` |
| strokeWidth | Line thickness | `"2"` |
| fill | Background color | `"transparent"` |
| animationDuration | Spin speed | `"2s"` |

## Examples

```tsx
import { Spinner } from '@1money/react-ui';

// 1. Basic usage
<Spinner />

// 2. Custom Size
<Spinner style={{ width: '20px', height: '20px' }} />

// 3. Custom Styling (Thickness & Speed)
<Spinner strokeWidth="4" animationDuration=".5s" />
```

```tsx
// Inside a button
<Button disabled>
    <Spinner style={{width: '1rem', height: '1rem'}} strokeWidth="4" />
</Button>
```

```tsx
const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <Spinner
          style={{
            width: '50px',
            height: '50px'
          }}
          className="text-blue-500"
          strokeWidth="3"
        />
        <p>Loading your data...</p>
      </div>
    </div>
  );
};

// CSS
.page-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
```

## Core Principles

- **Usage Priority**: Use `Spinner` for undetermined wait times. Use `Progress` if the time is known.
- **Styling**: Control size via `style={{ width, height }}`. Control color via CSS (e.g., `.p-progress-spinner-circle { stroke: red }`) or `className`. **Do not** assume arbitrary SVG props (like `stroke`) work directly unless confirmed.
- **Accessibility**: Implicitly handled, but ensure the parent container has appropriate aria roles if needed.

