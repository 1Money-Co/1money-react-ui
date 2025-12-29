import { memo } from 'react';
import Typography from '@/components/Typography';
import Copy from '@/components/Copy';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { ClipboardProps } from './interface';

export const Clipboard: FC<ClipboardProps> = props => {
  const { content, className, label, labelCls, onSuccess, onError, prefixCls = 'clipboard' } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, className)}
    >
      <Typography.Label bold size='l' className={classes('label', labelCls)}>{label}</Typography.Label>
      <div className={classes('content')}>
        <Typography.Body size='l' className={classes('content-text')}>{ content }</Typography.Body>
        <Copy
          value={content as string}
          iconSize={20}
          onSuccess={onSuccess}
          onError={onError}
          className={classes('content-icon')}
        />
      </div>
    </div>
  );
};

export default memo(Clipboard);
