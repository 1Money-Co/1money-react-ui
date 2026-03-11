# Style System

A SCSS-based design system providing theme tokens, a system-prop compiler (`om-sx`), and atomic utility classes.

## Architecture

```text
styles/
├── _api.scss               # Single consumer entrypoint for component / business SCSS
├── index.scss              # CSS bundle entrypoint — emits utilities + root CSS vars
├── tokens/                 # Pure data + pure query functions (no CSS vars)
│   ├── color/
│   │   ├── _primitives.scss       # Raw color primitives
│   │   ├── _palette.scss          # Legacy flat color aliases
│   │   ├── _semantic-colors.scss  # Semantic bg/text/icon/border scales
│   │   └── _index.scss
│   ├── spacing/
│   │   ├── _primitives.scss       # Figma-aligned spacing scale (100 = 4px)
│   │   └── _index.scss
│   ├── radius/
│   │   ├── _primitives.scss       # Figma-aligned radius scale
│   │   └── _index.scss
│   ├── shadow/
│   │   ├── _primitives.scss       # Box-shadow scale
│   │   └── _index.scss
│   ├── opacity/
│   │   ├── _primitives.scss       # Opacity tokens + om-opacity()
│   │   └── _index.scss
│   ├── sizing/
│   │   ├── _primitives.scss       # Component height scale + om-component-height()
│   │   └── _index.scss
│   ├── typography/
│   │   ├── _primitives.scss       # Font families, weights, line-heights, tracking
│   │   ├── _scale.scss            # Full Figma typography spec as Sass maps
│   │   ├── _functions.scss        # Typography accessor functions + mixin
│   │   └── _index.scss
│   └── _index.scss                # Re-exports all token subsystems
├── resolvers/              # Aggregates tokens → CSS var references + responsive
│   ├── _config.scss               # $om-theme-scales aggregation + feature flags
│   ├── _vars.scss                 # om-token/spacing/color/radius/shadow → var()
│   ├── _semantic-spacing.scss     # om-gap/component-padding/section-padding
│   ├── _semantic-color.scss       # om-bg/text/icon/border-s
│   ├── _breakpoints.scss          # om-up/down/between/only/respond
│   └── _index.scss
├── sx/                     # Short-hand prop compiler
│   ├── _registry.scss             # Prop → CSS mapping with aliases and metadata
│   ├── _sx.scss                   # om-sx mixin implementation
│   └── _index.scss
├── utilities/              # Atomic CSS class generator
│   ├── _generator.scss            # Single-loop class generation
│   └── _index.scss                # Emits classes for all breakpoints
└── __test__/
    └── system.test.ts
```

### Dependency flow (strict one-way)

```text
tokens → resolvers → sx → utilities
              ↘
            _api.scss
```

## Feature Flags

All flags live in `resolvers/_config.scss` and default to `true`. Set to `false` to suppress that category of utility classes:

| Flag | Controls |
|------|----------|
| `$om-sys-enable-spacing` | Spacing utilities (`om-p-*`, `om-m-*`, `om-gap-*`) |
| `$om-sys-enable-layout` | Layout utilities (`om-d-*`, `om-flex-*`, `om-jc-*`, `om-ai-*`, `om-fw-*`) |
| `$om-sys-enable-sizing` | Sizing utilities (`om-w-*`, `om-h-*`) |
| `$om-sys-enable-color` | Color utilities (`om-color-*`, `om-bg-*`, `om-border-*`) |
| `$om-sys-enable-visual` | Visual utilities (`om-radius-*`, `om-shadow-*`) |

```scss
@use '@1money/react-ui/styles/resolvers/config' with (
  $om-sys-enable-color: false,
);
```

## How to Add a System Property

1. **Define the prop source map** in `sx/_registry.scss` (e.g. `$om-spacing-props`, `$om-enum-props`, etc.)
2. **Add entries** to the appropriate source map with the CSS property mapping
3. **Add metadata** in `-om-build-system-props()` — each entry needs `css`, `kind`, `flag`, and optionally `scale`/`values`
4. **Add aliases** (if any) to `$om-system-aliases` — they auto-inherit the canonical entry's config
5. **The generator and `om-sx` will pick up the new prop automatically** — no changes needed in `_generator.scss` or `_sx.scss`

