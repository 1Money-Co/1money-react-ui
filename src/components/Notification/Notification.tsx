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
    name: 'info' as const,
    color: '#073387',
  },
  warn: {
    name: 'exclamation' as const,
    color: '#DB8600',
  },
  error: {
    name: 'cross' as const,
    color: '#AE0000',
  },
};

export const Notification: FC<PropsWithChildren<NotificationProps>> = props => {
  const {
    children,
    className,
    severity = 'info',
    onClick,
    prefixCls = 'notification',
    title,
    description,
    link,
    action,
    closable = false,
    onClose,
    showIcon = true,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const iconData = useMemo(() => SeverityIconMap[severity], [severity]);
  const bodyContent = description ?? children;

  return (
    <div
      {...rest}
      className={classes(void 0, joinCls(classes(severity), className))}
      onClick={onClick}
    >
      <div className={classes('left')}>
        {showIcon && (
          <span className={classes('icon')} aria-hidden>
            <Icons name={iconData.name} color={iconData.color} size={18} />
          </span>
        )}
        <div className={classes('content')}>
          {title && (
            <Typography.Title bold size='s' className={classes('title')}>
              {title}
            </Typography.Title>
          )}
          {bodyContent && (
            <Typography.Body size='m' className={classes('body')}>
              {bodyContent}
            </Typography.Body>
          )}
          {link?.label && (
            <Typography.Link
              size='m'
              className={classes('link')}
              href={link.href}
              target={link.target}
              rel={link.rel}
              onClick={link.onClick}
              role={link.href ? undefined : 'button'}
            >
              {link.label}
            </Typography.Link>
          )}
        </div>
      </div>
      {(action || closable) && (
        <div className={classes('right')}>
          {action && (
            <div className={classes('action')}>
              {action}
            </div>
          )}
          {closable && (
            <button
              type='button'
              className={classes('close')}
              aria-label='Close notification'
              onClick={onClose}
            >
              <Icons name='close' size={16} color='#646465' />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Notification);
