import { cloneElement, isValidElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Modal } from '../../Modal';
import ProForm from '../ProForm';
import type { FC, MouseEvent, ReactElement } from 'react';
import type { ModalHandlers } from '../../Modal';
import type { ModalFormProps } from '../interface';

export const ModalForm: FC<ModalFormProps<any>> = memo((props) => {
  const {
    open,
    onOpenChange,
    trigger,
    modalProps,
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
  const modalRef = useRef<ModalHandlers>(null);
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

  const handleHide = useCallback(() => {
    clearCloseTimer();
    (modalProps as any)?.onHide?.();
    changeOpen(false);
  }, [changeOpen, clearCloseTimer, modalProps]);

  const shouldRenderPanel = mergedOpen || !destroyOnClose;
  const mergedStyle = useMemo(() => {
    return {
      ...((modalProps as any)?.style || {}),
      ...(width !== undefined ? { width } : {}),
    };
  }, [modalProps, width]);

  useEffect(() => {
    if (!shouldRenderPanel) return;
    if (mergedOpen) {
      modalRef.current?.show();
      return;
    }
    modalRef.current?.hide();
  }, [mergedOpen, shouldRenderPanel]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return (
    <>
      {triggerNode}
      {shouldRenderPanel && (
        <Modal
          ref={modalRef}
          {...(modalProps as Record<string, any>)}
          header={(modalProps as any)?.header ?? title}
          style={mergedStyle}
          onHide={handleHide}
        >
          <div className='om-react-ui-proform-modal-form'>
            <ProForm
              {...formProps as any}
              onFinish={handleFinish as any}
            >
              {children}
            </ProForm>
          </div>
        </Modal>
      )}
    </>
  );
});

export default ModalForm;
