import type { ReactNode } from 'react';
import type { Nullable } from 'primereact/ts-helpers';
import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps & {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  label?: ReactNode;
  required?: boolean;
  rounded?: boolean;
  defaultValue?: Nullable<Date | (Date | null)[] | Date[]>;
}
