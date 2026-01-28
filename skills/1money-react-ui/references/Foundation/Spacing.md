---
name: Spacing
category: Foundation
description: Spacing and sizing specifications (constraints for component library and business code generation)
---

# Spacing

## Goals

- Ensure Code Assistants maintain consistent whitespace and alignment when generating pages/components.
- Avoid scattered magic numbers in business code; prioritize consolidating new spacings into tokens.

## Current Status (Observed from Source)

- Component styles contain direct `px` usage for padding/margin/height (see individual component `style/*.scss`).
- `src/variable.scss` currently does not define spacing tokens.

## Core Principles

Although spacing tokens are not yet predefined in `variable.scss`, when generating or modifying styles, **you MUST strictly follow the 4px grid system**.

### 1. Prioritize Component Props
Prioritize using component built-in props (like `gap`, `gutter`, `size`) over custom CSS margin/padding.

### 2. 4px Grid Multiples Principle
When writing custom CSS is unavoidable, values **MUST** be multiples of 4.

| Recommended Token (Virtual) | Value (px) | Common Scenarios |
| --- | --- | --- |
| `$spacing-xs` | **4px** | Internal fine-tuning, icon spacing |
| `$spacing-sm` | **8px** | Small component internal spacing, compact lists |
| `$spacing-md` | **12px** | Standard component padding, card padding |
| `$spacing-lg` | **16px** | Module spacing, card margins |
| `$spacing-xl` | **24px** | Section separation |
| `$spacing-2xl` | **32px** | Large module separation |
| `$spacing-3xl` | **48px**+ | Page-level whitespace |

### 3. Prohibit Magic Numbers
- ❌ `margin-top: 3px`, `padding: 15px`
- ✅ `margin-top: 4px`, `padding: 16px`


## Checklist

- [ ] All margin/padding values are multiples of 4
- [ ] No unnecessary custom CSS (prioritize Flex/Grid gap)
