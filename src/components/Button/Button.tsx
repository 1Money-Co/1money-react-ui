import { memo } from 'react';
import { Button as PrimeButton } from 'primereact/button';
import propTypes from 'prop-types';
import Spinner from '@/components/Spinner';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from './interface';

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const {
    children,
    className = '',
    prefixCls = 'button',
    active = false,
    severity = 'primary',
    size = 'large',
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeButton
      {...rest}
      // @ts-ignore
      severity={severity}
      loadingIcon={
        <Spinner strokeWidth="5" className={classes('loading-icon', [
          classes(`loading-icon-${severity}`),
          classes(`loading-icon-${size}`)
        ].join(' '))} />
      }
      className={classes(void 0, [
        classes(severity),
        classes(size),
        active ? classes(`${severity}-active`) : '',
        className
      ].join(' '))}
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
