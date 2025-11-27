'use client';
import { memo, forwardRef } from 'react';
import {
  Sidebar as ProSidebar,
  Menu as ProMenu,
  MenuItem as ProMenuItem,
  SubMenu as ProSubMenu
} from 'react-pro-sidebar';
import { default as classnames, joinCls } from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { PropsWithChildren, ReactElement } from 'react';
import type { SidebarProps, MenuItem, SimpleMenuItem } from './interface';

export const SimplySidebar = forwardRef<HTMLDivElement, PropsWithChildren<SidebarProps>>((props, ref) => {
  const { id, children, menus, className, prefixCls = 'simply-sidebar', headerCls, bodyCls, betaLogo, onLogoClick } = props;
  const classes = classnames(prefixCls);

  // Type guard to check if menu item is SimpleMenuItem
  const isSimpleMenuItem = (menu: MenuItem | SimpleMenuItem): menu is SimpleMenuItem => {
    return 'children' in menu && Array.isArray(menu.children);
  };

  // Render child items (non-top-level)
  const renderChildMenuItem = (menu: MenuItem | SimpleMenuItem, index: number): ReactElement => {
    const { key, label, icon, suffix, link, active, disabled, hidden, onClick } = menu;

    if (isSimpleMenuItem(menu)) {
      const { defaultOpen, onOpenChange, children } = menu;

      return (
        <ProSubMenu
          key={key ?? index}
          label={label}
          icon={icon}
          suffix={suffix}
          component={link}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          onClick={onClick}
          active={active}
          disabled={disabled}
          className={hidden ? classes('hidden') : ''}
        >
          {children?.map((child, childIndex) => renderChildMenuItem(child, childIndex))}
        </ProSubMenu>
      );
    }

    return (
      <ProMenuItem
        key={key ?? index}
        icon={icon}
        suffix={suffix}
        component={link}
        active={active}
        disabled={disabled}
        onClick={onClick}
        className={hidden ? classes('hidden') : ''}
      >
        {label}
      </ProMenuItem>
    );
  };

  // Render top-level menu items
  const renderTopLevelMenu = (menu: MenuItem | SimpleMenuItem, index: number) => {
    if (!isSimpleMenuItem(menu)) {
      return renderChildMenuItem(menu, index);
    }
    const { key, label, icon, children, hidden } = menu;

    return (
      <div key={key ?? index} className={hidden ? classes('hidden') : ''}>
        {index > 0 && <div className={classes('hr-line')}></div>}
        <div className={classes('group-label')}>
          {icon && <span className={classes('group-icon')}>{icon}</span>}
          <span className={classes('group-label-text')}>{label}</span>
        </div>
        {children?.map((child, childIndex) => renderChildMenuItem(child, childIndex))}
      </div>
    );
  };

  return (
    <ProSidebar
      id={id}
      className={classes(void 0, className)}
      width='280px'
    >
      <div className={classes('header', headerCls)}>
        <span
          className={classes('logo')}
          onClick={onLogoClick}
        >
          <Icons
            name={betaLogo ? 'logoWithBeta' : 'logoWithWords'}
            // @ts-ignore
            logoColor='#073387'
            // @ts-ignore
            wordColor='#131313'
            // @ts-ignore
            betaColor='#073387'
            color='#073387'
            width={betaLogo ? 152 : 131}
            height={betaLogo ? 22 : 24}
          />
        </span>
      </div>
      <ProMenu
        className={classes('menu', bodyCls)}
        renderExpandIcon={({ open }) => <Icons name='chevronDown' size={16} color='#646465' wrapperCls={joinCls(classes('expand-icon'), open && classes('expand-icon-open'))} />}
      >
        {menus.map((menu, index) => renderTopLevelMenu(menu, index))}
      </ProMenu>
      {children}
    </ProSidebar>
  );
});

export default memo(SimplySidebar);
