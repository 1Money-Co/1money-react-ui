import type { MouseEvent, KeyboardEvent, CSSProperties } from 'react';

export interface IconsProps extends IconWrapperProps {}

export interface IconWrapperProps {
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
  illustrations?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: (e: MouseEvent<HTMLElement>) => any;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => any;
}

export type { IconName } from './Icons';