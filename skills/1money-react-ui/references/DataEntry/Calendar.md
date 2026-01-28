---
name: Calendar
category: DataEntry
description: A flexible date picker component built on top of PrimeReact's Calendar with enhanced styling and 1Money-specific features.
---

# Calendar

## Component Overview

A flexible date picker component built on top of PrimeReact's Calendar with enhanced styling and 1Money-specific features.

### Features

- Single, multiple, and range date selection modes
- Custom icon support with 1Money icon set
- Two size variants: large and small
- Optional labels with required field indicators
- Enhanced range selection styling
- Full PrimeReact Calendar compatibility
- Built-in accessibility features

## Usage Scenarios

### When to use

- Select date/time range (depending on component capability)
- Standardized date input needed in form

### When not to use

- Only display date text (Typography is sufficient)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-info-light`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-white`, `$color-success`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 12, 14, 16, 18
- Line height (px, extracted from source style): 17, 18, 20, 22
- Height/Max-height (px, extracted from source style): 44, 56
- Padding values (px, extracted from source style): 4, 7, 8, 15, 16, 24
- Detailed visual and interaction specifications are based on the component source code `style/*.scss`; new or adjusted styles should be prioritized for consolidation into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact Calendar](https://primereact.org/calendar/).

### Component Props

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"calendar"` |
| wrapperCls | Wrapper class | `string` | - |
| labelCls | Label class | `string` | - |
| messageCls | Message class | `string` | - |
| label | Label content | `ReactNode` | - |
| message | Message content | `ReactNode` | - |
| required | Show required indicator | `boolean` | - |
| success | Show success state | `boolean` | - |
| size | Size variant | `'large' \| 'small'` | `'large'` |
| defaultValue | Default value | `Nullable<Date \| (Date \| null)[] \| Date[]>` | - |
| contentWidth | Input width | `CSSProperties['width']` | - |

> Inherits common props: `value`, `onChange`, `selectionMode`, `pladeholder`, `disabled`, `showIcon`.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Label text | `ReactNode` | - |
| message | Validation/Help message | `ReactNode` | - |
| size | Component size | `'large' \| 'small'` | `'large'` |
| prefixCls | Component class prefix | `string` | `"calendar"` |
| wrapperCls | Class for wrapper | `string` | - |
| labelCls | Class for label | `string` | - |
| messageCls | Class for message | `string` | - |
| required | Required state | `boolean` | `false` |
| success | Success state | `boolean` | `false` |
| defaultValue | Initial value (uncontrolled) | `Date \| Date[] \| null` | - |
| contentWidth | Width of the overlay panel | `CSSProperties['width']` | - |

> Common inherited props: `value`, `onChange`, `selectionMode` ('single', 'multiple', 'range'), `maxDate`, `minDate`, `dateFormat`, `showTime`, `disabled`.

## Examples

```tsx
import { Calendar } from '@1money/react-ui';

// Basic single date picker
<Calendar />

// With label and validation
<Calendar
  label="Date of Birth"
  required
  invalid={hasError}
  message={hasError ? "Date is required" : null}
/>

// Small size
<Calendar size="small" />

// Date range picker
<Calendar selectionMode="range" numberOfMonths={2} placeholder="Start - End" />

// Multiple date selection
<Calendar selectionMode="multiple" />

// With time (inherited from PrimeReact)
<Calendar showTime hourFormat="24" />
```

```tsx
const [dateRange, setDateRange] = useState<Date[]>([]);

<Calendar
  label="Project Duration"
  selectionMode="range"
  value={dateRange}
  onChange={(e) => setDateRange(e.value as Date[])}
  numberOfMonths={2}
  placeholder="Select start and end dates"
/>
```

```tsx
const [selectedDates, setSelectedDates] = useState<Date[]>([]);

<Calendar
  label="Available Dates"
  selectionMode="multiple"
  value={selectedDates}
  onChange={(e) => setSelectedDates(e.value as Date[])}
  placeholder="Select multiple dates"
/>
```

## Core Principles

- **Date Handling**: Always ensure `value` type corresponds to `selectionMode` (single `Date`, `Date[]`, or `[Date, Date]` for range).
- **Styling**: **PROHIBIT** overriding internal calendar panel styles via global CSS. Use `panelClassName` or `className` with scoped styling if strictly necessary.
- **Validation**: Use the component's `invalid` and `message` props for error states instead of external validation messages.
