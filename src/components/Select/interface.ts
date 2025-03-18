import type { ReactNode, RefObject } from 'react';
import type { DropdownProps, Dropdown } from 'primereact/dropdown';
import type { MultiSelectProps as PrimeMultiSelectProps, MultiSelect } from 'primereact/multiselect';

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
  itemTemplate?: (option: any) => ReactNode;
}

export interface SingleSelectProps extends Omit<DropdownProps, 'value' | 'size' | 'itemTemplate'>, BaseProps {
  ref?: RefObject<Dropdown | null>;
  multiple?: false;
  unselectable?: 'on' | 'off';
  panelType?: 'menu' | 'selector';
}

export interface MultiSelectProps extends Omit<PrimeMultiSelectProps, 'value' | 'size' | 'itemTemplate'>, BaseProps {
  ref?: RefObject<MultiSelect | null>;
  multiple: true;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;
