import type { RefObject } from 'react';
import type { DataTable, DataTableBaseProps, DataTableValueArray, DataTablePropsSingle, DataTablePropsMultiple, DataTablePropsCellSingle, DataTablePropsCellMultiple } from 'primereact/datatable';
import type { ColumnProps } from 'primereact/column';

export type TableClass<T extends DataTableValueArray = DataTableValueArray> = DataTable<T>;

export interface TableBaseProps<T extends DataTableValueArray = DataTableValueArray> extends DataTableBaseProps<T> {
  ref?: RefObject<TableClass<T> | null>;
  className?: string;
  prefixCls?: string;
  rowBorder?: boolean;
  transparent?: boolean;
  hoverEffect?: boolean;
  columns: (ColumnProps & { wrapperCls?: string })[];
  columnsWrapperCls?: string;
  value?: T;
}

export interface TableSingleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsSingle<T>, TableBaseProps<T> {}

export interface TableMultipleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsMultiple<T>, TableBaseProps<T> {}

export interface TableCellSingleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsCellSingle<T>, TableBaseProps<T> {}

export interface TableCellMultipleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsCellMultiple<T>, TableBaseProps<T> {}

export type TableProps<T extends DataTableValueArray = DataTableValueArray> = TableSingleProps<T> | TableMultipleProps<T> | TableMultipleProps<T> | TableCellMultipleProps<T>;