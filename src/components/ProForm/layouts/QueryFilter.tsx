import { Children, memo, useCallback, useMemo, useState } from 'react';
import { joinCls } from '@/utils/classnames';
import { Button } from '../../Button';
import ProForm from '../ProForm';
import { CSS_PREFIX, DEFAULT_COLS_NUMBER, DEFAULT_TEXT } from '../constants';
import styles from '../style/ProForm.module.scss';
import type { CSSProperties } from 'react';
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
const QueryFilterBase = <TFieldValues extends FieldValues = FieldValues>(
  props: QueryFilterProps<TFieldValues>
) => {
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
  const mergedCollapsed = submitter === false ? false : (collapsed ?? innerCollapsed);

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

  const submitterOptions = submitter === false ? undefined : submitter;
  const searchConfig = submitterOptions?.searchConfig;
  const collapseText = searchConfig?.collapseText ?? DEFAULT_TEXT.collapse;
  const expandText = searchConfig?.expandText ?? DEFAULT_TEXT.expand;

  const submitterRender = useCallback((renderProps: SubmitterRenderProps<TFieldValues>) => {
    const customDom = [
      <Button key='search' type='button' onClick={() => renderProps.submit()}>
        {submitterOptions?.submitText ?? DEFAULT_TEXT.search}
      </Button>,
      <Button key='reset' type='button' severity='secondary' onClick={() => renderProps.reset()}>
        {submitterOptions?.resetText ?? DEFAULT_TEXT.reset}
      </Button>,
      <Button key='collapse' type='button' severity='secondary' onClick={toggleCollapsed}>
        {mergedCollapsed ? expandText : collapseText}
      </Button>,
    ];

    if (submitterOptions?.render) {
      return submitterOptions.render(renderProps, customDom);
    }

    return customDom;
  }, [
    mergedCollapsed,
    expandText,
    collapseText,
    submitterOptions?.submitText,
    submitterOptions?.resetText,
    submitterOptions?.render,
    toggleCollapsed,
  ]);

  const submitterConfig = submitterOptions === undefined
    ? false
    : {
      ...submitterOptions,
      onReset: () => {
        submitterOptions.onReset?.();
        onReset?.();
      },
      render: submitterRender,
    };

  const queryFormProps = formProps as Omit<ProFormProps<TFieldValues>, 'layout' | 'submitter'>;

  return (
    <div
      className={joinCls(
        styles['proform__query-filter'],
        `${CSS_PREFIX}-query-filter`,
        split && styles['proform__query-filter-split'],
        split && `${CSS_PREFIX}-query-filter-split`,
      )}
      style={filterStyle}
    >
      <ProForm<TFieldValues>
        {...queryFormProps}
        layout={formProps.layout ?? 'inline'}
        submitter={submitterConfig}
      >
        {visibleChildren}
      </ProForm>
    </div>
  );
};

const MemoizedQueryFilter = memo(QueryFilterBase);
MemoizedQueryFilter.displayName = 'QueryFilter';

export const QueryFilter = MemoizedQueryFilter as typeof QueryFilterBase;

export default QueryFilter;
