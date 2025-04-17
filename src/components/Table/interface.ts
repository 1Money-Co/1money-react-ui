import type { MouseEventHandler } from 'react';
import type { DataTableBaseProps, DataTableValueArray, DataTablePropsSingle, DataTablePropsMultiple, DataTablePropsCell } from 'primereact/datatable';
import type { ColumnProps } from 'primereact/column';

export interface TableBaseProps<T extends DataTableValueArray = DataTableValueArray> extends DataTableBaseProps<T> {
  className?: string;
  prefixCls?: string;
  columns: ColumnProps[];
}

export interface TableSingleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsSingle<T>, TableBaseProps<T> {}

export interface TableMultipleProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsMultiple<T>, TableBaseProps<T> {}

export interface TableCellProps<T extends DataTableValueArray = DataTableValueArray> extends DataTablePropsCell<T>, TableBaseProps<T> {}

export type TableProps<T extends DataTableValueArray = DataTableValueArray> = TableSingleProps<T> | TableMultipleProps<T> | TableCellProps<T>;