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

/**
 * Subset of `RegisterOptions` used by `FormItem` for declarative validation rules.
 *
 * @template TFieldValues - The shape of the form values.
 */
export type FormItemRules<TFieldValues extends FieldValues = FieldValues> = Pick<
  RegisterOptions<TFieldValues>,
  'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'validate' | 'deps'
>;

/** Form layout direction. */
export type FormLayout = 'horizontal' | 'vertical' | 'inline';

/** Label text alignment within the label column. */
export type FormLabelAlign = 'left' | 'right';

/** Form size variant applied to all child items. */
export type FormSize = 'small' | 'middle' | 'large';

/** Validation status used for visual feedback on a form field. */
export type FormValidateStatus = 'success' | 'warning' | 'error' | 'validating';

/**
 * Shared context value provided by `<Form>` to all descendant `<FormItem>` components.
 */
export interface FormContextValue {
  /** Layout direction for the form. */
  layout: FormLayout;
  /** Alignment of labels within the label column. */
  labelAlign: FormLabelAlign;
  /** Label column span in a 12-column grid (0–12). */
  labelCol: number;
  /** Wrapper/control column span in a 12-column grid (0–12). */
  wrapperCol: number;
  /** Size variant applied to all form items. */
  size: FormSize;
  /** When `true`, all form fields are disabled. */
  disabled?: boolean;
  /** Whether to render a colon after each label. */
  colon: boolean;
  /** Whether to show the required asterisk mark on required fields. */
  requiredMark: boolean;
  /** The `react-hook-form` methods instance shared across the form. */
  methods: UseFormReturn<FieldValues>;
}

/**
 * Props for the `<Form>` component.
 *
 * Extends `react-hook-form`'s `UseFormProps` (excluding `defaultValues`) with
 * layout configuration, submit callbacks, value-change subscriptions, and
 * scroll-to-error behavior.
 *
 * @template TFieldValues - The shape of the form values.
 */
export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<UseFormProps<TFieldValues>, 'defaultValues'> {
  /** Initial values for the form fields. */
  defaultValues?: DefaultValues<TFieldValues>;
  /** An external `useForm()` return value to make the form fully controlled. */
  form?: UseFormReturn<TFieldValues>;
  /** Callback invoked with valid form values on successful submission. */
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  /** Callback invoked with validation errors on failed submission. */
  onFinishFailed?: (errors: FieldErrors<TFieldValues>) => void;
  /** Callback fired when any watched field value changes. */
  onValuesChange?: (values: TFieldValues, info: { name?: FieldPath<TFieldValues>; type?: string }) => void;
  /** Field paths to subscribe to for `onValuesChange`. If omitted, all fields are watched. */
  watchNames?: Array<FieldPath<TFieldValues>>;
  /**
   * Whether to scroll to the first invalid field on submit failure.
   * Pass `true` for default scroll behavior, or an object to customize scroll options.
   */
  scrollToFirstError?: boolean | {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
    /** Pixel offset from the top when scrolling. */
    offset?: number;
  };
  /** Layout direction. @defaultValue `'horizontal'` */
  layout?: FormLayout;
  /** Label text alignment. @defaultValue `'right'` */
  labelAlign?: FormLabelAlign;
  /** Label column span in a 12-column grid (0–12). @defaultValue `3` */
  labelCol?: number;
  /** Wrapper/control column span in a 12-column grid (0–12). @defaultValue `9` */
  wrapperCol?: number;
  /** Size variant. @defaultValue `'middle'` */
  size?: FormSize;
  /** When `true`, disables all form fields. */
  disabled?: boolean;
  /** Whether to show a colon after each label. @defaultValue `true` */
  colon?: boolean;
  /** Whether to show the required asterisk mark. @defaultValue `true` */
  requiredMark?: boolean;
  /** Additional CSS class name for the `<form>` element. */
  className?: string;
  /** Inline styles for the `<form>` element. */
  style?: CSSProperties;
  /** Form content (typically `<FormItem>` components). */
  children?: ReactNode;
}

/**
 * Props passed to a `FormItem` render-prop child function.
 *
 * @template TFieldValues - The shape of the form values.
 */
export interface FormItemRenderProps<TFieldValues extends FieldValues = FieldValues> {
  /** Controller field bindings with additional status flags. Only present when `name` is set. */
  field?: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>> & {
    /** `true` when the field has a validation error. */
    invalid?: boolean;
    /** `true` when the field has been successfully validated. */
    success?: boolean;
  };
  /** Controller field state (error, dirty, touched, etc.). Only present when `name` is set. */
  fieldState?: ControllerFieldState;
  /** The `react-hook-form` methods instance for imperative access. */
  form: UseFormReturn<TFieldValues>;
  /** Current snapshot of all form values. */
  values: TFieldValues;
}

/**
 * Extended `CSSProperties` including custom CSS variables for label/wrapper widths.
 */
export type FormItemStyle = CSSProperties & {
  ['--om-form-label-width']?: string;
  ['--om-form-wrapper-width']?: string;
};

