import type { ConfirmPopupProps } from 'primereact/confirmpopup';

export interface PopupHandlers {
  show: (params: ConfirmPopupProps) => any;
}

export interface PopupProps extends ConfirmPopupProps {
  id?: string;
  prefixCls?: string;
}
