import { memo } from 'react';
import { Drawer } from '../../Drawer';
import ProForm from '../ProForm';
import { CSS_PREFIX } from '../constants';
import { useOverlayForm } from './useOverlayForm';
import type { ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { DrawerFormProps } from '../interface';

/**
 * A {@link ProForm} displayed inside a side drawer panel.
 *
 * Supports controlled/uncontrolled open state, a trigger element, auto-close
 * on submit, and optional close timeout.
 *
 * @typeParam TFieldValues - The form values type.
 */
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
          <div className={`${CSS_PREFIX}-drawer-form`}>
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
