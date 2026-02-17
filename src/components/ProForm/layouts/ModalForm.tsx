import { memo, useEffect, useRef } from 'react';
import { Modal } from '../../Modal';
import ProForm from '../ProForm';
import { useOverlayForm } from './useOverlayForm';
import type { FC } from 'react';
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

  const modalRef = useRef<ModalHandlers>(null);
  const modalPropsObj = (modalProps ?? {}) as Record<string, any>;

  const {
    mergedOpen,
    shouldRenderPanel,
    triggerNode,
    handleFinish,
    handleHide,
    mergedStyle,
  } = useOverlayForm({
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
          header={modalPropsObj.header ?? title}
          style={mergedStyle}
          onHide={handleHide}
        >
          <div className='om-react-ui-proform-modal-form'>
            <ProForm
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
});

export default ModalForm;
