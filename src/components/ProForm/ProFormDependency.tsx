import { memo, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { FC, ReactNode } from 'react';

export interface ProFormDependencyProps {
  name: string[];
  children: (values: Record<string, unknown>) => ReactNode;
}

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
