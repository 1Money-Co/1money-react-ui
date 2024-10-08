import type { ProgressSpinnerProps } from 'primereact/progressspinner';

export interface LoadingProps {
  className?: string;
  prefixCls?: string;
}

export interface SpinnerProps extends ProgressSpinnerProps {
  prefixCls?: string;
}
