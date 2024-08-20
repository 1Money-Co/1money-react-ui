import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps & {
  className?: string;
  prefixCls?: string;
}
