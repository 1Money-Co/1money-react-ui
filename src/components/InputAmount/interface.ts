import type { RefObject, ReactNode } from 'react';
import type { InputNumberProps, InputNumber } from 'primereact/inputnumber';

export interface InputAmountProps extends Omit<InputNumberProps, 'prefix' | 'suffix' | 'currency'> {
  ref?: RefObject<InputNumber | null>;
  className?: string;
  prefixCls?: string;
  wrapperCls?: string;
  messageCls?: string;
  footnoteCls?: string;
  invalid?: boolean;
  prefix?: ReactNode;
  currency?: ReactNode;
  suffix?: ReactNode;
  message?: ReactNode;
  footnote?: ReactNode;
}
