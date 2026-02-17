import { cloneElement, isValidElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Drawer } from '../../Drawer';
import ProForm from '../ProForm';
import type { FC, MouseEvent, ReactElement } from 'react';
import type { DrawerFormProps } from '../interface';

export const DrawerForm: FC<DrawerFormProps<any>> = memo((props) => {
  const {
    open,
    onOpenChange,
    trigger,
    drawerProps,
    submitTimeout,
    autoClose = true,
    destroyOnClose = true,
    width,
    title,
    onFinish,
    children,
    ...formProps
  } = props;

  const [innerOpen, setInnerOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mergedOpen = open ?? innerOpen;

  const changeOpen = useCallback((nextOpen: boolean) => {
    if (open === undefined) {
      setInnerOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  }, [open, onOpenChange]);

  const clearCloseTimer = useCallback(() => {
    if (!closeTimerRef.current) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const handleFinish = useCallback(async (values: any) => {
    const result = await onFinish?.(values);
    if (autoClose && result !== false) {
      clearCloseTimer();
      if (typeof submitTimeout === 'number' && submitTimeout > 0) {
        closeTimerRef.current = setTimeout(() => {
          changeOpen(false);
          closeTimerRef.current = null;
        }, submitTimeout);
      } else {
        changeOpen(false);
      }
    }
    return result;
  }, [autoClose, changeOpen, clearCloseTimer, onFinish, submitTimeout]);

  const triggerNode = useMemo(() => {
    if (!trigger || !isValidElement(trigger)) return null;

    return cloneElement(trigger as ReactElement<any>, {
      onClick: (event: MouseEvent<HTMLElement>) => {
        (trigger.props as any)?.onClick?.(event);
        changeOpen(true);
      },
    });
  }, [changeOpen, trigger]);

  const handleHide = useCallback((event?: any) => {
    clearCloseTimer();
    (drawerProps as any)?.onHide?.(event);
    changeOpen(false);
  }, [changeOpen, clearCloseTimer, drawerProps]);

  const shouldRenderPanel = mergedOpen || !destroyOnClose;
  const mergedStyle = useMemo(() => {
    return {
      ...((drawerProps as any)?.style || {}),
      ...(width !== undefined ? { width } : {}),
    };
  }, [drawerProps, width]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return (
    <>
      {triggerNode}
      {shouldRenderPanel && (
        <Drawer
          {...(drawerProps as Record<string, any>)}
          visible={mergedOpen}
          header={(drawerProps as any)?.header ?? title}
          style={mergedStyle}
          onHide={handleHide}
        >
          <div className='om-react-ui-proform-drawer-form'>
            <ProForm
              {...formProps as any}
              onFinish={handleFinish as any}
            >
              {children}
            </ProForm>
          </div>
        </Drawer>
      )}
    </>
  );
});

export default DrawerForm;
