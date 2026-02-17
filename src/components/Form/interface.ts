import type { CSSProperties, ReactNode } from 'react';
import type {
  Control,
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
} from 'react-hook-form';
import type { TRIGGER_BLUR, TRIGGER_CHANGE } from './constants';

export type FormItemRules<TFieldValues extends FieldValues = FieldValues> = Pick<
  RegisterOptions<TFieldValues>,
  'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'validate' | 'deps'
>;

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
  methods: UseFormReturn<FieldValues>;
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<UseFormProps<TFieldValues>, 'defaultValues'> {
  defaultValues?: DefaultValues<TFieldValues>;
  form?: UseFormReturn<TFieldValues>;
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  onFinishFailed?: (errors: FieldErrors<TFieldValues>) => void;
  onValuesChange?: (values: TFieldValues, info: { name?: FieldPath<TFieldValues>; type?: string }) => void;
  watchNames?: Array<FieldPath<TFieldValues>>;
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
  field?: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>> & {
    invalid?: boolean;
    success?: boolean;
  };
  fieldState?: ControllerFieldState;
  form: UseFormReturn<TFieldValues>;
  values: TFieldValues;
}

export type FormItemStyle = CSSProperties & {
  ['--om-form-label-width']?: string;
  ['--om-form-wrapper-width']?: string;
};

export type FormItemRenderFn<TFieldValues extends FieldValues> =
  (props: FormItemRenderProps<TFieldValues>) => ReactNode;

export interface FormItemProps<TFieldValues extends FieldValues = FieldValues> {
  name?: FieldPath<TFieldValues>;
  label?: ReactNode;
  required?: boolean;
  rules?: FormItemRules<TFieldValues>;
  defaultValue?: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>;
  help?: ReactNode;
  extra?: ReactNode;
  validateStatus?: FormValidateStatus;
  dependencies?: Array<FieldPath<TFieldValues>>;
  watchNames?: Array<FieldPath<TFieldValues>>;
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

export interface FormItemContentProps<TFieldValues extends FieldValues = FieldValues> {
  name?: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  methods: UseFormReturn<TFieldValues>;
  rules?: FormItemRules<TFieldValues>;
  defaultValue?: FormItemProps<TFieldValues>['defaultValue'];
  validateStatus?: FormValidateStatus;
  valuePropName: string;
  help?: ReactNode;
  extra?: ReactNode;
  ctx: FormContextValue | null;
  children: FormItemProps<TFieldValues>['children'];
  renderFn: FormItemRenderFn<TFieldValues> | null;
  allValues: TFieldValues;
  shouldUpdate?: FormItemProps<TFieldValues>['shouldUpdate'];
  shouldRender: boolean;
  withTrigger: (
    mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR,
    fn?: (...args: unknown[]) => void
  ) => (...args: unknown[]) => void;
}
