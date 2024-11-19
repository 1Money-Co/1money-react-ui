import { memo } from 'react';
import propTypes from 'prop-types';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CalendarProps } from './interface';

export const Calendar: FC<PropsWithChildren<CalendarProps>> = props => {
  const { className, panelClassName, rounded = false, placeholder = 'MM/DD/YYYY', prefixCls = 'calendar', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeCalendar
      {...rest}
      className={classes(void 0, [
        className,
        rounded && classes('rounded')
      ].join(' '))}
      panelClassName={classes('panel', panelClassName)}
      placeholder={placeholder}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Calendar.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Calendar);
