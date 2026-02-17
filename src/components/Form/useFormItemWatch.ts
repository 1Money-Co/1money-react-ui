import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import usePrevious from '../usePrevious';
import type { Control, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormItemProps } from './interface';

interface UseFormItemWatchResult<TFieldValues extends FieldValues> {
  allValues: TFieldValues;
  depValues: unknown;
  shouldRender: boolean;
}

interface UseFormItemWatchArgs<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  methods: UseFormReturn<TFieldValues>;
  dependencies?: FormItemProps<TFieldValues>['dependencies'];
  watchNames?: FormItemProps<TFieldValues>['watchNames'];
  shouldUpdate?: FormItemProps<TFieldValues>['shouldUpdate'];
  name?: FieldPath<TFieldValues>;
}

// Module-level constant to avoid recreating empty array on each render.
const EMPTY_NAMES: never[] = [];

/**
 * Consolidates the three `useWatch` subscriptions + allValues derivation +
 * shouldRender gating into a single hook.
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
  }, [methods, shouldWatchAllValues, watchedAllValues, watchedNamesValues]);

  const prevValues = usePrevious(allValues);

  const shouldRender = useMemo(() => {
    if (!shouldUpdate || shouldUpdate === true) return true;
    return shouldUpdate(prevValues ?? allValues, allValues);
  }, [allValues, prevValues, shouldUpdate]);

  return { allValues, depValues, shouldRender };
}
