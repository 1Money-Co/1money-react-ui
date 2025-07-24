# Table

A powerful data table component built on top of PrimeReact's DataTable with enhanced styling and configuration options. Supports advanced features like row selection, expansion, pagination, sorting, and custom column rendering.

## Features

- Built on PrimeReact DataTable for robust functionality
- Single and multiple row selection modes
- Row expansion with custom templates
- Customizable column configuration
- Sorting, filtering, and pagination support
- Row borders and transparent styling options
- Custom cell rendering with body templates
- Scrollable tables with fixed headers
- Full TypeScript support with generic typing

## Basic Usage

```tsx
import { Table } from '@1money/react-ui';

// Basic table with columns
<Table
  value={data}
  columns={[
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'role', header: 'Role' },
  ]}
/>

// Table with row borders
<Table
  value={data}
  columns={columns}
  rowBorder
/>

// Scrollable table
<Table
  value={data}
  columns={columns}
  scrollable
  scrollHeight="400px"
/>
```

## Component-Specific Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "table" |
| columns | Column configuration array | ColumnProps[] | [] |
| rowBorder | Whether to show borders between rows | boolean | false |
| transparent | Whether to use transparent background | boolean | false |

## Inherited Props

This component extends PrimeReact's DataTable and inherits all its props. Key inherited props include:

- `value?: T[]` - Array of data to display
- `selectionMode?: 'single' | 'multiple' | 'checkbox' | 'radiobutton'`
- `selection?: any` - Selected row(s) 
- `onSelectionChange?: (e: { value: any }) => void`
- `expandedRows?: any` - Expanded row(s)
- `onRowToggle?: (e: { data: any }) => void`
- `rowExpansionTemplate?: (data: any, options: any) => React.ReactNode`
- `paginator?: boolean` - Enable pagination
- `rows?: number` - Number of rows per page
- `scrollable?: boolean` - Enable scrolling
- `scrollHeight?: string` - Fixed scroll height
- `sortMode?: 'single' | 'multiple'`
- `filterDisplay?: 'menu' | 'row'`
- `loading?: boolean` - Show loading state
- `emptyMessage?: string` - Message when no data

## Column Configuration

Columns are configured using PrimeReact's ColumnProps interface:

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

## Styling

The Table component uses SCSS modules with customizable styling:

1. Use `className` prop for additional styles
2. Override `prefixCls` for complete style control
3. Use `rowBorder` and `transparent` props for built-in style variants

## Accessibility

- Supports keyboard navigation for row selection
- ARIA attributes inherited from PrimeReact DataTable
- Screen reader friendly column headers
- Focus management for interactive elements
- Proper table semantics

## Examples

### Basic Data Table
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

### Table with Selection
```tsx
const [selectedRow, setSelectedRow] = useState(null);

<Table
  value={data}
  columns={columns}
  selectionMode="single"
  selection={selectedRow}
  onSelectionChange={(e) => setSelectedRow(e.value)}
/>
```

### Table with Row Expansion
```tsx
const [expandedRows, setExpandedRows] = useState(null);

<Table
  value={data}
  columns={[
    {
      expander: (rowData) => true,
      body: (data, options) => (
        <button onClick={options.expander.onClick}>
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      ),
    },
    ...otherColumns,
  ]}
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={(data) => (
    <div>
      <h4>Details for {data.name}</h4>
      <p>Additional information here...</p>
    </div>
  )}
/>
```

### Table with Custom Cell Rendering
```tsx
<Table
  value={walletData}
  columns={[
    { field: 'nickname', header: 'Wallet Nickname' },
    { field: 'asset', header: 'Asset' },
    { field: 'network', header: 'Network' },
    {
      field: 'status',
      header: 'Status',
      body: (data) => (
        <Badge 
          severity={data.status.severity} 
          value={data.status.value} 
        />
      ),
    },
    {
      field: 'actions',
      header: 'Actions',
      align: 'right',
      body: (data) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Icons name="editFile" size={20} onClick={() => edit(data)} />
          <Icons name="remove" size={20} onClick={() => remove(data)} />
        </div>
      ),
    },
  ]}
  scrollable
  scrollHeight="50vh"
  rowBorder
/>
```

### Paginated Table
```tsx
<Table
  value={largeDataset}
  columns={columns}
  paginator
  rows={10}
  rowsPerPageOptions={[5, 10, 25, 50]}
  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
/>
```
