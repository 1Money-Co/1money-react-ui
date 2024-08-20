import { memo } from 'react';
import { InputText } from 'primereact/inputtext';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { InputProps } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const { children, className, prefixCls = 'input' } = props;
  const classes = classnames(prefixCls);

  return (
    <InputText
      className={classes(void 0, className)}
    >
      { children }
    </InputText>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Input.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Input);
