---
name: Tooltip
category: Feedback
description: A contextual help component that displays informative content when users hover over or interact with trigger elements, built on top of react-tooltip with enhanced styling and accessibility features.
source: src/components/Tooltip
---

# Tooltip

## Component Overview

A contextual help component that displays informative content when users hover over or interact with trigger elements, built on top of react-tooltip with enhanced styling and accessibility features.

### Features

- Smart positioning with collision detection
- Multiple trigger events (hover, click, focus)
- Rich content support (text, HTML, React components)
- Configurable delays and animations
- Interactive tooltips with clickable content
- Arrow indicators with custom styling
- Multiple placement options
- Accessibility compliance (ARIA attributes)
- Mobile-friendly touch support

## Usage Scenarios

### When to use

- Give user feedback (success/failure/warning/info) without interrupting main flow (Toast/Notification)
- Status hints within form or area (Message)
- Provide supplementary explanation for icons/buttons (Tooltip)

### When not to use

- Must require user confirmation to continue (consider Modal/ConfirmPopup)

## Design Specifications

- Global class prefix: `om-react-ui` (derived from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-primary-black`, `$color-primary-white`
- Border radius (px, extracted from source style): 4
- Font size (px, extracted from source style): 12
- Height/Max-height (px, extracted from source style): 9
- Padding value (px, extracted from source style): 10
- Detailed visuals and interactions are based on the component source code in `style/*.scss`. New or adjusted styles should be consolidated into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [react-tooltip](https://react-tooltip.com/).

### Component Props

Inherits `ITooltip` from `react-tooltip`.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| anchorSelect | CSS selector for trigger | `string` | - |
| content | Tooltip text content | `string` | - |
| place | Position | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| variant | Visual style | `'dark' \| 'light' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'dark'` |
| prefixCls | Component class prefix | `string` | `"tooltip"` |
| arrowCls | Custom arrow class | `string` | - |

> Common standard props: `id`, `clickable`, `openOnClick`, `isOpen`, `setIsOpen`, `offset`, `place`, `delayShow`, `delayHide`.

### Callback Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| afterShow | Callback after tooltip is shown | `() => void` | - |
| afterHide | Callback after tooltip is hidden | `() => void` | - |

### Accessibility Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| role | ARIA role | `'tooltip' \| 'dialog'` | `'tooltip'` |
| disableTooltip | Function to conditionally disable tooltip | `(anchorElement: Element) => boolean` | - |

## Examples

```tsx
import { Tooltip } from '@1money/react-ui';

// Basic tooltip via CSS selector ID
<>
  <button id="my-button" data-tooltip-content="Hello World">
    Hover Me
  </button>
  <Tooltip anchorSelect="#my-button" />
</>

// Layout specific tooltip
<>
  <span className="info-icon" data-tooltip-id="info-tooltip">ℹ️</span>
  <Tooltip
    id="info-tooltip"
    anchorSelect=".info-icon"
    place="right"
    variant="info"
    content="This is helpful information"
  />
</>

// Clickable tooltip
<Tooltip
  anchorSelect="#clickable-trigger"
  clickable
  openOnClick
>
  <div>
    <h4>Custom Content</h4>
    <a href="#">Link inside tooltip</a>
  </div>
</Tooltip>
```

```tsx
import { Tooltip } from '@1money/react-ui';

// Basic tooltip with hover trigger
<>
  <button data-tooltip-id="basic-tooltip">
    Hover for help
  </button>
  <Tooltip anchorSelect="[data-tooltip-id='basic-tooltip']" content="This is helpful information" />
</>

// Tooltip with custom positioning
<>
  <span data-tooltip-id="info-tooltip">
    More info
  </span>
  <Tooltip
    anchorSelect="[data-tooltip-id='info-tooltip']"
    place="right"
    content="Additional details about this feature"
  />
</>

// Click-triggered tooltip
<>
  <button data-tooltip-id="click-tooltip">
    Click for details
  </button>
  <Tooltip
    anchorSelect="[data-tooltip-id='click-tooltip']"
    openOnClick
    clickable
    content="You can interact with this content"
  />
</>
```

```tsx
// Rich content tooltip
<>
  <div data-tooltip-id="rich-tooltip">
    Complex info
  </div>
  <Tooltip anchorSelect="[data-tooltip-id='rich-tooltip']" place="bottom">
    <div className="p-3">
      <h4>Feature Details</h4>
      <ul>
        <li>Benefit 1</li>
        <li>Benefit 2</li>
        <li>Benefit 3</li>
      </ul>
      <button onClick={() => console.log('Learn more')}>
        Learn More
      </button>
    </div>
  </Tooltip>
</>

// Controlled tooltip
const [isOpen, setIsOpen] = useState(false);

<>
  <button onClick={() => setIsOpen(!isOpen)}>
    Toggle tooltip
  </button>
  <Tooltip
    anchorSelect="button"
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    content="This tooltip is controlled"
  />
</>
```

```tsx
const HelpIcon = ({ helpText }) => (
  <>
    <i
      className="pi pi-question-circle cursor-pointer"
      data-tooltip-id="help-icon"
      style={{ color: '#6B7280' }}
    />
    <Tooltip
      anchorSelect="[data-tooltip-id='help-icon']"
      content={helpText}
      place="top"
      variant="dark"
    />
  </>
);

<HelpIcon helpText="This field is required for account verification" />
```

## Core Principles

- **Selector Usage**: Use `anchorSelect` with ID or data-attribute selectors. **PROHIBIT** broad selector targeting (e.g., `anchorSelect="div"`) that could accidentally attach tooltips to unwanted elements.
- **Content Security**: If using HTML content/children, ensure it is sanitized.
- **Accessibility**: When adding tooltips to non-interactive elements (like `div` or `span`), ensure they are keyboard accessible if important.
