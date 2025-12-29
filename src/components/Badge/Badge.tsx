import { memo } from 'react';
import { Badge as PrimeBadge } from 'primereact/badge';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { BadgeProps } from './interface';

export const Badge: FC<PropsWithChildren<BadgeProps>> = props => {
  const { children, className, severity, prefixCls = 'badge', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeBadge
      {...rest}
      className={classes(void 0, joinCls(classes(severity || 'neutral'), className))}
    />
  );
};

export default memo(Badge);
