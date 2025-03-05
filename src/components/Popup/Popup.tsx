import { memo, forwardRef, useImperativeHandle } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import classnames from '@/utils/classnames';
/* import types */
import type { PopupProps, PopupHandlers } from './interface';

export const Popup = forwardRef<PopupHandlers, PopupProps>((props, ref) => {
  const { className, prefixCls = 'popup', ...rest } = props;
  const classes = classnames(prefixCls);

  useImperativeHandle(ref, () => ({
    show: (params) => confirmPopup(params)
  }), []);

  return (
    <ConfirmPopup
      {...rest}
      className={classes(void 0, className)}
    />
  );
});

export default memo(Popup);
