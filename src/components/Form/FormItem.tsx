import { useContext, useMemo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Typography from '../Typography';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { FormContext } from './Form';
import { CSS_VAR_LABEL_WIDTH, CSS_VAR_WRAPPER_WIDTH, DEFAULT_VALUE_PROP } from './constants';
import { toPercent, wrapValidate } from './helper';
import { FormItemContent } from './FormItemContent';
import { FallbackFormProvider, useFormItemContext } from './useFormItemContext';
import { useFormItemWatch } from './useFormItemWatch';
import { useValidationTrigger } from './useValidationTrigger';
import type { FormItemContentProps, FormItemProps, FormItemRenderFn, FormItemStyle } from './interface';

/**
 * Runtime type guard for render-prop children.
 */
const isRenderFnChild = <TFieldValues extends FieldValues>(
  child: FormItemProps<TFieldValues>['children']
): child is FormItemRenderFn<TFieldValues> => typeof child === 'function';

/**
 * Form field wrapper that bridges `react-hook-form`'s Controller with the Form
 * layout system, validation status display, and configurable trigger behavior.
 *
 * When a `name` is provided, the field is registered with `react-hook-form` via
 * a `Controller` and supports validation rules, dependencies, and status feedback.
 * Without a `name`, it renders as a free wrapper for uncontrolled content.
 *
 * Supports two child patterns:
 * - **React element**: automatically bound via `React.cloneElement` with value/onChange/onBlur.
 * - **Render-prop function**: receives `{ field, fieldState, form, values }` for full control.
 *
 * @template TFieldValues - The shape of the form values.
 * @param props - {@link FormItemProps}
 *
 * @example
 * ```tsx
 * // Element child (auto-bound)
 * <FormItem name="email" label="Email" rules={{ required: true }}>
 *   <Input placeholder="Enter email" />
 * </FormItem>
 *
 * // Render-prop child
 * <FormItem name="agree">
 *   {({ field }) => <Checkbox {...field} />}
 * </FormItem>
 * ```
 */
function FormItemInner<TFieldValues extends FieldValues = FieldValues>(props: FormItemProps<TFieldValues>) {
  const {
    name,
    label,
    required,
    rules,
    defaultValue,
    help,
    extra,
    validateStatus,
    dependencies,
    watchNames,
    shouldUpdate,
    validateTrigger,
    validateFirst,
    validateDebounce,
    noStyle,
    valuePropName = DEFAULT_VALUE_PROP,
    className,
    labelCol,
    wrapperCol,
    children,
  } = props;

  const classes = classnames('form-item');
  const { ctx, methods, control, trigger } = useFormItemContext<TFieldValues>(name as string | undefined);

  const { allValues, depValues, shouldRender } = useFormItemWatch<TFieldValues>({
    control,
    methods,
    dependencies,
    watchNames,
    shouldUpdate,
    name,
  });

  const { withTrigger } = useValidationTrigger<TFieldValues>({
    name,
    trigger,
    validateTrigger,
    validateDebounce,
    dependencies,
    depValues,
  });

  const renderFn = isRenderFnChild(children) ? children : null;
  const isRequired = required ?? !!rules?.required;
  const showRequired = ctx?.requiredMark !== false;
  const labelWidth = useMemo(() => toPercent(labelCol ?? ctx?.labelCol), [labelCol, ctx?.labelCol]);
  const wrapperWidth = useMemo(() => toPercent(wrapperCol ?? ctx?.wrapperCol), [wrapperCol, ctx?.wrapperCol]);

  const mergedRules = useMemo(() => {
    if (!rules?.validate || !validateFirst) return rules;
    const validate = wrapValidate<TFieldValues, FieldPath<TFieldValues>>(rules.validate, validateFirst);
    if (validate === rules.validate) return rules;
    return { ...rules, validate };
  }, [rules, validateFirst]);

  const contentProps = useMemo<FormItemContentProps<TFieldValues>>(() => ({
    name,
    control,
    methods,
    rules: mergedRules,
    defaultValue,
    validateStatus,
    valuePropName,
    help,
    extra,
    ctx,
    children,
    renderFn,
    allValues,
    shouldUpdate,
    shouldRender,
    withTrigger,
  }), [
    name, control, methods, mergedRules, defaultValue, validateStatus,
    valuePropName, help, extra, ctx, children, renderFn, allValues,
    shouldUpdate, shouldRender, withTrigger,
  ]);

  if (noStyle) {
    return <FormItemContent {...contentProps} />;
  }

  const rootStyle = {
    [CSS_VAR_LABEL_WIDTH]: labelWidth,
    [CSS_VAR_WRAPPER_WIDTH]: wrapperWidth,
  } as FormItemStyle;

  return (
    <div
      className={classes('root', joinCls(className, ctx?.layout && classes(`layout-${ctx.layout}`)))}
      data-form-item-name={name ? String(name) : undefined}
      style={rootStyle}
    >
      {label && (
        <div className={classes('label', joinCls(showRequired && isRequired && classes('label-required')))}>
          <Typography.Label size='s'>{label}</Typography.Label>
          {ctx?.colon && <span className={classes('colon')}>:</span>}
        </div>
      )}
      <div className={classes('control')}>
        <FormItemContent {...contentProps} />
      </div>
    </div>
  );
}

export function FormItem<TFieldValues extends FieldValues = FieldValues>(props: FormItemProps<TFieldValues>) {
  const ctx = useContext(FormContext);

  if (ctx?.methods) {
    return <FormItemInner {...props} />;
  }

  return (
    <FallbackFormProvider>
      <FormItemInner {...props} />
    </FallbackFormProvider>
  );
}

export default FormItem;
