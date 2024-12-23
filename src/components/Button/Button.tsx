import { memo } from 'react';
import { Button as PrimeButton } from 'primereact/button';
import propTypes from 'prop-types';
import Loading from '@/components/Loading';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from './interface';

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const { children, className = '', prefixCls = 'button', severity, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeButton
      {...rest}
      // @ts-ignore
      severity={severity}
      loadingIcon={<Loading type='pattern' className={classes('loading-icon')} />}
      className={classes(void 0, [classes(`${severity ? severity : 'primary'}`), className].join(' '))}
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
