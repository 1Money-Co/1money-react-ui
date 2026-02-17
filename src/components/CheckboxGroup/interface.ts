import type { ReactNode } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';
import type { TriStateCheckboxProps } from 'primereact/tristatecheckbox';

interface CheckboxGroupBaseProps {
  id?: string;
  wrapperCls?: string;
  innerCls?: string;
  checkboxGroupCls?: string;
  prefixCls?: string;
  labelCls?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface CheckboxGroupNormalProps extends CheckboxGroupBaseProps {
  tristate?: false;
  value?: string[];
  onChange?: (checkedList: string[]) => any;
  items: ({
    key: string;
    label?: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => any;
  } & Omit<PrimeCheckboxProps, 'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange'>)[];
}

interface CheckboxGroupTriStateProps extends CheckboxGroupBaseProps {
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

export type CheckboxGroupProps = CheckboxGroupNormalProps | CheckboxGroupTriStateProps;
