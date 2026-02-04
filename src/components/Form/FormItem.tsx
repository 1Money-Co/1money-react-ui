import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import Typography from '../Typography';
import { FormContext } from './Form';
import type { Control, ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';
import {
  CSS_VAR_LABEL_WIDTH,
  CSS_VAR_WRAPPER_WIDTH,
  DEBOUNCE_MIN,
  DEFAULT_VALUE_PROP,
  TRIGGER_BLUR,
  TRIGGER_CHANGE,
  STATUS_ERROR
} from './constants';
import {
  getStatusProps,
  normalizeValidateTrigger,
  resolveStatus,
  toPercent,
  wrapValidate
} from './helper';
import type { FormItemProps, FormItemRenderProps, FormValidateStatus } from './interface';

type FormItemStyle = React.CSSProperties & {
  ['--om-form-label-width']?: string;
  ['--om-form-wrapper-width']?: string;
};

export function FormItem<TFieldValues extends FieldValues = FieldValues>(props: FormItemProps<TFieldValues>) {
  // FormItem binds RHF Controller to layout + metadata rendering.
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
  const methods = useFormContext<TFieldValues>();
  const control = (methods?.control ?? ctx?.control) as Control<TFieldValues> | undefined;
  const trigger = methods?.trigger;
  const classes = classnames('form-item');

  // Resolve per-item layout widths.
  const labelWidth = useMemo(() => toPercent(labelCol ?? ctx?.labelCol), [labelCol, ctx?.labelCol]);
  const wrapperWidth = useMemo(() => toPercent(wrapperCol ?? ctx?.wrapperCol), [wrapperCol, ctx?.wrapperCol]);

  const isRenderFn = typeof children === 'function';
  const depNames = (dependencies?.length ? dependencies : []) as FieldPath<TFieldValues>[];
  const shouldWatchDeps = !!(name && depNames.length);
  // Watch dependencies for re-validation.
  const depValues = useWatch({ control, name: depNames, disabled: !shouldWatchDeps });
  const isShouldUpdateFn = typeof shouldUpdate === 'function';
  const watchNamesList = (watchNames?.length ? watchNames : undefined) as FieldPath<TFieldValues>[] | undefined;
  const shouldWatchNames = !!watchNamesList?.length;
  const emptyNames = useMemo(() => [] as FieldPath<TFieldValues>[], []);
  const shouldWatchAllValues = isShouldUpdateFn;
  // Watch all values only when necessary to reduce render pressure.
  const watchedAllValues = useWatch({ control, disabled: !shouldWatchAllValues });
  const watchedNamesValues = useWatch({
    control,
    name: shouldWatchNames ? watchNamesList : emptyNames,
    disabled: !shouldWatchNames
  });

  const allValues = useMemo(
    () => (shouldWatchAllValues
      ? ((watchedAllValues ?? methods.getValues()) as TFieldValues)
      : methods.getValues()),
    [shouldWatchAllValues, watchedAllValues, shouldWatchNames, watchedNamesValues, methods]
  );

  const prevValuesRef = useRef<TFieldValues>(allValues);
  const prevDepValuesRef = useRef<unknown[] | null>(null);
  const triggerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (name && dependencies?.length) {
      const nextDeps = Array.isArray(depValues) ? depValues : [depValues];
      const prevDeps = prevDepValuesRef.current;
      const isSame = !!prevDeps
        && prevDeps.length === nextDeps.length
        && nextDeps.every((value, index) => Object.is(value, prevDeps[index]));
      if (isSame) return;
      prevDepValuesRef.current = nextDeps;
      if (validateDebounce && validateDebounce > DEBOUNCE_MIN) {
        if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
        triggerTimerRef.current = setTimeout(() => {
          void trigger?.(name as FieldPath<TFieldValues>);
        }, validateDebounce);
      } else {
        void trigger?.(name as FieldPath<TFieldValues>);
      }
    }
  }, [depValues, dependencies?.length, name, trigger, validateDebounce]);

  const shouldRender = useMemo(() => {
    if (!shouldUpdate) return true;
    if (shouldUpdate === true) return true;
    return shouldUpdate(prevValuesRef.current, allValues);
  }, [shouldUpdate, allValues]);

  useEffect(() => {
    if (shouldUpdate) {
      prevValuesRef.current = allValues;
    }
  }, [shouldUpdate, allValues]);

  const triggerModes = useMemo(() => normalizeValidateTrigger(validateTrigger), [validateTrigger]);

  const shouldTrigger = useCallback((mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR) => triggerModes.includes(mode), [triggerModes]);
  // Trigger validation with optional debounce.
  const scheduleTrigger = useCallback(() => {
    if (!name) return;
    if (validateDebounce && validateDebounce > DEBOUNCE_MIN) {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
      triggerTimerRef.current = setTimeout(() => {
        void trigger?.(name as FieldPath<TFieldValues>);
      }, validateDebounce);
    } else {
      void trigger?.(name as FieldPath<TFieldValues>);
    }
  }, [name, validateDebounce, trigger]);

  const wrapOnChange = useCallback((fn?: (...args: unknown[]) => void) => (...args: unknown[]) => {
    fn?.(...args);
    if (name && shouldTrigger(TRIGGER_CHANGE)) {
      scheduleTrigger();
    }
  }, [name, scheduleTrigger, shouldTrigger]);

  const wrapOnBlur = useCallback((fn?: (...args: unknown[]) => void) => (...args: unknown[]) => {
    fn?.(...args);
    if (name && shouldTrigger(TRIGGER_BLUR)) {
      scheduleTrigger();
    }
  }, [name, scheduleTrigger, shouldTrigger]);

  useEffect(() => {
    return () => {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
    };
  }, []);

  const isRequired = required ?? !!rules?.required;
  const showRequired = ctx?.requiredMark !== false;

  const mergedRules = useMemo(() => {
    if (!rules?.validate || !validateFirst) return rules;
    const validate = wrapValidate<TFieldValues, FieldPath<TFieldValues>>(rules.validate, validateFirst);
    if (validate === rules.validate) return rules;
    return { ...rules, validate };
  }, [rules, validateFirst]);

  // Render content with help/error/extra meta.
  const renderWithMeta = useCallback((content: React.ReactNode, status?: FormValidateStatus, errorMessage?: React.ReactNode) => (
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
      {help && <div className={classes('help')}>{help}</div>}
      {extra && <div className={classes('extra')}>{extra}</div>}
    </div>
  ), [classes, ctx?.disabled, extra, help]);

  const renderField = (
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
    fieldState: ControllerFieldState
  ) => {
    // Inject status props and wire validation triggers.
    const status = resolveStatus(validateStatus, fieldState);
    const statusProps = getStatusProps(status);
    const patchedField = {
      ...field,
      onChange: wrapOnChange(field.onChange),
      onBlur: wrapOnBlur(field.onBlur),
      ...statusProps,
    };
    const content = isRenderFn
      ? (children as (props: FormItemRenderProps<TFieldValues>) => React.ReactNode)({
        field: patchedField,
        fieldState,
        form: methods,
        values: allValues,
      })
      : React.isValidElement(children)
        ? (() => {
          const childElement = children as React.ReactElement<Record<string, unknown>>;
          const isDomElement = typeof childElement.type === 'string';
          const isDisabled = ctx?.disabled ?? childElement.props?.disabled;
          return React.cloneElement(childElement, {
            [valuePropName]: patchedField.value,
            onChange: patchedField.onChange,
            onBlur: patchedField.onBlur,
            disabled: isDisabled,
            'aria-invalid': status === STATUS_ERROR || undefined,
            ref: childElement.props?.ref ?? field.ref,
            ...(isDomElement ? {} : statusProps),
          });
        })()
        : children;

    return renderWithMeta(content, status, fieldState.error?.message);
  };

  if (noStyle) {
    return name ? (
      <Controller
        name={name}
        control={control}
        rules={mergedRules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => renderField(field, fieldState)}
      />
    ) : isRenderFn ? (
      shouldUpdate
        ? (shouldRender ? <>{(children as (props: FormItemRenderProps<TFieldValues>) => React.ReactNode)({ form: methods, values: allValues })}</> : null)
        : <>{(children as (props: FormItemRenderProps<TFieldValues>) => React.ReactNode)({ form: methods, values: allValues })}</>
    ) : (
      <>{children}</>
    );
  }

  return (
    <div
      className={classes('root', joinCls(className, ctx?.layout && classes(`layout-${ctx.layout}`)))}
      data-form-item-name={name ? String(name) : undefined}
      style={{
        [CSS_VAR_LABEL_WIDTH]: labelWidth,
        [CSS_VAR_WRAPPER_WIDTH]: wrapperWidth,
      } as FormItemStyle}
    >
      {label && (
        <div className={classes('label', joinCls(showRequired && isRequired && classes('label-required')))}>
          <Typography.Label size='s'>{label}</Typography.Label>
          {ctx?.colon && <span className={classes('colon')}>:</span>}
        </div>
      )}
      <div className={classes('control')}>
        {name ? (
          <Controller
            name={name}
            control={control}
            rules={mergedRules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => renderField(field, fieldState)}
          />
        ) : isRenderFn ? (
          renderWithMeta(
            shouldUpdate
              ? (shouldRender ? (children as (props: FormItemRenderProps<TFieldValues>) => React.ReactNode)({ form: methods, values: allValues }) : null)
              : (children as (props: FormItemRenderProps<TFieldValues>) => React.ReactNode)({ form: methods, values: allValues }),
            resolveStatus(validateStatus)
          )
        ) : (
          renderWithMeta(children, resolveStatus(validateStatus))
        )}
      </div>
    </div>
  );
}

export default FormItem;
