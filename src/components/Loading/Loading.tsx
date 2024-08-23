import { memo } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { LoadingProps } from './interface';

export const Loading: FC<PropsWithChildren<LoadingProps>> = props => {
  const { className, prefixCls = 'loading', ...rest } = props;
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
Loading.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Loading);
