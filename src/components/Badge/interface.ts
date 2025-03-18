import type { BadgeProps as PrimeBadgeProps } from 'primereact/badge';

export interface BadgeProps extends Omit<PrimeBadgeProps, 'severity'> {
  className?: string;
  prefixCls?: string;
  severity?: PrimeBadgeProps['severity'] | 'neutral' | 'recommend' | 'warning' | 'negative' | 'black' | 'success';
}
