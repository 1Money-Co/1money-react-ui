import { cloneElement, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent, ReactElement, ReactNode } from 'react';

interface UseOverlayFormOptions {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  width?: string | number;
  onFinish?: (values: any) => void | boolean | Promise<void | boolean>;
  overlayStyle?: Record<string, unknown>;
  onOverlayHide?: (...args: unknown[]) => void;
}

export function useOverlayForm({
  open,
  onOpenChange,
  trigger,
  submitTimeout,
  autoClose = true,
  destroyOnClose = true,
  width,
  onFinish,
  overlayStyle,
  onOverlayHide,
}: UseOverlayFormOptions) {
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

  const triggerNode = useMemo<ReactNode>(() => {
    if (!trigger || !isValidElement(trigger)) return null;

    return cloneElement(trigger as ReactElement<Record<string, unknown>>, {
      onClick: (event: MouseEvent<HTMLElement>) => {
        const triggerOnClick = (trigger.props as Record<string, unknown>)?.onClick as
          ((e: MouseEvent<HTMLElement>) => void) | undefined;
        triggerOnClick?.(event);
        changeOpen(true);
      },
    });
  }, [changeOpen, trigger]);

  const handleHide = useCallback((...args: unknown[]) => {
    clearCloseTimer();
    onOverlayHide?.(...args);
    changeOpen(false);
  }, [changeOpen, clearCloseTimer, onOverlayHide]);

  const shouldRenderPanel = mergedOpen || !destroyOnClose;

  const mergedStyle = useMemo(() => ({
    ...(overlayStyle || {}),
    ...(width !== undefined ? { width } : {}),
  }), [overlayStyle, width]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return {
    mergedOpen,
    shouldRenderPanel,
    triggerNode,
    handleFinish,
    handleHide,
    mergedStyle,
    changeOpen,
  };
}
