import type { ReactElement, ReactNode } from 'react';
import type { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormProps, FormItemRules } from '../Form';
import type { ButtonProps } from '../Button';
import type { ModalProps } from '../Modal';
import type { DrawerProps } from '../Drawer';

/**
 * Common props shared by all ProForm field components created via {@link createProFormField}.
 *
 * @typeParam FieldProps - The props interface of the underlying input component.
 * @typeParam TFieldValues - The form values type (inferred from the parent form).
 */
export interface ProFormFieldProps<
  FieldProps,
  TFieldValues extends FieldValues = FieldValues,
> {
  /** Field name path within the form values. */
  name: FieldPath<TFieldValues>;
  /** Label displayed alongside the field. */
  label?: ReactNode;
  /** Validation rules applied to this field. */
  rules?: FormItemRules<TFieldValues>;
  /** Whether the field is required. Adds a required indicator to the label. */
  required?: boolean;
  /** Help text shown below the field. */
  help?: ReactNode;
  /** Extra content rendered beneath the field (after help text). */
  extra?: ReactNode;
  /** Other field names this field depends on for conditional validation. */
  dependencies?: Array<FieldPath<TFieldValues>>;
  /** When validation is triggered — on change, blur, or both. */
  validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>;
  /** Column span for the label in grid layout. */
  labelCol?: number;
  /** Column span for the input wrapper in grid layout. */
  wrapperCol?: number;
  /** When `true`, renders the field without the `FormItem` wrapper styles. */
  noStyle?: boolean;

  /** When `true`, renders the field value as plain text instead of an input. */
  readonly?: boolean;
  /** When `true`, hides the field entirely (renders nothing). */
  hidden?: boolean;
  /** Grid column configuration for the field when `grid` mode is enabled. */
  colProps?: { span?: number };

  /** Props forwarded directly to the underlying input component. */
  fieldProps?: Partial<FieldProps>;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Whether the field is disabled. */
  disabled?: boolean;
  /** Width of the field — a preset name (`'sm'` | `'md'` | `'lg'` | `'xl'`) or a pixel value. */
  width?: 'sm' | 'md' | 'lg' | 'xl' | number;
}

/**
 * Props passed to a custom submitter render function.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface SubmitterRenderProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  /** The `react-hook-form` form instance. */
  form?: UseFormReturn<TFieldValues>;
  /** Programmatically triggers form submission. */
  submit: () => void;
  /** Programmatically resets the form to its default values. */
  reset: () => void;
}

/**
 * Configuration for the form submit/reset button bar.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface SubmitterProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  /** Text displayed on the submit button. @default 'Submit' */
  submitText?: ReactNode;
  /** Text displayed on the reset button. @default 'Reset' */
  resetText?: ReactNode;
  /** Custom render function that replaces the default button bar. */
  render?: (
    props: SubmitterRenderProps<TFieldValues>,
    dom: ReactElement[],
  ) => ReactNode;
  /** Callback fired when the submit button is clicked. */
  onSubmit?: () => void;
  /** Callback fired when the reset button is clicked. */
  onReset?: () => void;
  /** Additional props forwarded to the submit `<Button>`. */
  submitButtonProps?: ButtonProps;
  /** Additional props forwarded to the reset `<Button>`. */
  resetButtonProps?: ButtonProps;
}

/**
 * Props for the {@link ProForm} component — an enhanced form with built-in
 * submitter, grid layout, readonly mode, and async data loading.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface ProFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<FormProps<TFieldValues>, 'onFinish'> {
  /** Callback invoked with validated form values on successful submission. Return `false` to prevent the default post-submit behavior. */
  onFinish?: (values: TFieldValues) => void | boolean | Promise<void | boolean>;
  /** Submitter button configuration. Pass `false` to hide the button bar entirely. */
  submitter?: false | SubmitterProps<TFieldValues>;
  /** When `true`, all fields render their values as plain text. */
  readonly?: boolean;
  /** When `true`, wraps children in a responsive `<Row>` grid layout. */
  grid?: boolean;
  /** Default column props applied to each field when `grid` is enabled. */
  colProps?: { span?: number };
  /** Row props (e.g. `gutter`) applied to the grid wrapper. */
  rowProps?: { gutter?: number };
  /** When `true`, disables the form and shows a loading state on the submit button. */
  loading?: boolean;
  /** Async function to fetch initial/remote form values. Called when `params` change. */
  request?: (params?: Record<string, unknown>) => Promise<TFieldValues>;
  /** Parameters passed to the `request` function. Changing these re-triggers the request. */
  params?: Record<string, unknown>;
}

/**
 * Shared props for overlay-based ProForm containers (e.g., modal and drawer).
 */
export interface OverlayFormProps {
  /** Controlled open state of the overlay. */
  open?: boolean;
  /** Callback fired when the overlay open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the overlay when clicked. */
  trigger?: ReactElement;
  /** Delay (ms) before the overlay closes after a successful submit. */
  submitTimeout?: number;
  /** Whether the overlay closes automatically after a successful submit. @default true */
  autoClose?: boolean;
  /** Whether the overlay content is destroyed when closed. @default true */
  destroyOnClose?: boolean;
  /** Width of the overlay container. */
  width?: string | number;
  /** Title shown in the overlay header. */
  title?: ReactNode;
}

/**
 * Props for {@link ModalForm} — a ProForm rendered inside a modal dialog.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface ModalFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues>, OverlayFormProps {
  /** Props forwarded to the underlying `<Modal>` component. */
  modalProps?: ModalProps;
}

/**
 * Props for {@link DrawerForm} — a ProForm rendered inside a side drawer.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface DrawerFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues>, OverlayFormProps {
  /** Props forwarded to the underlying `<Drawer>` component. */
  drawerProps?: DrawerProps;
}

