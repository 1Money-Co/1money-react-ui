# Tooltip

A contextual help component that displays informative content when users hover over or interact with trigger elements, built on top of react-tooltip with enhanced styling and accessibility features.

## Features

- Smart positioning with collision detection
- Multiple trigger events (hover, click, focus)
- Rich content support (text, HTML, React components)
- Configurable delays and animations
- Interactive tooltips with clickable content
- Arrow indicators with custom styling
- Multiple placement options
- Accessibility compliance (ARIA attributes)
- Mobile-friendly touch support

## Basic Usage

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

## Advanced Usage

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

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "tooltip" |
| arrowCls | Additional CSS classes for the tooltip arrow | string | - |
| children | Content to display inside the tooltip | ReactNode | - |

## Inherited Props (from react-tooltip ITooltip)

### Core Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content | Text content to display in tooltip | string | - |
| anchorSelect | CSS selector for target elements | string | - |
| place | Position of tooltip relative to anchor | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end' | 'top' |
| offset | Distance between tooltip and anchor element | number | 10 |
| variant | Visual style preset | 'dark' \| 'light' \| 'warning' \| 'error' \| 'success' \| 'info' | 'dark' |

### Interaction Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| openOnClick | Whether tooltip opens on click instead of hover | boolean | false |
| clickable | Whether tooltip content can be interacted with | boolean | false |
| delayShow | Delay before showing tooltip (ms) | number | 0 |
| delayHide | Delay before hiding tooltip (ms) | number | 0 |
| float | Whether tooltip follows mouse within anchor | boolean | false |
| hidden | Whether to prevent tooltip from showing | boolean | false |

### Control Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| isOpen | Controlled open state | boolean | - |
| setIsOpen | Function to control open state | (isOpen: boolean) => void | - |
| defaultIsOpen | Default open state (uncontrolled) | boolean | false |

### Event Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| openEvents | Events that trigger tooltip open | object | {mouseover: true, focus: true} |
| closeEvents | Events that trigger tooltip close | object | {mouseleave: true, blur: true} |
| globalCloseEvents | Global events that close tooltip | object | {escape: true, scroll: true, resize: true} |

### Styling Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | CSS classes for tooltip element | string | - |
| classNameArrow | CSS classes for tooltip arrow | string | - |
| style | Inline styles for tooltip | CSSProperties | - |
| border | Tooltip border configuration | string \| object | - |
| opacity | Tooltip opacity | number | 1 |
| arrowColor | Color of tooltip arrow | string | - |

### Callback Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| afterShow | Callback after tooltip is shown | () => void | - |
| afterHide | Callback after tooltip is hidden | () => void | - |

### Accessibility Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| role | ARIA role for tooltip | 'tooltip' \| 'dialog' | 'tooltip' |
| disableTooltip | Function to conditionally disable tooltip | (anchorElement: Element) => boolean | - |

## Styling

The Tooltip component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for tooltip container styles
2. `arrowCls` and `classNameArrow` for arrow styling
3. `prefixCls` override for complete style control
4. `variant` prop for predefined style themes
5. CSS custom properties for theme customization

## Accessibility

- Proper ARIA attributes (role, aria-describedby)
- Keyboard navigation support
- Focus management for interactive tooltips
- Screen reader compatibility
- Configurable ARIA roles for different use cases
- Escape key handling for dismissal

## Examples

### Help Icon with Tooltip

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

### Form Field with Validation Tooltip

```tsx
const ValidationField = ({ error, value, onChange }) => (
  <div className="field">
    <input
      type="text"
      value={value}
      onChange={onChange}
      data-tooltip-id="validation-field"
      className={error ? 'error' : ''}
    />
    {error && (
      <Tooltip
        anchorSelect="[data-tooltip-id='validation-field']"
        content={error}
        variant="error"
        place="bottom"
        openOnClick={false}
        isOpen={!!error}
      />
    )}
  </div>
);
```

### Interactive Tooltip with Actions

```tsx
const ProfileTooltip = ({ user }) => (
  <>
    <img 
      src={user.avatar}
      alt={user.name}
      data-tooltip-id="profile-tooltip"
      className="w-8 h-8 rounded-full cursor-pointer"
    />
    <Tooltip
      anchorSelect="[data-tooltip-id='profile-tooltip']"
      clickable
      place="bottom"
      delayHide={500}
    >
      <div className="p-4 text-center">
        <img src={user.avatar} alt="" className="w-16 h-16 rounded-full mx-auto mb-2" />
        <h4 className="font-semibold">{user.name}</h4>
        <p className="text-sm text-gray-600">{user.email}</p>
        <div className="mt-3 space-x-2">
          <button className="btn btn-sm btn-primary">View Profile</button>
          <button className="btn btn-sm btn-secondary">Send Message</button>
        </div>
      </div>
    </Tooltip>
  </>
);
```

### Status Indicator with Rich Content

```tsx
const StatusIndicator = ({ status, details }) => (
  <>
    <span 
      className={`status-badge ${status}`}
      data-tooltip-id="status-indicator"
    >
      {status}
    </span>
    <Tooltip anchorSelect="[data-tooltip-id='status-indicator']" place="right">
      <div className="status-details">
        <h5>Status Details</h5>
        <ul>
          <li>Last updated: {details.lastUpdated}</li>
          <li>Next check: {details.nextCheck}</li>
          <li>Health score: {details.healthScore}/100</li>
        </ul>
        {details.issues.length > 0 && (
          <div className="mt-2">
            <strong>Issues:</strong>
            <ul>
              {details.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Tooltip>
  </>
);
```

### Data Table Cell with Overflow Tooltip

```tsx
const TableCell = ({ content, maxLength = 30 }) => {
  const truncated = content.length > maxLength;
  const displayContent = truncated ? content.substring(0, maxLength) + '...' : content;

  return (
    <>
      <td data-tooltip-id={truncated ? 'cell-overflow' : undefined}>
        {displayContent}
      </td>
      {truncated && (
        <Tooltip
          anchorSelect="[data-tooltip-id='cell-overflow']"
          content={content}
          place="top"
          delayShow={500}
        />
      )}
    </>
  );
};
```

### Multi-step Form with Contextual Help

```tsx
const FormWithHelp = () => (
  <form>
    <div className="field-group">
      <label htmlFor="tax-id">
        Tax ID
        <i 
          className="pi pi-info-circle ml-1"
          data-tooltip-id="tax-id-help"
        />
      </label>
      <input type="text" id="tax-id" />
      <Tooltip anchorSelect="[data-tooltip-id='tax-id-help']" place="right" clickable>
        <div className="help-content">
          <p><strong>Tax ID Requirements:</strong></p>
          <ul>
            <li>US businesses: 9-digit EIN (XX-XXXXXXX)</li>
            <li>Non-US businesses: Local tax identifier</li>
            <li>Individuals: SSN for sole proprietorships</li>
            <li>No tax ID: Enter "NA"</li>
          </ul>
          <a href="/help/tax-id" target="_blank" className="text-blue-500">
            Learn more →
          </a>
        </div>
      </Tooltip>
    </div>
  </form>
);
```