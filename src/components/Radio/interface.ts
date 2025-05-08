import type { RadioButtonProps } from 'primereact/radiobutton';

export interface RadioProps extends Omit<RadioButtonProps, 'className' | 'inputId' | 'size'> {
  prefixCls?: string;
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  size?: 'sm' | 'md' | 'lg';
  labelCls?: string;
  label?: string;
  required?: boolean;
  invalid?: boolean;
}
