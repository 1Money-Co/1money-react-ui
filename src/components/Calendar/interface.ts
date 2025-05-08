import type { ReactNode } from 'react';
import type { Nullable } from 'primereact/ts-helpers';
import type { CalendarProps as PrimeCalendarProps, CalendarSelectionMode } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps<CalendarSelectionMode> & {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  label?: ReactNode;
  required?: boolean;
  size?: 'large' | 'small';
  defaultValue?: Nullable<Date | (Date | null)[] | Date[]>;
}
