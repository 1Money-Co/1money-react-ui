import { memo, useRef, useState, useEffect, useCallback, useImperativeHandle } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import debounce from 'lodash.debounce';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, SyntheticEvent } from 'react';
import type { DropdownProps } from './interface';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = props => {
  const {
    ref,
    prefixEle,
    suffixEle,
    items = [],
    renderList,
    width,
    height,
    maxWidth,
    maxHeight,
    prefixCls = 'dropdown',
    className, wrapperCls,
    listCls,
    itemCls,
    itemActiveCls,
    onShow,
    onScroll,
    refreshAfterShow = true,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const overlayRef = useRef<OverlayPanel | null>(null);
  const handlerCalledRef = useRef(false);

  const [isHover, setIsHover] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const debouncedHandleScroll = debounce(() => setIsScrolling(false), 500);

  const refreshDOM = useCallback(() => {
    const ele = overlayRef.current?.getElement?.();
    const visible = overlayRef.current?.isVisible?.();
    if (!visible || !ele) return;
    const originZIndex = ele.style.zIndex;
    if (originZIndex != undefined) {
      ele.style.zIndex = `${parseInt(originZIndex) + 1}`;
      setTimeout(() => {
        ele.style.zIndex = originZIndex;
      }, 0);
    }
  }, []);

  // @ts-expect-error
  useImperativeHandle(ref, () => ({
    props: overlayRef.current?.props!,
    hide: () => overlayRef.current?.hide?.(),
    getElement: () => overlayRef.current?.getElement?.() as HTMLDivElement,
    isVisible: () => overlayRef.current?.isVisible?.() ?? false,
    align: () => overlayRef.current?.align?.(),
    show: (
      event: SyntheticEvent | undefined | null,
      target?: HTMLElement | EventTarget | undefined | null,
    ) => {
      overlayRef.current?.show?.(event, target);
      if (!refreshAfterShow) return;
      handlerCalledRef.current = true;
      setTimeout(() => refreshDOM(), 0);
    },
    toggle: (
      event: SyntheticEvent | undefined | null,
      target?: HTMLElement | EventTarget | undefined | null,
    ) => {
      overlayRef.current?.toggle?.(event, target);
      if (!refreshAfterShow) return;
      handlerCalledRef.current = true;
      setTimeout(() => refreshDOM(), 0);
    },
  }), [refreshAfterShow]);

  useEffect(() => {
    const handleResize = () => {
      if (!overlayRef.current || !overlayRef.current.isVisible()) return;
      overlayRef.current.align?.();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <OverlayPanel
      {...rest}
      ref={overlayRef}
      className={classes(void 0, [
        className,
        isHover && classes('hover'),
        isScrolling && classes('scrolling'),
      ].join(' '))}
      style={{
        '--dropdown-width': width || 'auto',
        '--dropdown-height': height || 'auto',
        '--dropdown-max-width': maxWidth || 'calc(100vw - 48px)',
        '--dropdown-max-height': maxHeight || 'calc(100vh - 48px)',
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
      onShow={() => {
        onShow?.();
        if (!refreshAfterShow) return;
        if (handlerCalledRef.current) {
          handlerCalledRef.current = false;
        } else {
          setTimeout(() => refreshDOM(), 0);
        }
      }}
    >
      <div className={classes('wrapper', wrapperCls)}>
        {prefixEle}
        {
          renderList?.(items) ?? <ul className={classes('list', listCls)}>
            {
              items.map((item, ind) => (
                <li key={item.key ?? ind} className={classes('list-item', [itemCls, item.active ? itemActiveCls : void 0].join(' '))}>
                  {item.children}
                </li>
              ))
            }
          </ul>
        }
        {suffixEle}
      </div>
    </OverlayPanel>
  );
};

export default memo(Dropdown);