/**
 * Props for an individual step inside {@link StepsForm}.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface StepFormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ProFormProps<TFieldValues> {
  /** Title displayed above the step form. */
  title?: ReactNode;
  /** Description displayed below the step title. */
  description?: ReactNode;
  /** Additional HTML/aria props for the step container. */
  stepProps?: Record<string, unknown>;
}

/**
 * Submitter configuration specific to {@link StepsForm}, adding previous/next navigation.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface StepsSubmitterProps<
  TFieldValues extends FieldValues = FieldValues,
> extends SubmitterProps<TFieldValues> {
  /** Text for the "previous step" button. @default 'Previous' */
  prevText?: ReactNode;
  /** Text for the "next step" button. @default 'Next' */
  nextText?: ReactNode;
}

/**
 * Submitter configuration specific to {@link QueryFilter}, adding
 * collapse/expand button text overrides.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface QueryFilterSubmitterProps<
  TFieldValues extends FieldValues = FieldValues,
> extends SubmitterProps<TFieldValues> {
  /** Text overrides for the collapse/expand toggle in {@link QueryFilter}. */
  searchConfig?: {
    collapseText?: ReactNode;
    expandText?: ReactNode;
  };
}

/**
 * Props for {@link StepsForm} — a multi-step wizard form that collects
 * values across steps and submits them together on the final step.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface StepsFormProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  /** Controlled active step index (0-based). */
  current?: number;
  /** Callback fired when the active step changes. */
  onCurrentChange?: (current: number) => void;
  /** Callback invoked with all merged step values when the final step is submitted. */
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  /** Additional HTML/aria props for the steps wrapper. */
  stepsProps?: Record<string, unknown>;
  /** Shared form props applied to every step's `<ProForm>`. */
  formProps?: Partial<ProFormProps<TFieldValues>>;
  /** Submitter configuration with step navigation. Pass `false` to hide. */
  submitter?: false | StepsSubmitterProps<TFieldValues>;
  /** One or more `<StepForm>` elements representing each wizard step. */
  children: ReactElement<StepFormProps<TFieldValues>> | ReactElement<StepFormProps<TFieldValues>>[];
}

/**
 * Props for {@link QueryFilter} — a horizontal search/filter form with
 * collapsible fields and a search/reset button bar.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface QueryFilterProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<ProFormProps<TFieldValues>, 'submitter'> {
  /** Whether the filter is collapsed by default. @default true */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state. */
  collapsed?: boolean;
  /** Callback fired when the collapsed state changes. */
  onCollapse?: (collapsed: boolean) => void;
  /** Number of fields visible when collapsed. @default 3 */
  defaultColsNumber?: number;
  /** Fixed label width in pixels, or `'auto'`. */
  labelWidth?: number | 'auto';
  /** When `true`, adds a visual separator between filters. */
  split?: boolean;
  /** Callback fired when the reset button is clicked. */
  onReset?: () => void;
  /** Submitter configuration for search/reset/collapse actions. Pass `false` to hide. */
  submitter?: false | QueryFilterSubmitterProps<TFieldValues>;
}

/**
 * Imperative action handle exposed by {@link ProFormList} for programmatic list manipulation.
 */
export interface ProFormListAction {
  /** Appends or inserts a new row with optional default values. */
  add: (defaultValue?: Record<string, unknown>, index?: number) => void;
  /** Removes the row at the given index. */
  remove: (index: number) => void;
  /** Moves a row from one index to another. */
  move: (from: number, to: number) => void;
  /** Duplicates the row at the given index. */
  copy: (index: number) => void;
  /** Returns the current list of row values. */
  getList: () => Record<string, unknown>[];
}

/**
 * Props for {@link ProFormList} — a dynamic, repeatable form field list
 * with add/remove/copy/sort capabilities.
 *
 * @typeParam TFieldValues - The form values type.
 */
export interface ProFormListProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  /** Field name path for the array within the form values. */
  name: FieldPath<TFieldValues>;
  /** Label displayed above the list. */
  label?: ReactNode;
  /** Minimum number of rows (prevents removal below this count). */
  min?: number;
  /** Maximum number of rows (prevents adding above this count). */
  max?: number;
  /** Initial row values populated when the list is first rendered. */
  initialValue?: Record<string, unknown>[];
  /** Props for the copy icon button. Pass `false` to hide. */
  copyIconProps?: false | Record<string, unknown>;
  /** Props for the delete icon button. Pass `false` to hide. */
  deleteIconProps?: false | Record<string, unknown>;
  /** Props for the "add row" button. Pass `false` to hide. */
  creatorButtonProps?: false | (ButtonProps & {
    /** Button label text. @default 'Add' */
    text?: ReactNode;
    /** Position of the add button relative to the list. @default 'bottom' */
    position?: 'top' | 'bottom';
  });
  /** When `true`, rows can be reordered via drag-and-drop. */
  sortable?: boolean;
  /** Custom render function for each list row. */
  itemRender?: (props: {
    listDom: ReactNode;
    action: ProFormListAction;
  }) => ReactNode;
  /** Custom render function for the action buttons of each row. */
  actionRender?: (
    row: { index: number; record: unknown },
    action: ProFormListAction,
    defaultDom: { delete: ReactNode; copy: ReactNode },
  ) => ReactNode[];
  /** Row content — either static ReactNode or a render function receiving field metadata and actions. */
  children: ReactNode | ((
    fields: { name: string; key: string }[],
    action: ProFormListAction,
  ) => ReactNode);
  /** Callback fired after a row is added. */
  onAfterAdd?: (defaultValue: Record<string, unknown>, insertIndex: number) => void;
  /** Callback fired after a row is removed. */
  onAfterRemove?: (index: number) => void;
}
