
import type { TabMenuProps } from 'primereact/tabmenu';

export type TabMenuItem = Exclude<TabMenuProps['model'], undefined>;

export interface TabProps extends Exclude<TabMenuProps, 'model'> {
  className?: string;
  prefixCls?: string;
  model?: (TabMenuItem[number] & { count?: number })[];
}
