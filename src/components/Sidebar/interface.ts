import type { ReactNode, ReactElement, MouseEvent } from 'react';

export interface MenuItem {
  key?: string | number;
  label: ReactNode;
  icon?: ReactNode;
  suffix?: ReactNode;
  link?: string | ReactElement;
  active?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => any;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => any;
  children?: Omit<MenuItem, 'children'>[];
}

export interface SidebarProps {
  id?: string;
  className?: string;
  prefixCls?: string;
  headerCls?: string;
  bodyCls?: string;
  collapseCls?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  betaLogo?: boolean;
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
  id?: string;
  className?: string;
  prefixCls?: string;
  logoCls?: string;
  headerCls?: string;
  bodyCls?: string;
  footerCls?: string;
  betaLogo?: boolean;
  onLogoClick?: () => any;
  steps: Step[];
  footer?: ReactNode;
}