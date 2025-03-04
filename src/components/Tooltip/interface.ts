import type { TooltipProps as RCTooltipProps } from 'rc-tooltip/es/Tooltip';
import type { PropsWithChildren } from 'react';

export interface TooltipProps extends PropsWithChildren<RCTooltipProps> {
  className?: string;
  prefixCls?: string;
}
