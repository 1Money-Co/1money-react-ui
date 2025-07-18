import type { RadioButtonProps } from 'primereact/radiobutton';
import type { ReactNode, RefObject } from 'react';

export interface RadioItemProps extends Omit<RadioButtonProps, 'children' | 'inputId' | 'value' | 'onChange' | 'checked' | 'className'> {
  key: string;
  label?: string;
  children?: ReactNode | ((selected: boolean) => ReactNode);
}

export interface RadioGroupHandlers {
  reset: () => void;
}

export interface RadioGroupProps {
  ref?: RefObject<RadioGroupHandlers | null>;
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  prefixCls?: string;
  cardCls?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'card';
  direction?: 'horizontal' | 'vertical';
  labelCls?: string;
  label?: ReactNode;
  required?: boolean;
  onChange?: (selected: RadioItemProps) => any;
  items: RadioItemProps[];
}
