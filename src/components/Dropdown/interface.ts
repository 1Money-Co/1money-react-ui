import type { ReactNode, RefObject, CSSProperties } from 'react';
import type { OverlayPanelProps, OverlayPanel } from 'primereact/overlaypanel';

export interface DropdownItem {
  key?: string;
  active?: boolean;
  children: ReactNode;
}

export interface DropdownProps extends OverlayPanelProps {
  ref?: RefObject<OverlayPanel | null>;
  items?: DropdownItem[];
  renderList?: (items: DropdownItem[]) => ReactNode;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  prefixCls?: string;
  className?: string;
  wrapperCls?: string;
  listCls?: string;
  itemCls?: string;
  itemActiveCls?: string;
  prefixEle?: ReactNode;
  suffixEle?: ReactNode;
}

export type DropdownHandler = OverlayPanel;