### Prop Metadata Fields

| Field | Required | Description |
|-------|----------|-------------|
| `css` | yes | List of CSS properties to emit (e.g. `(padding-left, padding-right)`) |
| `kind` | yes | One of: `spacing`, `enum`, `sizing`, `scale` |
| `flag` | yes | Feature flag group: `spacing`, `layout`, `sizing`, `color`, `visual` |
| `scale` | for spacing/sizing/scale | Token scale name in `$om-theme-scales` |
| `values` | for enum | List of allowed enum values |

## Usage

### Component Library SCSS

Import the `api` entrypoint to get all helpers in a flat namespace:

```scss
@use '@/styles/api' as *;
```

#### `om-sx` — System-prop mixin

Spacing and radius keys follow the Figma token names, so `100 = 4px`, `200 = 8px`, `400 = 16px`, `800 = 32px`, etc.

Declare multiple styled properties with responsive overrides in a single call:

```scss
.card {
  @include om-sx((
    p: 600,              // padding: 24px
    d: flex,             // display: flex
    flex: column,        // flex-direction: column
    gap: 400,            // gap: 16px
    bg: white,           // background-color: var(--om-color-white)
    radius: 300,         // border-radius: var(--om-radius-300, 12px)
    shadow: 1,           // box-shadow: var(--om-shadow-1, ...)
    md: (                // @media (max-width: 1023.98px)
      p: 400,
      gap: 300,
    ),
    sm: (                // @media (max-width: 767.98px)
      p: 200,
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
  padding: om-spacing(400);    // var(--om-spacing-400, 16px)
  color: om-color(primary);    // var(--om-color-primary, #073387)
  border-radius: om-radius(300); // var(--om-radius-300, 12px)
  box-shadow: om-shadow(1);    // var(--om-shadow-1, 0 1px 3px ...)
  width: om-sizing(50);        // 50%
}
```

#### Typography functions

Access the Figma typography scale programmatically. Typography is not registered in `$om-theme-scales` because its values are multi-property maps, not single CSS values — no utility classes or CSS custom properties are generated.

**Functions** return individual values:

```scss
.heading {
  font-size: om-font-size(display, xl);     // 76px
  line-height: om-line-height(display, xl);  // 82.08px
  font-weight: om-font-weight(body, md);     // 400
  font-family: om-font-family(headline, lg); // var(--font-aeonik), Aeonik, sans-serif
  letter-spacing: om-letter-spacing(display, xl); // -0.25px
}
```

**`om-typography()` function** returns the full property map:

```scss
@use 'sass:map';

$body-md: om-typography(body, md);
.element {
  font-size: map.get($body-md, font-size);   // 14px
}
```

**`@include om-typography()` mixin** emits all CSS properties at once:

```scss
.body-text {
  @include om-typography(body, md);
  // Emits: font-family, font-size, line-height, letter-spacing, font-weight
}

.body-strong {
  @include om-typography(body, md, $strong: true);
  // Same as above but font-weight: 500 (medium) instead of 400 (regular)
}

.link {
  @include om-typography(link, md);
  // Also emits: text-decoration: underline; text-decoration-skip-ink: none;
}
```

**Categories and sizes:**

| Category | Sizes | Font | Strong weight |
|----------|-------|------|---------------|
| `display` | `xl`, `lg`, `md`, `sm`, `xs` | Aeonik | — |
| `headline` | `lg`, `md`, `sm`, `xs` | Aeonik | — |
| `title` | `lg`, `md`, `sm` | Inter | 700 |
| `body` | `lg`, `md`, `sm` | Inter | 500 |
| `link` | `md`, `sm` | Inter | — |
| `label` | `xl`, `lg`, `md`, `sm`, `xs` | Inter | 600–700 |

#### Component heights

Standardized heights for interactive elements via `om-component-height($key)`:

```scss
.button {
  height: om-component-height(md); // 40px
}
```

| Key | Value | Use case |
|-----|-------|----------|
| `xs` | 24px | Badge, small chips |
| `sm` | 32px | Small button, icon button |
| `md` | 40px | Medium button, sidebar items |
| `lg` | 44px | Small input/select |
| `xl` | 48px | Cell, stepper step |
| `2xl` | 52px | Default button |
| `3xl` | 56px | Default input/select |

