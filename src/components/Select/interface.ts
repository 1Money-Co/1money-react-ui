import type { ReactNode, RefObject, MouseEvent } from 'react';
import type { DropdownProps, Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import type { MultiSelectProps as PrimeMultiSelectProps, MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

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

export interface SingleSelectProps extends Omit<DropdownProps, 'value' | 'size' | 'itemTemplate' | 'onChange'>, BaseProps {
  ref?: RefObject<Dropdown | null>;
  multiple?: false;
  unselectable?: 'on' | 'off';
  panelType?: 'menu' | 'selector';
  onChange?: (e: DropdownChangeEvent) => void;
}

export interface MultiSelectProps extends Omit<PrimeMultiSelectProps, 'value' | 'size' | 'itemTemplate' | 'onChange'>, BaseProps {
  multiple: true;
  ref?: RefObject<MultiSelect | null>;
  onChange?: (e: MultiSelectChangeEvent) => void;
}

export interface CustomDropdownHandler {
  focus: () => void;
  blur: () => void;
  getDOMNode: () => HTMLDivElement | null;
}

export interface CustomDropdownProps extends Omit<BaseProps, 'itemTemplate'> {
  ref?: RefObject<CustomDropdownHandler | null>;
  dataId?: string;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  editable?: boolean;
  selectedTemplate?: (isFocus: boolean) => ReactNode;
  tailTemplate?: (isFocus: boolean) => ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;
