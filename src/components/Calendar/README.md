# Calendar

A flexible date picker component built on top of PrimeReact's Calendar with enhanced styling and 1Money-specific features.

## Features

- Single, multiple, and range date selection modes
- Custom icon support with 1Money icon set
- Two size variants: large and small
- Optional labels with required field indicators
- Enhanced range selection styling
- Full PrimeReact Calendar compatibility
- Built-in accessibility features

## Basic Usage

```tsx
import { Calendar } from '@1money/react-ui';

// Basic single date picker
<Calendar />

// With label
<Calendar label="Date of Birth" />

// Required field
<Calendar label="Date of Incorporation" required />

// Small size
<Calendar size="small" />

// Date range picker
<Calendar selectionMode="range" numberOfMonths={2} />

// Multiple date selection
<Calendar selectionMode="multiple" />
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "calendar" |
| wrapperCls | Additional wrapper class name | string | - |
| labelCls | Additional label class name | string | - |
| label | Label text displayed above the calendar | ReactNode | - |
| required | Whether the field is required (adds asterisk to label) | boolean | false |
| size | Calendar size variant | 'large' \| 'small' | 'large' |
| defaultValue | Default selected date(s) | Date \| Date[] \| null | - |

## Inherited Props

This component extends PrimeReact's Calendar component and inherits all its props. Common inherited props include:

- `value?: Date | Date[] | null` - Currently selected date(s)
- `onChange?: (event: CalendarChangeEvent) => void` - Callback fired on date selection
- `selectionMode?: 'single' | 'multiple' | 'range'` - Date selection mode
- `placeholder?: string` - Input placeholder text
- `disabled?: boolean` - Whether the calendar is disabled
- `readOnly?: boolean` - Whether the calendar is read-only
- `showIcon?: boolean` - Whether to show the calendar icon
- `showButtonBar?: boolean` - Whether to show today/clear buttons
- `numberOfMonths?: number` - Number of months to display
- `minDate?: Date` - Minimum selectable date
- `maxDate?: Date` - Maximum selectable date
- `disabledDates?: Date[]` - Array of disabled dates
- `disabledDays?: number[]` - Array of disabled day numbers (0-6)
- `dateFormat?: string` - Date format pattern
- `showTime?: boolean` - Whether to show time selection
- `timeOnly?: boolean` - Whether to show only time selection
- `hourFormat?: '12' | '24'` - Hour format for time selection

## Styling

The Calendar component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional input styles
2. Using the `panelClassName` prop for calendar panel styles
3. Overriding the `prefixCls` for complete style control
4. Using CSS custom properties for theme customization

Key CSS classes:
- `.calendar` - Root component class
- `.calendar-wrapper` - Wrapper container
- `.calendar-label` - Label styling
- `.calendar-label-required` - Required field indicator
- `.calendar-large` / `.calendar-small` - Size variants
- `.calendar-filled` - Applied when date is selected
- `.calendar-panel` - Calendar dropdown panel

## Accessibility

- Supports keyboard navigation (Arrow keys, Enter, Escape)
- Proper ARIA attributes inherited from PrimeReact
- Screen reader announcements for date selection
- Focus management for panel interactions
- Required field indication in labels

## Examples

### Date Range Selection

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

### Multiple Date Selection

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

### Date with Time

```tsx
const [dateTime, setDateTime] = useState<Date | null>(null);

<Calendar
  label="Appointment Time"
  value={dateTime}
  onChange={(e) => setDateTime(e.value as Date)}
  showTime
  hourFormat="12"
  placeholder="MM/DD/YYYY HH:MM AM/PM"
/>
```

### Restricted Date Range

```tsx
const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

<Calendar
  label="Booking Date"
  minDate={today}
  maxDate={nextMonth}
  disabledDays={[0, 6]} // Disable weekends
  placeholder="Select a weekday"
/>
```

### Form Integration

```tsx
const [formData, setFormData] = useState({
  startDate: null,
  endDate: null
});

<div className="form-section">
  <Calendar
    label="Project Start Date"
    required
    value={formData.startDate}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      startDate: e.value as Date
    }))}
    maxDate={formData.endDate || undefined}
  />
  
  <Calendar
    label="Project End Date"
    required
    value={formData.endDate}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      endDate: e.value as Date
    }))}
    minDate={formData.startDate || new Date()}
  />
</div>
```
