import { memo, useMemo } from 'react';
import { Icons } from '../Icons';
import { Typography } from '../Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { NotificationProps } from './interface';

const SeverityIconMap = {
  success: {
    name: 'check' as const,
    color: '#1F5800',
  },
  info: {
    name: 'fail' as const,
    color: '#073387',
  },
  warn: {
    name: 'error' as const,
    color: '#DB8600',
  },
  error: {
    name: 'cross' as const,
    color: '#AE0000',
  },
};

export const Notification: FC<PropsWithChildren<NotificationProps>> = props => {
  const { children, className, severity = 'info', onClick, prefixCls = 'notification', title, description, ...rest } = props;
  const classes = classnames(prefixCls);

  const iconData = useMemo(() => SeverityIconMap[severity], [severity]);

  return (
    <div
      {...rest}
      className={classes(void 0, joinCls(classes(severity), className))}
      onClick={onClick}
    >
      <span className={classes('icon')}>
        <Icons name={iconData.name} color={iconData.color} size={16} />
      </span>
      { children }
    </div>
  );
};

export default memo(Notification);
