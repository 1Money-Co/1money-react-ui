'use client';
import { memo, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import lottie from 'lottie-web';
import classnames from '@/utils/classnames';
import lottieJson from './lottie.json';
/* import types */
import type { FC } from 'react';
import type { LoadingProps } from './interface';

export const Loading: FC<LoadingProps> = props => {
  const { className, prefixCls = 'loading' } = props;
  const container = useRef<HTMLDivElement>(null);
  const classes = classnames(prefixCls);

  useEffect(() => {
    if (!container.current) return;
    const instance =lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieJson
    });

    return () => instance.destroy();
  }, []);

  return <div ref={container} className={classes(void 0, className)} />;
  
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Loading.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Loading);
