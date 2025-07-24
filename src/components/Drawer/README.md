# Drawer

A slide-out panel component built on top of PrimeReact's Sidebar with 1Money branding and enhanced styling for displaying overlaying content, navigation menus, or detailed information.

## Features

- Slide-out panel from any side (left, right, top, bottom)
- Built-in 1Money logo and branding
- Custom close icon with proper styling
- Modal and non-modal modes
- Keyboard navigation and accessibility support
- Smooth animations and transitions
- Responsive design with mobile optimization
- Overlay backdrop with configurable dismissal

## Basic Usage

```tsx
import { Drawer } from '@1money/react-ui';

// Basic drawer
const [visible, setVisible] = useState(false);

<Drawer 
  visible={visible} 
  onHide={() => setVisible(false)}
>
  <p>Drawer content goes here</p>
</Drawer>

// Right-side drawer
<Drawer 
  visible={visible}
  position="right"
  onHide={() => setVisible(false)}
>
  <div className="drawer-content">
    <h2>Settings</h2>
    <p>Configure your preferences here.</p>
  </div>
</Drawer>

// Full-height drawer with custom width
<Drawer 
  visible={visible}
  position="left"
  style={{ width: '400px' }}
  onHide={() => setVisible(false)}
>
  <NavigationMenu />
</Drawer>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the drawer | string | - |
| prefixCls | The classname prefix for component styling | string | "drawer" |

## Inherited Props

This component extends PrimeReact's Sidebar component and inherits all its props. Common inherited props include:

- `visible: boolean` - Whether the drawer is visible (required)
- `onHide: () => void` - Callback when drawer should be hidden (required)
- `position?: 'left' | 'right' | 'top' | 'bottom'` - Position of the drawer
- `fullScreen?: boolean` - Whether to display in fullscreen mode
- `blockScroll?: boolean` - Whether to block page scrolling when open
- `dismissable?: boolean` - Whether clicking overlay dismisses drawer
- `modal?: boolean` - Whether to display as modal with overlay
- `showCloseIcon?: boolean` - Whether to show the close icon
- `closeIcon?: ReactNode` - Custom close icon (overridden by component)
- `icons?: ReactNode` - Header icons (overridden with 1Money logo)
- `style?: CSSProperties` - Inline styles for the drawer
- `maskStyle?: CSSProperties` - Inline styles for the overlay mask
- `contentStyle?: CSSProperties` - Inline styles for the content area

## Styling

The Drawer component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional styles
2. Overriding the `prefixCls` for complete style control
3. Using `style`, `maskStyle`, and `contentStyle` for inline customization
4. Using CSS custom properties for theme customization

## Accessibility

- Keyboard navigation support (Escape to close, Tab for focus management)
- Proper ARIA attributes for screen readers
- Focus trap when modal is enabled
- Screen reader announcements for open/close states
- Semantic HTML structure
- Proper heading hierarchy with logo as navigation landmark

## Examples

### Navigation Drawer
```tsx
const [drawerVisible, setDrawerVisible] = useState(false);

const navigationItems = [
  { label: 'Dashboard', icon: 'pi pi-home', link: '/dashboard' },
  { label: 'Transactions', icon: 'pi pi-credit-card', link: '/transactions' },
  { label: 'Reports', icon: 'pi pi-chart-bar', link: '/reports' },
  { label: 'Settings', icon: 'pi pi-cog', link: '/settings' }
];

<Drawer
  visible={drawerVisible}
  position="left"
  onHide={() => setDrawerVisible(false)}
  style={{ width: '280px' }}
>
  <div className="navigation-drawer">
    <nav>
      <ul>
        {navigationItems.map(item => (
          <li key={item.label}>
            <a href={item.link}>
              <i className={item.icon}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</Drawer>
```

### Details Panel
```tsx
const [selectedItem, setSelectedItem] = useState(null);
const [detailsVisible, setDetailsVisible] = useState(false);

const showDetails = (item) => {
  setSelectedItem(item);
  setDetailsVisible(true);
};

<Drawer
  visible={detailsVisible}
  position="right"
  onHide={() => setDetailsVisible(false)}
  style={{ width: '500px' }}
>
  {selectedItem && (
    <div className="details-panel">
      <h2>{selectedItem.title}</h2>
      <div className="details-content">
        <p><strong>ID:</strong> {selectedItem.id}</p>
        <p><strong>Status:</strong> {selectedItem.status}</p>
        <p><strong>Created:</strong> {selectedItem.createdDate}</p>
        <div className="description">
          <h3>Description</h3>
          <p>{selectedItem.description}</p>
        </div>
        <div className="actions">
          <Button severity="primary">Edit</Button>
          <Button severity="secondary">Archive</Button>
        </div>
      </div>
    </div>
  )}
</Drawer>
```

### Filter Panel
```tsx
const [filtersVisible, setFiltersVisible] = useState(false);
const [filters, setFilters] = useState({
  dateRange: '',
  category: '',
  amount: { min: '', max: '' }
});

<Drawer
  visible={filtersVisible}
  position="right"
  onHide={() => setFiltersVisible(false)}
  style={{ width: '350px' }}
>
  <div className="filter-panel">
    <h2>Filter Options</h2>
    <form className="filters-form">
      <div className="form-group">
        <label>Date Range</label>
        <select 
          value={filters.dateRange}
          onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
        >
          <option value="">All time</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
          <option value="month">This month</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Category</label>
        <select 
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="">All categories</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Amount Range</label>
        <div className="amount-inputs">
          <input 
            type="number" 
            placeholder="Min"
            value={filters.amount.min}
            onChange={(e) => setFilters({
              ...filters, 
              amount: {...filters.amount, min: e.target.value}
            })}
          />
          <input 
            type="number" 
            placeholder="Max"
            value={filters.amount.max}
            onChange={(e) => setFilters({
              ...filters, 
              amount: {...filters.amount, max: e.target.value}
            })}
          />
        </div>
      </div>
      
      <div className="filter-actions">
        <Button severity="primary" style={{ width: '100%' }}>
          Apply Filters
        </Button>
        <Button 
          severity="secondary" 
          style={{ width: '100%' }}
          onClick={() => setFilters({ dateRange: '', category: '', amount: { min: '', max: '' } })}
        >
          Clear All
        </Button>
      </div>
    </form>
  </div>
</Drawer>
```

### Mobile-Responsive Drawer
```tsx
const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
const isMobile = useMediaQuery('(max-width: 768px)');

<Drawer
  visible={mobileMenuVisible}
  position={isMobile ? 'top' : 'left'}
  onHide={() => setMobileMenuVisible(false)}
  style={isMobile ? { height: '100vh' } : { width: '280px' }}
  fullScreen={isMobile}
>
  <div className={`mobile-menu ${isMobile ? 'mobile-layout' : 'desktop-layout'}`}>
    <MobileNavigationMenu />
  </div>
</Drawer>
```