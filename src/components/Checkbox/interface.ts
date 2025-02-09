import type { ReactNode } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';
import type { TriStateCheckboxProps } from 'primereact/tristatecheckbox';

interface CheckboxBaseProps {
  wrapperCls?: string;
  innerCls?: string;
  checkboxCls?: string;
  prefixCls?: string;
}

interface CheckboxNormalProps extends CheckboxBaseProps {
  tristate?: false;
  onChange?: (checkedList: string[]) => any;
  items: ({
    key: string;
    label?: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => any;
  } & Omit<PrimeCheckboxProps, 'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange'>)[];
}

interface CheckboxTriStateProps extends CheckboxBaseProps {
  tristate: true;
  onChange?: (itemsState: Record<string, boolean | null>) => any;
  items: ({
    key: string;
    label?: ReactNode;
    checked?: boolean;
    defaultValue?: boolean | null;
    onChange?: (state: boolean | null) => any;
  } & Omit<TriStateCheckboxProps, 'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange' | 'defaultValue'>)[];
}

export type CheckboxProps = CheckboxNormalProps | CheckboxTriStateProps;
