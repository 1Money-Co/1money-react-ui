import { memo, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CalendarProps } from './interface';

export const Calendar: FC<PropsWithChildren<CalendarProps>> = props => {
  const {
    prefixCls = 'calendar',
    wrapperCls,
    labelCls,
    className,
    panelClassName,
    label,
    required,
    rounded = false,
    placeholder = 'MM/DD/YYYY',
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
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
        className={classes(void 0, [
          className,
          rounded && classes('rounded')
        ].join(' '))}
        panelClassName={classes('panel', panelClassName)}
        placeholder={placeholder}
      />
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Calendar.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string,
  wrapperCls: propTypes.string,
  labelCls: propTypes.string,
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
  required: propTypes.bool,
  rounded: propTypes.bool,
};

export default memo(Calendar);
