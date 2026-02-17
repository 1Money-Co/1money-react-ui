import { memo, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { FC, ReactNode } from 'react';

/**
 * Props for {@link ProFormDependency}.
 */
export interface ProFormDependencyProps {
  /** Field names to watch for changes. */
  name: string[];
  /** Render function that receives the watched field values as a keyed object. */
  children: (values: Record<string, unknown>) => ReactNode;
}

/**
 * Watches one or more form fields and re-renders its children whenever
 * the watched values change. Useful for conditional field visibility or
 * cross-field derived content.
 *
 * @example
 * ```tsx
 * <ProFormDependency name={['country']}>
 *   {({ country }) => country === 'US' && <ProFormText name="state" label="State" />}
 * </ProFormDependency>
 * ```
 */
const ProFormDependencyBase: FC<ProFormDependencyProps> = (props) => {
  const { name, children } = props;
  const form = useFormContext();
  const watchedValues = useWatch({ control: form.control, name });

  const values = useMemo(() => {
    const names = Array.isArray(name) ? name : [];
    const list = Array.isArray(watchedValues) ? watchedValues : [watchedValues];

    return names.reduce<Record<string, unknown>>((acc, key, index) => {
      acc[key] = list[index];
      return acc;
    }, {});
  }, [name, watchedValues]);

  return <>{children(values)}</>;
};

ProFormDependencyBase.displayName = 'ProFormDependency';

export const ProFormDependency = memo(ProFormDependencyBase);

export default ProFormDependency;
