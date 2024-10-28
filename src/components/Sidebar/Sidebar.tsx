import { memo, useState, useCallback } from 'react';
import propTypes from 'prop-types';
import {
  Sidebar as ProSidebar,
  Menu as ProMenu,
  MenuItem as ProMenuItem,
  SubMenu as ProSubMenu
} from 'react-pro-sidebar';
import classnames from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SidebarProps } from './interface';

export const Sidebar: FC<PropsWithChildren<SidebarProps>> = props => {
  const { children, collapsible, menus, className, prefixCls = 'sidebar', onCollapse, onLogout } = props;
  const [collapsed, setCollapsed] = useState(false);
  const classes = classnames(prefixCls);

  const handleCollapse = useCallback(() => {
    setCollapsed(!collapsed);
    onCollapse?.(!collapsed);
  }, [collapsed, onCollapse]);

  return (
    <ProSidebar
      className={classes(void 0, className)}
      width='261px'
      collapsedWidth='81px'
      collapsed={collapsed}
      transitionDuration={150}
    >
      <div className={classes('header')}>
        <Icons name={collapsed ? 'logo' : 'logoWithWords'} color='#3D73F2' width={collapsed ? 18 :103} height={18} />
        {
          collapsible && <span className={classes('collapse')} onClick={handleCollapse}>
            <i className={['pi', collapsed ? 'pi-angle-double-right' : 'pi-angle-double-left', classes('collapse-icon')].join(' ')} style={{ fontSize: '16px', color: '#808080' }} />
          </span>
        }
      </div>
      <ProMenu renderExpandIcon={({ open }) => collapsed ? null : <Icons name='dropDown' color='#808080' className={[classes('expand-icon'), open ? classes('expand-icon-open') : ''].join(' ')} />}>
        {
          menus.map((menu, ind) => {
            const { label, icon, link, active, defaultOpen, children } = menu;
            if (children) {
              return <ProSubMenu
                key={ind}
                label={menu.label}
                icon={icon}
                component={link}
                defaultOpen={defaultOpen}
              >
                {
                  menu.children?.map((child, index) => {
                    return <ProMenuItem
                      key={`${ind}-${index}`}
                      icon={child.icon}
                      component={child.link}
                      active={child.active}
                    >
                      {child.label}
                    </ProMenuItem>;
                  })
                }
              </ProSubMenu>;
            }
            return <ProMenuItem icon={icon} component={link} active={active}>{label}</ProMenuItem>;
          })
        }
      </ProMenu>
      { children }
      <div className={classes('footer')} onClick={() => onLogout?.()}>
        <span className={classes('footer-logout')}>
          <i className={['pi pi-sign-out', classes('footer-logout-icon')].join(' ')} style={{ fontSize: '16px' }} />
        </span>
        <span className={classes('footer-logout-text')}>Log out</span>
      </div>
    </ProSidebar>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Sidebar.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Sidebar);
