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

export default memo(Toast);
