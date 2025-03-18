import { memo, forwardRef } from 'react';
import { Menu as PrimeMenu } from 'primereact/menu';
import classnames from '@/utils/classnames';
/* import types */
import type { MenuProps } from './interface';

export const Menu = forwardRef<PrimeMenu, MenuProps>((props, ref) => {
  const { className, prefixCls = 'menu', type = 'menu', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeMenu
      {...rest}
      ref={ref}
      className={classes(void 0, [classes(type), className].join(' '))}
    />
  );
});

export default memo(Menu);
