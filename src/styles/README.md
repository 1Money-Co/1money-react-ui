# Style System

A SCSS-based design system providing theme tokens, a system-prop compiler (`om-sx`), and atomic utility classes.

## Architecture

```text
styles/
├── index.scss              # Bundle entrypoint — emits utilities + root CSS vars
├── theme/                  # Layer 1: Design tokens
│   ├── _palette.scss       # Raw color constants
│   ├── _spacing.scss       # Spacing scale (unit = 8px)
│   ├── _radius.scss        # Border-radius scale
│   ├── _shadow.scss        # Box-shadow scale
│   ├── _config.scss        # Aggregates scales + feature flags
│   ├── _breakpoints.scss   # Breakpoint values + responsive mixins
│   └── _tokens.scss        # Token resolver functions + CSS variable emission
├── system/                 # Layer 2: System-prop compiler
│   ├── _registry.scss      # Prop → CSS mapping with aliases
│   └── _sx.scss            # om-sx mixin implementation
├── utilities/              # Layer 3: Atomic CSS class generator
│   ├── _generator.scss     # Class generation logic
│   └── _index.scss         # Emits classes for all breakpoints
├── functions/              # Layer 4: Convenience API for components
│   └── _index.scss         # Re-exports theme + system as flat namespace
└── __test__/
    └── system.test.ts      # Compilation + output tests
```

## Usage

### Component Library SCSS

Import the `functions` entrypoint to get all helpers in a flat namespace:

```scss
@use '@/styles/functions' as *;
```

#### `om-sx` — System-prop mixin

Declare multiple styled properties with responsive overrides in a single call:

```scss
.card {
  @include om-sx((
    p: 3,                // padding: 24px
    d: flex,             // display: flex
    flex: column,        // flex-direction: column
    gap: 2,              // gap: 16px
    bg: white,           // background-color: var(--om-color-white)
    radius: 2,           // border-radius: var(--om-radius-2, 8px)
    shadow: 1,           // box-shadow: var(--om-shadow-1, ...)
    md: (                // @media (max-width: 1023.98px)
      p: 2,
      gap: 1,
    ),
    sm: (                // @media (max-width: 767.98px)
      p: 1,
      flex: column,
    ),
  ));
}
```

##### Supported props

| Category | Short | Alias (camelCase) | CSS Property |
|----------|-------|-------------------|--------------|
| Spacing | `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` | — | `padding-*` |
| Spacing | `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` | — | `margin-*` |
| Spacing | `gap` | — | `gap` |
| Layout | `d` | `display` | `display` |
| Layout | `flex` | `flexDirection` | `flex-direction` |
| Layout | `jc` | `justifyContent` | `justify-content` |
| Layout | `ai` | `alignItems` | `align-items` |
| Layout | `fw` | `flexWrap` | `flex-wrap` |
| Sizing | `w` | `width` | `width` |
| Sizing | `h` | `height` | `height` |
| Color | `color` | — | `color` |
| Color | `bg` | `bgcolor`, `bgColor` | `background-color` |
| Color | `border` | `borderColor` | `border-color` |
| Visual | `radius` | `borderRadius` | `border-radius` |
| Visual | `shadow` | `boxShadow` | `box-shadow` |

##### Responsive keys

Nest a map under a breakpoint key to generate a `max-width` media query:

- `lg` → `max-width: 1279.98px`
- `md` → `max-width: 1023.98px`
- `sm` → `max-width: 767.98px`

#### Token functions

Use token functions for individual CSS properties:

```scss
.element {
  padding: om-spacing(2);      // var(--om-spacing-2, 16px)
  color: om-color(primary);    // var(--om-color-primary, #073387)
  border-radius: om-radius(3); // var(--om-radius-3, 12px)
  box-shadow: om-shadow(1);    // var(--om-shadow-1, 0 1px 3px ...)
  width: om-sizing(50);        // 50%
}
```

#### Responsive mixins

