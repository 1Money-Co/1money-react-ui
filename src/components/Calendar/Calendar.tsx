import { memo, useState, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import Icons from '@/components/Icons';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CalendarProps } from './interface';

const isSameDay = (d1?: Date, d2?: Date): boolean => {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const getRangeDateStyles = (params: any, selectedDates: any, classes: any) => {
  const { context } = params || {};
  const { date } = context || {};

  if (!date || !Array.isArray(selectedDates)) return '';

  const cellDate = new Date(date.year, date.month, date.day);

  const isStart = selectedDates[0] && isSameDay(cellDate, selectedDates[0]);
  const isEnd = selectedDates[1] && isSameDay(cellDate, selectedDates[1]);
  const inRange = selectedDates[0] && selectedDates[1] &&
                 cellDate > selectedDates[0] && cellDate < selectedDates[1];

  return [
    isStart && classes('p-start'),
    isEnd && classes('p-end'),
    inRange && classes('p-range')
  ].filter(Boolean).join(' ');
};

export const Calendar: FC<PropsWithChildren<CalendarProps>> = props => {
  const {
    prefixCls = 'calendar',
    wrapperCls,
    labelCls,
    className,
    panelClassName,
    label,
    required,
    placeholder = 'MM/DD/YYYY',
    defaultValue,
    value,
    size = 'large',
    selectionMode = 'single',
    contentWidth,
    panelStyle,
    onChange,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  // @ts-ignore
  const [date, setDate] = useState<CalendarProps['value']>(value ?? defaultValue);

  useEffect(() => {
    if (value !== undefined && !isEqual(date, value)) {
      setDate(value);
    }
  }, [value]);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {label && <span className={classes('label', [required && classes('label-required'), labelCls].join(' '))}>{label}</span>}
      <PrimeCalendar
        {...rest}
        value={date as any}
        onChange={(e: any) => {
          setDate(e.value);
          onChange?.(e);
          const event = new Event('change', { bubbles: true });
          e.originalEvent?.target?.dispatchEvent(event);
        }}
        panelStyle={{
          ...panelStyle,
          // @ts-ignore
          '--content-width': contentWidth,
        }}
        className={classes(void 0, [
          className,
          classes(size),
          date && classes('filled'),
        ].join(' '))}
        panelClassName={classes('panel', panelClassName)}
        placeholder={placeholder}
        prevIcon={<Icons name='chevronLeft' size={24} />}
        nextIcon={<Icons name='chevronRight' size={24} />}
        selectionMode={selectionMode}
        pt={selectionMode === 'range' ? {
          day: (params) => ({
            className: getRangeDateStyles(params, date, classes)
          })
        } : undefined}
      />
    </div>
  );
};

export default memo(Calendar);
