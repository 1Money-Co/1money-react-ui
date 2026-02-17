import { useEffect, useMemo, useRef } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { DEBOUNCE_MIN, TRIGGER_BLUR, TRIGGER_CHANGE } from './constants';
import { normalizeValidateTrigger, shallowEqualArray } from './helper';
import type { FormItemProps } from './interface';

/**
 * Arguments for {@link useValidationTrigger}.
 *
 * @template TFieldValues - The shape of the form values.
 */
interface UseValidationTriggerArgs<TFieldValues extends FieldValues> {
  /** The field path to validate. When `undefined`, validation is skipped. */
  name?: FieldPath<TFieldValues>;
  /** The `trigger` function from `react-hook-form` for imperative validation. */
  trigger: (name: FieldPath<TFieldValues>) => Promise<boolean>;
  /** Event(s) that should trigger validation (`'onChange'`, `'onBlur'`, or both). */
  validateTrigger?: FormItemProps<TFieldValues>['validateTrigger'];
  /** Debounce delay in milliseconds for triggered validation. */
  validateDebounce?: number;
  /** Field paths whose changes should re-trigger this field's validation. */
  dependencies?: FormItemProps<TFieldValues>['dependencies'];
  /** Current watched dependency values used to detect changes. */
  depValues: unknown;
}

/**
 * Encapsulates validation trigger logic for a single form field.
 *
 * Responsibilities:
 * - Normalizes the `validateTrigger` prop into an array of trigger modes.
 * - Provides a `withTrigger` wrapper that composes event handlers (onChange/onBlur)
 *   with conditional validation calls.
 * - Applies optional debounce to validation triggers.
 * - Re-validates the field when dependency values change (cross-field validation).
 * - Cleans up debounce timers on unmount.
 *
 * @template TFieldValues - The shape of the form values.
 * @param args - {@link UseValidationTriggerArgs}
 * @returns An object containing the `withTrigger` function.
 */
export function useValidationTrigger<TFieldValues extends FieldValues = FieldValues>({
  name,
  trigger,
  validateTrigger,
  validateDebounce,
  dependencies,
  depValues,
}: UseValidationTriggerArgs<TFieldValues>) {
  const triggerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevDepValuesRef = useRef<unknown[] | null>(null);

  const triggerModes = useMemo(
    () => normalizeValidateTrigger(validateTrigger),
    [validateTrigger]
  );

  const triggerValidation = useMemoizedFn(() => {
    if (!name) return;
    const run = () => {
      void trigger(name);
    };
    if (validateDebounce && validateDebounce > DEBOUNCE_MIN) {
      if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
      triggerTimerRef.current = setTimeout(run, validateDebounce);
      return;
    }
    run();
  });

  useEffect(() => {
    if (!name || !dependencies?.length) return;
    const nextDeps = Array.isArray(depValues) ? depValues : [depValues];
    const prevDeps = prevDepValuesRef.current;
    if (!prevDeps) {
      prevDepValuesRef.current = nextDeps;
      return;
    }
    if (shallowEqualArray(prevDeps, nextDeps)) return;
    prevDepValuesRef.current = nextDeps;
    triggerValidation();
  }, [depValues, dependencies?.length, name, triggerValidation]);

  useEffect(() => () => {
    if (triggerTimerRef.current) clearTimeout(triggerTimerRef.current);
  }, []);

  const shouldTrigger = useMemoizedFn(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR) => triggerModes.includes(mode)
  );

  const withTrigger = useMemoizedFn(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR, fn?: (...args: unknown[]) => void) =>
      (...args: unknown[]) => {
        fn?.(...args);
        if (name && shouldTrigger(mode)) triggerValidation();
      }
  );

  return { withTrigger };
}
