---
name: Typography
category: Foundation
description: Mandatory typography specifications. All text must use the `<Typography>` component or follow strict font-size/line-height tokens. Custom definitions of font-size are prohibited.
---

# Typography

## Core Principles

**Code Agent MUST prioritize `<Typography>` component variants.**
Only use custom CSS when strictly necessary (e.g. inside SVG, Canvas), and it MUST follow the defined tokens.

### 1. Component Mapping

| Context | Recommended Variant | Font Size Range |
| --- | --- | --- |
| **Micro / Aux** | `<Typography.Label size="xs" />` | 10px - 12px |
| **Body / Standard** | `<Typography.Body />` | 14px - 16px |
| **Subtitle / Emphasis** | `<Typography.Title />` | 16px - 18px |
| **Headline / Section** | `<Typography.Headline />` | 20px - 24px |
| **Display / Page** | `<Typography.Display />` | 32px+ |

### 2. Font Size Token Reference (Extracted from Source)

If custom CSS is mandatory (e.g., in complex Canvas or SVG), use only the following stepped values:

**Functional Groups:**

* **Micro**: `10px`, `12px`
* **Body**: `14px`, `16px`
* **Heading**: `18px`, `20px`, `24px`
* **Display**: `32px`, `36px`, `52px`

| Size (px) | Usage Context |
| --- | --- |
| 10 | Tiny Label (Badge, Subscript) |
| 12 | Auxiliary Info, Tooltip |
| 14 | **Standard Body (Default)** |
| 16 | Emphasized Body, Button Text, Subtitle |
| 18 | Card Title |
| 20 | Modal Title |
| 24 | Module/Section Title |

### 3. Line Height Reference

Line height should generally be 1.25 - 1.5 times the font size.

* **Compact**: `16px`, `20px` (Dense Lists)
* **Standard**: `24px` (Body Text)
* **Relaxed**: `28px`+

## Verification Checklist

* [ ] Prioritize TypeScript components (e.g., `<Typography.Body>`) over raw HTML/CSS (e.g., `<div className="text-sm">`).
* [ ] Ensure custom CSS font sizes appear strictly within the allowed list above.

## Related Links

* Components: `../General/Typography.md`
* Tokens: `./DesignTokens.md`

