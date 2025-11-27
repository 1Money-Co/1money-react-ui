import { memo } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { default as classnames, joinCls } from '@/utils/classnames';
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
        className: classes('btn', joinCls(classes(`btn-${btnSize}`), classes('btn-upload'), uploadOptions?.className))
      }}
      chooseOptions={{
        ...chooseOptions,
        className: classes('btn', joinCls(classes(`btn-${btnSize}`), classes('btn-choose'), chooseOptions?.className))
      }}
      cancelOptions={{
        ...cancelOptions,
        className: classes('btn', joinCls(classes(`btn-${btnSize}`), classes('btn-cancel'), cancelOptions?.className))
      }}
    />
  );
};

export default memo(Upload);
