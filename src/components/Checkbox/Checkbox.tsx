import { memo } from 'react';
import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = props => {
  const { children, className, onClick, prefixCls = 'checkbox' } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeCheckbox
      checked={true}
      className={classes(void 0, className)}
      onClick={onClick}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Checkbox.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Checkbox);
