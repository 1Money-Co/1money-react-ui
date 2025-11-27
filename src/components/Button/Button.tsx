import { memo } from 'react';
import { Button as PrimeButton } from 'primereact/button';
import Spinner from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
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
        <Spinner strokeWidth="5" className={classes('loading-icon', joinCls(
          classes(`loading-icon-${severity}`),
          classes(`loading-icon-${size}`)
        ))} />
      }
      className={classes(void 0, joinCls(
        classes(severity),
        classes(size),
        active && classes(`${severity}-active`),
        className
      ))}
    >
      { children }
    </PrimeButton>
  );
};

export default memo(Button);
