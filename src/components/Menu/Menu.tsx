import { memo } from 'react';
import { Menu as PrimeMenu } from 'primereact/menu';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { MenuProps } from './interface';

export const Menu: FC<PropsWithChildren<MenuProps>> = props => {
  const { className, prefixCls = 'menu', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeMenu
      {...rest}
      className={classes(void 0, className)}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Menu.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Menu);
