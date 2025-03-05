import { memo, useCallback } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import classnames from '@/utils/classnames';
import Icons from '@/components/Icons';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CollapseProps } from './interface';

export const Collapse: FC<PropsWithChildren<CollapseProps>> = props => {
  const { items, wrapperCls, itemCls, contentCls, prefixCls = 'collapse', ...rest } = props;
  const classes = classnames(prefixCls);

  const getCollapseItem = useCallback(() => items.map(({ children, key, ...rest }, ind) => <AccordionTab
    {...rest}
    key={key || ind}
    className={classes('item', itemCls)}
    contentClassName={classes('item-content', contentCls)}
  >
    { children }
  </AccordionTab>), [items]);

  return (
    <Accordion
      {...rest}
      className={classes(void 0, wrapperCls)}
      expandIcon={<i className={[classes('icon'), classes('icon-expand')].join(' ')}><Icons name='dropDown' size={24} color='#000000' /></i>}
      collapseIcon={<i className={[classes('icon'), classes('icon-collapse')].join(' ')}><Icons name='dropDown' size={24} color='#000000' /></i>}
      transitionOptions={{ 
        timeout: 0,
        disabled: true
      }}
    >
      { getCollapseItem() }
    </Accordion>
  );
};

export default memo(Collapse);
