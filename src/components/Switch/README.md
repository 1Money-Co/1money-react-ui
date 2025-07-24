# Switch

A versatile switch component that supports both traditional toggle switches and button-style toggles, built on top of PrimeReact's InputSwitch and ToggleButton components with enhanced functionality.

## Features

- Two switch types: normal toggle switch and button toggle
- Built-in state management with controlled/uncontrolled modes
- Custom styling with SCSS modules
- Disabled state support
- Form integration capabilities
- Accessible keyboard navigation
- Full PrimeReact compatibility for both variants

## Basic Usage

```tsx
import { Switch } from '@1money/react-ui';

// Basic normal switch (default)
<Switch />

// Controlled switch
const [isEnabled, setIsEnabled] = useState(false);

<Switch
  checked={isEnabled}
  onChange={(e) => setIsEnabled(e.value)}
/>

// Button-style toggle
<Switch
  type="button"
  onLabel="ON"
  offLabel="OFF"
  onChange={(e) => console.log('Toggled:', e.value)}
/>

// With default checked state
<Switch
  defaultChecked={true}
  onChange={(e) => console.log('State:', e.value)}
/>

// Disabled switch
<Switch disabled />
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "switch" |
| type | Switch variant type | 'normal' \| 'button' | 'normal' |
| defaultChecked | Default checked state for uncontrolled mode | boolean | false |
| className | Additional CSS classes | string | - |
| onChange | Callback when switch state changes | (e: SwitchChangeEvent) => void | - |

## Type-Specific Props

### Normal Switch (type="normal" or default)
Inherits all PrimeReact InputSwitch props except `checked`:

- `disabled?: boolean` - Whether the switch is disabled
- `style?: CSSProperties` - Inline styles
- `tooltip?: string` - Tooltip text
- `tooltipOptions?: TooltipOptions` - Tooltip configuration
- `falseValue?: any` - Value to return when unchecked
- `trueValue?: any` - Value to return when checked

### Button Switch (type="button")
Inherits all PrimeReact ToggleButton props except `checked`:

- `onIcon?: string` - Icon to display when checked
- `offIcon?: string` - Icon to display when unchecked
- `onLabel?: string` - Label to display when checked
- `offLabel?: string` - Label to display when unchecked
- `iconPos?: 'left' | 'right'` - Position of the icon
- `disabled?: boolean` - Whether the button is disabled
- `style?: CSSProperties` - Inline styles
- `tooltip?: string` - Tooltip text
- `tooltipOptions?: TooltipOptions` - Tooltip configuration

## Events

### SwitchChangeEvent
The onChange event object varies by type:

**For Normal Switch (InputSwitch):**
```tsx
{
  originalEvent: Event;
  value: boolean;
  stopPropagation(): void;
  preventDefault(): void;
  target: {
    name: string;
    id: string;
    value: boolean;
  };
}
```

**For Button Switch (ToggleButton):**
```tsx
{
  originalEvent: Event;
  value: boolean;
  stopPropagation(): void;
  preventDefault(): void;
  target: {
    name: string;
    id: string;
    value: boolean;
  };
}
```

## Switch Types

### Normal Switch (`type="normal"` or default)
Traditional toggle switch with a sliding thumb, ideal for simple on/off states and settings.

### Button Switch (`type="button"`)
Toggle button that changes appearance when pressed, perfect for mode switching with labels or icons.

## Styling

The Switch component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. Type-specific styling classes (`switch-normal`, `switch-button`)
4. CSS custom properties for theme customization

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation (Space to toggle, Tab to focus)
- Focus management and visual indicators
- Support for form labels and fieldsets
- High contrast mode compatibility

## Examples

### Basic Settings Toggle
```tsx
const SettingsExample = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true
  });

  const handleSettingChange = (setting) => (e) => {
    setSettings(prev => ({
      ...prev,
      [setting]: e.value
    }));
  };

  return (
    <div className="settings-panel">
      <div className="setting-item">
        <label htmlFor="notifications">Enable Notifications</label>
        <Switch
          id="notifications"
          checked={settings.notifications}
          onChange={handleSettingChange('notifications')}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="darkMode">Dark Mode</label>
        <Switch
          id="darkMode"
          type="button"
          onLabel="Dark"
          offLabel="Light"
          checked={settings.darkMode}
          onChange={handleSettingChange('darkMode')}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="autoSave">Auto Save</label>
        <Switch
          id="autoSave"
          checked={settings.autoSave}
          onChange={handleSettingChange('autoSave')}
          disabled={!settings.notifications}
        />
      </div>
    </div>
  );
};
```

### Form Integration
```tsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    acceptTerms: false,
    newsletter: false,
    publicProfile: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <Switch
          checked={formData.acceptTerms}
          onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.value }))}
        />
        <label>I accept the terms and conditions *</label>
      </div>

      <div className="form-field">
        <Switch
          checked={formData.newsletter}
          onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.value }))}
        />
        <label>Subscribe to newsletter</label>
      </div>

      <div className="form-field">
        <Switch
          type="button"
          onLabel="Public"
          offLabel="Private"
          checked={formData.publicProfile}
          onChange={(e) => setFormData(prev => ({ ...prev, publicProfile: e.value }))}
        />
        <label>Profile Visibility</label>
      </div>

      <button type="submit" disabled={!formData.acceptTerms}>
        Submit
      </button>
    </form>
  );
};
```

### Icon Toggle Buttons
```tsx
const IconToggleExample = () => {
  const [viewMode, setViewMode] = useState(false);
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="toolbar">
      <Switch
        type="button"
        onIcon="pi pi-th-large"
        offIcon="pi pi-list"
        onLabel="Grid"
        offLabel="List"
        checked={viewMode}
        onChange={(e) => setViewMode(e.value)}
      />

      <Switch
        type="button"
        onIcon="pi pi-heart-fill"
        offIcon="pi pi-heart"
        checked={favorited}
        onChange={(e) => setFavorited(e.value)}
        style={{
          '--button-checked-bg': '#e91e63',
          '--button-checked-border': '#e91e63'
        }}
      />
    </div>
  );
};
```

### Controlled vs Uncontrolled
```tsx
const ControlExample = () => {
  const [controlledValue, setControlledValue] = useState(false);

  return (
    <div>
      {/* Controlled switch */}
      <div className="switch-group">
        <label>Controlled Switch (value: {controlledValue.toString()})</label>
        <Switch
          checked={controlledValue}
          onChange={(e) => setControlledValue(e.value)}
        />
      </div>

      {/* Uncontrolled switch with default value */}
      <div className="switch-group">
        <label>Uncontrolled Switch (default: true)</label>
        <Switch
          defaultChecked={true}
          onChange={(e) => console.log('Uncontrolled value:', e.value)}
        />
      </div>

      <button onClick={() => setControlledValue(!controlledValue)}>
        Toggle Controlled Switch
      </button>
    </div>
  );
};
```

### Custom Styled Switches
```tsx
<div className="custom-switches">
  {/* Custom normal switch */}
  <Switch
    className="custom-toggle"
    defaultChecked={true}
    style={{
      '--switch-bg': '#f0f0f0',
      '--switch-checked-bg': '#4caf50',
      '--switch-thumb-bg': '#ffffff'
    }}
  />

  {/* Custom button switch */}
  <Switch
    type="button"
    onLabel="YES"
    offLabel="NO"
    className="custom-button-toggle"
    style={{
      '--button-bg': '#2196f3',
      '--button-color': '#ffffff',
      '--button-checked-bg': '#4caf50'
    }}
  />
</div>
```