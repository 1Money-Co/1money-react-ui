import { memo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { TableProps } from './interface';

export const Table: FC<TableProps> = props => {
  const { className, columns = [], prefixCls = 'table', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <DataTable
      {...rest}
      className={classes(void 0, className)}
    >
      {
        columns.map(column => (
          <Column
            key={column.field}
            {...column}
          />
        ))
      }
    </DataTable>
  );
};

export default memo(Table);
