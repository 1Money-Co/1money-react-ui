import type { Nullable } from 'primereact/ts-helpers';
import type { CalendarProps as PrimeCalendarProps } from 'primereact/calendar';

export type CalendarProps = PrimeCalendarProps & {
  wrapperCls?: string;
  prefixCls?: string;
  label?: React.ReactNode;
  required?: boolean;
  rounded?: boolean;
  defaultValue?: Nullable<Date | (Date | null)[] | Date[]>;
}
