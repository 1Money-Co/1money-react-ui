'use client';
import { memo, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import {
  Sidebar as ProSidebar,
  Menu as ProMenu,
  MenuItem as ProMenuItem,
  SubMenu as ProSubMenu
} from 'react-pro-sidebar';
import { default as classnames, joinCls } from '@/utils/classnames';
import useLatest from '@/components/useLatest';
import useMemoizedFn from '@/components/useMemoizedFn';
import Icons from '@/components/Icons';
import SidebarLogo from '@/components/Sidebar/SidebarLogo';
import { EXPAND_ICON_COLOR } from '@/components/Sidebar/constants';
/* import types */
import type { PropsWithChildren } from 'react';
import type { SidebarProps, SidebarHandlers } from './interface';

export const Sidebar = forwardRef<SidebarHandlers, PropsWithChildren<SidebarProps>>((props, ref) => {
  const { id, children, collapsible, menus, className, prefixCls = 'sidebar', headerCls, bodyCls, collapseCls, defaultCollapsed, betaLogo, onCollapse, onLogoClick, menuPrefixCls, menuPrefix } = props;
  const [collapsed, setCollapsed] = useState(defaultCollapsed ?? false);
  const classes = classnames(prefixCls);
  const collapsedRef = useLatest(collapsed);

  const handleCollapse = useCallback((_collapsed: boolean) => {
    setCollapsed(_collapsed);
    onCollapse?.(_collapsed);
  }, [onCollapse]);

  useImperativeHandle(ref, () => ({
    toggle: () => handleCollapse(!collapsedRef.current),
    collapse: handleCollapse
  }), [handleCollapse]);

  const renderExpandIcon = useMemoizedFn(({ open }: { open: boolean }) =>
    collapsed ? null : <Icons name='chevronDown' size={16} color={EXPAND_ICON_COLOR} wrapperCls={joinCls(classes('expand-icon'), open && classes('expand-icon-open'))} />
  );

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
          <SidebarLogo collapsed={collapsed} betaLogo={betaLogo} />
        </span>
      </div>
      {menuPrefix && (
        <div className={classes('menu-prefix', menuPrefixCls)}>
          {menuPrefix}
        </div>
      )}
      <ProMenu
        className={classes('menu', bodyCls)}
        renderExpandIcon={renderExpandIcon}
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
        collapsible && <span className={classes('collapse', joinCls(collapsed && classes('collapse-collapsed'), collapseCls))} onClick={() => handleCollapse(!collapsed)}>
          <Icons name={collapsed ? 'extend' : 'collapse'} wrapperCls={classes('collapse-icon')} size={16} />
          <span className={classes('collapse-text')}>Collapse</span>
        </span>
      }
      {children}
    </ProSidebar>
  );
});

export default memo(Sidebar);
