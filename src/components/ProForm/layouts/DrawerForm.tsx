import { memo } from 'react';
import { Drawer } from '../../Drawer';
import ProForm from '../ProForm';
import { useOverlayForm } from './useOverlayForm';
import type { ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { DrawerFormProps } from '../interface';

function DrawerFormBase<TFieldValues extends FieldValues = FieldValues>(
  props: DrawerFormProps<TFieldValues>,
) {
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
  } = useOverlayForm<TFieldValues>({
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
            <ProForm<TFieldValues>
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
}

DrawerFormBase.displayName = 'DrawerForm';

export const DrawerForm = memo(DrawerFormBase) as typeof DrawerFormBase;

export default DrawerForm;
