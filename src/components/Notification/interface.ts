import type { ReactNode, MouseEventHandler } from 'react';

export interface NotificationProps {
  id?: string;
  className?: string;
  prefixCls?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  title?: ReactNode;
  description?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
