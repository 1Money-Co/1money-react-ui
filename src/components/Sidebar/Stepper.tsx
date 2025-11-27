import { memo, useState, useCallback } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { FC } from 'react';
import type { StepperProps } from './interface';

export const Stepper: FC<StepperProps> = props => {
  const { id, steps, className, prefixCls = 'stepper', headerCls, bodyCls, footerCls, logoCls, betaLogo, onLogoClick, footer } = props;
  const classes = classnames(prefixCls);

  return (
    <aside
      id={id}
      className={classes(void 0, className)}
    >
      <div className={classes('header', headerCls)}>
        <Icons
          name={betaLogo ? 'logoWithBeta' : 'logoWithWords'}
          // @ts-ignore
          logoColor='#073387'
          // @ts-ignore
          wordColor='#131313'
          // @ts-ignore
          betaColor='#073387'
          width={betaLogo ? 152 : 131}
          height={betaLogo ? 22 : 24}
          onClick={onLogoClick}
          wrapperCls={classes('header-logo', logoCls)}
        />
      </div>
      <ul className={classes('steps', bodyCls)}>
        {
          steps.map(step => {
            const { key, label, status, disabled, onClick } = step;
            return <li
              key={key}
              className={classes('step', joinCls(classes(`step-${status}`), disabled && classes('step-disabled')))}
              onClick={() => onClick?.(step)}
            >
              <span className={classes('step-label')}>{label}</span>
              {
                (step.status === 'done' || step.status === 'done-active') && <Icons name='statusSuccess' size={20} color='#1F580033' />
              }
            </li>;
          })
        }
      </ul>
      {
        footer && <div className={classes('footer', footerCls)}>{footer}</div>
      }
    </aside>
  );
};

export default memo(Stepper);
