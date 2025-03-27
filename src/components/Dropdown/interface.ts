import type { ReactNode, RefObject, CSSProperties } from 'react';
import type { OverlayPanelProps, OverlayPanel } from 'primereact/overlaypanel';

export interface DropdownItem {
  key?: string;
  children: ReactNode;
}

export interface DropdownProps extends OverlayPanelProps {
  ref?: RefObject<OverlayPanel | null>;
  items: DropdownItem[];
  height: CSSProperties['height'];
  width?: CSSProperties['width'];
  prefixCls?: string;
  className?: string;
  wrapperCls?: string;
  listCls?: string;
  prefixEle?: ReactNode;
  suffixEle?: ReactNode;
}

export type DropdownHandler = OverlayPanel;