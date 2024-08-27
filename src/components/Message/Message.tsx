import { memo } from 'react';
import { Message as PrimeMessage } from 'primereact/message';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { MessageProps } from './interface';

export const Message: FC<PropsWithChildren<MessageProps>> = props => {
  const { className, prefixCls = 'message', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeMessage
      {...rest}
      className={classes(void 0, className)}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Message.propTypes = {
  prefixCls: propTypes.string
};

export default memo(Message);
