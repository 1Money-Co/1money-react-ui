import type { ReactNode, CSSProperties } from 'react';
import type { Nullable } from 'primereact/ts-helpers';
import type { CalendarProps as PrimeCalendarProps, CalendarSelectionMode } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps<CalendarSelectionMode> & {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  messageCls?: string;
  label?: ReactNode;
  message?: ReactNode;
  required?: boolean;
  success?: boolean;
  size?: 'large' | 'small';
  defaultValue?: Nullable<Date | (Date | null)[] | Date[]>;
  contentWidth?: CSSProperties['width'];
}
