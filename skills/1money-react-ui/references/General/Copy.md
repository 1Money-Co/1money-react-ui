---
name: Copy
category: General
description: `Copy` renders a clipboard icon that copies a provided string to the user’s clipboard and gives instant visual feedback. Once copied, the icon flashes to a checkmark for 1.5 seconds.
---

# Copy

## Component Overview

`Copy` renders a clipboard icon that copies a provided string to the user’s clipboard and gives instant visual feedback. Once copied, the icon flashes to a checkmark for 1.5 seconds.

## Usage Scenarios

### When to use
- Display copyable content (address, transaction hash, invite code, etc.) and provide one-click copy
- Need success/failure callback handling

### When not to use
- Need complex format replication or rich text (requires custom implementation)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-deep`, `$color-success-background`
- Border radius (px, extracted from source style): 12
- Padding values (px, extracted from source style): 8
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

Inherits from: None (Custom Component).

## API

### Component Props

Renders a copy icon that provides visual feedback (checkmark) on interaction.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| value | Text content to copy | `string` | - |
| iconSize | Icon size (px) | `number` | `32` |
| color | Icon color | `string` | - |
| onSuccess | Success callback | `(val: string) => void` | - |
| onError | Error callback | `(val: string) => void` | - |
| prefixCls | Component class prefix | `string` | `'copy'` |
| className | Additional CSS class | `string` | - |

## Examples

```tsx
import { Copy } from '@1money/react-ui';

// 1. Basic Icon
<Copy value="text-to-copy" />

// 2. Custom Size & Color
<Copy
    value="text-to-copy"
    iconSize={24}
    color="#3D73F2"
/>

// 3. With Callbacks
<Copy
    value="text"
    onSuccess={() => toast.success('Copied')}
/>
```

## Core Principles

- **Usage Priority**: Use `Copy` when you only need the *icon action* (e.g., inside a table cell or next to an existing title), not the text display itself.
- **Visual Feedback**: The component provides built-in icon transitions (copy to checkmark). Do not add external visual feedback unless for global notifications (via `onSuccess`).
- **Styling**: Size and color should match the surrounding text context manually if not default.

