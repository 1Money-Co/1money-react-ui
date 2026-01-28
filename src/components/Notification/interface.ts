import type { ReactNode, MouseEventHandler } from 'react';

export interface NotificationProps {
  id?: string;
  className?: string;
  prefixCls?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  title?: ReactNode;
  description?: ReactNode;
  link?: NotificationLink;
  action?: ReactNode;
  closable?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  showIcon?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface NotificationLink {
  label: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
