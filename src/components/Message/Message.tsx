import { memo } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { MessageProps } from './interface';

export const Message: FC<PropsWithChildren<MessageProps>> = props => {
  const { children, className, onClick, prefixCls = 'message' } = props;
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
Message.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Message);
