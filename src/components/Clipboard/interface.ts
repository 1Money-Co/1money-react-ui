
export interface ClipboardProps {
  content: string;
  className?: string;
  prefixCls?: string;
  label?: string;
  labelCls?: string;
  onSuccess?: (val: string) => any;
  onError?: (e: any) => any;
}
