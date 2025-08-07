import { memo, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { TableProps, TableClass } from './interface';

export const Table: FC<TableProps> = props => {
  const { ref, className, columns = [], prefixCls = 'table', rowBorder, transparent, ...rest } = props;
  const classes = classnames(prefixCls);

  const [isHover, setIsHover] = useState(false);

  return (
    <DataTable
      {...rest}
      ref={ref}
      className={classes(void 0, [
        className,
        rowBorder && classes('row-border'),
        transparent && classes('transparent'),
        isHover && classes('hover'),
      ].join(' '))}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
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
