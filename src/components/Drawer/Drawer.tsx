import { memo } from 'react';
import propTypes from 'prop-types';
import { Sidebar } from 'primereact/sidebar';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { DrawerProps } from './interface';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = props => {
  const { children, className, prefixCls = 'drawer', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <Sidebar
      className={classes(void 0, className)}
      {...rest}
    >
      { children }
    </Sidebar>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Drawer.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Drawer);
