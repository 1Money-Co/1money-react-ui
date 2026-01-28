---
name: Collapse
category: Layout
description: A collapsible accordion component built on top of PrimeReact's Accordion with enhanced styling and customization options for organizing content in expandable sections.
---

# Collapse

## Component Overview

A collapsible accordion component built on top of PrimeReact's Accordion with enhanced styling and customization options for organizing content in expandable sections.

### Features

- Multiple collapsible items with unique keys
- Custom expand/collapse icons with chevron animations
- Flexible content structure with support for any React nodes
- Customizable styling for wrapper, items, and content
- Built-in accessibility features from PrimeReact
- Smooth transitions and animations
- Single or multiple active panels support

## Usage Scenarios

### When to use
- Need to collapse/expand info blocks (FAQ, filters, settings) to save space

### When not to use
- Core content needs to be visible by default (avoid hiding main content in collapse)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Font size (px, extracted from source style): 16, 20
- Line height (px, extracted from source style): 24, 28
- Height/Max-height (px, extracted from source style): 24
- Padding values (px, extracted from source style): 16, 24, 28
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

Inherits from: [PrimeReact Accordion](https://primereact.org/accordion/).

## API

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| items | Panel items | `ItemProps[]` | - |
| prefixCls | Component class prefix | `string` | `"collapse"` |
| wrapperCls | Main container class | `string` | - |
| itemCls | Panel container class | `string` | - |
| contentCls | Panel content class | `string` | - |

> Inherits: `activeIndex`, `multiple`, `onTabChange`, `expandIcon`, `collapseIcon`.

### ItemProps Interface
Extends `AccordionTabProps`.
| Name | Description | Type |
| --- | --- | --- |
| key | Unique identifier | `string` |
| header | Header content | `ReactNode` |
| children | Body content | `ReactNode` |
| disabled | Disabled state | `boolean` |

## Examples

```tsx
import { Collapse } from '@1money/react-ui';

const items = [
  {
    key: '1',
    header: 'Section 1',
    children: <div>Content for section 1</div>
  },
  {
    key: '2',
    header: 'Section 2',
    children: <div>Content for section 2</div>,
    disabled: true
  }
];

// 1. Basic Usage
<Collapse items={items} />

// 2. Multiple Expansion
<Collapse items={items} multiple />

// 3. Controlled State
<Collapse
    items={items}
    activeIndex={[0]}
    onTabChange={(e) => console.log(e.index)}
/>
```

```tsx
const faqItems = [
  {
    key: 'billing',
    header: 'How does billing work?',
    children: (
      <div>
        <p>We bill monthly based on your usage.</p>
        <ul>
          <li>First 1000 transactions are free</li>
          <li>$0.01 per transaction after that</li>
        </ul>
      </div>
    )
  },
  {
    key: 'support',
    header: 'How to contact support?',
    children: (
      <p>Email us at <a href="mailto:support@1money.com">support@1money.com</a></p>
    )
  }
];

<Collapse items={faqItems} />
```

```tsx
const settingsItems = [
  {
    key: 'account',
    header: 'Account Settings',
    children: (
      <div className="settings-form">
        <label>
          Email: <input type="email" defaultValue="user@example.com" />
        </label>
        <label>
          Name: <input type="text" defaultValue="John Doe" />
        </label>
      </div>
    )
  },
  {
    key: 'privacy',
    header: 'Privacy Settings',
    children: (
      <div className="privacy-options">
        <label>
          <input type="checkbox" /> Email notifications
        </label>
        <label>
          <input type="checkbox" /> Data sharing
        </label>
      </div>
    )
  }
];

<Collapse items={settingsItems} multiple />
```

## Core Principles

- **Data Structure**: **MUST** pass an array of `ItemProps` objects (with distinct `key`s) to the `items` prop. Do not try to render `<Collapse.Panel>` or similar primitive children directly inside `<Collapse>`.
- **State Management**: Can be uncontrolled (default) or controlled (via `activeIndex` + `onTabChange`). Use controlled mode for complex interactions (e.g., "accordion" behavior where only one stays open).
- **Semantics**: Use proper heading levels within the content if the `header` itself isn't sufficient for the document outline.

