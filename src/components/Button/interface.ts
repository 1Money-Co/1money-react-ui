import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

export interface ButtonProps extends Omit<PrimeButtonProps, 'label' | 'severity' | 'size'> {
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
    | 'primary-landing'
    | 'secondary-landing'
    | 'primary-outline'
    | 'secondary-outline'
    | 'negative';
}
