'use client';

import { memo, useRef, useState, useEffect } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Icons from '@/components/Icons';
import clipboard from '@/utils/clipboard';
/* import types */
import type { FC } from 'react';
import type { CopyProps } from './interface';

export const Copy: FC<CopyProps> = props => {
  const { value, iconSize = 32, color, className, prefixCls = 'copy', onSuccess, onError } = props;
  const classes = classnames(prefixCls);

  const [copied, setCopied] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return <Icons
    name={copied ? 'check' : 'copy'}
    size={iconSize}
    color={color}
    wrapperCls={classes(void 0, joinCls(
      copied && classes('success'),
      className,
    ))}
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      if (!value || copied) return;
      clipboard(
        value,
        (succeeded: boolean) => {
          if (succeeded) {
            setCopied(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 1500);
            onSuccess?.(value);
          } else {
            onError?.(value);
          }
        }
      );
    }}
  />;
};

export default memo(Copy);
