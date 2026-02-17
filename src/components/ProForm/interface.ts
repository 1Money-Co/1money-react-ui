import type { ReactElement, ReactNode } from 'react';
import type { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormProps, FormItemRules } from '../Form';
import type { ButtonProps } from '../Button';
import type { ModalProps } from '../Modal';
import type { DrawerProps } from '../Drawer';

export interface ProFormFieldProps<
  FieldProps,
  TFieldValues extends FieldValues = FieldValues,
> {
  name: FieldPath<TFieldValues>;
  label?: ReactNode;
  rules?: FormItemRules<TFieldValues>;
  required?: boolean;
  help?: ReactNode;
  extra?: ReactNode;
  dependencies?: Array<FieldPath<TFieldValues>>;
  validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>;
  labelCol?: number;
  wrapperCol?: number;
  noStyle?: boolean;

  readonly?: boolean;
  hidden?: boolean;
  colProps?: { span?: number };

  fieldProps?: Partial<FieldProps>;
  placeholder?: string;
  disabled?: boolean;
  width?: 'sm' | 'md' | 'lg' | 'xl' | number;
}

export interface SubmitterRenderProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  form?: UseFormReturn<TFieldValues>;
  submit: () => void;
  reset: () => void;
}

export interface SubmitterProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  submitText?: ReactNode;
  resetText?: ReactNode;
  render?: (
    props: SubmitterRenderProps<TFieldValues>,
    dom: ReactElement[],
  ) => ReactNode;
  onSubmit?: () => void;
  onReset?: () => void;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  searchConfig?: {
    collapseText?: ReactNode;
    expandText?: ReactNode;
  };
}

export interface ProFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<FormProps<TFieldValues>, 'onFinish'> {
  onFinish?: (values: TFieldValues) => void | boolean | Promise<void | boolean>;
  submitter?: false | SubmitterProps<TFieldValues>;
  readonly?: boolean;
  grid?: boolean;
  colProps?: { span?: number };
  rowProps?: { gutter?: number };
  loading?: boolean;
  request?: (params?: Record<string, unknown>) => Promise<TFieldValues>;
  params?: Record<string, unknown>;
}

export interface ModalFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  modalProps?: ModalProps;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  width?: string | number;
  title?: ReactNode;
}

export interface DrawerFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  drawerProps?: DrawerProps;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  width?: string | number;
  title?: ReactNode;
}

export interface StepFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues> {
  title?: ReactNode;
  description?: ReactNode;
  stepProps?: Record<string, unknown>;
}

export interface StepsSubmitterProps<
  TFieldValues extends FieldValues = FieldValues,
> extends SubmitterProps<TFieldValues> {
  prevText?: ReactNode;
  nextText?: ReactNode;
}

export interface StepsFormProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  current?: number;
  onCurrentChange?: (current: number) => void;
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  stepsProps?: Record<string, unknown>;
  formProps?: Partial<ProFormProps<FieldValues>>;
  submitter?: false | StepsSubmitterProps<TFieldValues>;
  children: ReactElement<StepFormProps> | ReactElement<StepFormProps>[];
}

export interface QueryFilterProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues> {
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  defaultColsNumber?: number;
  labelWidth?: number | 'auto';
  split?: boolean;
  onReset?: () => void;
}

export interface ProFormListAction {
  add: (defaultValue?: Record<string, unknown>, index?: number) => void;
  remove: (index: number) => void;
  move: (from: number, to: number) => void;
  copy: (index: number) => void;
  getList: () => Record<string, unknown>[];
}

export interface ProFormListProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  name: FieldPath<TFieldValues>;
  label?: ReactNode;
  min?: number;
  max?: number;
  initialValue?: Record<string, unknown>[];
  copyIconProps?: false | Record<string, unknown>;
  deleteIconProps?: false | Record<string, unknown>;
  creatorButtonProps?: false | (ButtonProps & {
    text?: ReactNode;
    position?: 'top' | 'bottom';
  });
  sortable?: boolean;
  itemRender?: (props: {
    listDom: ReactNode;
    action: ProFormListAction;
  }) => ReactNode;
  actionRender?: (
    row: { index: number; record: unknown },
    action: ProFormListAction,
    defaultDom: { delete: ReactNode; copy: ReactNode },
  ) => ReactNode[];
  children: ReactNode | ((
    fields: { name: string; key: string }[],
    action: ProFormListAction,
  ) => ReactNode);
  onAfterAdd?: (defaultValue: Record<string, unknown>, insertIndex: number) => void;
  onAfterRemove?: (index: number) => void;
}
