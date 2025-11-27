import { memo } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TabProps } from './interface';

export const Tab: FC<PropsWithChildren<TabProps>> = props => {
  const { className, lableClassName, prefixCls = 'tab', model, type = 'default', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, joinCls(className, classes(type)))}
    >
      <TabMenu
        model={model?.map(item => (
          {
            template: (_, options) => {
              const { className, labelClassName, iconClassName, onClick } = options;
              return (
                <div className={joinCls(classes('item', className), lableClassName)} onClick={onClick}>
                  { item.icon != null && <span className={iconClassName}>{ item.icon }</span> }
                  { item.label != null && <strong className={classes('item-label', labelClassName)}>{ item.label }</strong> }
                  { item.count != null && <span className={classes('item-count')}>{ item.count }</span> }
                </div>
              );
            },
            ...item,
          }
        ))}
        {...rest}
      />
    </div>
  );
};

export default memo(Tab);
