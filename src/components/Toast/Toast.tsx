import { memo, forwardRef } from 'react';
import { Toast as PrimeToast } from 'primereact/toast';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { LegacyRef } from 'react';
import type { ToastProps } from './interface';

export const Toast = forwardRef<PrimeToast, ToastProps>((props, ref) => {
  const { className, prefixCls = 'toast', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeToast
      {...rest}
      ref={ref}
      className={classes(void 0, className)}
    />
  );
});

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Toast.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Toast);
