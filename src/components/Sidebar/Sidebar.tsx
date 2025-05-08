'use client';
import { memo, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
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
  const { id, children, collapsible, menus, className, prefixCls = 'sidebar', headerCls, bodyCls, collapseCls, defaultCollapsed, onCollapse, onLogoClick } = props;
  const [collapsed, setCollapsed] = useState(defaultCollapsed ?? false);
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
      id={id}
      className={classes(void 0, className)}
      width='280px'
      collapsedWidth='84px'
      collapsed={collapsed}
      transitionDuration={150}
    >
      <div className={classes('header', headerCls)}>
        <span
          className={classes('logo')}
          onClick={onLogoClick}
        >
          <Icons
            name={collapsed ? 'logo' : 'logoWithWords'}
            // @ts-ignore
            logoColor='#073387'
            // @ts-ignore
            wordColor='#131313'
            color='#073387'
            width={collapsed ? 24 : 131}
            height={24}
          />
        </span>
      </div>
      <ProMenu
        className={classes('menu', bodyCls)}
        renderExpandIcon={({ open }) => collapsed ? null : <Icons name='chevronDown' size={18} color='#646465' wrapperCls={[classes('expand-icon'), open ? classes('expand-icon-open') : ''].join(' ')} />}
      >
        {
          menus.map((menu, ind) => {
            const { key, label, icon, suffix, link, active, disabled, defaultOpen, onOpenChange, onClick, children } = menu;
            if (children) {
              return <ProSubMenu
                key={key ?? ind}
                label={menu.label}
                icon={icon}
                suffix={suffix}
                component={link}
                defaultOpen={defaultOpen}
                onOpenChange={onOpenChange}
                onClick={onClick}
                active={active}
                disabled={disabled}
              >
                {
                  menu.children?.map((child, index) => {
                    return <ProMenuItem
                      key={`${key ?? ind}-${child.key ?? index}`}
                      icon={child.icon}
                      suffix={child.suffix}
                      component={child.link}
                      active={child.active}
                      disabled={child.disabled}
                      onClick={child.onClick}
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
              suffix={suffix}
              component={link}
              active={active}
              disabled={disabled}
            >
              {label}
            </ProMenuItem>;
          })
        }
      </ProMenu>
      {
        collapsible && <span className={classes('collapse', [collapsed ? classes('collapse-collapsed') : '', collapseCls].join(' '))} onClick={() => handleCollapse(!collapsed)}>
          <Icons name={collapsed ? 'extend' : 'collapse'} wrapperCls={classes('collapse-icon')} size={16} />
          <span className={classes('collapse-text')}>Collapse</span>
        </span>
      }
      { children }
    </ProSidebar>
  );
});

export default memo(Sidebar);
