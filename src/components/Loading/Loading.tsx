'use client';
import { memo, useEffect, useRef } from 'react';
import classnames from '@/utils/classnames';
import lottiePureJson from './lottie-pure.json';
import lottiePatternJson from './lottie-pattern.json';
/* import types */
import type { FC } from 'react';
import type { AnimationItem } from 'lottie-web';
import type { LoadingProps } from './interface';

export const Loading: FC<LoadingProps> = props => {
  const { id, className, prefixCls = 'loading', type = 'pure' } = props;
  const container = useRef<HTMLDivElement>(null);
  const classes = classnames(prefixCls);

  useEffect(() => {
    if (!container.current) return;

    let instance: AnimationItem | null = null;
    let destroyed = false;
    (async () => {
      const lottie = (await import('lottie-web')).default;
      if (destroyed) return;
      instance = lottie.loadAnimation({
        container: container.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: type === 'pure' ? lottiePureJson : lottiePatternJson
      });
    })();

    return () => {
      destroyed = true;
      if (instance) {
        instance.destroy();
        instance = null;
      }
    };
  }, []);

  return <div id={id} ref={container} className={classes(void 0, className)} />;
};

export default memo(Loading);