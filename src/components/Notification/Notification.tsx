import { memo, useMemo } from 'react';
import { Icons } from '../Icons';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { NotificationProps } from './interface';

const SeverityIconMap = {
  success: {
    name: 'check' as const,
    color: '#FEFEFE',
  },
  info: {
    name: 'fail' as const,
    color: '#073387',
  },
  warn: {
    name: 'error' as const,
    color: '#131313',
  },
  error: {
    name: 'cross' as const,
    color: '#FEFEFE',
  },
};

export const Notification: FC<PropsWithChildren<NotificationProps>> = props => {
  const { children, className, severity = 'info', onClick, prefixCls = 'notification', ...rest } = props;
  const classes = classnames(prefixCls);

  const iconData = useMemo(() => SeverityIconMap[severity], [severity]);

  return (
    <div
      {...rest}
      className={classes(void 0, [classes(severity), className].join(' '))}
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
