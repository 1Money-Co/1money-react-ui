import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

export interface ButtonProps extends Omit<PrimeButtonProps, 'label'> {
  prefixCls?: string;
}