/**
 * Render-prop function signature used by `FormItem` children.
 *
 * @template TFieldValues - The shape of the form values.
 */
export type FormItemRenderFn<TFieldValues extends FieldValues> =
  (props: FormItemRenderProps<TFieldValues>) => ReactNode;

/**
 * Props for the `<FormItem>` component.
 *
 * Bridges `react-hook-form`'s `Controller` with layout, validation status,
 * and trigger behavior.
 *
 * @template TFieldValues - The shape of the form values.
 */
export interface FormItemProps<TFieldValues extends FieldValues = FieldValues> {
  /** Field path within the form values. When omitted, the item renders as a free (uncontrolled) wrapper. */
  name?: FieldPath<TFieldValues>;
  /** Label content rendered beside the field. */
  label?: ReactNode;
  /** Marks the field as required. When `rules.required` is set, this is inferred automatically. */
  required?: boolean;
  /** Declarative validation rules forwarded to `react-hook-form`'s `Controller`. */
  rules?: FormItemRules<TFieldValues>;
  /** Default value for the field. */
  defaultValue?: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>;
  /** Custom help text displayed below the field. Overrides error messages when set. */
  help?: ReactNode;
  /** Extra content rendered below the help text. */
  extra?: ReactNode;
  /** Explicit validation status override. When set, bypasses automatic status derived from `fieldState`. */
  validateStatus?: FormValidateStatus;
  /** Field paths that trigger re-validation of this field when they change. */
  dependencies?: Array<FieldPath<TFieldValues>>;
  /** Additional field paths to watch, causing re-render when their values change. */
  watchNames?: Array<FieldPath<TFieldValues>>;
  /**
   * Controls re-rendering behavior.
   * - `true`: re-renders on every form value change.
   * - A comparator function: re-renders when it returns `true`.
   */
  shouldUpdate?: boolean | ((prev: TFieldValues, next: TFieldValues) => boolean);
  /** Event(s) that trigger validation. @defaultValue `[]` (validation on submit only) */
  validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>;
  /**
   * Controls multi-validator execution order.
   * - `true`: runs validators sequentially, stops at first error.
   * - `'parallel'`: runs all validators concurrently, returns first error found.
   */
  validateFirst?: boolean | 'parallel';
  /** Debounce delay in milliseconds for triggered validation. */
  validateDebounce?: number;
  /** When `true`, renders only the field content without label/wrapper markup. */
  noStyle?: boolean;
  /** The prop name used to bind the controlled value to the child. @defaultValue `'value'` */
  valuePropName?: string;
  /** Additional CSS class name for the form item wrapper. */
  className?: string;
  /** Label column span override (0–12 grid). */
  labelCol?: number;
  /** Wrapper column span override (0–12 grid). */
  wrapperCol?: number;
  /** Field content — either a React node (auto-bound via `cloneElement`) or a render-prop function. */
  children?: ReactNode | ((props: FormItemRenderProps<TFieldValues>) => ReactNode);
}

/**
 * Internal props for the `<FormItemContent>` component.
 *
 * This is not part of the public API; it carries resolved context and
 * validation state from `FormItem` down to the render layer.
 *
 * @template TFieldValues - The shape of the form values.
 */
export interface FormItemContentProps<TFieldValues extends FieldValues = FieldValues> {
  /** Field path (determines controlled vs free branch). */
  name?: FieldPath<TFieldValues>;
  /** The `react-hook-form` `Control` instance. */
  control: Control<TFieldValues>;
  /** The `react-hook-form` methods instance. */
  methods: UseFormReturn<TFieldValues>;
  /** Merged validation rules. */
  rules?: FormItemRules<TFieldValues>;
  /** Default value for the Controller. */
  defaultValue?: FormItemProps<TFieldValues>['defaultValue'];
  /** Explicit validation status override. */
  validateStatus?: FormValidateStatus;
  /** Prop name used to bind the controlled value. */
  valuePropName: string;
  /** Help text displayed below the field. */
  help?: ReactNode;
  /** Extra content rendered below help text. */
  extra?: ReactNode;
  /** Form context value from the parent `<Form>`. */
  ctx: FormContextValue | null;
  /** Raw children from `FormItem`. */
  children: FormItemProps<TFieldValues>['children'];
  /** Resolved render-prop function, or `null` if children is a React node. */
  renderFn: FormItemRenderFn<TFieldValues> | null;
  /** Current snapshot of all form values. */
  allValues: TFieldValues;
  /** The `shouldUpdate` prop from `FormItem`. */
  shouldUpdate?: FormItemProps<TFieldValues>['shouldUpdate'];
  /** Whether the item should render based on `shouldUpdate` evaluation. */
  shouldRender: boolean;
  /**
   * Wraps an event handler to conditionally trigger validation based on trigger mode.
   *
   * @param mode - The trigger mode (`'onChange'` or `'onBlur'`).
   * @param fn - The original event handler to compose with.
   * @returns A composed handler that calls `fn` and optionally triggers validation.
   */
  withTrigger: (
    mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR,
    fn?: (...args: unknown[]) => void
  ) => (...args: unknown[]) => void;
}
