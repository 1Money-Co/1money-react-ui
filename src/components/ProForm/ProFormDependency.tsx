import { memo, useContext, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import type { FC, ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import { FormContext } from '../Form/Form';
import { FallbackFormProvider, useFormItemContext } from '../Form/useFormItemContext';

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
const ProFormDependencyInner: FC<ProFormDependencyProps> = (props) => {
  const { name, children } = props;
  const { methods } = useFormItemContext<FieldValues>();
  const watchedValues = useWatch({ control: methods.control, name });

  const values = useMemo(() => {
    const names = name;
    const list = watchedValues as unknown[];

    return names.reduce<Record<string, unknown>>((acc, key, index) => {
      acc[key] = list[index];
      return acc;
    }, {});
  }, [name, watchedValues]);

  return <>{children(values)}</>;
};

const ProFormDependencyBase: FC<ProFormDependencyProps> = (props) => {
  const ctx = useContext(FormContext);

  if (!ctx?.methods) {
    return (
      <FallbackFormProvider>
        <ProFormDependencyInner {...props} />
      </FallbackFormProvider>
    );
  }

  return <ProFormDependencyInner {...props} />;
};

ProFormDependencyBase.displayName = 'ProFormDependency';

export const ProFormDependency = memo(ProFormDependencyBase);

export default ProFormDependency;
