import type { ReactNode } from 'react';
import { DropdownProps } from 'primereact/dropdown';
import { MultiSelectProps as PrimeMultiSelectProps } from 'primereact/multiselect';

interface BaseProps {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  messageCls?: string;
  label?: ReactNode;
  message?: ReactNode;
  required?: boolean;
  value?: any;
  size?: 'large' | 'small';
  success?: boolean;
}

export interface SingleSelectProps extends Omit<DropdownProps, 'value' | 'size'>, BaseProps {
  multiple?: false;
}

export interface MultiSelectProps extends Omit<PrimeMultiSelectProps, 'value' | 'size'>, BaseProps {
  multiple: true;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;
