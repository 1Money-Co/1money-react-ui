import { memo, forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { ConfirmDialog, confirmDialog, type ConfirmDialogProps } from 'primereact/confirmdialog';
import { Dialog, type DialogProps } from 'primereact/dialog';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { PropsWithChildren } from 'react';
import type { ModalProps, ModalHandlers } from './interface';

export const Modal = forwardRef<ModalHandlers, PropsWithChildren<ModalProps>>((props, ref) => {
  const { type, children, className, prefixCls = 'modal', onHide, ...rest } = props;
  const classes = classnames(prefixCls);
  const [visible, setVisible] = useState(false);
  const handleOnHide = useCallback(() => {
    if (!visible) return;
    setVisible(false);
    onHide?.();
  }, [visible, onHide]);

  useImperativeHandle(ref, () => ({
    show: (params) => {
      if (type === 'confirm' && params) confirmDialog(params);
      setVisible(true);
    },
    hide: () => setVisible(false)
  }), [type]);

  if (type === 'confirm') {
    return (
      <ConfirmDialog
        {...rest as Exclude<ConfirmDialogProps, 'className'> }
        className={classes(void 0, className)}
        visible={visible}
        onHide={handleOnHide}
      />
    );
  }

  return (
    <Dialog
      {...rest as Exclude<DialogProps, 'className' | 'visible' | 'onHide'> }
      className={classes(void 0, className)}
      visible={visible}
      onHide={handleOnHide}
    >
      { children }
    </Dialog>
  );
});

export default memo(Modal);
