import type { ProgressBarProps as PrimeProgressBarProps } from 'primereact/progressbar';


export interface ProgressBaseProps{
  id?: string;
  className?: string;
  prefixCls?: string;
  wrapperCls?: string;
  trailColor?: string;
  fillColor?: string;
}

export interface ProgressRingProps extends ProgressBaseProps {
  type?: 'ring';
  value?: number | `${number}`;
  size?: number | `${number}`;
  stroke?: number | `${number}`;
  bgColor?: string;
}

export interface ProgressBarProps extends ProgressBaseProps, PrimeProgressBarProps {
  type: 'bar';
  labelColor?: string;
}

export type ProgressProps = ProgressRingProps | ProgressBarProps;
