import type { HTMLAttributes, MouseEvent, RefObject } from 'react';
import type { IconName } from '@/components/Icons';

export interface TagBetaProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  ref?: RefObject<HTMLSpanElement | null>;
  prefixCls?: string;
  color?: 'neutral' | 'warning' | 'danger' | 'positive' | 'brand' | 'black';
  size?: 'large' | 'small';
  label?: string;
  icon?: IconName;
  removable?: boolean;
  onRemove?: (e: MouseEvent<HTMLSpanElement>) => void;
}
