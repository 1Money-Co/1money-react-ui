import { memo, forwardRef } from 'react';
import propTypes from 'prop-types';
import { FileUpload } from 'primereact/fileupload';
import classnames from '@/utils/classnames';
/* import types */
import type { UploadProps, UploadHandler } from './interface';

export const Upload = forwardRef<UploadHandler, UploadProps>((props, ref) => {
  const { className, prefixCls = 'upload', uploadOptions, chooseOptions, cancelOptions, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <FileUpload
      {...rest}
      ref={ref}
      className={classes(void 0, className)}
      uploadOptions={{
        ...uploadOptions,
        className: classes('btn', [classes('btn-upload'), uploadOptions?.className].join(' '))
      }}
      chooseOptions={{
        ...chooseOptions,
        className: classes('btn', [classes('btn-choose'), chooseOptions?.className].join(' '))
      }}
      cancelOptions={{
        ...cancelOptions,
        className: classes('btn', [classes('btn-cancel'), cancelOptions?.className].join(' '))
      }}
    />
  );
});

export default memo(Upload);
