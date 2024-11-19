import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps & {
  prefixCls?: string;
  rounded?: boolean;
}
