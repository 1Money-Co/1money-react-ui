import { memo, useMemo, useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioGroupProps } from './interface';

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = props => {
  const { items = [], onChange, wrapperCls, innerCls, radioCls, prefixCls = 'radiogroup' } = props;
  const classes = classnames(prefixCls);
  const defaultSelected = useMemo(() => items.find(item => !!item.autoFocus), [items]);
  const [selected, setSelected] = useState<(typeof items)[number] | undefined>(defaultSelected);

  return <div className={classes('wrapper', [wrapperCls, 'tw-flex'].join(''))}>
    {items.map(item => {
      const { key, label, ...rest } = item;
      return (
        <div key={key} className={classes('inner', innerCls)}>
          <RadioButton
            {...rest}
            inputId={key}
            value={item}
            className={classes('inner-radio', radioCls)}
            onChange={e => {
              onChange?.(e.value);
              setSelected(e.value);
            }}
            checked={selected?.key === key}
          />
          {item?.label && <label htmlFor={key}>{label}</label>} 
        </div>
      );
    })}
  </div>;
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
RadioGroup.propTypes = {
  items: propTypes.array.isRequired,
  wrapperCls: propTypes.string,
  innerCls: propTypes.string,
  radioCls: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(RadioGroup);
