import type { CSSProperties, ReactNode } from 'react';
import type {
  DefaultValues,
  FieldErrors,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  UseFormProps,
  UseFormReturn,
  ControllerRenderProps,
  ControllerFieldState,
  Control,
} from 'react-hook-form';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';
export type FormLabelAlign = 'left' | 'right';
export type FormSize = 'small' | 'middle' | 'large';
export type FormValidateStatus = 'success' | 'warning' | 'error' | 'validating';

export interface FormContextValue {
  layout: FormLayout;
  labelAlign: FormLabelAlign;
  labelCol: number; // 0-12 grid
  wrapperCol: number; // 0-12 grid
  size: FormSize;
  disabled?: boolean;
  colon: boolean;
  requiredMark: boolean;
  control: Control<any>;
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<UseFormProps<TFieldValues>, 'defaultValues'> {
  defaultValues?: DefaultValues<TFieldValues>;
  form?: UseFormReturn<TFieldValues>;
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  onFinishFailed?: (errors: FieldErrors<TFieldValues>) => void;
  scrollToFirstError?: boolean | {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
    offset?: number;
  };
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: number; // 0-12 grid
  wrapperCol?: number; // 0-12 grid
  size?: FormSize;
  disabled?: boolean;
  colon?: boolean;
  requiredMark?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface FormItemRenderProps<TFieldValues extends FieldValues = FieldValues> {
  field?: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
  fieldState?: ControllerFieldState;
  form: UseFormReturn<TFieldValues>;
  values: TFieldValues;
}

export interface FormItemProps<TFieldValues extends FieldValues = FieldValues> {
  name?: FieldPath<TFieldValues>;
  label?: ReactNode;
  required?: boolean;
  rules?: RegisterOptions<TFieldValues>;
  defaultValue?: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>;
  help?: ReactNode;
  extra?: ReactNode;
  validateStatus?: FormValidateStatus;
  dependencies?: Array<FieldPath<TFieldValues>>;
  shouldUpdate?: boolean | ((prev: TFieldValues, next: TFieldValues) => boolean);
  validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>;
  validateFirst?: boolean | 'parallel';
  validateDebounce?: number;
  noStyle?: boolean;
  valuePropName?: string; // defaults to 'value'
  className?: string;
  labelCol?: number;
  wrapperCol?: number;
  children?: ReactNode | ((props: FormItemRenderProps<TFieldValues>) => ReactNode);
}
