import { memo } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { DropdownProps } from './interface';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = props => {
  const { prefixEle, suffixEle, items = [], width, height, prefixCls = 'dropdown', className, wrapperCls, listCls, itemCls, itemActiveCls, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <OverlayPanel
      {...rest}
      className={classes(void 0, className)}
      style={{
        '--dropdown-width': width || 'auto',
        '--dropdown-height': height || 'auto',
      } as CSSProperties}
    >
      <div className={classes('wrapper', wrapperCls)}>
        {prefixEle}
        <ul className={classes('list', listCls)}>
          {items.map((item, key) => (
            <li key={item.key ?? key} className={classes('list-item', [itemCls, item.active ? itemActiveCls : void 0].join(' '))}>
              {item.children}
            </li>
          ))}
        </ul>
      </div>
      {suffixEle}
    </OverlayPanel>
  );
};

export default memo(Dropdown);
