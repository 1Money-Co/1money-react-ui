import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps & {
  wrapperCls?: string;
  prefixCls?: string;
  label?: React.ReactNode;
  required?: boolean;
  rounded?: boolean;
}
