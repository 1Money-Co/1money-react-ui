import type { MouseEventHandler } from 'react';
import type { OverlayPanelProps } from 'primereact/overlaypanel';

export interface DropdownProps extends OverlayPanelProps {
  className?: string;
  prefixCls?: string;
}
