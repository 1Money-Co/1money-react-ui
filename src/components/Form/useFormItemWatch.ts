import { useEffect, useMemo, useRef } from 'react';
import { useWatch } from 'react-hook-form';
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
  const depNames = (dependencies?.length ? dependencies : []) as FieldPath<TFieldValues>[];
  const shouldWatchDeps = !!(name && depNames.length);
  const watchNamesList = (watchNames?.length ? watchNames : undefined) as FieldPath<TFieldValues>[] | undefined;
  const shouldWatchNames = !!watchNamesList?.length;
  const emptyNames = useMemo(() => [] as FieldPath<TFieldValues>[], []);

  const depValues = useWatch({ control, name: depNames, disabled: !shouldWatchDeps });
  const watchedAllValues = useWatch({ control, disabled: !shouldWatchAllValues });
  const watchedNamesValues = useWatch({
    control,
    name: shouldWatchNames ? watchNamesList : emptyNames,
    disabled: !shouldWatchNames,
  });

  const watchedMarker = shouldWatchAllValues ? watchedAllValues : watchedNamesValues;

  const allValues = useMemo(() => {
    const getValues = methods.getValues;
    if (!getValues) return {} as TFieldValues;
    if (shouldWatchAllValues) return (watchedAllValues ?? getValues()) as TFieldValues;
    return getValues();
  }, [methods, shouldWatchAllValues, watchedAllValues, watchedMarker]);

  const prevValuesRef = useRef<TFieldValues>(allValues);

  const shouldRender = useMemo(() => {
    if (!shouldUpdate || shouldUpdate === true) return true;
    return shouldUpdate(prevValuesRef.current, allValues);
  }, [allValues, shouldUpdate]);

  useEffect(() => {
    if (!shouldUpdate) return;
    prevValuesRef.current = allValues;
  }, [allValues, shouldUpdate]);

  return { allValues, depValues, shouldRender };
}
