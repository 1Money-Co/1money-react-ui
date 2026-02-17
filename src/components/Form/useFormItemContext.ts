import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormContext } from './Form';

/**
 * Module-level set tracking field names that have already triggered a
 * "no form control found" warning. Ensures each name only warns once.
 */
const warnedNames = new Set<string>();

/**
 * Resolves form context for a `<FormItem>`.
 *
 * When rendered inside a `<Form>`, this hook uses the context-provided
 * `react-hook-form` methods. Otherwise it falls back to a local `useForm()`
 * instance so that `useWatch` and other RHF internals remain functional.
 *
 * A development-only console warning is emitted (once per field name) when
 * a `name` prop is set but no parent `<Form>` context is found.
 *
 * **Note:** `useForm()` is always called to maintain stable hook ordering
 * across renders — when a context is present the local instance is unused.
 * This is a deliberate trade-off to avoid conditional hook calls.
 *
 * @template TFieldValues - The shape of the form values.
 * @param name - The field name, used for the missing-context warning check.
 * @returns An object with `ctx` (form context or `null`), `methods`, `control`, and `trigger`.
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
