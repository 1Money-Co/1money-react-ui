import type { ReactNode, ReactElement } from 'react';

export interface MenuItem {
  key?: string | number;
  label: ReactNode;
  icon?: ReactNode;
  link?: string | ReactElement;
  active?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  children?: Omit<MenuItem, 'children'>[];
}

export interface SidebarProps {
  className?: string;
  prefixCls?: string;
  headerCls?: string;
  bodyCls?: string;
  collapseCls?: string;
  collapsible?: boolean;
  onCollapse?: (collapsed: boolean) => any;
  onLogoClick?: () => any;
  menus: MenuItem[];
}

export interface SidebarHandlers {
  toggle: () => any;
  collapse: (collapsed: boolean) => any;
}

export interface Step {
  key: string;
  label: ReactNode;
  status: 'todo' | 'active' | 'done' | 'done-active';
  disabled?: boolean;
  onClick?: (data: Step) => any;
}

export interface StepperProps {
  className?: string;
  prefixCls?: string;
  logoCls?: string;
  headerCls?: string;
  bodyCls?: string;
  footerCls?: string;
  onLogoClick?: () => any;
  steps: Step[];
  footer?: ReactNode;
}