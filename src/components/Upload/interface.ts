import type { RefObject } from 'react';
import type { FileUploadProps, FileUpload } from 'primereact/fileupload';

export interface UploadProps extends FileUploadProps {
  ref?: RefObject<FileUpload>;
  className?: string;
  prefixCls?: string;
  btnSize?: 'small' | 'medium' | 'large';
}

export type UploadHandler = FileUpload;

export interface UploadFileBarProps {
  fileName: string;
  // 0 success, 1 failed
  status?: 0 | 1;
  message?: string;
  className?: string;
  prefixCls?: string;
  onClickRemove?: () => any;
}
