import { type Toast, type ToastProps as PrimeToastProps } from 'primereact/toast';

export type { Toast as ToastClass };
export interface ToastProps extends PrimeToastProps{
  prefixCls?: string;
}
