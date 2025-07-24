# Collapse

A collapsible accordion component built on top of PrimeReact's Accordion with enhanced styling and customization options for organizing content in expandable sections.

## Features

- Multiple collapsible items with unique keys
- Custom expand/collapse icons with chevron animations
- Flexible content structure with support for any React nodes
- Customizable styling for wrapper, items, and content
- Built-in accessibility features from PrimeReact
- Smooth transitions and animations
- Single or multiple active panels support

## Basic Usage

```tsx
import { Collapse } from '@1money/react-ui';

// Basic collapse
const items = [
  {
    key: 'panel1',
    header: 'What is React?',
    children: <p>React is a JavaScript library for building user interfaces.</p>
  },
  {
    key: 'panel2',
    header: 'Why use TypeScript?',
    children: <p>TypeScript adds static typing to JavaScript for better development experience.</p>
  }
];

<Collapse items={items} />

// Multiple panels can be open
<Collapse items={items} multiple />

// Custom styling
<Collapse 
  items={items}
  wrapperCls="custom-collapse"
  itemCls="custom-item"
  contentCls="custom-content"
/>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| items | Array of collapsible items | ItemProps[] | - |
| wrapperCls | Additional CSS class for the wrapper | string | - |
| itemCls | Additional CSS class for each item | string | - |
| contentCls | Additional CSS class for item content | string | - |
| prefixCls | The classname prefix for component styling | string | "collapse" |

## Item Props (ItemProps)

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier for the item | string | - |
| header | Header content for the accordion tab | ReactNode | - |
| children | Content to display when expanded | ReactNode | - |
| headerTemplate | Custom header template | Function | - |
| disabled | Whether the item is disabled | boolean | false |

## Inherited Props

This component extends PrimeReact's Accordion component and inherits all its props except `className`. Common inherited props include:

- `multiple?: boolean` - Allow multiple panels to be open simultaneously
- `activeIndex?: number | number[]` - Index(es) of active panel(s)
- `onTabOpen?: (e: AccordionTabOpenEvent) => void` - Callback when a tab opens
- `onTabClose?: (e: AccordionTabCloseEvent) => void` - Callback when a tab closes
- `expandIcon?: ReactNode` - Custom expand icon (overridden by component)
- `collapseIcon?: ReactNode` - Custom collapse icon (overridden by component)

## Styling

The Collapse component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `wrapperCls`, `itemCls`, and `contentCls` props for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using CSS custom properties for theme customization

## Accessibility

- Keyboard navigation support (Tab, Enter, Space)
- Proper ARIA attributes for screen readers
- Focus management between accordion items
- Semantic HTML structure with proper headings
- Screen reader announcements for expand/collapse states

## Examples

### FAQ Section
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

### Settings Panel
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

### Content Organization
```tsx
const [activeIndex, setActiveIndex] = useState(0);

const contentItems = [
  {
    key: 'overview',
    header: 'Project Overview',
    children: <ProjectSummary />
  },
  {
    key: 'timeline',
    header: 'Timeline & Milestones',
    children: <ProjectTimeline />
  },
  {
    key: 'team',
    header: 'Team Members',
    children: <TeamList />
  }
];

<Collapse 
  items={contentItems}
  activeIndex={activeIndex}
  onTabOpen={(e) => setActiveIndex(e.index)}
  onTabClose={() => setActiveIndex(-1)}
/>
```