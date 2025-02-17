import { memo } from 'react';
import propTypes from 'prop-types';
import { ConfirmPopup as PrimeConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, CSSProperties } from 'react';
import type { ConfirmPopupProps } from './interface';

export { confirmPopup };

export const ConfirmPopup: FC<ConfirmPopupProps> = props => {
  const { className, prefixCls = 'confirm-popup', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeConfirmPopup
      {...rest}
      className={classes(void 0, className)}
    >
    </PrimeConfirmPopup>
  );
};

export default memo(ConfirmPopup);
