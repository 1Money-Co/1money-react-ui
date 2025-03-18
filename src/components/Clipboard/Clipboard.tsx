import { memo } from 'react';
import clipboard from '@/utils/clipboard';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { ClipboardProps } from './interface';

export const Clipboard: FC<ClipboardProps> = props => {
  const { content, className, label, labelCls, onSuccess, onError, prefixCls = 'clipboard' } = props;
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
      <Typography.Label bold size='l' className={classes('label', labelCls)}>{label}</Typography.Label>
      <div className={classes('content')}>
        <Typography.Body size='l' className={classes('content-text')}>{ content }</Typography.Body>
        <Icons name='copy' size={20} color='#131313' wrapperCls={classes('content-icon')} onClick={onCopy} />
      </div>
    </div>
  );
};

export default memo(Clipboard);
