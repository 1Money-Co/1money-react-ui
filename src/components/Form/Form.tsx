import React, { createContext, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FieldErrors } from 'react-hook-form';
import type { FormContextValue, FormProps } from './interface';

export const FormContext = createContext<FormContextValue | null>(null);

const isFieldError = (value: any) => !!value && (typeof value.type === 'string' || typeof value.message === 'string' || value.ref);

const getFirstErrorPath = (errors: FieldErrors): string | null => {
  for (const key of Object.keys(errors)) {
    const value: any = (errors as any)[key];
    if (!value) continue;
    if (isFieldError(value)) return key;
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        const item = value[i];
        if (!item) continue;
        if (isFieldError(item)) return `${key}.${i}`;
        const child = getFirstErrorPath(item);
        if (child) return `${key}.${i}.${child}`;
      }
    } else if (typeof value === 'object') {
      const child = getFirstErrorPath(value);
      if (child) return `${key}.${child}`;
    }
  }
  return null;
};

const escapeAttr = (value: string) => value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const scrollToField = (name: string, options?: FormProps['scrollToFirstError']) => {
  if (typeof document === 'undefined') return;
  const config = typeof options === 'object' ? options : {};
  const attrName = escapeAttr(name);
  const selectorByName = `[name="${attrName}"]`;
  const selectorByData = `[data-form-item-name="${attrName}"]`;
  const el = (document.querySelector(selectorByName) || document.querySelector(selectorByData)) as HTMLElement | null;
  if (!el) return;
  const behavior = config.behavior ?? 'smooth';
  if (typeof config.offset === 'number') {
    const rect = el.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.pageYOffset - config.offset,
      behavior,
    });
    return;
  }
  el.scrollIntoView({
    behavior,
    block: config.block ?? 'center',
    inline: config.inline ?? 'nearest',
  });
};

export function Form<TFieldValues extends Record<string, any> = Record<string, any>>(props: FormProps<TFieldValues>) {
  const {
    form,
    defaultValues,
    onFinish,
    onFinishFailed,
    scrollToFirstError,
    layout = 'horizontal',
    labelAlign = 'right',
    labelCol = 3,
    wrapperCol = 9,
    size = 'middle',
    disabled,
    colon = true,
    requiredMark = true,
    className,
    style,
    children,
    ...useFormProps
  } = props;

  const methods = form ?? useForm<TFieldValues>({ defaultValues, ...useFormProps });

  const ctx = useMemo<FormContextValue>(() => ({
    layout,
    labelAlign,
    labelCol,
    wrapperCol,
    size,
    disabled,
    colon,
    requiredMark,
    control: methods.control,
  }), [layout, labelAlign, labelCol, wrapperCol, size, disabled, colon, requiredMark, methods.control]);

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
          onSubmit={methods.handleSubmit(
            async (values) => { await onFinish?.(values); },
            (errors) => {
              if (scrollToFirstError) {
                const first = getFirstErrorPath(errors);
                if (first) {
                  methods.setFocus?.(first as any);
                  scrollToField(first, scrollToFirstError);
                }
              }
              onFinishFailed?.(errors);
            }
          )}
          noValidate
        >
          {children}
        </form>
      </FormContext.Provider>
    </FormProvider>
  );
}

export default Form;
