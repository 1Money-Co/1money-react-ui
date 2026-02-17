import { Children, memo, useCallback, useMemo, useState } from 'react';
import { Button } from '../../Button';
import ProForm from '../ProForm';
import type { CSSProperties, FC } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ProFormProps, QueryFilterProps, SubmitterRenderProps } from '../interface';

export const QueryFilter: FC<QueryFilterProps<any>> = memo((props) => {
  const {
    defaultCollapsed = true,
    collapsed,
    onCollapse,
    defaultColsNumber = 3,
    labelWidth,
    split,
    submitter,
    onReset,
    children,
    ...formProps
  } = props;

  const [innerCollapsed, setInnerCollapsed] = useState(defaultCollapsed);
  const mergedCollapsed = collapsed ?? innerCollapsed;

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const visibleChildren = useMemo(() => {
    if (!mergedCollapsed) return childrenArray;
    return childrenArray.slice(0, defaultColsNumber);
  }, [childrenArray, defaultColsNumber, mergedCollapsed]);

  const toggleCollapsed = useCallback(() => {
    const next = !mergedCollapsed;
    if (collapsed === undefined) {
      setInnerCollapsed(next);
    }
    onCollapse?.(next);
  }, [collapsed, mergedCollapsed, onCollapse]);

  const filterStyle = useMemo(() => {
    if (labelWidth === undefined) return undefined;
    if (labelWidth === 'auto') {
      return {
        '--om-form-label-width': 'auto',
        '--om-form-wrapper-width': '100%',
      } as CSSProperties;
    }

    return {
      '--om-form-label-width': `${labelWidth}px`,
      '--om-form-wrapper-width': `calc(100% - ${labelWidth}px)`,
    } as CSSProperties;
  }, [labelWidth]);

  const collapseText = submitter !== false
    ? submitter?.searchConfig?.collapseText ?? 'Collapse'
    : 'Collapse';
  const expandText = submitter !== false
    ? submitter?.searchConfig?.expandText ?? 'Expand'
    : 'Expand';

  const submitterConfig = submitter === false
    ? false
    : {
      ...submitter,
      onReset: () => {
        submitter?.onReset?.();
        onReset?.();
      },
      render: (renderProps: SubmitterRenderProps) => {
        const customDom = [
          <Button key='search' type='submit'>
            {submitter?.submitText ?? 'Search'}
          </Button>,
          <Button key='reset' type='button' severity='secondary' onClick={() => renderProps.reset()}>
            {submitter?.resetText ?? 'Reset'}
          </Button>,
          <Button key='collapse' type='button' severity='secondary' onClick={toggleCollapsed}>
            {mergedCollapsed ? expandText : collapseText}
          </Button>,
        ];

        if (submitter?.render) {
          return submitter.render(renderProps, customDom);
        }

        return customDom;
      },
    };

  const queryFormProps = formProps as Omit<ProFormProps<FieldValues>, 'layout' | 'submitter'>;

  return (
    <div
      className={`om-react-ui-proform-query-filter${split ? ' om-react-ui-proform-query-filter-split' : ''}`}
      style={filterStyle}
    >
      <ProForm
        {...queryFormProps}
        layout={formProps.layout ?? 'inline'}
        submitter={submitterConfig}
      >
        {visibleChildren}
      </ProForm>
    </div>
  );
});

export default QueryFilter;
