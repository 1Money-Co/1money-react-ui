import type { RefObject } from 'react';
import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

export interface ButtonProps extends Omit<PrimeButtonProps, 'label' | 'severity' | 'size'> {
  ref?: RefObject<HTMLButtonElement>;
  prefixCls?: string;
  active?: boolean;
  size?: 'small' | 'medium' | 'large';
  severity?:
    | PrimeButtonProps['severity']
    | 'primary'
    | 'secondary'
    | 'grey'
    | 'black'
    | 'white'
    | 'danger'
    | 'primary-landing'
    | 'secondary-landing'
    | 'primary-outline'
    | 'secondary-outline';
}
