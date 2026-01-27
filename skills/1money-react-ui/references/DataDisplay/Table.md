---
name: Table
category: DataDisplay
description: A powerful data table component built on top of PrimeReact's DataTable with enhanced styling and configuration options. Supports advanced features like row selection, expansion, pagination, sorting, and custom column rendering.
---

# Table

## 组件概述

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

## 使用场景

### 何时使用
- 展示结构化数据列表，并需要排序/分页/自定义列渲染（按组件支持）
- 与 Toolbar / Filter / Pagination 组合的列表页

### 不适用
- 只展示少量 key-value 信息（考虑 Cell / Typography 组合）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-bold`, `$color-grey-deep`, `$color-grey-light`, `$color-primary-black`, `$color-primary-white`
- 圆角（px，源码样式提取）：4, 12
- 字号（px，源码样式提取）：14
- 行高（px，源码样式提取）：15, 20
- 高度/最大高度（px，源码样式提取）：20, 39, 40
- padding 数值（px，源码样式提取）：12, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the table | string | - |
| prefixCls | The classname prefix for component styling | string | "table" |
| columns | Column configuration array | ColumnProps[] | [] |
| columnsWrapperCls | Additional CSS class for column wrapper | string | - |
| ref | Reference to DataTable methods | RefObject<DataTable> | - |
| wrapperCls | Additional CSS class for wrapper | string | - |
| rowBorder | Whether to show borders between rows | boolean | false |
| transparent | Whether to use transparent background | boolean | false |
| hoverEffect | Whether to enable hover effect | boolean | false |
| compactRow | Whether to use compact row height | boolean | false |
| value | Table data | DataTableValueArray | - |

> 其余属性继承 PrimeReact DataTable（如 `paginator`、`selection`、`sortMode` 等）。

## 示例

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

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Table } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
