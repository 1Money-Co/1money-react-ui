export interface MenuItem {
  key?: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  link?: string | React.ReactElement;
  active?: boolean;
  defaultOpen?: boolean;
  children?: Omit<MenuItem, 'children'>[];
}

export interface SidebarProps {
  className?: string;
  prefixCls?: string;
  collapsible?: boolean;
  onCollapse?: (collapsed: boolean) => any;
  onLogout?: () => any;
  menus: MenuItem[];
}
