import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

export interface ButtonProps extends Omit<PrimeButtonProps, 'label' | 'severity'> {
  prefixCls?: string;
  severity?:
    | PrimeButtonProps['severity']
    | 'primary-landing'
    | 'secondary-landing'
    | 'primary-outline'
    | 'secondary-outline';
}