#### Opacity

Standardized opacity values via `om-opacity($key)`:

```scss
.disabled {
  opacity: om-opacity(disabled); // 0.5
}
```

| Key | Value |
|-----|-------|
| `subtle` | 0.05 |
| `light` | 0.1 |
| `medium` | 0.2 |
| `disabled-light` | 0.3 |
| `overlay` | 0.4 |
| `disabled` | 0.5 |
| `disabled-heavy` | 0.6 |

#### Semantic spacing helpers

Use semantic helpers when you want code to reflect the Figma spacing groups directly. These helpers only accept the keys defined for that group and resolve back to primitive spacing vars.

```scss
.stack {
  gap: om-gap(400); // var(--om-spacing-400, 16px)
}

.card {
  padding: om-component-padding(600); // var(--om-spacing-600, 24px)
}

.page-section {
  padding: om-section-padding(1600); // var(--om-spacing-1600, 64px)
}
```

Semantic helpers are aliases only. Utility classes and CSS variable output remain based on the primitive `spacing` scale.

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
    <div className="om-d-flex om-flex-column om-gap-600 om-p-800 om-bg-white">
      <h1 className="om-color-primary-black om-mb-400">Title</h1>
      <div className="om-d-flex om-gap-400 om-md-flex-column">
        <div className="om-w-33 om-md-w-100 om-radius-300 om-shadow-1" />
        <div className="om-w-33 om-md-w-100 om-radius-300 om-shadow-1" />
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
  .om-p-400        → padding: 16px
  .om-mx-600       → margin-left: 24px; margin-right: 24px
  .om-d-flex       → display: flex
  .om-jc-center    → justify-content: center
  .om-bg-primary   → background-color: var(--om-color-primary)
  .om-w-50         → width: 50%
  .om-radius-full  → border-radius: 9999px
  .om-md-p-200     → @media (max-width: 1023.98px) { padding: 8px }
  .om-sm-d-none    → @media (max-width: 767.98px) { display: none }
```

### Business SCSS — Direct Theme Consumption

```scss
@use '@1money/react-ui/styles/api' as om;

.hero {
  color: om.om-color(primary);
  padding: om.om-spacing(800);

  @include om.om-down(md) {
    padding: om.om-spacing(400);
  }
}
```

### Theme Customization

Override CSS variables to customize the theme:

```css
:root {
  --om-color-primary: #1a73e8;
  --om-spacing-400: 20px;
  --om-radius-300: 10px;
}
```

## Token Scales

### Spacing (100 = 4px)

Figma references currently showcased in the design system:

- Gap: `100`, `200`, `300`, `400`, `600`, `1600`
- Component padding: `100`, `200`, `300`, `400`, `600`, `800`
- Section padding: `800`, `1600`, `2400`, `4000`

The style system keeps the full monotonic 4px ladder between those anchors so utilities and `om-sx` stay predictable.

| Key | Value |
|-----|-------|
| `0` | 0 |
| `100` | 4px |
| `200` | 8px |
| `300` | 12px |
| `400` | 16px |
| `500` | 20px |
| `600` | 24px |
| `800` | 32px |
| `1000` | 40px |
| `1200` | 48px |
| `1400` | 56px |
| `1600` | 64px |
| `2000` | 80px |
| `2400` | 96px |
| `3200` | 128px |
| `4000` | 160px |

### Semantic spacing groups

| Group | Allowed keys |
|-------|--------------|
| `om-gap(...)` | `100`, `200`, `300`, `400`, `600`, `1600` |
| `om-component-padding(...)` | `100`, `200`, `300`, `400`, `600`, `800` |
| `om-section-padding(...)` | `800`, `1600`, `2400`, `4000` |

### Radius

| Key | Value |
|-----|-------|
| `0` | 0 |
| `100` | 4px |
| `200` | 8px |
| `300` | 12px |
| `400` | 16px |
| `600` | 24px |
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
Success: `success`, `success-bg`
Warning: `warning`, `warning-hover`, `warning-active`, `warning-dark`, `warning-bg`
Negative: `negative`, `negative-hover`, `negative-active`, `negative-bg`
