import type { MouseEventHandler } from 'react';


export interface CopyProps {
  value: string;
  iconSize?: number;
  color?: string;
  className?: string;
  prefixCls?: string;
  onSuccess?: (val: string) => void;
  onError?: (val: string) => void;
}
