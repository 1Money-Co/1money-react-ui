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

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
ConfirmPopup.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string,
};

export default memo(ConfirmPopup);
