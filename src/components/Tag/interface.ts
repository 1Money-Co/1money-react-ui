import type { TagProps as PrimeTagProps } from 'primereact/tag';

export interface TagProps extends PrimeTagProps {
  className?: string;
  prefixCls?: string;
}
