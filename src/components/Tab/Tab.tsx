import { memo } from 'react';
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

export default memo(Tab);
