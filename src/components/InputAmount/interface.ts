import type { RefObject, ReactNode, MouseEvent, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

export interface InputAmountProps {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string | number | bigint | null;
  maxFractionDigits?: number | bigint;
  placeholder?: string;
  className?: string;
  prefixCls?: string;
  wrapperCls?: string;
  messageCls?: string;
  footnoteCls?: string;
  invalid?: boolean;
  negative?: boolean;
  prefix?: ReactNode;
  currency?: ReactNode;
  suffix?: ReactNode;
  message?: ReactNode;
  footnote?: ReactNode;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
