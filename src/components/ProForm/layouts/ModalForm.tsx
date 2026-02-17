import { memo, useEffect, useRef } from 'react';
import { Modal } from '../../Modal';
import ProForm from '../ProForm';
import { CSS_PREFIX } from '../constants';
import { useOverlayForm } from './useOverlayForm';
import type { ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ModalHandlers } from '../../Modal';
import type { ModalFormProps } from '../interface';

/**
 * A {@link ProForm} displayed inside a modal dialog.
 *
 * Supports controlled/uncontrolled open state, a trigger element, auto-close
 * on submit, and optional close timeout.
 *
 * @typeParam TFieldValues - The form values type.
 */
function ModalFormBase<TFieldValues extends FieldValues = FieldValues>(
  props: ModalFormProps<TFieldValues>,
) {
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

  const modalRef = useRef<ModalHandlers>(null);
  const modalPropsObj = (modalProps ?? {}) as Record<string, unknown>;

  const {
    mergedOpen,
    shouldRenderPanel,
    triggerNode,
    handleFinish,
    handleHide,
    mergedStyle,
  } = useOverlayForm<TFieldValues>({
    open,
    onOpenChange,
    trigger,
    submitTimeout,
    autoClose,
    destroyOnClose,
    width,
    onFinish,
    overlayStyle: modalPropsObj.style as Record<string, unknown> | undefined,
    onOverlayHide: modalPropsObj.onHide as ((...args: unknown[]) => void) | undefined,
  });

  useEffect(() => {
    if (!shouldRenderPanel) return;
    if (mergedOpen) {
      modalRef.current?.show();
      return;
    }
    modalRef.current?.hide();
  }, [mergedOpen, shouldRenderPanel]);

  return (
    <>
      {triggerNode}
      {shouldRenderPanel && (
        <Modal
          ref={modalRef}
          {...modalProps}
          header={(modalPropsObj.header as ReactNode | undefined) ?? title}
          style={mergedStyle}
          onHide={handleHide}
        >
          <div className={`${CSS_PREFIX}-modal-form`}>
            <ProForm<TFieldValues>
              {...formProps}
              onFinish={handleFinish}
            >
              {children}
            </ProForm>
          </div>
        </Modal>
      )}
    </>
  );
}

ModalFormBase.displayName = 'ModalForm';

export const ModalForm = memo(ModalFormBase) as typeof ModalFormBase;

export default ModalForm;
