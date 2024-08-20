import type { RadioButtonProps } from 'primereact/radiobutton';


export interface RadioGroupProps {
  wrapperCls?: string;
  innerCls?: string;
  radioCls?: string;
  prefixCls?: string;
  items:({
    key: string;
    label?: string;
  } & Exclude<RadioButtonProps, 'inputId' | 'value'>)[];
}
