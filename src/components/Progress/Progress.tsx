import { memo } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { ProgressProps, ProgressRingProps, ProgressBarProps } from './interface';

export const Progress: FC<PropsWithChildren<ProgressProps>> = props => {
  const {
    children,
    wrapperCls,
    className,
    prefixCls = 'progress',
    type = 'ring',
    value = 0,
    trailColor,
    fillColor,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, wrapperCls)}
    >
      {
        type === 'ring' && <div
          className={classes('ring', className)}
          style={{ 
            width: (rest as ProgressRingProps)?.size ?? 106,
            height: (rest as ProgressRingProps)?.size ?? 106,
            '--progress': `${value}%`,
            '--last': `calc(100% - ${value}%)`,
            '--size': `${(rest as ProgressRingProps)?.size ?? 106}px`,
            '--stroke': `${(rest as ProgressRingProps)?.stroke ?? 6}px`,
            '--bg-color': `${(rest as ProgressRingProps)?.bgColor ?? '#FAFAFC'}`,
            '--trail-color': `${trailColor ?? '#E0E2EE'}`,
            '--fill-color': `${fillColor ?? '#3D73F2'}`,
          } as CSSProperties}
        >
          { children }
        </div>
      }
      {
        type === 'bar' && <ProgressBar
          value={value}
          className={classes('bar', className)}
          style={{
            '--trail-color': `${trailColor ?? '#E0E2EE'}`,
            '--fill-color': `${fillColor ?? '#3D73F2'}`,
            '--label-color': `${(rest as ProgressBarProps)?.labelColor ?? '#FFFFFF'}`,
          } as CSSProperties}
          {...rest}
        >
          { children }
        </ProgressBar>
      }
    </div>
  );
};

export default memo(Progress);
