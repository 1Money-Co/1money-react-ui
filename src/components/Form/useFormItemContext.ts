import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormContext } from './Form';

// Development-only warning flag (module-level to fire once per FormItem usage).
const warnedNames = new Set<string>();

/**
 * Resolves form context for FormItem.  When inside `<Form>`, uses the
 * context-provided methods.  Otherwise falls back to a local `useForm()`
 * instance to keep `useWatch` and other RHF internals functional.
 *
 * NOTE: `useForm()` is always called to maintain stable hook ordering across
 * renders — when a context is present the local instance is unused.  This is
 * a deliberate trade-off to avoid conditional hook calls.
 */
export function useFormItemContext<TFieldValues extends FieldValues = FieldValues>(name?: string) {
  const ctx = useContext(FormContext);
  const fallbackMethods = useForm<TFieldValues>();
  const methods = (ctx?.methods as UseFormReturn<TFieldValues> | undefined) ?? fallbackMethods;
  const control = methods.control;
  const trigger = methods.trigger;

  useEffect(() => {
    if (name && !ctx?.methods && !warnedNames.has(name)) {
      warnedNames.add(name);
      console.warn('[FormItem] `name` prop is set but no form control found. Wrap FormItem inside a <Form> component.');
    }
  }, [name, ctx?.methods]);

  return { ctx, methods, control, trigger };
}
