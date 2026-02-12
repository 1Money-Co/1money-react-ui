import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import Typography from '../Typography';
import { FormContext } from './Form';
import type { ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import {
  CSS_VAR_LABEL_WIDTH,
  CSS_VAR_WRAPPER_WIDTH,
  DEBOUNCE_MIN,
  DEFAULT_VALUE_PROP,
  STATUS_ERROR,
  TRIGGER_BLUR,
  TRIGGER_CHANGE
} from './constants';
import { getStatusProps, normalizeValidateTrigger, resolveStatus, toPercent, wrapValidate } from './helper';
import type { FormItemProps, FormItemRenderProps, FormValidateStatus } from './interface';

type FormItemStyle = React.CSSProperties & {
  ['--om-form-label-width']?: string;
  ['--om-form-wrapper-width']?: string;
};

/**
 * Render-prop signature supported by `FormItem` children.
 */
type RenderFn<TFieldValues extends FieldValues> =
  (props: FormItemRenderProps<TFieldValues>) => React.ReactNode;

/**
 * Runtime type guard for render-prop children.
 */
const isRenderFnChild = <TFieldValues extends FieldValues>(
  child: FormItemProps<TFieldValues>['children']
): child is RenderFn<TFieldValues> => typeof child === 'function';

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

  const ctx = useContext(FormContext);
  const classes = classnames('form-item');
  // Always call useForm to keep hook ordering stable across renders.
  // When inside <Form>, ctx.methods is used and this instance is unused.
  const fallbackMethods = useForm<TFieldValues>();
  const methods = (ctx?.methods as UseFormReturn<TFieldValues> | undefined) ?? fallbackMethods;
  const control = methods.control;
  const trigger = methods.trigger;

  if (name && !ctx?.methods) {
    console.warn('[FormItem] `name` prop is set but no form control found. Wrap FormItem inside a <Form> component.');
  }

  const renderFn = isRenderFnChild(children) ? children : null;
  const isRequired = required ?? !!rules?.required;
  const showRequired = ctx?.requiredMark !== false;
  const triggerModes = useMemo(() => normalizeValidateTrigger(validateTrigger), [validateTrigger]);
  const shouldWatchAllValues = shouldUpdate === true || typeof shouldUpdate === 'function';
  const depNames = (dependencies?.length ? dependencies : []) as FieldPath<TFieldValues>[];
  const shouldWatchDeps = !!(name && depNames.length);
  const watchNamesList = (watchNames?.length ? watchNames : undefined) as FieldPath<TFieldValues>[] | undefined;
  const shouldWatchNames = !!watchNamesList?.length;
  const emptyNames = useMemo(() => [] as FieldPath<TFieldValues>[], []);
  const labelWidth = useMemo(() => toPercent(labelCol ?? ctx?.labelCol), [labelCol, ctx?.labelCol]);
  const wrapperWidth = useMemo(() => toPercent(wrapperCol ?? ctx?.wrapperCol), [wrapperCol, ctx?.wrapperCol]);

  const depValues = useWatch({ control, name: depNames, disabled: !shouldWatchDeps });
  const watchedAllValues = useWatch({ control, disabled: !shouldWatchAllValues });
  const watchedNamesValues = useWatch({
    control,
    name: shouldWatchNames ? watchNamesList : emptyNames,
    disabled: !shouldWatchNames
  });

  const watchedMarker = shouldWatchAllValues ? watchedAllValues : watchedNamesValues;
  // `watchedMarker` is included in the dependency array so that useMemo
  // recomputes whenever watched field values change (even though getValues()
  // is the actual data source).
  const allValues = useMemo(() => {
    const getValues = methods.getValues;
    if (!getValues) return {} as TFieldValues;
    if (shouldWatchAllValues) return (watchedAllValues ?? getValues()) as TFieldValues;
    return getValues();
  }, [methods, shouldWatchAllValues, watchedAllValues, watchedMarker]);

  const prevValuesRef = useRef<TFieldValues>(allValues);
  const prevDepValuesRef = useRef<unknown[] | null>(null);
  const triggerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Triggers current field validation immediately or via debounce.
   */
  const triggerValidation = useCallback(() => {
    if (!name) return;
    const run = () => {
      void trigger?.(name as FieldPath<TFieldValues>);
    };
    if (validateDebounce && validateDebounce > DEBOUNCE_MIN) {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
      triggerTimerRef.current = setTimeout(run, validateDebounce);
      return;
    }
    run();
  }, [name, trigger, validateDebounce]);

  useEffect(() => {
    if (!name || !dependencies?.length) return;
    const nextDeps = Array.isArray(depValues) ? depValues : [depValues];
    const prevDeps = prevDepValuesRef.current;
    const isSame = !!prevDeps
      && prevDeps.length === nextDeps.length
      && nextDeps.every((value, index) => Object.is(value, prevDeps[index]));
    if (isSame) return;
    prevDepValuesRef.current = nextDeps;
    triggerValidation();
  }, [depValues, dependencies?.length, name, triggerValidation]);

  useEffect(() => () => {
    if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
  }, []);

  // prevValuesRef is updated in the effect below (post-commit), so during
  // render it holds the values from the previous committed render — the
  // standard "previous value" pattern. This is intentional.
  const shouldRender = useMemo(() => {
    if (!shouldUpdate || shouldUpdate === true) return true;
    return shouldUpdate(prevValuesRef.current, allValues);
  }, [allValues, shouldUpdate]);

  useEffect(() => {
    if (!shouldUpdate) return;
    prevValuesRef.current = allValues;
  }, [allValues, shouldUpdate]);

  const mergedRules = useMemo(() => {
    if (!rules?.validate || !validateFirst) return rules;
    const validate = wrapValidate<TFieldValues, FieldPath<TFieldValues>>(rules.validate, validateFirst);
    if (validate === rules.validate) return rules;
    return { ...rules, validate };
  }, [rules, validateFirst]);

  const shouldTrigger = useCallback(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR) => triggerModes.includes(mode),
    [triggerModes]
  );

  const withTrigger = useCallback(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR, fn?: (...args: unknown[]) => void) =>
      (...args: unknown[]) => {
        fn?.(...args);
        if (name && shouldTrigger(mode)) triggerValidation();
      },
    [name, shouldTrigger, triggerValidation]
  );

  const renderFnChildNode = useCallback(
    (field?: FormItemRenderProps<TFieldValues>['field'], fieldState?: ControllerFieldState) => (
      renderFn?.({ field, fieldState, form: methods, values: allValues }) ?? null
    ),
    [allValues, methods, renderFn]
  );

  /**
   * Wraps field content with help/error/extra metadata region.
   */
  const renderWithMeta = useCallback(
    (content: React.ReactNode, status?: FormValidateStatus, errorMessage?: React.ReactNode) => (
      <div
        className={classes('content', joinCls(
          status && classes(`content-${status}`),
          ctx?.disabled && classes('content-disabled')
        ))}
      >
        {content}
        {errorMessage && !help && (
          <div className={classes('help', classes('help-error'))}>{errorMessage}</div>
        )}
        {help && (
          <div className={classes('help', joinCls(status && classes(`help-${status}`)))}>{help}</div>
        )}
        {extra && <div className={classes('extra')}>{extra}</div>}
      </div>
    ),
    [classes, ctx?.disabled, extra, help]
  );

  const renderClonedChild = useCallback(
    (
      field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
      status: FormValidateStatus | undefined,
      statusProps: ReturnType<typeof getStatusProps>
    ) => {
      /**
       * For element children, inject RHF bindings while preserving user handlers.
       */
      if (!React.isValidElement(children)) return children as React.ReactNode;
      const childElement = children as React.ReactElement<Record<string, unknown>>;
      const isDomElement = typeof childElement.type === 'string';
      const childOnChange = childElement.props?.onChange as ((...args: unknown[]) => void) | undefined;
      const childOnBlur = childElement.props?.onBlur as ((...args: unknown[]) => void) | undefined;

      return React.cloneElement(childElement, {
        [valuePropName]: field.value,
        onChange: (...args: unknown[]) => {
          field.onChange(...args);
          childOnChange?.(...args);
        },
        onBlur: (...args: unknown[]) => {
          field.onBlur();
          childOnBlur?.(...args);
        },
        // Use `||` intentionally: form disabled=false should NOT override the
        // child's own disabled prop, allowing per-field disable control.
        disabled: ctx?.disabled || (childElement.props?.disabled as boolean),
        'aria-invalid': status === STATUS_ERROR || undefined,
        ref: childElement.props?.ref ?? field.ref,
        ...(isDomElement ? {} : statusProps),
      });
    },
    [children, ctx?.disabled, valuePropName]
  );

  const renderField = useCallback(
    (
      field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
      fieldState: ControllerFieldState
    ) => {
      const status = resolveStatus(validateStatus, fieldState);
      const statusProps = getStatusProps(status);
      const patchedField = {
        ...field,
        onChange: withTrigger(TRIGGER_CHANGE, field.onChange),
        onBlur: withTrigger(TRIGGER_BLUR, field.onBlur),
        ...statusProps,
      };

      const content = renderFn
        ? renderFnChildNode(patchedField, fieldState)
        : renderClonedChild(patchedField, status, statusProps);

      return renderWithMeta(content, status, fieldState.error?.message);
    },
    [renderClonedChild, renderFn, renderFnChildNode, renderWithMeta, validateStatus, withTrigger]
  );

  const renderController = useCallback(() => {
    if (!name) return null;
    return (
      <Controller
        name={name}
        control={control}
        rules={mergedRules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => renderField(field, fieldState)}
      />
    );
  }, [control, defaultValue, mergedRules, name, renderField]);

  const renderFreeChild = useCallback(() => {
    if (!renderFn) return children as React.ReactNode;
    if (shouldUpdate && !shouldRender) return null;
    return renderFnChildNode();
  }, [children, renderFn, renderFnChildNode, shouldRender, shouldUpdate]);

  if (noStyle) {
    return name ? renderController() : <>{renderFreeChild()}</>;
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
        {name
          ? renderController()
          : renderWithMeta(renderFreeChild(), resolveStatus(validateStatus))}
      </div>
    </div>
  );
}

export default FormItem;
