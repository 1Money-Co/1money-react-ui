import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { FC } from 'react';
import type { UploadFileBarProps } from './interface';

export const UploadFileBar: FC<UploadFileBarProps> = props => {
  const { className, prefixCls = 'upload-file-bar', fileName, status = 0, message, onClickRemove } = props;
  const classes = classnames(prefixCls);

  return (
    <div className={classes(void 0, joinCls(classes(status === 0 ? 'success' : 'failure'), className))}>
      <div className={classes('inner')}>
        <Icons
          wrapperCls={classes('icon-file')}
          name='document'
          size={20}
          color={status === 0 ? '#073387' : '#AE0000'}
        />
        <span className={classes('name')}>{fileName}</span>
        <Icons
          wrapperCls={classes('icon-status')}
          name={status === 0 ? 'statusSuccess' : 'statusFail'}
          size={20}
          color={status === 0 ? '#1F580033' : '#AE00001A'}
        />
        {
          message && <span className={classes('message')}>
            {status === 1 && <Icons name='error' size={16} color='#AE0000' />}
            {message}
          </span>
        }
      </div>
      <Icons
        wrapperCls={classes('icon-remove')}
        name='remove'
        size={20}
        color='#131313'
        onClick={() => onClickRemove?.()}
      />
    </div>
  );
};

export default memo(UploadFileBar);
