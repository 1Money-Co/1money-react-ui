import React, { createContext, useCallback, useEffect, useMemo, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { Control, FieldErrors, FieldPath, FieldValues } from 'react-hook-form';
import {
  DEFAULT_LABEL_ALIGN,
  DEFAULT_LABEL_COL,
  DEFAULT_LAYOUT,
  DEFAULT_SIZE,
  DEFAULT_WRAPPER_COL,
} from './constants';
import { getFirstErrorPath, scrollToField } from './helper';
import type { FormContextValue, FormProps } from './interface';

export const FormContext = createContext<FormContextValue | null>(null);

export function Form<TFieldValues extends FieldValues = FieldValues>(props: FormProps<TFieldValues>) {
  // Form is a thin wrapper over react-hook-form with layout + UX helpers.
  const {
    form,
    defaultValues,
    onFinish,
    onFinishFailed,
    onValuesChange,
    scrollToFirstError,
    layout = DEFAULT_LAYOUT,
    labelAlign = DEFAULT_LABEL_ALIGN,
    labelCol = DEFAULT_LABEL_COL,
    wrapperCol = DEFAULT_WRAPPER_COL,
    size = DEFAULT_SIZE,
    disabled,
    colon = true,
    requiredMark = true,
    className,
    style,
    children,
    ...useFormProps
  } = props;

  // Use provided form methods when controlled; otherwise create new form state.
  const methods = form ?? useForm<TFieldValues>({ defaultValues, ...useFormProps });
  const valuesChangeRef = useRef<FormProps<TFieldValues>['onValuesChange']>(onValuesChange);

  // Provide layout + disabled state to FormItem via context.
  const ctx = useMemo<FormContextValue>(() => ({
    layout,
    labelAlign,
    labelCol,
    wrapperCol,
    size,
    disabled,
    colon,
    requiredMark,
    control: methods.control as Control<FieldValues>,
  }), [layout, labelAlign, labelCol, wrapperCol, size, disabled, colon, requiredMark, methods.control]);

  // Keep onValuesChange callback current without resubscribing.
  useEffect(() => {
    valuesChangeRef.current = onValuesChange;
  }, [onValuesChange]);

  // Subscribe to all value changes when handler provided.
  useEffect(() => {
    if (!onValuesChange) return;
    const subscription = methods.watch((values, info) => {
      valuesChangeRef.current?.(
        values as TFieldValues,
        { name: info.name as FieldPath<TFieldValues> | undefined, type: info.type }
      );
    });
    return () => subscription.unsubscribe();
  }, [methods, onValuesChange]);

  // Submit success handler.
  const handleFinish = useCallback(async (values: TFieldValues) => {
    await onFinish?.(values);
  }, [onFinish]);

  // Submit failure handler with optional scroll-to-error.
  const handleFinishFailed = useCallback((errors: FieldErrors<TFieldValues>) => {
    if (scrollToFirstError) {
      const first = getFirstErrorPath(errors);
      if (first) {
        methods.setFocus?.(first as FieldPath<TFieldValues>);
        scrollToField(first, scrollToFirstError);
      }
    }
    onFinishFailed?.(errors);
  }, [scrollToFirstError, methods, onFinishFailed]);

  const classes = classnames('form');

  return (
    <FormProvider {...methods}>
      <FormContext.Provider value={ctx}>
        <form
          className={classes('root', joinCls(
            className,
            classes(`layout-${layout}`),
            classes(`size-${size}`),
            labelAlign === 'left' && classes('label-left')
          ))}
          style={style}
          onSubmit={methods.handleSubmit(handleFinish, handleFinishFailed)}
          noValidate
        >
          {children}
        </form>
      </FormContext.Provider>
    </FormProvider>
  );
}

export default Form;
