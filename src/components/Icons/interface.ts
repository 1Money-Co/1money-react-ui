import type { MouseEvent, KeyboardEvent, CSSProperties } from 'react';

export interface IconsProps extends IconWrapperProps {}

export interface IconWrapperProps {
  id?: string;
  style?: CSSProperties;
  className?: string;
  wrapperCls?: string;
  prefixCls?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
  color?: string;
  viewBox?: string;
  fill?: boolean;
  stroke?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
  hoverable?: boolean;
  hoverableCls?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => any;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => any;
}

export type { IconName } from './Icons';
