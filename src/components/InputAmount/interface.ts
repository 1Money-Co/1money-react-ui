import type { RefObject, ReactNode, MouseEvent, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

export interface InputAmountBaseProps {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string | number | bigint | null;
  name?: string;
  min?: number | bigint;
  max?: number | bigint;
  maxFractionDigits?: number | bigint;
  placeholder?: string;
  className?: string;
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  messageCls?: string;
  prefixEleCls?: string;
  suffixEleCls?: string;
  invalid?: boolean;
  negative?: boolean;
  required?: boolean;
  loading?: boolean;
  success?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  label?: ReactNode;
  prefix?: ReactNode;
  currency?: ReactNode;
  suffix?: ReactNode;
  message?: ReactNode;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export interface InputAmountPrimaryProps extends InputAmountBaseProps {
  type?: 'primary';
  footnote?: ReactNode;
  footnoteCls?: string;
}

export interface InputAmountNormalProps extends InputAmountBaseProps {
  type: 'normal';
  size?: 'small' | 'large';
}

export interface InputAmountPlainProps extends InputAmountBaseProps {
  type: 'plain';
  footnote?: ReactNode;
  footnoteCls?: string;
}

export type InputAmountProps = InputAmountPrimaryProps | InputAmountNormalProps | InputAmountPlainProps;
