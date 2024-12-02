import type { MouseEvent } from 'react';

export interface IconsProps extends IconWrapperProps {}

export interface IconWrapperProps {
  className?: string;
  prefixCls?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
  color?: string;
  stroke?: boolean;
  viewBox?: string;
  onClick?: (e: MouseEvent<SVGSVGElement>) => any;
}
