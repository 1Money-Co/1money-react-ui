import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import usePrevious from '../usePrevious';
import type { Control, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormItemProps } from './interface';

/**
 * Return type of {@link useFormItemWatch}.
 *
 * @template TFieldValues - The shape of the form values.
 */
interface UseFormItemWatchResult<TFieldValues extends FieldValues> {
  /** Current snapshot of all form values. */
  allValues: TFieldValues;
  /** Watched dependency values (array when multiple, single value otherwise). */
  depValues: unknown;
  /** Whether the FormItem should render based on `shouldUpdate` evaluation. */
  shouldRender: boolean;
}

/**
 * Arguments for {@link useFormItemWatch}.
 *
 * @template TFieldValues - The shape of the form values.
 */
interface UseFormItemWatchArgs<TFieldValues extends FieldValues> {
  /** The `react-hook-form` `Control` instance. */
  control: Control<TFieldValues>;
  /** The `react-hook-form` methods instance. */
  methods: UseFormReturn<TFieldValues>;
  /** Field paths that trigger re-validation when their values change. */
  dependencies?: FormItemProps<TFieldValues>['dependencies'];
  /** Additional field paths to watch for re-render. */
  watchNames?: FormItemProps<TFieldValues>['watchNames'];
  /** Controls when the FormItem re-renders. */
  shouldUpdate?: FormItemProps<TFieldValues>['shouldUpdate'];
  /** The field path for this FormItem. */
  name?: FieldPath<TFieldValues>;
}

// Module-level constant to avoid recreating empty array on each render.
const EMPTY_NAMES: never[] = [];

/**
 * Consolidates the three `useWatch` subscriptions (dependencies, all values,
 * and named watches) along with `allValues` derivation and `shouldRender`
 * gating into a single hook.
 *
 * This hook manages:
 * 1. Watching dependency fields for cross-field re-validation.
 * 2. Watching all values when `shouldUpdate` requires a full-form comparison.
 * 3. Watching named fields specified via `watchNames`.
 * 4. Computing `shouldRender` based on the `shouldUpdate` prop.
 *
 * @template TFieldValues - The shape of the form values.
 * @param args - {@link UseFormItemWatchArgs}
 * @returns {@link UseFormItemWatchResult} containing current values and render gate.
 */
export function useFormItemWatch<TFieldValues extends FieldValues = FieldValues>({
  control,
  methods,
  dependencies,
  watchNames,
  shouldUpdate,
  name,
}: UseFormItemWatchArgs<TFieldValues>): UseFormItemWatchResult<TFieldValues> {
  const shouldWatchAllValues = shouldUpdate === true || typeof shouldUpdate === 'function';
  const depNames = (dependencies?.length ? dependencies : EMPTY_NAMES) as FieldPath<TFieldValues>[];
  const shouldWatchDeps = !!(name && depNames.length);
  const watchNamesList = (watchNames?.length ? watchNames : EMPTY_NAMES) as FieldPath<TFieldValues>[];
  const shouldWatchNames = !!watchNames?.length;

  const depValues = useWatch({ control, name: depNames, disabled: !shouldWatchDeps });
  const watchedAllValues = useWatch({ control, disabled: !shouldWatchAllValues });
  const watchedNamesValues = useWatch({
    control,
    name: watchNamesList,
    disabled: !shouldWatchNames,
  });

  const allValues = useMemo(() => {
    const getValues = methods.getValues;
    if (!getValues) return {} as TFieldValues;
    if (shouldWatchAllValues) return (watchedAllValues ?? getValues()) as TFieldValues;
    return getValues();
  }, [
    methods,
    shouldWatchAllValues,
    watchedAllValues,
    // Intentionally unused in useMemo body: this dependency forces `allValues`
    // to recompute via methods.getValues() when watched names change while
    // `shouldWatchAllValues` is false.
    watchedNamesValues,
  ]);

  const prevValues = usePrevious(allValues);

  const shouldRender = useMemo(() => {
    if (!shouldUpdate || shouldUpdate === true) return true;
    if (prevValues === undefined) return true;
    return shouldUpdate(prevValues, allValues);
  }, [allValues, prevValues, shouldUpdate]);

  return { allValues, depValues, shouldRender };
}
