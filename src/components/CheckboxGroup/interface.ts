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

export type CheckboxGroupTriStateValue = boolean | null;

export interface CheckboxGroupTriStateState {
  [key: string]: CheckboxGroupTriStateValue;
}

export interface CheckboxGroupNormalItem extends Omit<
  PrimeCheckboxProps,
  'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange'
> {
  key: string;
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CheckboxGroupTriStateItem extends Omit<
  TriStateCheckboxProps,
  'key' | 'className' | 'checked' | 'value' | 'inputId' | 'onChange' | 'defaultValue'
> {
  key: string;
  label?: ReactNode;
  defaultValue?: CheckboxGroupTriStateValue;
  onChange?: (state: CheckboxGroupTriStateValue) => void;
}

export type CheckboxGroupItem = CheckboxGroupNormalItem | CheckboxGroupTriStateItem;

export interface CheckboxGroupNormalProps extends CheckboxGroupBaseProps {
  tristate?: false;
  value?: string[];
  onChange?: (checkedList: string[]) => void;
  items: CheckboxGroupNormalItem[];
}

export interface CheckboxGroupTriStateProps extends CheckboxGroupBaseProps {
  tristate: true;
  value?: CheckboxGroupTriStateState;
  onChange?: (itemsState: CheckboxGroupTriStateState) => void;
  items: CheckboxGroupTriStateItem[];
}

export type CheckboxGroupProps = CheckboxGroupNormalProps | CheckboxGroupTriStateProps;
