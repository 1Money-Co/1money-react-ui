import { memo } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Icons } from '@/components/Icons';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { DrawerProps } from './interface';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = props => {
  const { children, className, prefixCls = 'drawer', betaLogo, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <Sidebar
      className={classes(void 0, className)}
      icons={
        <Icons
          name={betaLogo ? 'logoWithBeta' : 'logoWithWords'}
          // @ts-ignore
          logoColor='#073387'
          // @ts-ignore
          wordColor='#131313'
          // @ts-ignore
          betaColor='#073387'
          width={betaLogo ? 152 : 131}
          height={betaLogo ? 22 : 24}
        />
      }
      closeIcon={<Icons name='cross' size={24} wrapperCls={classes('close')} />}
      {...rest}
    >
      { children }
    </Sidebar>
  );
};

export default memo(Drawer);
