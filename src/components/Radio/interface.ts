import type { ReactNode } from 'react';
import type { RadioButtonProps } from 'primereact/radiobutton';

export interface RadioProps extends Omit<RadioButtonProps, 'className' | 'inputId' | 'size'> {
  prefixCls?: string;
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  size?: 'sm' | 'md' | 'lg';
  labelCls?: string;
  label?: ReactNode;
  required?: boolean;
  invalid?: boolean;
}
