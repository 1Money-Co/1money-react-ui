import { cloneElement, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, ReactElement, ReactNode } from 'react';
import useMemoizedFn from '@/components/useMemoizedFn';

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
  overlayStyle?: CSSProperties;
  /** The overlay's own `onHide` callback. */
  onOverlayHide?: (...args: unknown[]) => void;
}

/** Return shape of {@link useOverlayForm}. */
export interface UseOverlayFormResult<TValues> {
  /** Effective open state (controlled or uncontrolled). */
  mergedOpen: boolean;
  /** Whether overlay container should stay mounted. */
  shouldRenderPanel: boolean;
  /** Optional trigger element that opens the overlay. */
  triggerNode: ReactNode;
  /** Wrapped finish handler with optional auto-close behavior. */
  handleFinish: (values: TValues) => Promise<void | boolean | undefined>;
  /** Wrapped overlay hide handler. */
  handleHide: (...args: unknown[]) => void;
  /** Merged overlay style (base style + width override). */
  mergedStyle: CSSProperties;
  /** Imperative open-state setter honoring controlled mode. */
  changeOpen: (nextOpen: boolean) => void;
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
}: UseOverlayFormOptions<TValues>): UseOverlayFormResult<TValues> {
  const [innerOpen, setInnerOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mergedOpen = open ?? innerOpen;

  const changeOpen = useMemoizedFn((nextOpen: boolean) => {
    if (open === undefined) {
      setInnerOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  });

  const clearCloseTimer = useMemoizedFn(() => {
    if (!closeTimerRef.current) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  });

  const handleFinish = useMemoizedFn(async (values: TValues) => {
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
  });

  const triggerNode = useMemo<ReactNode>(() => {
    if (!trigger || !isValidElement(trigger)) return null;

    return cloneElement(trigger as ReactElement<Record<string, unknown>>, {
      onClick: (event: MouseEvent<HTMLElement>) => {
        const triggerOnClick = (trigger.props as Record<string, unknown>)?.onClick as
          ((e: MouseEvent<HTMLElement>) => void) | undefined;
        triggerOnClick?.(event);
        if (event.defaultPrevented) return;
        changeOpen(true);
      },
    });
  }, [changeOpen, trigger]);

  const handleHide = useMemoizedFn((...args: unknown[]) => {
    clearCloseTimer();
    onOverlayHide?.(...args);
    changeOpen(false);
  });

  const shouldRenderPanel = mergedOpen || !destroyOnClose;

  const mergedStyle = useMemo<CSSProperties>(() => ({
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
