import type { ReactNode } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';

export interface CheckboxBaseProps extends Omit<
  PrimeCheckboxProps,
  'checked' | 'onChange' | 'className' | 'icon' | 'size' | 'value' | 'defaultValue'
> {
  wrapperCls?: string;
  innerCls?: string;
  checkboxCls?: string;
  prefixCls?: string;
  labelCls?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: ReactNode;
}

export interface CheckboxNormalProps extends CheckboxBaseProps {
  tristate?: false;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CheckboxTriStateProps extends CheckboxBaseProps {
  tristate: true;
  value?: boolean | null;
  defaultValue?: boolean | null;
  onChange?: (state: boolean | null) => void;
}

export type CheckboxProps = CheckboxNormalProps | CheckboxTriStateProps;
