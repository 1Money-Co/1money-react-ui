import { memo, useMemo, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SelectProps } from './interface';

export const Select: FC<PropsWithChildren<SelectProps>> = props => {
  const { multiple, options, className, onChange, prefixCls = 'select', ...rest } = props;
  const classes = classnames(prefixCls);
  const [selected, setSelected] = useState<typeof options[] | null>(null);
  const SelectComponent = useMemo(() => multiple ? MultiSelect as new() => MultiSelect : Dropdown as new() => Dropdown, [multiple]);
  
  return (
    <SelectComponent
      {...rest as any}
      options={options}
      value={selected}
      className={classes(void 0, className)}
      onChange={(e) => {
        onChange?.(e as any);
        setSelected(e.value);
      }}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Select.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Select);
