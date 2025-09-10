import { memo, useRef, useState, useEffect, useImperativeHandle } from 'react';
import debounce from 'lodash.debounce';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, CSSProperties } from 'react';
import type { TableProps, TableClass } from './interface';

export const Table: FC<TableProps> = props => {
  const { ref, className, columns = [], prefixCls = 'table', rowBorder, transparent, ...rest } = props;
  const classes = classnames(prefixCls);

  const tableRef = useRef<TableClass | null>(null);

  const [isHover, setIsHover] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => setIsScrolling(false), 500);
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrollTop(target.scrollTop);
      debouncedHandleScroll.cancel();
      setIsScrolling(true);
      debouncedHandleScroll();
    };
    const tableEle = tableRef.current?.getElement()?.querySelector('.p-datatable-wrapper');
    if (tableEle) {
      tableEle.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (tableEle) {
        tableEle.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useImperativeHandle(ref, () => tableRef.current!, []);

  return (
    <DataTable
      {...rest}
      ref={tableRef}
      className={classes(void 0, [
        className,
        rowBorder && classes('row-border'),
        transparent && classes('transparent'),
        isHover && classes('hover'),
        isScrolling && classes('scrolling'),
        scrollTop > 0 && classes('scrolled'),
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
