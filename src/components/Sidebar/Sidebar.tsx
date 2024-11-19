import { memo, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
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
import type { PropsWithChildren } from 'react';
import type { SidebarProps, SidebarHandlers } from './interface';

export const Sidebar= forwardRef<SidebarHandlers, PropsWithChildren<SidebarProps>>((props, ref) => {
  const { children, collapsible, menus, className, prefixCls = 'sidebar', onCollapse, onLogoClick, onLogout } = props;
  const [collapsed, setCollapsed] = useState(false);
  const classes = classnames(prefixCls);

  const handleCollapse = useCallback((_collapsed: boolean) => {
    setCollapsed(_collapsed);
    onCollapse?.(_collapsed);
  }, [onCollapse]);

  useImperativeHandle(ref, () => ({
    toggle: () => handleCollapse(!collapsed),
    collapse: handleCollapse
  }), [collapsed, handleCollapse]);

  return (
    <ProSidebar
      className={classes(void 0, className)}
      width='261px'
      collapsedWidth='81px'
      collapsed={collapsed}
      transitionDuration={150}
    >
      <div className={classes('header')}>
        <span
          className={classes('logo')}
          onClick={onLogoClick}
        >
          <Icons
            name={collapsed ? 'logo' : 'logoWithWords'}
            color='#3D73F2'
            width={collapsed ? 18 : 103}
            height={18}
          />
        </span>
        {
          collapsible && <span className={classes('collapse')} onClick={() => handleCollapse(!collapsed)}>
            <i className={['pi', collapsed ? 'pi-angle-double-right' : 'pi-angle-double-left', classes('collapse-icon')].join(' ')} style={{ fontSize: '16px', color: '#808080' }} />
          </span>
        }
      </div>
      <ProMenu renderExpandIcon={({ open }) => collapsed ? null : <Icons name='dropDown' color='#808080' className={[classes('expand-icon'), open ? classes('expand-icon-open') : ''].join(' ')} />}>
        {
          menus.map((menu, ind) => {
            const { key, label, icon, link, active, defaultOpen, children } = menu;
            if (children) {
              return <ProSubMenu
                key={key ?? ind}
                label={menu.label}
                icon={icon}
                component={link}
                defaultOpen={defaultOpen}
              >
                {
                  menu.children?.map((child, index) => {
                    return <ProMenuItem
                      key={`${key ?? ind}-${child.key ?? index}`}
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
            return <ProMenuItem
              key={key ?? ind}
              icon={icon}
              component={link}
              active={active}
            >
              {label}
            </ProMenuItem>;
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
});

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Sidebar.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Sidebar);
