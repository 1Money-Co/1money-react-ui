import type { AccordionProps, AccordionTabProps } from 'primereact/accordion';

interface ItemProps extends AccordionTabProps{
  key: string;
}

export interface CollapseProps extends Omit<AccordionProps, 'className'> {
  items: ItemProps[];
  wrapperCls?: string;
  itemCls?: string;
  contentCls?: string;
  prefixCls?: string;
}
