import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactElement } from 'react';
import type { NotificationBetaProps, NotificationBetaStatus } from './interface';

const INFO_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM7.25 7.25a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5ZM8 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);

const SUCCESS_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.78 4.97a.75.75 0 0 0-1.06-1.06L7.25 8.38 6.28 7.41a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3Z"
      fill="currentColor"
    />
  </svg>
);

const WARNING_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.134 2.501a1 1 0 0 1 1.732 0l5.196 9a1 1 0 0 1-.866 1.5H2.804a1 1 0 0 1-.866-1.5l5.196-9ZM8.75 10.5a.75.75 0 0 1-1.5 0V7.25a.75.75 0 0 1 1.5 0v3.25ZM8 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);

const ERROR_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm1.78 4.22a.75.75 0 0 1 0 1.06L8.81 8.25l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72-.97-.97a.75.75 0 0 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0Z"
      fill="currentColor"
    />
  </svg>
);

const CLOSE_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);

const STATUS_ICON_MAP: Record<NotificationBetaStatus, ReactElement> = {
  info: INFO_ICON,
  success: SUCCESS_ICON,
  warning: WARNING_ICON,
  error: ERROR_ICON,
};

export const NotificationBeta: FC<NotificationBetaProps> = props => {
  const {
    className = '',
    prefixCls = 'notification-beta',
    status = 'info',
    title,
    body,
    link,
    icon,
    showIcon = true,
    closable = true,
    onClose,
    ref: _ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const iconElement = icon ?? STATUS_ICON_MAP[status];

  return (
    <div
      {...rest}
      ref={_ref}
      className={classes(
        void 0,
        joinCls(classes(status), className),
      )}
    >
      <div className={classes('content-wrapper')}>
        {showIcon && (
          <div className={classes('icon-wrapper')}>
            <span className={classes('icon')}>
              {iconElement}
            </span>
          </div>
        )}
        <div className={classes('content')}>
          {title && <div className={classes('title')}>{title}</div>}
          {body && <div className={classes('body')}>{body}</div>}
          {link && (
            <a
              className={classes('link')}
              role="button"
              tabIndex={0}
              onClick={link.onClick}
            >
              {link.label}
            </a>
          )}
        </div>
      </div>
      {closable && (
        <button
          type="button"
          className={classes('close')}
          onClick={onClose}
          aria-label="Close notification"
        >
          {CLOSE_ICON}
        </button>
      )}
    </div>
  );
};

export default memo(NotificationBeta);
