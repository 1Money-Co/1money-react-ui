import type { ConfirmPopupProps as PrimeConfirmPopupProps } from 'primereact/confirmpopup';

export interface ConfirmPopupProps extends PrimeConfirmPopupProps {
  id?: string;
  className?: string;
  prefixCls?: string;
}
