import type { ReactNode } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';

export interface CheckboxProps {
  wrapperCls?: string;
  innerCls?: string;
  checkboxCls?: string;
  prefixCls?: string;
  onChange?: (checkedList: string[]) => any;
  items:({
    key: string;
    label?: string | ReactNode | JSX.Element;
    checked?: boolean;
    onChange?: (checked: boolean) => any;
  } & Omit<PrimeCheckboxProps, 'className' | 'checked' | 'value' | 'inputId' | 'onChange'>)[];
}
