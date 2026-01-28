---
name: Select
category: DataEntry
description: A powerful and flexible select dropdown component built on top of PrimeReact's Dropdown and MultiSelect with enhanced styling, validation states, and custom dropdown functionality. Supports both single and multiple selection modes with advanced features.
---

# Select

## Component Overview

A powerful and flexible select dropdown component built on top of PrimeReact's Dropdown and MultiSelect with enhanced styling, validation states, and custom dropdown functionality. Supports both single and multiple selection modes with advanced features.

### Features

- Single and multiple selection modes
- Built-in form validation with success/error states
- Searchable options with filtering
- Custom item templates and display options
- Label and message support for form integration
- Multiple size variants (large, small)
- Unselectable mode for toggle behavior
- Custom dropdown component for advanced use cases
- Full keyboard navigation support
- Rich styling options and theming

## Usage Scenarios

### When to use

- User selects from limited options (Single/Multi depending on component capability)
- Need to save page space (dropdown interaction)

### When not to use

- Number of options is very large and requires complex search (consider Autocomplete/Custom Filter)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-dark`, `$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`, `$color-negative`, `$color-primary`, `$color-primary-black`, `$color-primary-white`, `$color-success`
- Border radius (px, extracted from source style): 2, 4, 8, 12
- Font size (px, extracted from source style): 12, 14, 16
- Line height (px, extracted from source style): 13, 15, 17, 18, 22
- Height/Max Height (px, extracted from source style): 16, 44, 56
- Padding values (px, extracted from source style): 2, 4, 7, 8, 11, 12, 15, 16, 43, 44
- For detailed visual and interaction specifications, refer to the component source code in `style/*.scss`. Any new or adjusted styles should prioritize Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact Dropdown](https://primereact.org/dropdown/) (Single) or [PrimeReact MultiSelect](https://primereact.org/multiselect/) (Multiple).

### Component Props

#### Base Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"select"` |
| wrapperCls | Wrapper class | `string` | - |
| labelCls | Label class | `string` | - |
| messageCls | Message class | `string` | - |
| label | Label content | `ReactNode` | - |
| message | Validation message | `ReactNode` | - |
| required | Required indicator | `boolean` | - |
| size | Size variant | `'large' \| 'small'` | - |
| success | Success state | `boolean` | - |
| refreshAfterShow | Force refresh on open | `boolean` | - |

#### Single Select

`multiple` is undefined or false. Inherits `DropdownProps`.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| multiple | Mode flag | `false` | `false` |
| unselectable | Toggle behavior | `'on' \| 'off'` | `'off'` |
| panelType | Panel style | `'menu' \| 'selector'` | `'menu'` |
| onChange | Change handler | `(e: DropdownChangeEvent) => void` | - |

#### Multi Select

`multiple` is true. Inherits `MultiSelectProps`.

| Name | Description | Type |
| --- | --- | --- |
| multiple | Mode flag | `true` |
| onChange | Change handler | `(e: MultiSelectChangeEvent) => void` |

#### Custom Dropdown

Advanced custom select (component for custom select-like interactions).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to handler | `RefObject<CustomDropdownHandler>` | - |
| dataId | Unique ID | `string` | - |
| placeholder | Placeholder text | `string` | - |
| disabled | Disabled state | `boolean` | `false` |
| invalid | Invalid state | `boolean` | `false` |
| editable | Content editable state | `boolean` | `false` |
| selectedTemplate | Selected value/trigger renderer | `(isFocus: boolean) => ReactNode` | - |
| tailTemplate | Suffix/icon renderer | `(isFocus: boolean) => ReactNode` | - |
| messageCls | Class for message | `string` | - |
| required | Required state | `boolean` | `false` |
| success | Success state | `boolean` | `false` |
| refreshAfterShow | Recalculate position on show | `boolean` | `false` |
| onClick | Click event handler | `(e: MouseEvent) => void` | - |
| onFocus | Focus event handler | `() => void` | - |
| onBlur | Blur event handler | `() => void` | - |

### CustomDropdown Handlers

| Method | Description | Parameters |
| --- | --- | --- |
| focus | Programmatically focus | `() => void` |
| blur | Programmatically blur | `() => void` |
| getDOMNode | Get root DOM node | `() => HTMLDivElement \| null` |

## Examples

```tsx
import { Select } from '@1money/react-ui';

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
];

// Single select
<Select
  options={cities}
  placeholder="Select a city"
  onChange={(e) => console.log(e.value)}
/>

// Multiple select
<Select
  multiple
  options={cities}
  placeholder="Select cities"
  onChange={(e) => console.log(e.value)}
/>

// Select with label and validation
<Select
  label="Preferred City"
  message="Please select your preferred city"
  required
  options={cities}
  invalid={!selectedCity}
/>
```

```tsx
const [selectedCity, setSelectedCity] = useState(null);

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'London', value: 'LDN' },
  { label: 'Tokyo', value: 'TK' },
  { label: 'Paris', value: 'PRS' },
];

<Select
  label="Select City"
  placeholder="Choose a city"
  options={cities}
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.value)}
  required
/>
```

```tsx
const [selectedCities, setSelectedCities] = useState([]);

<Select
  multiple
  label="Select Multiple Cities"
  placeholder="Choose cities"
  options={cities}
  value={selectedCities}
  onChange={(e) => setSelectedCities(e.value)}
  filter
  display="chip"
  message="You can select multiple cities"
/>
```

## Core Principles

- **Mode Config**: Explicitly define `multiple` mode. Note that `onChange` event payloads differ: `e.value` is a scalar for single select, and an array for multi-select.
- **Templating**: Use `itemTemplate` for list items and `selectedItemTemplate` for the trigger value display. **PROHIBIT** DOM manipulation to "hack" the dropdown content.
- **Performance**: For large datasets, use the `virtualScrollerOptions` inherited from PrimeReact if performance issues arise (though standard Select is usually sufficient).
