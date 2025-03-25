import type { ITooltip } from 'react-tooltip';
import type { PropsWithChildren } from 'react';

export interface TooltipProps extends PropsWithChildren<ITooltip> {
  prefixCls?: string;
  arrowCls?: string;
}
