import type { CSSProperties, HTMLAttributeAnchorTarget, MouseEventHandler, PropsWithChildren } from 'react';

interface BaseProps extends PropsWithChildren {
  id?: string;
  className?: string;
  style?: CSSProperties;
  prefixCls?: string;
}

export interface DisplayProps extends BaseProps {
  size: 'xl' | 'l' | 'm' | 's';
  bold?: boolean;
  onClick?: MouseEventHandler<HTMLHeadingElement>;
}

export interface HeadlineProps extends BaseProps {
  size: 'l' | 'm' | 's' | 'xs';
  bold?: boolean;
  onClick?: MouseEventHandler<HTMLHeadingElement>;
}

export interface TitleProps extends BaseProps {
  size: 'l' | 'm' | 's';
  bold?: boolean;
  onClick?: MouseEventHandler<HTMLHeadingElement>;
}

export interface BodyProps extends BaseProps {
  size: 'l' | 'm' | 's';
  bold?: boolean;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
}

export interface LinkProps extends BaseProps {
  size: 'm' | 's';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  download?: string;
}

export interface LabelProps extends BaseProps {
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  bold?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
