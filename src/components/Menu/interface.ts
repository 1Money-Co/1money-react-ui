
import type { MenuProps as PrimeMenuProps, Menu } from 'primereact/menu';

export type { Menu as MenuClass };
export interface MenuProps extends PrimeMenuProps {
  className?: string;
  prefixCls?: string;
  type?: 'menu' | 'selector';
}
