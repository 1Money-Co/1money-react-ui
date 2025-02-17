import { memo } from 'react';
import propTypes from 'prop-types';
import clipboard from '@/utils/clipboard';
import Icons from '@/components/Icons';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { ClipboardProps } from './interface';

export const Clipboard: FC<ClipboardProps> = props => {
  const { content, className, label, onSuccess, onError, prefixCls = 'clipboard' } = props;
  const classes = classnames(prefixCls);
  const onCopy = () => {
    clipboard(content as string, (succeeded: boolean) => {
      if (succeeded) {
        onSuccess?.(content as string);
      } else {
        onError?.(new Error('Copy failed'));
      }
    });
  };
  return (
    <div
      className={classes(void 0, className)}
    >
      <span className={classes('label')}>{label}</span>
      <div className={classes('content')}>
        <span className={classes('content-text')}>{ content }</span>
        <Icons name='content' size={20} color='#000' className={classes('content-icon')} onClick={onCopy} />
      </div>
    </div>
  );
};

export default memo(Clipboard);
