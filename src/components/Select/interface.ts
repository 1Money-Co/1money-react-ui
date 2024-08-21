import { DropdownProps } from 'primereact/dropdown';
import { MultiSelectProps as PrimeMultiSelectProps } from 'primereact/multiselect';

interface BaseProps {
  prefixCls?: string;
}

export interface SingleSelectProps extends Omit<DropdownProps, 'value'>, BaseProps {
  multiple?: false;
}

export interface MultiSelectProps extends Omit<PrimeMultiSelectProps, 'value'>, BaseProps {
  multiple: true;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;
