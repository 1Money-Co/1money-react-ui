import { memo } from 'react';
import { FileUpload } from 'primereact/fileupload';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { UploadProps } from './interface';

export const Upload: FC<UploadProps> = props => {
  const { className, prefixCls = 'upload', ref, btnSize = 'medium', uploadOptions, chooseOptions, cancelOptions, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <FileUpload
      {...rest}
      ref={ref}
      className={classes(void 0, className)}
      uploadOptions={{
        ...uploadOptions,
        className: classes('btn', [classes(`btn-${btnSize}`), classes('btn-upload'), uploadOptions?.className].join(' '))
      }}
      chooseOptions={{
        ...chooseOptions,
        className: classes('btn', [classes(`btn-${btnSize}`), classes('btn-choose'), chooseOptions?.className].join(' '))
      }}
      cancelOptions={{
        ...cancelOptions,
        className: classes('btn', [classes(`btn-${btnSize}`), classes('btn-cancel'), cancelOptions?.className].join(' '))
      }}
    />
  );
};

export default memo(Upload);
