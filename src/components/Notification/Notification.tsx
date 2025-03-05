import { memo } from 'react';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { NotificationProps } from './interface';

export const Notification: FC<PropsWithChildren<NotificationProps>> = props => {
  const { children, className, onClick, prefixCls = 'notification', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      {...rest}
      className={classes(void 0, className)}
      onClick={onClick}
    >
      { children }
    </div>
  );
};

export default memo(Notification);
