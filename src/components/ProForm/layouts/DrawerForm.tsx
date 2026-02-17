import { memo } from 'react';
import { Drawer } from '../../Drawer';
import ProForm from '../ProForm';
import { useOverlayForm } from './useOverlayForm';
import type { FC } from 'react';
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

  const drawerPropsObj = (drawerProps ?? {}) as Record<string, any>;

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
    overlayStyle: drawerPropsObj.style as Record<string, unknown> | undefined,
    onOverlayHide: drawerPropsObj.onHide as ((...args: unknown[]) => void) | undefined,
  });

  return (
    <>
      {triggerNode}
      {shouldRenderPanel && (
        <Drawer
          {...drawerProps}
          visible={mergedOpen}
          header={drawerPropsObj.header ?? title}
          style={mergedStyle}
          onHide={handleHide}
        >
          <div className='om-react-ui-proform-drawer-form'>
            <ProForm
              {...formProps}
              onFinish={handleFinish}
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
