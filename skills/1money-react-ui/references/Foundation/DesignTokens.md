---
name: DesignTokens
category: Foundation
description: Global design tokens (automatically extracted from src/variable.scss)
---

# Design Tokens

## Overview

This file is automatically extracted from the component library source `src/variable.scss` to ensure Code Assistants follow consistent color and naming prefixes when generating/modifying UI.

> Note: The current repository mainly consolidates color-related tokens; for systematic tokens like spacing/font-size, it is recommended to supplement them in future iterations (see `Spacing` / `Typography`).

## Prefix

| Token | Value | Description |
| --- | --- | --- |
| `$prefix` | `'om-react-ui'` | CSS class namespace (e.g., `.om-react-ui-btn`) |

## Palette

### Primary (Brand)
Used for main actions, active states, and brand identity.

| Token | Value | Description |
| --- | --- | --- |
| `$color-primary` | `#073387` | Main brand color |
| `$color-primary-hover` | `#052561` | Hover state |
| `$color-primary-active` | `#03163A` | Active/Pressed state |
| `$color-primary-black` | `#131313` | Dark text emphasis |
| `$color-primary-white` | `#FEFEFE` | Primary background white |

### Secondary
Used for secondary actions and backgrounds.

| Token | Value | Description |
| --- | --- | --- |
| `$color-secondary` | `#DDE6F4` | Base secondary |
| `$color-secondary-hover` | `#C1D0EB` | Hover state |
| `$color-secondary-active` | `#A4BBE1` | Active/Pressed state |

### Neutral / Greyscale
Used for borders, backgrounds, dividers, and disabled states.

| Token | Value | Description |
| --- | --- | --- |
| `$color-white` | `#FFF` | Pure White |
| `$color-grey-light` | `#F8F8F8` | Lightest background |
| `$color-grey` | `#F0F0F0` | Light background |
| `$color-grey-deep` | `#E3E4E4` | Borders / Dividers |
| `$color-grey-bold` | `#D1D2D2` | Stronger borders |
| `$color-grey-dark` | `#9FA3A3` | Disabled text / Placeholder |
| `$color-grey-midnight` | `#646465` | Secondary text |
| `$color-grey-night` | `#404042` | Primary text |
| `$color-black` | `#000` | Pure Black |
| `$color-dimmer-dark` | `#1F2531` | Overlay background |

### Status / Feedback

#### Info (Blue)
| Token | Value | Description |
| --- | --- | --- |
| `$color-info` | `#3D7CF5` | Info text / icon |
| `$color-info-light` | `#EDF2F9` | Info background |

#### Success (Green)
| Token | Value | Description |
| --- | --- | --- |
| `$color-success` | `#1F5800` | Success text / icon |
| `$color-success-background` | `#1F580033` | Success background (Alpha) |

#### Warning (Yellow)
| Token | Value | Description |
| --- | --- | --- |
| `$color-warning` | `#F4C600` | Warning base |
| `$color-warning-hover` | `#FFB300` | Hover state |
| `$color-warning-active` | `#FFA000` | Active state |
| `$color-warning-dark` | `#DB8600` | Darker warning text |
| `$color-warning-background` | `#F4C60033` | Warning background (Alpha) |

#### Negative / Error (Red)
| Token | Value | Description |
| --- | --- | --- |
| `$color-negative` | `#AE0000` | Error text / icon |
| `$color-negative-hover` | `#920000` | Hover state |
| `$color-negative-active` | `#780000` | Active state |
| `$color-negative-background` | `#AE00001A` | Error background (Alpha) |

## Core Principles

- **Usage**: Always use the SCSS variables (e.g., `$color-primary`) or their corresponding mapped JS tokens/props, never hardcode hex values.
- **Consistency**: Stick to the defined palette. If a design requires a new color, it must be added to `variable.scss` first.
- **Context**: Use semantic colors (Info, Success, Warning, Negative) for their intended purpose only, not just for aesthetic preference.
