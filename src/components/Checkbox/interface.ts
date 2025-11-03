import type { ReactNode } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';
import type { TriStateCheckboxProps } from 'primereact/tristatecheckbox';

interface CheckboxBaseProps {
  id?: string;
  wrapperCls?: string;
  innerCls?: string;
  checkboxCls?: string;
  prefixCls?: string;
  labelCls?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  invalid?: boolean;
}

interface CheckboxNormalProps extends CheckboxBaseProps {
  tristate?: false;
  checked?: boolean;
  onChange?: (checked: boolean) => any;
}

interface CheckboxTriStateProps extends CheckboxBaseProps {
  tristate: true;
  value?: boolean | null;
  onChange?: (state: boolean | null) => any;
}

export type CheckboxProps = CheckboxNormalProps | CheckboxTriStateProps;
