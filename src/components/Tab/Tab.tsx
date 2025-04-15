import { memo } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TabProps } from './interface';

export const Tab: FC<PropsWithChildren<TabProps>> = props => {
  const { className, prefixCls = 'tab', model, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, className)}
    >
      <TabMenu
        model={model?.map(item => (
          {
            template: (_, options) => {
              const { className, labelClassName, iconClassName, onClick } = options;
              return (
                <div className={classes('item', className)} onClick={onClick}>
                  { item.icon && <span className={iconClassName}>{ item.icon }</span> }
                  { item.label && <strong className={classes('item-label', labelClassName)}>{ item.label }</strong> }
                  { item.count && <span className={classes('item-count')}>{ item.count }</span> }
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
