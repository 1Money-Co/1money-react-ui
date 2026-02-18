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

interface CheckboxGroupNormalItem {
  key: string;
  label?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => any;
}

interface CheckboxGroupTriStateItem {
  key: string;
  label?: ReactNode;
  checked?: boolean;
  defaultValue?: boolean | null;
  onChange?: (state: boolean | null) => any;
}

type NormalItem = CheckboxGroupNormalItem & Omit<PrimeCheckboxProps, 'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange'>;
type TriStateItem = CheckboxGroupTriStateItem & Omit<TriStateCheckboxProps, 'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange' | 'defaultValue'>;

export type CheckboxGroupItem = NormalItem | TriStateItem;

interface CheckboxGroupNormalProps extends CheckboxGroupBaseProps {
  tristate?: false;
  value?: string[];
  onChange?: (checkedList: string[]) => void;
  items: NormalItem[];
}

interface CheckboxGroupTriStateProps extends CheckboxGroupBaseProps {
  tristate: true;
  value?: Record<string, boolean | null>;
  onChange?: (itemsState: Record<string, boolean | null>) => void;
  items: TriStateItem[];
}

export type CheckboxGroupProps = CheckboxGroupNormalProps | CheckboxGroupTriStateProps;
