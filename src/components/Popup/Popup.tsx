import { memo } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { PopupProps } from './interface';

export const Popup: FC<PropsWithChildren<PopupProps>> = props => {
  const { children, className, onClick, prefixCls = 'popup' } = props;
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
Popup.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Popup);
