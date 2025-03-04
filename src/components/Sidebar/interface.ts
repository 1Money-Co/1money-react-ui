import type { ReactNode, ReactElement } from 'react';

export interface MenuItem {
  key?: string | number;
  label: ReactNode;
  icon?: ReactNode;
  link?: string | ReactElement;
  active?: boolean;
  defaultOpen?: boolean;
  children?: Omit<MenuItem, 'children'>[];
}

export interface SidebarProps {
  className?: string;
  prefixCls?: string;
  collapsible?: boolean;
  onCollapse?: (collapsed: boolean) => any;
  onLogoClick?: () => any;
  onLogout?: () => any;
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
  onLogoClick?: () => any;
  steps: Step[];
  footer?: ReactNode;
}