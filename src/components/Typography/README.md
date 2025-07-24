# Typography

A comprehensive typography system providing semantic text components with consistent styling across your application. Includes Display, Headline, Title, Body, Link, and Label components with multiple size variants.

## Features

- Six semantic text components for different content hierarchy
- Multiple size variants for each component type
- Bold text support for emphasis
- Consistent font sizes and line heights
- Proper semantic HTML elements (h1, h2, h3, p, a, strong)
- Click handling for interactive text elements
- Customizable styling through className and prefixCls
- Full TypeScript support

## Components Overview

- **Display**: Large display text for hero sections and major headings (h1)
- **Headline**: Section headings and prominent titles (h2)  
- **Title**: Subsection titles and content headings (h3)
- **Body**: Main body text and content paragraphs (p)
- **Link**: Interactive text links (a)
- **Label**: Inline labels and emphasized text (strong)

## Basic Usage

```tsx
import { Typography } from '@1money/react-ui';

// Display text
<Typography.Display size="xl">Welcome to 1Money</Typography.Display>

// Headlines
<Typography.Headline size="l">Account Overview</Typography.Headline>

// Titles
<Typography.Title size="m" bold>Recent Transactions</Typography.Title>

// Body text
<Typography.Body size="m">
  Your account balance has been updated successfully.
</Typography.Body>

// Links
<Typography.Link size="m" href="/settings">
  View Settings
</Typography.Link>

// Labels  
<Typography.Label size="s" bold>Status:</Typography.Label>
```

## Component Props

### Display
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'xl' \| 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-display" |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Headline
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Whether text should be bold | boolean | false |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-headline" |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Title  
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-title" |
| onClick | Click event handler | MouseEventHandler<HTMLHeadingElement> | - |

### Body
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'l' \| 'm' \| 's' | - |
| bold | Whether text should be bold | boolean | false |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-body" |
| onClick | Click event handler | MouseEventHandler<HTMLParagraphElement> | - |

### Link
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'm' \| 's' | - |
| href | Link URL | string | - |
| target | Link target | HTMLAttributeAnchorTarget | - |
| download | Download attribute | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-link" |
| onClick | Click event handler | MouseEventHandler<HTMLAnchorElement> | - |

### Label
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Text size variant | 'xl' \| 'l' \| 'm' \| 's' \| 'xs' | - |
| bold | Whether text should be bold | boolean | false |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "typography-label" |
| onClick | Click event handler | MouseEventHandler<HTMLSpanElement> | - |

## Size Hierarchy

### Display Sizes
- **xl**: Extra large display text for hero sections
- **l**: Large display text for major headings
- **m**: Medium display text for section dividers
- **s**: Small display text for compact layouts

### Headline Sizes  
- **l**: Large headlines for main sections
- **m**: Medium headlines for subsections
- **s**: Small headlines for content blocks
- **xs**: Extra small headlines for compact areas

### Title Sizes
- **l**: Large titles for primary content areas
- **m**: Medium titles for standard content
- **s**: Small titles for secondary content

### Body Sizes
- **l**: Large body text for emphasis
- **m**: Medium body text for standard content
- **s**: Small body text for secondary information

### Link Sizes
- **m**: Medium links for standard navigation
- **s**: Small links for inline references

### Label Sizes
- **xl**: Extra large labels for prominent markers
- **l**: Large labels for section identifiers  
- **m**: Medium labels for standard use
- **s**: Small labels for compact layouts
- **xs**: Extra small labels for minimal space

## Styling

The Typography components use SCSS modules with BEM-like naming:

1. Use `className` prop for additional styles
2. Override `prefixCls` for complete style control
3. Bold variant adds font-weight styling
4. Size variants control font-size and line-height

## Accessibility

- Uses semantic HTML elements for proper document structure
- Proper heading hierarchy (h1, h2, h3) for screen readers
- Link components support keyboard navigation
- ARIA-compliant markup
- Proper focus management for interactive elements

## Examples

### Page Header Structure
```tsx
<header>
  <Typography.Display size="xl" bold>
    1Money Dashboard
  </Typography.Display>
  <Typography.Body size="l">
    Manage your digital assets with confidence
  </Typography.Body>
</header>
```

### Content Section
```tsx
<section>
  <Typography.Headline size="l">Portfolio Overview</Typography.Headline>
  
  <div className="portfolio-stats">
    <div>
      <Typography.Label size="s" bold>Total Balance</Typography.Label>
      <Typography.Title size="m">$12,345.67</Typography.Title>
    </div>
    
    <div>
      <Typography.Label size="s" bold>24h Change</Typography.Label>
      <Typography.Title size="m" className="positive">+2.34%</Typography.Title>
    </div>
  </div>
  
  <Typography.Body size="m">
    Your portfolio has increased by 2.34% over the last 24 hours.
    <Typography.Link size="m" href="/portfolio/details">
      View detailed analysis
    </Typography.Link>
  </Typography.Body>
</section>
```

### Navigation Links
```tsx
<nav>
  <Typography.Link size="m" href="/dashboard">Dashboard</Typography.Link>
  <Typography.Link size="m" href="/wallets">Wallets</Typography.Link>
  <Typography.Link size="m" href="/transactions">Transactions</Typography.Link>
  <Typography.Link size="m" href="/settings">Settings</Typography.Link>
</nav>
```

### Form Labels
```tsx
<form>
  <div className="form-field">
    <Typography.Label size="m" bold>Wallet Name</Typography.Label>
    <input type="text" placeholder="Enter wallet name" />
  </div>
  
  <div className="form-field">
    <Typography.Label size="m" bold>Network</Typography.Label>
    <select>
      <option>Ethereum</option>
      <option>Bitcoin</option>
      <option>Polygon</option>
    </select>
  </div>
</form>
```

### Card Content
```tsx
<div className="transaction-card">
  <div className="card-header">
    <Typography.Title size="s" bold>Send Transaction</Typography.Title>
    <Typography.Label size="xs" className="status-pending">Pending</Typography.Label>
  </div>
  
  <div className="card-body">
    <Typography.Body size="s">
      Sent 0.5 ETH to wallet address 0x1234...5678
    </Typography.Body>
    <Typography.Body size="xs" className="timestamp">
      2 minutes ago
    </Typography.Body>
  </div>
</div>
```

### Interactive Elements
```tsx
<div className="clickable-section">
  <Typography.Headline 
    size="m" 
    onClick={() => toggleExpanded()}
    style={{ cursor: 'pointer' }}
  >
    Advanced Settings {expanded ? '−' : '+'}
  </Typography.Headline>
  
  {expanded && (
    <div className="expanded-content">
      <Typography.Body size="m">
        Configure advanced wallet settings here.
      </Typography.Body>
    </div>
  )}
</div>
```
