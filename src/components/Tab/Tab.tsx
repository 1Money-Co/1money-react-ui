import { memo } from 'react';
import propTypes from 'prop-types';
import { TabMenu } from 'primereact/tabmenu';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TabProps } from './interface';

export const Tab: FC<PropsWithChildren<TabProps>> = props => {
  const { className, prefixCls = 'tab', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, className)}
    >
      <TabMenu {...rest} />
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Tab.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Tab);
