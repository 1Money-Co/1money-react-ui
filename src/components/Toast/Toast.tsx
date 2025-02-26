import { memo, useRef, useImperativeHandle, useCallback } from 'react';
import { Toast as PrimeToast } from 'primereact/toast';
import { Icons } from '../Icons';
import { Typography } from '../Typography';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { ToastRef, ToastProps, ToastMessage } from './interface';

const SeverityIconMap = {
  success: {
    name: 'check' as const,
    color: '#FEFEFE',
    bgColor: '#1F5800',
  },
  info: {
    name: 'fail' as const,
    color: '#073387',
    bgColor: '#DDE6F4',
  },
  warn: {
    name: 'error' as const,
    color: '#131313',
    bgColor: '#F4C600',
  },
  error: {
    name: 'cross' as const,
    color: '#FEFEFE',
    bgColor: '#AE0000',
  },
};

export const Toast: FC<ToastProps> = props => {
  const { className, prefixCls = 'toast', ref, ...rest } = props;
  const classes = classnames(prefixCls);
  const toastRef = useRef<ToastRef>(null);

  const handleToastMessage = useCallback((message: ToastMessage | ToastMessage[]) => {
    const _message = Array.isArray(message)
      ? message
      : [message];
    for (let i = 0; i < _message.length; i++) {
      const { severity, content, summary, detail, closeIcon, life } = _message[i];
      if (!content && (severity === 'success' || severity === 'info' || severity === 'warn' || severity === 'error')) {
        const iconData = SeverityIconMap[severity];
        _message[i].content = props => <div className={classes('inner', classes(severity))}>
          <i className={classes('inner-left')} style={{ backgroundColor: iconData.bgColor }}>
            <Icons name={iconData.name} color={iconData.color} size={16} />
          </i>
          <div className={classes('inner-right')}>
            <Typography.Title bold size='s' className={classes('inner-right-summary')}>{summary}</Typography.Title>
            <Typography.Body size='m' className={classes('inner-right-detail')}>{detail}</Typography.Body>
          </div>
        </div>;
      }
      if (!closeIcon) {
        _message[i].closeIcon = <i className={classes('close-icon')}><Icons name='close' color='#646465' size={16} /></i>;
      }
      if (!life) {
        _message[i].life = 3000;
      }
    }
    return _message;
  }, [classes]);

  useImperativeHandle(ref, () => ({
    clear: () => toastRef.current?.clear(),
    getElement: () => toastRef.current?.getElement() as HTMLDivElement,
    remove: (message: ToastMessage | ToastMessage[]) => {
      toastRef.current?.remove(handleToastMessage(message));
    },
    replace: (message: ToastMessage | ToastMessage[]) => {
      toastRef.current?.replace(handleToastMessage(message));
    },
    show: (message: ToastMessage | ToastMessage[]) => {
      toastRef.current?.show(handleToastMessage(message));
    },
  }), [handleToastMessage]);

  return (
    <PrimeToast
      {...rest}
      ref={toastRef}
      className={classes(void 0, className)}
    />
  );
};

export default memo(Toast);
