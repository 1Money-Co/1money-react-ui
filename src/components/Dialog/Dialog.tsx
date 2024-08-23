import { memo } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { DialogProps } from './interface';

export const Dialog: FC<PropsWithChildren<DialogProps>> = props => {
  const { children, className, onClick, prefixCls = 'dialog' } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, className)}
      onClick={onClick}
    >
      { children }
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Dialog.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Dialog);
