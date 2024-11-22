import type { FileUploadProps, FileUpload } from 'primereact/fileupload';

export interface UploadProps extends FileUploadProps {
  className?: string;
  prefixCls?: string;
}

export type UploadHandler = FileUpload;
