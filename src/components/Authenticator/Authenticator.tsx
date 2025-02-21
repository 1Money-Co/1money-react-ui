import { memo } from 'react';
import classnames from '@/utils/classnames';

import type { FC, PropsWithChildren } from 'react';
import type { AuthenticatorProps } from './interface';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';

export const Authenticator: FC<PropsWithChildren<AuthenticatorProps>> = (props) => {
  const {
    prefixCls = 'authenticator',
    className = '',
    active = false,
    disabled = false,
    ...rest
  } = props;
  const classes = classnames(prefixCls);


  return <div className={classes(void 0, [
    active ? classes('active') : '',
    disabled ? classes('disabled') : '',
    className
  ].join(' '))} {...rest}>
      <div className={classes('inner')}>
        <Icons name='systemSecurity' />
        <Typography.Title size="l">Authenticator</Typography.Title>
      </div>
      <Icons name='arrowRight' />
  </div>;
};

export default memo(Authenticator);
