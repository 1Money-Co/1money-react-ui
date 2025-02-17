'use client';
import { memo, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
import lottiePureJson from './lottie-pure.json';
import lottiePatternJson from './lottie-pattern.json';
/* import types */
import type { FC } from 'react';
import type { LoadingProps } from './interface';

let instance: any;

export const Loading: FC<LoadingProps> = props => {
  const { className, prefixCls = 'loading', type = 'pure' } = props;
  const container = useRef<HTMLDivElement>(null);
  const classes = classnames(prefixCls);

  useEffect(() => {
    if (!container.current) return;

    const loadAnimation = async () => {
      if (instance) return;
      const lottie = (await import('lottie-web')).default;
      instance = lottie.loadAnimation({
        container: container.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: type === 'pure' ? lottiePureJson : lottiePatternJson
      });
    };
    loadAnimation();

    return () => {
      if (instance) {
        instance.destroy();
        instance = null;
      }
    };
  }, []);

  return <div ref={container} className={classes(void 0, className)} />;
};

export default memo(Loading);
