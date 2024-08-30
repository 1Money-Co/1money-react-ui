import type { ConfirmDialogProps } from 'primereact/confirmdialog';
import type { DialogProps } from 'primereact/dialog';

export interface ModalHandlers {
  show: (params?: ConfirmDialogProps) => any;
  hide: () => any;
}

interface ModalBaseProps {
  prefixCls?: string;
}

interface ModalNormalProps extends ModalBaseProps, Omit<DialogProps, 'visible' | 'onHide'> {
  type?: 'normal';
  onHide?: () => any;
}

interface ModalConfirmProps extends ModalBaseProps, Omit<ConfirmDialogProps, 'visible' | 'onHide'> {
  type: 'confirm';
  onHide?: () => any;
}

export type ModalProps = ModalNormalProps | ModalConfirmProps;
