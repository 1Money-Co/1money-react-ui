import { cloneElement, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent, ReactElement, ReactNode } from 'react';

/** Configuration options for the {@link useOverlayForm} hook. */
interface UseOverlayFormOptions<TValues> {
  /** Controlled open state. */
  open?: boolean;
  /** Callback when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the overlay when clicked. */
  trigger?: ReactElement;
  /** Delay (ms) before auto-closing after submit. */
  submitTimeout?: number;
  /** Whether to auto-close after a successful submit. @default true */
  autoClose?: boolean;
  /** Whether to unmount overlay content when closed. @default true */
  destroyOnClose?: boolean;
  /** Overlay width. */
  width?: string | number;
  /** Form finish handler. Return `false` to prevent auto-close. */
  onFinish?: (values: TValues) => void | boolean | Promise<void | boolean>;
  /** Inline styles from the overlay component. */
  overlayStyle?: Record<string, unknown>;
  /** The overlay's own `onHide` callback. */
  onOverlayHide?: (...args: unknown[]) => void;
}

/**
 * Shared hook that powers both {@link ModalForm} and {@link DrawerForm}.
 *
 * Manages open/close state, trigger element cloning, auto-close with optional
 * timeout after submit, and overlay visibility lifecycle.
 *
 * @typeParam TValues - The form values type.
 * @param options - Configuration options.
 * @returns An object with `mergedOpen`, `triggerNode`, `handleFinish`, `handleHide`, and more.
 */
export function useOverlayForm<TValues>({
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
}: UseOverlayFormOptions<TValues>) {
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

  const handleFinish = useCallback(async (values: TValues) => {
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
