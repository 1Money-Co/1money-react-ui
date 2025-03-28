import type { ReactNode, RefObject, MouseEvent } from 'react';
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

export interface CustomSelectProps extends Omit<BaseProps, 'itemTemplate'> {
  ref?: RefObject<HTMLDivElement | null>;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  selectedTemplate?: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  customDropdown: true;
}

export type SelectProps = SingleSelectProps | MultiSelectProps | CustomSelectProps;
