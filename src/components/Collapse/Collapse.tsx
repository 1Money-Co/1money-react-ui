import { memo } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
import { ExpandIcon, CollapseIcon } from './Icons';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CollapseProps } from './interface';

export const Collapse: FC<PropsWithChildren<CollapseProps>> = props => {
  const { items = [], wrapperCls, prefixCls = 'collapse', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <Accordion
      {...rest}
      className={classes('wrapper', wrapperCls)}
      expandIcon={<i className={classes('icon')}><ExpandIcon /></i>}
      collapseIcon={<i className={classes('icon')}><CollapseIcon /></i>}
    >
      {
        items.map((item) => {
          const { key, children, ...itemRest } = item;
          return <AccordionTab
            {...itemRest}
            key={key}
            className={classes('inner')}
            contentClassName={classes('inner-content')}
          >
            { children }
          </AccordionTab>;
        })
      }
    </Accordion>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Collapse.propTypes = {
  items: propTypes.array.isRequired,
  wrapperCls: propTypes.string,
  innerCls: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Collapse);
