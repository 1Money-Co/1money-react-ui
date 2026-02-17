import { memo, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { FC, ReactNode } from 'react';

export interface ProFormDependencyProps {
  name: string[];
  children: (values: Record<string, any>) => ReactNode;
}

export const ProFormDependency: FC<ProFormDependencyProps> = memo((props) => {
  const { name, children } = props;
  const form = useFormContext();
  const watchedValues = useWatch({ control: form.control, name });

  const values = useMemo(() => {
    const names = Array.isArray(name) ? name : [];
    const list = Array.isArray(watchedValues) ? watchedValues : [watchedValues];

    return names.reduce<Record<string, any>>((acc, key, index) => {
      acc[key] = list[index];
      return acc;
    }, {});
  }, [name, watchedValues]);

  return <>{children(values)}</>;
});

export default ProFormDependency;
