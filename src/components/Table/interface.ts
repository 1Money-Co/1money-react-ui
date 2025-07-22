import type { RefObject } from 'react';
import type { DataTable, DataTableBaseProps, DataTableValueArray, DataTablePropsSingle, DataTablePropsMultiple, DataTablePropsCell } from 'primereact/datatable';
import type { ColumnProps } from 'primereact/column';

export type TableClass<T extends DataTableValueArray = DataTableValueArray> = DataTable<T>;

export interface TableBaseProps<T extends DataTableValueArray = DataTableValueArray> extends DataTableBaseProps<T> {
  ref?: RefObject<TableClass<T> | null>;
  className?: string;
  prefixCls?: string;
  rowBorder?: boolean;
  transparent?: boolean;
  columns: ColumnProps[];
  value?: T;
}

export interface TableSingleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsSingle<T>, TableBaseProps<T> {}

export interface TableMultipleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsMultiple<T>, TableBaseProps<T> {}

export interface TableCellProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsCell<T>, TableBaseProps<T> {}

export type TableProps<T extends DataTableValueArray = DataTableValueArray> = TableSingleProps<T> | TableMultipleProps<T> | TableCellProps<T>;