import { createContext, createElement, useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import type { ReactNode } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormContext } from './Form';

const FallbackFormContext = createContext<UseFormReturn<FieldValues> | null>(null);

interface FallbackFormProviderProps {
  children: ReactNode;
}

/**
 * Lazily creates form methods only when mounted.
 *
 * Use this provider when rendering form-aware components outside `<Form>`.
 */
export function FallbackFormProvider({ children }: FallbackFormProviderProps) {
  const methods = useForm<FieldValues>();
  return createElement(FallbackFormContext.Provider, { value: methods }, children);
}

/**
 * Resolves form context for a `<FormItem>`.
 *
 * When rendered inside a `<Form>`, this hook uses the context-provided
 * `react-hook-form` methods. Otherwise it reads methods from
 * {@link FallbackFormProvider}, which creates a local `useForm()` instance.
 *
 * A development-only console warning is emitted (once per field name) when
 * a `name` prop is set but no parent `<Form>` context is found.
 *
 * @template TFieldValues - The shape of the form values.
 * @param name - The field name, used for the missing-context warning check.
 * @returns An object with `ctx` (form context or `null`), `methods`, `control`, and `trigger`.
 */
export function useFormItemContext<TFieldValues extends FieldValues = FieldValues>(name?: string) {
  const ctx = useContext(FormContext);
  const fallbackMethods = useContext(FallbackFormContext);
  const warnedRef = useRef<Set<string>>(new Set());
  const methods = (ctx?.methods as UseFormReturn<TFieldValues> | undefined)
    ?? (fallbackMethods as UseFormReturn<TFieldValues> | null);

  if (!methods) {
    throw new Error(
      '[FormItem] No form control found. Wrap with <Form> or mount inside <FallbackFormProvider>.'
    );
  }

  const control = methods.control;
  const trigger = methods.trigger;

  useEffect(() => {
    if (name && !ctx?.methods && !warnedRef.current.has(name)) {
      warnedRef.current.add(name);
      console.warn('[FormItem] `name` prop is set but no form control found. Wrap FormItem inside a <Form> component.');
    }
  }, [name, ctx?.methods]);

  return { ctx, methods, control, trigger };
}
