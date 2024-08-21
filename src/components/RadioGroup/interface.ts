import type { RadioButtonProps } from 'primereact/radiobutton';

export interface RadioGroupProps {
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  prefixCls?: string;
  onChange?: (selected:  RadioGroupProps['items'][number]) => any;
  items:({
    key: string;
    label?: string;
  } & Omit<RadioButtonProps, 'inputId' | 'value' | 'onChange' | 'checked' | 'className'>)[];
}
