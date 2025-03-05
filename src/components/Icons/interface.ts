import type { MouseEvent, KeyboardEvent, CSSProperties } from 'react';

export interface IconsProps extends IconWrapperProps {}

export interface IconWrapperProps {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
  color?: string;
  stroke?: boolean;
  viewBox?: string;
  fill?: string;
  illustrations?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: (e: MouseEvent<SVGSVGElement>) => any;
  onKeyDown?: (e: KeyboardEvent<SVGSVGElement>) => any;
}

export type IconName =
  | 'illusChecked'
  | 'illusEmailError'
  | 'illusLinkExpired'
  | 'illus2FA'
  | 'illusLocked'
  | 'illusError'
  | 'illusRegoinNotSupported'
  | 'illusIDCard'
  | 'illusVerification'
  | 'logo'
  // 添加其他图标名称...
  | 'copy';
