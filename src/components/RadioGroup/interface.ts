import type { RadioButtonProps } from 'primereact/radiobutton';
import { ReactNode } from 'react';

export interface RadioItemProps extends Omit<RadioButtonProps, 'children'> {
  key: string;
  label?: string;
  children?: ReactNode | ((selected: boolean) => ReactNode);
}

export interface RadioGroupProps {
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  prefixCls?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'card';
  direction?: 'horizontal' | 'vertical';
  labelCls?: string;
  label?: string;
  required?: boolean;
  onChange?: (selected: RadioItemProps) => any;
  items: RadioItemProps[];
}
