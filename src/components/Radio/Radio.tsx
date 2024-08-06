import React, { memo } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioProps } from './interface';

export const Radio: FC<PropsWithChildren<RadioProps>> = props => {
  const { children, className, onClick, prefixCls = 'radio' } = props;
  const classes = classnames(prefixCls);

  return (
    <RadioButton
      className={classes(void 0, className)}
      onClick={onClick}
    >
      { children }
    </RadioButton>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Radio.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Radio);
