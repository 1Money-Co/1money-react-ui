import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';

import type { FC, PropsWithChildren } from 'react';
import type { CellProps } from './interface';
import { IconName, Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';

export const Cell: FC<PropsWithChildren<CellProps>> = (props) => {
  const {
    prefixCls = 'cell',
    className = '',
    active = false,
    disabled = false,
    prefixIcon = 'systemSecurity',
    title = 'Authenticator',
    suffixIcon = 'arrowRight',
    ...rest
  } = props;
  const classes = classnames(prefixCls);


  return <div className={classes(void 0, joinCls(
    active && classes('active'),
    disabled && classes('disabled'),
    className
  ))} {...rest}>
      <div className={classes('inner')}>
        {typeof prefixIcon === 'string' ? <Icons name={prefixIcon as IconName} /> : prefixIcon}
        <Typography.Title size="l">{title}</Typography.Title>
      </div>
      {typeof suffixIcon === 'string' ? <Icons name={suffixIcon as IconName} /> : suffixIcon}
  </div>;
};

export default memo(Cell);
