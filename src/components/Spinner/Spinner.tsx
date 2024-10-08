'use client';
import { memo } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { SpinnerProps } from './interface';


export const Spinner: FC<SpinnerProps> = props => {
  const { className, prefixCls = 'spinner', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <ProgressSpinner
      {...rest}
      className={classes(void 0, className)}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Spinner.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Spinner);
