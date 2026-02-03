import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import Typography from '../Typography';
import { FormContext } from './Form';
import type { FormItemProps, FormValidateStatus } from './interface';

const toPercent = (col?: number) => {
  if (col == null) return undefined;
  return `${(Math.max(0, Math.min(12, col)) / 12) * 100}%`;
};

const resolveStatus = (explicit?: FormValidateStatus, hasError?: boolean): FormValidateStatus | undefined => {
  if (explicit) return explicit;
  if (hasError) return 'error';
  return undefined;
};

export function FormItem<TFieldValues extends Record<string, any> = Record<string, any>>(props: FormItemProps<TFieldValues>) {
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
    shouldUpdate,
    validateTrigger,
    validateFirst,
    validateDebounce,
    noStyle,
    valuePropName = 'value',
    className,
    labelCol,
    wrapperCol,
    children,
  } = props;

  const ctx = useContext(FormContext);
  const methods = useFormContext<TFieldValues>();
  const control = methods?.control ?? ctx?.control;
  const trigger = methods?.trigger;
  const classes = classnames('form-item');

  const labelWidth = toPercent(labelCol ?? ctx?.labelCol);
  const wrapperWidth = toPercent(wrapperCol ?? ctx?.wrapperCol);

  const depNames = dependencies?.length ? dependencies : [];
  const depValues = useWatch({ control, name: depNames as any });
  const allValues = useWatch({ control }) as TFieldValues;
  const prevValuesRef = useRef<TFieldValues>(allValues);
  const triggerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (name && dependencies?.length) {
      if (validateDebounce && validateDebounce > 0) {
        if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
        triggerTimerRef.current = setTimeout(() => {
          void trigger?.(name as any);
        }, validateDebounce);
      } else {
        void trigger?.(name as any);
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

  const normalizeValidateTrigger = (value?: FormItemProps<TFieldValues>['validateTrigger']) => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  };

  const triggerModes = normalizeValidateTrigger(validateTrigger);
  const shouldTrigger = (mode: 'onChange' | 'onBlur') => triggerModes.includes(mode);
  const scheduleTrigger = () => {
    if (!name) return;
    if (validateDebounce && validateDebounce > 0) {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
      triggerTimerRef.current = setTimeout(() => {
        void trigger?.(name as any);
      }, validateDebounce);
    } else {
      void trigger?.(name as any);
    }
  };
  const wrapOnChange = (fn?: (...args: any[]) => void) => (e: any) => {
    fn?.(e);
    if (name && shouldTrigger('onChange')) {
      scheduleTrigger();
    }
  };
  const wrapOnBlur = (fn?: (...args: any[]) => void) => (e: any) => {
    fn?.(e);
    if (name && shouldTrigger('onBlur')) {
      scheduleTrigger();
    }
  };

  useEffect(() => {
    return () => {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
    };
  }, []);

  const isRequired = required ?? !!rules?.required;
  const showRequired = ctx?.requiredMark !== false;
  const isRenderFn = typeof children === 'function';

  const mergedRules = useMemo(() => {
    if (!rules?.validate || !validateFirst) return rules;
    if (typeof rules.validate === 'function') return rules;
    const entries = Object.entries(rules.validate);
    const wrappedValidate = async (value: any, values: any) => {
      if (validateFirst === 'parallel') {
        const results = await Promise.all(
          entries.map(([_, fn]) => Promise.resolve((fn as any)(value, values)))
        );
        for (let i = 0; i < results.length; i += 1) {
          const result = results[i];
          if (result !== true && result !== undefined) return result;
        }
        return true;
      }
      for (const [_, fn] of entries) {
        const result = await (fn as any)(value, values);
        if (result !== true && result !== undefined) return result;
      }
      return true;
    };
    return { ...rules, validate: wrappedValidate };
  }, [rules, validateFirst]);

  const renderWithMeta = (content: React.ReactNode, status?: FormValidateStatus, errorMessage?: React.ReactNode) => (
    <div className={classes('content', joinCls(
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
  );

  const renderField = (field: any, fieldState: any) => {
    const status = resolveStatus(validateStatus, !!fieldState.error);
    const patchedField = {
      ...field,
      onChange: wrapOnChange(field.onChange),
      onBlur: wrapOnBlur(field.onBlur),
    };
    const content = isRenderFn
      ? (children as any)({ field: patchedField, fieldState, form: methods, values: allValues })
      : React.isValidElement(children)
        ? (() => {
          const childElement = children as React.ReactElement<any>;
          const isDomElement = typeof childElement.type === 'string';
          const statusProps = status === 'error'
            ? { invalid: true }
            : status === 'success'
              ? { success: true }
              : {};
          return React.cloneElement<any>(childElement, {
            [valuePropName]: patchedField.value,
            onChange: patchedField.onChange,
            onBlur: patchedField.onBlur,
            disabled: ctx?.disabled ?? childElement.props?.disabled,
            'aria-invalid': status === 'error' || undefined,
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
      shouldUpdate ? (shouldRender ? <>{(children as any)({ form: methods, values: allValues })}</> : null) : <>{(children as any)({ form: methods, values: allValues })}</>
    ) : (
      <>{children}</>
    );
  }

  return (
    <div
      className={classes('root', joinCls(className, ctx?.layout && classes(`layout-${ctx.layout}`)))}
      data-form-item-name={name ? String(name) : undefined}
      style={{
        ['--om-form-label-width' as any]: labelWidth,
        ['--om-form-wrapper-width' as any]: wrapperWidth,
      }}
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
            shouldUpdate ? (shouldRender ? (children as any)({ form: methods, values: allValues }) : null) : (children as any)({ form: methods, values: allValues }),
            resolveStatus(validateStatus, false)
          )
        ) : (
          renderWithMeta(children, resolveStatus(validateStatus, false))
        )}
      </div>
    </div>
  );
}

export default FormItem;
