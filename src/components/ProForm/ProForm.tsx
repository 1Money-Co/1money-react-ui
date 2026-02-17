import React, {
  createContext,
  memo,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { Row } from '../Grid';
import { Form } from '../Form';
import Submitter from './Submitter';
import type { FC } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ProFormProps } from './interface';

const stableSerialize = (value: unknown): string => {
  const seen = new WeakSet<object>();

  try {
    return JSON.stringify(value, (_, current: unknown) => {
      if (!current || typeof current !== 'object') return current;
      if (seen.has(current as object)) return '[Circular]';
      seen.add(current as object);

      if (Array.isArray(current)) return current;

      return Object.keys(current as Record<string, unknown>)
        .sort()
        .reduce<Record<string, unknown>>((acc, key) => {
          acc[key] = (current as Record<string, unknown>)[key];
          return acc;
        }, {});
    }) || '';
  } catch {
    return '';
  }
};

export interface ProFormContextValue {
  readonly?: boolean;
  grid?: boolean;
  colProps?: { span?: number };
}

export const ProFormContext = createContext<ProFormContextValue>({
  readonly: false,
  grid: false,
  colProps: { span: 24 },
});

export const ProForm: FC<ProFormProps<any>> = memo((props) => {
  const {
    submitter,
    readonly = false,
    grid = false,
    colProps = { span: 24 },
    rowProps,
    form: externalForm,
    request,
    params,
    loading = false,
    children,
    onFinish,
    defaultValues,
    ...rest
  } = props;

  const internalForm = useForm({ defaultValues });
  const form = externalForm ?? internalForm;
  const paramsKey = useMemo(() => stableSerialize(params), [params]);
  const stableParams = useMemo(() => params, [paramsKey]);

  useEffect(() => {
    let cancelled = false;
    if (!request) return;

    request(stableParams)
      .then(values => {
        if (cancelled || !values) return;
        form.reset(values);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [request, stableParams, form]);

  const ctx = useMemo<ProFormContextValue>(() => ({
    readonly,
    grid,
    colProps,
  }), [readonly, grid, colProps]);

  const handleFinish = useCallback(async (values: FieldValues) => {
    return onFinish?.(values as any);
  }, [onFinish]);

  const handleReset = useCallback(() => {
    form.reset(defaultValues);
    if (submitter !== false && submitter != null) {
      submitter.onReset?.();
    }
  }, [form, defaultValues, submitter]);

  const handleSubmitClick = useCallback(() => {
    if (submitter !== false && submitter != null) {
      submitter.onSubmit?.();
    }
  }, [submitter]);

  const mergedDisabled = (rest as any).disabled ?? loading;

  const content = useMemo(() => {
    if (!grid) return children;

    return (
      <Row gutter={rowProps?.gutter}>
        {children}
      </Row>
    );
  }, [children, grid, rowProps?.gutter]);

  return (
    <ProFormContext.Provider value={ctx}>
      <Form
        {...rest as any}
        form={form as any}
        disabled={mergedDisabled}
        defaultValues={defaultValues as any}
        onFinish={handleFinish as any}
      >
        {content}
        {submitter !== false && (
          <Submitter
            {...(submitter || {})}
            form={form}
            submitButtonProps={{
              ...(submitter?.submitButtonProps || {}),
              loading: submitter?.submitButtonProps?.loading ?? loading,
              disabled: submitter?.submitButtonProps?.disabled ?? loading,
            }}
            resetButtonProps={{
              ...(submitter?.resetButtonProps || {}),
              disabled: submitter?.resetButtonProps?.disabled ?? loading,
            }}
            onSubmit={handleSubmitClick}
            onReset={handleReset}
          />
        )}
      </Form>
    </ProFormContext.Provider>
  );
});

export default ProForm;
