import { memo, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import debounce from 'lodash.debounce';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { DropdownProps } from './interface';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = props => {
  const { prefixEle, suffixEle, items = [], width, height, prefixCls = 'dropdown', className, wrapperCls, listCls, itemCls, itemActiveCls, onScroll, ...rest } = props;
  const classes = classnames(prefixCls);

  const [isHover, setIsHover] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const debouncedHandleScroll = debounce(() => setIsScrolling(false), 500);

  return (
    <OverlayPanel
      {...rest}
      className={classes(void 0, [
        className,
        isHover && classes('hover'),
        isScrolling && classes('scrolling'),
      ].join(' '))}
      style={{
        '--dropdown-width': width || 'auto',
        '--dropdown-height': height || 'auto',
      } as CSSProperties}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      onScroll={(e) => {
        onScroll?.(e);
        debouncedHandleScroll.cancel();
        setIsScrolling(true);
        debouncedHandleScroll();
      }}
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
        {suffixEle}
      </div>
    </OverlayPanel>
  );
};

export default memo(Dropdown);
