
import type { TabMenuProps } from 'primereact/tabmenu';

export type TabMenuItem = Exclude<TabMenuProps['model'], undefined>;

export interface TabProps extends Exclude<TabMenuProps, 'model'> {
  className?: string;
  prefixCls?: string;
  lableClassName?: string;
  model?: (TabMenuItem[number] & { count?: number })[];
  type?: 'default' | 'segment';
}
