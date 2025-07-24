# Tab

A tabbed navigation component built on top of PrimeReact's TabMenu with enhanced styling and support for tab counts, custom templates, and multiple visual styles for organizing content in horizontal tabs.

## Features

- Multiple tab items with custom labels and icons
- Support for tab counts/badges
- Two visual styles: default and segment
- Custom tab templates with flexible content
- Active tab state management
- Click handlers for tab interactions
- Keyboard navigation support
- Responsive design with overflow handling
- Built-in accessibility features

## Basic Usage

```tsx
import { Tab } from '@1money/react-ui';

// Basic tabs
const tabItems = [
  { label: 'Dashboard', icon: <i className="pi pi-home" /> },
  { label: 'Profile', icon: <i className="pi pi-user" /> },
  { label: 'Settings', icon: <i className="pi pi-cog" /> }
];

<Tab model={tabItems} />

// Tabs with counts
const tabsWithCounts = [
  { label: 'All Transactions', count: 45 },
  { label: 'Pending', count: 3 },
  { label: 'Completed', count: 42 }
];

<Tab model={tabsWithCounts} />

// Segment style tabs
<Tab 
  model={tabItems}
  type="segment"
  activeIndex={0}
  onTabChange={(e) => setActiveTab(e.index)}
/>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the tab container | string | - |
| prefixCls | The classname prefix for component styling | string | "tab" |
| model | Array of tab items to display | TabMenuItem[] | - |
| type | Visual style variant | 'default' \| 'segment' | 'default' |

## TabMenuItem Interface

Each tab item can include the following properties:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Display text for the tab | ReactNode | - |
| icon | Icon to display in the tab | ReactNode | - |
| count | Badge count to display (custom property) | number | - |
| command | Callback when tab is clicked | (event: MenuItemCommandEvent) => void | - |
| url | URL for navigation | string | - |
| items | Submenu items (inherited from PrimeReact) | MenuItem[] | - |
| disabled | Whether the tab is disabled | boolean | false |
| visible | Whether the tab is visible | boolean | true |
| target | Link target attribute | string | - |
| separator | Whether item is a separator | boolean | false |
| style | Inline styles for the tab | CSSProperties | - |
| className | CSS class for the tab item | string | - |

## Inherited Props

This component extends PrimeReact's TabMenu component and inherits all its props except `model`. Common inherited props include:

- `activeIndex?: number` - Index of the active tab
- `onTabChange?: (e: TabMenuTabChangeEvent) => void` - Callback when active tab changes
- `style?: CSSProperties` - Inline styles for the component
- `id?: string` - Unique identifier for the component

## Styling

The Tab component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using the `type` prop to switch between default and segment styles
4. Using CSS custom properties for theme customization

## Accessibility

- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Proper ARIA attributes for tab structure
- Focus management between tabs
- Screen reader support for tab labels and counts
- Semantic HTML structure with proper tab roles

## Examples

### Basic Navigation Tabs
```tsx
const [activeTab, setActiveTab] = useState(0);

const navigationTabs = [
  {
    label: 'Overview',
    icon: <i className="pi pi-chart-line" />,
    command: () => setActiveContent('overview')
  },
  {
    label: 'Analytics',
    icon: <i className="pi pi-chart-bar" />,
    command: () => setActiveContent('analytics')
  },
  {
    label: 'Reports',
    icon: <i className="pi pi-file-pdf" />,
    command: () => setActiveContent('reports')
  },
  {
    label: 'Settings',
    icon: <i className="pi pi-cog" />,
    command: () => setActiveContent('settings')
  }
];

<Tab 
  model={navigationTabs}
  activeIndex={activeTab}
  onTabChange={(e) => setActiveTab(e.index)}
/>
```

### Tabs with Counts/Badges
```tsx
const tabsWithCounts = [
  {
    label: 'All Items',
    count: 156,
    command: () => showAllItems()
  },
  {
    label: 'Active',
    count: 23,
    command: () => showActiveItems()
  },
  {
    label: 'Pending Review',
    count: 8,
    command: () => showPendingItems()
  },
  {
    label: 'Archived',
    count: 125,
    command: () => showArchivedItems()
  }
];

<Tab model={tabsWithCounts} />
```

### Segment Style Tabs
```tsx
const [selectedPeriod, setSelectedPeriod] = useState(0);

const periodTabs = [
  { label: 'Daily', command: () => setPeriod('daily') },
  { label: 'Weekly', command: () => setPeriod('weekly') },
  { label: 'Monthly', command: () => setPeriod('monthly') },
  { label: 'Yearly', command: () => setPeriod('yearly') }
];

<Tab 
  model={periodTabs}
  type="segment"
  activeIndex={selectedPeriod}
  onTabChange={(e) => setSelectedPeriod(e.index)}
/>
```

### Status Filter Tabs
```tsx
const [statusFilter, setStatusFilter] = useState('all');

const statusTabs = [
  {
    label: 'All Transactions',
    count: transactions.length,
    command: () => setStatusFilter('all')
  },
  {
    label: 'Completed',
    icon: <i className="pi pi-check-circle" style={{ color: 'green' }} />,
    count: transactions.filter(t => t.status === 'completed').length,
    command: () => setStatusFilter('completed')
  },
  {
    label: 'Pending',
    icon: <i className="pi pi-clock" style={{ color: 'orange' }} />,
    count: transactions.filter(t => t.status === 'pending').length,
    command: () => setStatusFilter('pending')
  },
  {
    label: 'Failed',
    icon: <i className="pi pi-times-circle" style={{ color: 'red' }} />,
    count: transactions.filter(t => t.status === 'failed').length,
    command: () => setStatusFilter('failed')
  }
];

<div className="transaction-filters">
  <Tab model={statusTabs} />
  <TransactionList filter={statusFilter} />
</div>
```

### Content Management Tabs
```tsx
const [activeSection, setActiveSection] = useState(0);

const contentTabs = [
  {
    label: 'Content',
    icon: <i className="pi pi-file-edit" />,
    count: contentItems.length
  },
  {
    label: 'Media',
    icon: <i className="pi pi-images" />,
    count: mediaItems.length
  },
  {
    label: 'Comments',
    icon: <i className="pi pi-comments" />,
    count: comments.filter(c => !c.approved).length
  },
  {
    label: 'Analytics',
    icon: <i className="pi pi-chart-pie" />
  }
];

<div className="content-manager">
  <Tab 
    model={contentTabs}
    activeIndex={activeSection}
    onTabChange={(e) => setActiveSection(e.index)}
  />
  
  <div className="tab-content">
    {activeSection === 0 && <ContentList />}
    {activeSection === 1 && <MediaLibrary />}
    {activeSection === 2 && <CommentModeration />}
    {activeSection === 3 && <ContentAnalytics />}
  </div>
</div>
```

### Responsive Tab Navigation
```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

const responsiveTabs = [
  { 
    label: isMobile ? 'Home' : 'Dashboard', 
    icon: <i className="pi pi-home" /> 
  },
  { 
    label: isMobile ? 'Txns' : 'Transactions', 
    icon: <i className="pi pi-credit-card" />,
    count: pendingTransactions
  },
  { 
    label: isMobile ? 'Reports' : 'Financial Reports', 
    icon: <i className="pi pi-chart-bar" /> 
  }
];

<Tab 
  model={responsiveTabs}
  className={isMobile ? 'mobile-tabs' : 'desktop-tabs'}
  type={isMobile ? 'segment' : 'default'}
/>
```