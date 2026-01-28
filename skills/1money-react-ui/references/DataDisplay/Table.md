---
name: Table
category: DataDisplay
description: A powerful data table component built on top of PrimeReact's DataTable with enhanced styling and configuration options. Supports advanced features like row selection, expansion, pagination, sorting, and custom column rendering.
---

# Table

## Component Overview

A powerful data table component built on top of PrimeReact's DataTable with enhanced styling and configuration options. Supports advanced features like row selection, expansion, pagination, sorting, and custom column rendering.

### Features

- Built on PrimeReact DataTable for robust functionality
- Single and multiple row selection modes
- Row expansion with custom templates
- Customizable column configuration
- Sorting, filtering, and pagination support
- Row borders and transparent styling options
- Custom cell rendering with body templates
- Scrollable tables with fixed headers
- Full TypeScript support with generic typing

## Usage Scenarios

### When to use
- Display structured list data, requiring sort/pagination/custom columns (as supported)
- List pages combined with Toolbar / Filter / Pagination

### When not to use
- Only display small amount of key-value info (consider Cell / Typography combination)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey`, `$color-grey-bold`, `$color-grey-deep`, `$color-grey-light`, `$color-primary-black`, `$color-primary-white`
- Border radius (px, extracted from source style): 4, 12
- Font size (px, extracted from source style): 14
- Line height (px, extracted from source style): 15, 20
- Height/Max Height (px, extracted from source style): 20, 39, 40
- Padding values (px, extracted from source style): 12, 16
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact DataTable](https://primereact.org/datatable/).

### Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to Table | `RefObject<dataTable>` | - |
| columns | Column definitions | `(ColumnProps & { wrapperCls?: string })[]` | `[]` |
| value | Data array | `T[]` | - |
| prefixCls | Component class prefix | `string` | `"table"` |
| rowBorder | Show row dividers | `boolean` | `false` |
| transparent | Transparent background | `boolean` | `false` |
| hoverEffect | Enable row hover | `boolean` | `false` |
| compactRow | Reduced row height | `boolean` | `false` |
| columnsWrapperCls | Columns wrapper class | `string` | - |
| className | Additional CSS classes | `string` | - |

> Inherits common props: `selection`, `selectionMode`, `onSelectionChange`, `paginator`, `rows`, `sortField`, `sortOrder`.
| columnsWrapperCls | Class for column wrappers | `string` | - |
| wrapperCls | Class for table wrapper | `string` | - |

> Common inherited props: `selection`, `onSelectionChange`, `expandedRows`, `onRowToggle`, `filters`, `sortField`, `sortOrder`, `paginator`, `rows`, `loading`.

### Column Configuration

Columns are configured via the `columns` prop, which accepts an array of objects extending PrimeReact's `ColumnProps`.

```tsx
const columns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    filter: true,
  },
  {
    field: 'status',
    header: 'Status',
    // Custom body template
    body: (data) => <Badge severity={data.status} value={data.status} />,
    // Additional wrapper class supported by 1Money Table
    wrapperCls: 'custom-status-col'
  },
  {
    header: 'Actions',
    align: 'right', // 'left' | 'right' | 'center'
    body: (data) => <Button icon="pi pi-pencil" onClick={() => editRow(data)} />
  }
];
```

## Examples

```tsx
import { Table, Badge, Button } from '@1money/react-ui';

// Data interface
interface Product {
    id: string;
    code: string;
    name: string;
    category: string;
    quantity: number;
}

// Basic usage
const ProductTable = ({ products }: { products: Product[] }) => {
    return (
        <Table
            value={products}
            rowBorder
            hoverEffect
            columns={[
                { field: 'code', header: 'Code', sortable: true },
                { field: 'name', header: 'Name', sortable: true },
                { field: 'category', header: 'Category' },
                { field: 'quantity', header: 'Quantity', align: 'right' }
            ]}
        />
    );
};
```

```tsx
const columns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    filter: true,
  },
  {
    field: 'status',
    header: 'Status',
    body: (data) => <Badge severity={data.status.severity} value={data.status.value} />,
  },
  {
    field: 'actions',
    header: 'Actions',
    align: 'right',
    body: (data) => (
      <div>
        <Button icon="pi pi-pencil" onClick={() => editRow(data)} />
        <Button icon="pi pi-trash" onClick={() => deleteRow(data)} />
      </div>
    ),
  },
];
```

```tsx
const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table
  value={data}
  columns={[
    { field: 'name', header: 'Name', sortable: true },
    { field: 'email', header: 'Email' },
    { field: 'role', header: 'Role' },
  ]}
  rowBorder
/>
```

## Core Principles

- **Configuration**: Always use the `columns` prop (array of objects) to define table structure. Do not use `Column` children directly.
- **Typing**: Use the generic `Table<T>` to ensure type safety for `value` and column templates.
- **Styling**: Prefer built-in props like `rowBorder` and `transparent` over custom CSS overrides.

