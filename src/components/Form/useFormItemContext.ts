import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormContext } from './Form';

/**
 * Resolves form context for FormItem.  When inside `<Form>`, uses the
 * context-provided methods.  Otherwise falls back to a local `useForm()`
 * instance to keep `useWatch` and other RHF internals functional.
 *
 * `useForm()` is always called to maintain stable hook ordering across
 * renders — when a context is present the local instance is unused.
 */
export function useFormItemContext<TFieldValues extends FieldValues = FieldValues>(name?: string) {
  const ctx = useContext(FormContext);
  const fallbackMethods = useForm<TFieldValues>();
  const methods = (ctx?.methods as UseFormReturn<TFieldValues> | undefined) ?? fallbackMethods;
  const control = methods.control;
  const trigger = methods.trigger;

  if (name && !ctx?.methods) {
    console.warn('[FormItem] `name` prop is set but no form control found. Wrap FormItem inside a <Form> component.');
  }

  return { ctx, methods, control, trigger };
}
