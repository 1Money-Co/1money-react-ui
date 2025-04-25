import type { MouseEventHandler } from 'react';


export interface NotificationProps {
  id?: string;
  className?: string;
  prefixCls?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  onClick?: MouseEventHandler<HTMLDivElement>;
}
