import { memo } from 'react';
import { Drawer } from '../../Drawer';
import ProForm from '../ProForm';
import { useOverlayForm } from './useOverlayForm';
import type { FC, ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { DrawerFormProps } from '../interface';

export const DrawerForm: FC<DrawerFormProps<FieldValues>> = memo((props) => {
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

  const drawerPropsObj = (drawerProps ?? {}) as Record<string, unknown>;

  const {
    mergedOpen,
    shouldRenderPanel,
    triggerNode,
    handleFinish,
    handleHide,
    mergedStyle,
  } = useOverlayForm<FieldValues>({
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
          header={(drawerPropsObj.header as ReactNode | undefined) ?? title}
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
