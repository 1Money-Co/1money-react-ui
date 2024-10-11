'use client';
import { memo, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import lottie from 'lottie-web';
import classnames from '@/utils/classnames';
import lottiePureJson from './lottie-pure.json';
import lottiePatternJson from './lottie-pattern.json';
/* import types */
import type { FC } from 'react';
import type { LoadingProps } from './interface';

export const Loading: FC<LoadingProps> = props => {
  const { className, prefixCls = 'loading', type = 'pure' } = props;
  const container = useRef<HTMLDivElement>(null);
  const classes = classnames(prefixCls);

  useEffect(() => {
    if (!container.current) return;
    const instance =lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: type === 'pure' ? lottiePureJson : lottiePatternJson
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
  prefixCls: propTypes.string,
  type: propTypes.oneOf(['pure', 'pattern'])
};

export default memo(Loading);
