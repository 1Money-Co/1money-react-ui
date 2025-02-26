import type { MouseEvent, CSSProperties } from 'react';

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
  onClick?: (e: MouseEvent<SVGSVGElement>) => any;
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
