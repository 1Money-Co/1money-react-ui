
export interface ClipboardProps {
  content: string;
  className?: string;
  prefixCls?: string;
  label?: string;
  onSuccess?: (val: string) => any;
  onError?: (e: any) => any;
}
