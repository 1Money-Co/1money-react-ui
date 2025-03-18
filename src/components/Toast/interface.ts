import type { RefObject } from 'react';
import { type Toast, type ToastProps as PrimeToastProps, type ToastMessage } from 'primereact/toast';

type ToastClass = Pick<Toast, 'clear' | 'getElement' | 'remove' | 'replace' | 'show'>;

export type { Toast as ToastRef, ToastClass, ToastMessage };

export interface ToastProps extends PrimeToastProps{
  ref?: RefObject<ToastClass | null>;
  prefixCls?: string;
}
