import { Children, memo, useCallback, useMemo, useState } from 'react';
import { Button } from '../../Button';
import ProForm from '../ProForm';
import { CSS_PREFIX, DEFAULT_COLS_NUMBER, DEFAULT_TEXT } from '../constants';
import type { CSSProperties, FC } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ProFormProps, QueryFilterProps, SubmitterRenderProps } from '../interface';

/**
 * Horizontal search/filter form with collapsible fields and a
 * search/reset/expand button bar.
 *
 * Fields beyond {@link QueryFilterProps.defaultColsNumber} are hidden
 * when the filter is collapsed.
 *
 * @example
 * ```tsx
 * <QueryFilter onFinish={handleSearch} defaultColsNumber={2}>
 *   <ProFormText name="keyword" label="Keyword" />
 *   <ProFormSelect name="status" label="Status" fieldProps={{ options }} />
 *   <ProFormText name="author" label="Author" />
 * </QueryFilter>
 * ```
 */
const QueryFilterBase: FC<QueryFilterProps<FieldValues>> = (props) => {
  const {
    defaultCollapsed = true,
    collapsed,
    onCollapse,
    defaultColsNumber = DEFAULT_COLS_NUMBER,
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

  const searchConfig = submitter !== false ? submitter?.searchConfig : undefined;
  const collapseText = searchConfig?.collapseText ?? DEFAULT_TEXT.collapse;
  const expandText = searchConfig?.expandText ?? DEFAULT_TEXT.expand;

  const submitterConfig = submitter === false
    ? false
    : {
      ...submitter,
      onReset: () => {
        submitter?.onReset?.();
        onReset?.();
      },
      render: (renderProps: SubmitterRenderProps<FieldValues>) => {
        const customDom = [
          <Button key='search' type='button' onClick={() => renderProps.submit()}>
            {submitter?.submitText ?? DEFAULT_TEXT.search}
          </Button>,
          <Button key='reset' type='button' severity='secondary' onClick={() => renderProps.reset()}>
            {submitter?.resetText ?? DEFAULT_TEXT.reset}
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
      className={`${CSS_PREFIX}-query-filter${split ? ` ${CSS_PREFIX}-query-filter-split` : ''}`}
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
};

QueryFilterBase.displayName = 'QueryFilter';

export const QueryFilter = memo(QueryFilterBase);

export default QueryFilter;
