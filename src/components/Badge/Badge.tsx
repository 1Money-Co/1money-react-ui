import { memo } from 'react';
import { Badge as PrimeBadge } from 'primereact/badge';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { BadgeProps } from './interface';

export const Badge: FC<PropsWithChildren<BadgeProps>> = props => {
  const { children, className, severity, prefixCls = 'badge', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeBadge
      {...rest}
      className={classes(void 0, [classes(severity || 'neutral'), className].join(' '))}
    />
  );
};

export default memo(Badge);
