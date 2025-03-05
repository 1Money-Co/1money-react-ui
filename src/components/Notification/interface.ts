import type { MouseEventHandler } from 'react';


export interface NotificationProps {
  className?: string;
  prefixCls?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
