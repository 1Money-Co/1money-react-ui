import type { MouseEventHandler } from 'react';


export interface NotificationProps {
  className?: string;
  prefixCls?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  onClick?: MouseEventHandler<HTMLDivElement>;
}
