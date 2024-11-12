import { memo } from 'react';
import propTypes from 'prop-types';
import { ProgressBar } from 'primereact/progressbar';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
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
          } as React.CSSProperties}
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
          } as React.CSSProperties}
          {...rest}
        >
          { children }
        </ProgressBar>
      }
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Progress.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Progress);
