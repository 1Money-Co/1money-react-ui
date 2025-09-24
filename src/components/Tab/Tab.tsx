import { memo } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TabProps } from './interface';

export const Tab: FC<PropsWithChildren<TabProps>> = props => {
  const { className, lableClassName, prefixCls = 'tab', model, type = 'default', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, [className, classes(type)].join(' ').trim())}
    >
      <TabMenu
        model={model?.map(item => (
          {
            template: (_, options) => {
              const { className, labelClassName, iconClassName, onClick } = options;
              return (
                <div className={[classes('item', className), lableClassName].join(' ').trim()} onClick={onClick}>
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
