---
name: Clipboard
category: General
description: A copy-to-clipboard component that displays content with a convenient copy button. Features automatic clipboard copying with success/error callback handling.
---

# Clipboard

## Component Overview

A copy-to-clipboard component that displays content with a convenient copy button. Features automatic clipboard copying with success/error callback handling.

### Features

- One-click copy to clipboard functionality
- Visual feedback with copy icon
- Customizable labels and styling
- Success and error callback support
- Built-in Typography integration for consistent text styling
- Responsive design with proper text wrapping

## Usage Scenarios

### When to use
- Display copyable content (address, transaction hash, invite code, etc.) and provide one-click copy
- Need success/failure callback handling

### When not to use
- Need complex format replication or rich text (requires custom implementation)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`
- Border radius (px, extracted from source style): 12
- Padding values (px, extracted from source style): 8, 16
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content | Text content to copy | `string` | - |
| label | Label text displayed above the button | `string` | - |
| onSuccess | Callback on successful copy | `(val: string) => void` | - |
| onError | Callback on clipboard failure | `(err: any) => void` | - |
| prefixCls | Component class prefix | `string` | `"clipboard"` |
| labelCls | CSS class for the label | `string` | - |
| className | CSS class for main container | `string` | - |
| id | HTML id attribute | `string` | - |

## Examples

```tsx
import { Clipboard } from '@1money/react-ui';

// 1. Basic usage
<Clipboard content="0x123...abc" />

// 2. With Label
<Clipboard
    label="Wallet Address"
    content="0x71C...9A"
/>

// 3. With Success Callback
<Clipboard
    content="SECRET_KEY"
    onSuccess={() => toast.success('Copied!')}
/>
```

## Core Principles

- **Usage Priority**: Use `Clipboard` when you need to display the text *and* provide a copy button.
- **Feedback Loop**: **MUST** provide `onSuccess` or `onError` callbacks if you want custom feedback (toast, etc.). The component handles the clipboard interaction logic internally.
- **Avoid Duplication**: Do not implement `navigator.clipboard.writeText` manually in components; always wrap with this component or use `copy` utility for invisible actions.