```scss
.sidebar {
  width: 280px;

  @include om-down(md) { width: 200px; }    // max-width: 1023.98px
  @include om-down(sm) { display: none; }    // max-width: 767.98px
}

// Also available:
// om-up(bp)            → min-width
// om-between(lo, hi)   → min-width and max-width
// om-only(bp)          → exact range for one breakpoint
// om-respond(bp)       → alias for om-down
```

### Business Code — Utility Classes

Import the compiled CSS and use atomic classes in JSX:

```tsx
import '@1money/react-ui/index.css';

function Page() {
  return (
    <div className="om-d-flex om-flex-column om-gap-3 om-p-4 om-bg-white">
      <h1 className="om-color-primary-black om-mb-2">Title</h1>
      <div className="om-d-flex om-gap-2 om-md-flex-column">
        <div className="om-w-33 om-md-w-100 om-radius-2 om-shadow-1" />
        <div className="om-w-33 om-md-w-100 om-radius-2 om-shadow-1" />
      </div>
    </div>
  );
}
```

#### Class naming convention

```text
Base:       .om-{prop}-{value}
Responsive: .om-{breakpoint}-{prop}-{value}

Examples:
  .om-p-2          → padding: 16px
  .om-mx-3         → margin-left: 24px; margin-right: 24px
  .om-d-flex       → display: flex
  .om-jc-center    → justify-content: center
  .om-bg-primary   → background-color: var(--om-color-primary)
  .om-w-50         → width: 50%
  .om-radius-full  → border-radius: 9999px
  .om-md-p-1       → @media (max-width: 1023.98px) { padding: 8px }
  .om-sm-d-none    → @media (max-width: 767.98px) { display: none }
```

### Business SCSS — Direct Theme Consumption

```scss
@use '@1money/react-ui/styles/theme' as theme;

.hero {
  color: theme.om-color(primary);
  padding: theme.om-spacing(6);

  @include theme.om-down(md) {
    padding: theme.om-spacing(3);
  }
}
```

### Theme Customization

Override CSS variables to customize the theme:

```css
:root {
  --om-color-primary: #1a73e8;
  --om-spacing-2: 12px;
  --om-radius-2: 6px;
}
```

## Token Scales

### Spacing (unit = 8px)

| Key | Value |
|-----|-------|
| `0` | 0 |
| `0x5` | 4px |
| `1` | 8px |
| `1x5` | 12px |
| `2` | 16px |
| `2x5` | 20px |
| `3` | 24px |
| `4` | 32px |
| `5` | 40px |
| `6` | 48px |
| `8` | 64px |
| `10` | 80px |
| `12` | 96px |
| `16` | 128px |
| `20` | 160px |

### Radius

| Key | Value |
|-----|-------|
| `0` | 0 |
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `full` | 9999px |

### Shadow

| Key | Value |
|-----|-------|
| `0` | none |
| `1` | `0 1px 3px rgba(0,0,0,0.12)` |
| `2` | `0 3px 6px rgba(0,0,0,0.16)` |
| `3` | `0 10px 20px rgba(0,0,0,0.19)` |

### Sizing

| Key | Value |
|-----|-------|
| `25` | 25% |
| `33` | 33.333% |
| `50` | 50% |
| `66` | 66.667% |
| `75` | 75% |
| `100` | 100% |
| `auto` | auto |

### Colors

Primary: `primary`, `primary-active`, `primary-hover`, `primary-black`, `primary-white`, `primary-light`
Secondary: `secondary`, `secondary-active`, `secondary-hover`
Grey: `grey-light`, `grey`, `grey-deep`, `grey-bold`, `grey-dark`, `grey-midnight`, `grey-night`
Base: `black`, `white`
Info: `info`, `info-light`
Success: `success`, `success-bg`
Warning: `warning`, `warning-hover`, `warning-active`, `warning-dark`, `warning-bg`
Negative: `negative`, `negative-hover`, `negative-active`, `negative-bg`
Other: `dimmer-dark`
