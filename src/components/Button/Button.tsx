import React, { memo } from 'react';
import { Button as PrimeButton } from 'primereact/button';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from './interface';

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const { children, className, onClick, prefixCls = 'button' } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeButton
      className={classes(void 0, className)}
      onClick={onClick}
    >
      { children }
    </PrimeButton>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Button.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Button);
