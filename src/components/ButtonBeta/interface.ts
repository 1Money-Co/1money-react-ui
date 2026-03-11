import type { ReactNode, RefObject } from 'react';
import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

export interface ButtonBetaProps extends Omit<PrimeButtonProps, 'label' | 'severity' | 'size'> {
  ref?: RefObject<HTMLButtonElement | null>;
  prefixCls?: string;
  color?: 'primary' | 'secondary' | 'grey' | 'black' | 'white' | 'danger' | 'warning';
  size?: 'large' | 'medium' | 'small';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
