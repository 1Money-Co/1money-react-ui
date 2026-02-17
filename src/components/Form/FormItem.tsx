import { useMemo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Typography from '../Typography';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { CSS_VAR_LABEL_WIDTH, CSS_VAR_WRAPPER_WIDTH, DEFAULT_VALUE_PROP } from './constants';
import { toPercent, wrapValidate } from './helper';
import { FormItemContent } from './FormItemContent';
import { useFormItemContext } from './useFormItemContext';
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
 * Bridges RHF Controller with Form layout, status, and validation trigger behavior.
 */
export function FormItem<TFieldValues extends FieldValues = FieldValues>(props: FormItemProps<TFieldValues>) {
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

export default FormItem;
