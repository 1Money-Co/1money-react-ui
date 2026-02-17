import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { DEBOUNCE_MIN, TRIGGER_BLUR, TRIGGER_CHANGE } from './constants';
import { normalizeValidateTrigger, shallowEqualArray } from './helper';
import type { FormItemProps } from './interface';

interface UseValidationTriggerArgs<TFieldValues extends FieldValues> {
  name?: FieldPath<TFieldValues>;
  trigger: (name: FieldPath<TFieldValues>) => Promise<boolean>;
  validateTrigger?: FormItemProps<TFieldValues>['validateTrigger'];
  validateDebounce?: number;
  dependencies?: FormItemProps<TFieldValues>['dependencies'];
  depValues: unknown;
}

/**
 * Encapsulates validation trigger logic: debounce, dependency-change
 * re-validation, and the `withTrigger` wrapper for onChange/onBlur.
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

  const triggerValidation = useCallback(() => {
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
  }, [name, trigger, validateDebounce]);

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

  const shouldTrigger = useCallback(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR) => triggerModes.includes(mode),
    [triggerModes]
  );

  const withTrigger = useCallback(
    (mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR, fn?: (...args: unknown[]) => void) =>
      (...args: unknown[]) => {
        fn?.(...args);
        if (name && shouldTrigger(mode)) triggerValidation();
      },
    [name, shouldTrigger, triggerValidation]
  );

  return { withTrigger };
}
