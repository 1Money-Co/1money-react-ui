import type { ReactNode, MouseEvent } from 'react';
import type { IconName } from '@/components/Icons/interface';

export interface CellProps {
  id?: string;
  prefixCls?: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  prefixIcon?: IconName | ReactNode;
  title?: string;
  suffixIcon?: IconName | ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
