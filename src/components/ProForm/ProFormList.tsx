import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Fragment, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { DragEndEvent } from '@dnd-kit/core';
import type { FC, MouseEvent, ReactNode } from 'react';
import type { ProFormListAction, ProFormListProps } from './interface';

export const buildOnDragEnd = ({
  move,
  fields,
}: {
  move: (from: number, to: number) => void;
  fields: Array<{ id: string }>;
}) => {
  return ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const oldIndex = fields.findIndex(item => item.id === String(active.id));
    const newIndex = fields.findIndex(item => item.id === String(over.id));

    if (oldIndex >= 0 && newIndex >= 0) {
      move(oldIndex, newIndex);
    }
  };
};

export const ProFormList: FC<ProFormListProps<any>> = memo((props) => {
  const {
    name,
    label,
    min,
    max,
    initialValue,
    copyIconProps,
    deleteIconProps,
    creatorButtonProps,
    sortable,
    itemRender,
    actionRender,
    children,
    onAfterAdd,
    onAfterRemove,
  } = props;

  const initialApplied = useRef(false);
  const { control, getValues } = useFormContext();
  const { fields, append, remove, move, insert, replace } = useFieldArray({
    control,
    name: name as any,
  });

  useEffect(() => {
    if (initialApplied.current) return;
    if (fields.length !== 0) return;
    if (!Array.isArray(initialValue) || initialValue.length === 0) return;
    initialApplied.current = true;
    replace(initialValue as any);
  }, [fields.length, initialValue, replace]);

  const canAdd = max == null || fields.length < max;
  const canRemove = min == null || fields.length > min;

  const add = useCallback((defaultValue?: any, index?: number) => {
    if (!canAdd) return;

    const value = defaultValue ?? {};

    if (typeof index === 'number') {
      insert(index, value);
      onAfterAdd?.(value, index);
      return;
    }

    append(value);
    onAfterAdd?.(value, fields.length);
  }, [append, canAdd, fields.length, insert, onAfterAdd]);

  const removeAt = useCallback((index: number) => {
    if (!canRemove) return;
    remove(index);
    onAfterRemove?.(index);
  }, [canRemove, onAfterRemove, remove]);

  const copy = useCallback((index: number) => {
    if (!canAdd) return;

    const list = getValues(name as any) ?? [];
    const value = list[index] ?? {};
    add(value, index + 1);
  }, [add, canAdd, getValues, name]);

  const action = useMemo<ProFormListAction>(() => ({
    add,
    remove: removeAt,
    move,
    copy,
    getList: () => getValues(name as any) ?? [],
  }), [add, copy, getValues, move, name, removeAt]);

  const mappedFields = useMemo(() => {
    return fields.map((field, index) => ({
      name: `${String(name)}.${index}`,
      key: field.id,
    }));
  }, [fields, name]);

  const listDom = typeof children === 'function'
    ? children(mappedFields, action)
    : children;

  const hasCreator = creatorButtonProps !== false;
  const creatorConfig = hasCreator ? creatorButtonProps : undefined;
  const creatorText = creatorConfig?.text ?? 'Add';
  const creatorPosition = creatorConfig?.position ?? 'bottom';
  const creatorButtonDomProps = creatorConfig
    ? (() => {
      const { text, position, onClick, disabled, ...restProps } = creatorConfig as Record<string, any>;
      return restProps;
    })()
    : {};
  const creatorButtonOnClick = creatorConfig && typeof creatorConfig === 'object'
    ? (creatorConfig as Record<string, any>).onClick as ((event: MouseEvent<HTMLButtonElement>) => void) | undefined
    : undefined;
  const creatorButtonDisabled = !!(creatorConfig && typeof creatorConfig === 'object'
    ? (creatorConfig as Record<string, any>).disabled
    : false);

  const defaultActionRows = useMemo(() => {
    return fields.map((field, index) => {
      const copyButtonProps = copyIconProps && typeof copyIconProps === 'object'
        ? copyIconProps as Record<string, any>
        : {};
      const {
        onClick: copyButtonOnClick,
        disabled: copyButtonDisabled,
        children: copyButtonChildren,
        ...copyButtonDomProps
      } = copyButtonProps;
      const deleteButtonProps = deleteIconProps && typeof deleteIconProps === 'object'
        ? deleteIconProps as Record<string, any>
        : {};
      const {
        onClick: deleteButtonOnClick,
        disabled: deleteButtonDisabled,
        children: deleteButtonChildren,
        ...deleteButtonDomProps
      } = deleteButtonProps;

      const defaultDom = {
        delete: deleteIconProps === false
          ? null
          : (
            <button
              key={`delete-${field.id}`}
              {...deleteButtonDomProps}
              type='button'
              onClick={(event) => {
                removeAt(index);
                deleteButtonOnClick?.(event);
              }}
              disabled={!canRemove || !!deleteButtonDisabled}
            >
              {deleteButtonChildren ?? 'Delete'}
            </button>
          ),
        copy: copyIconProps === false
          ? null
          : (
            <button
              key={`copy-${field.id}`}
              {...copyButtonDomProps}
              type='button'
              onClick={(event) => {
                copy(index);
                copyButtonOnClick?.(event);
              }}
              disabled={!canAdd || !!copyButtonDisabled}
            >
              {copyButtonChildren ?? 'Copy'}
            </button>
          ),
      };

      const renderedActions = actionRender
        ? actionRender({ index, record: action.getList()[index] }, action, defaultDom)
        : [defaultDom.copy, defaultDom.delete].filter(Boolean);

      const rowNode = (
        <div key={field.id} className='om-react-ui-proform-list-row-actions'>
          {renderedActions as ReactNode}
        </div>
      );

      if (!itemRender) return rowNode;

      return (
        <Fragment key={field.id}>
          {itemRender({ listDom: rowNode, action })}
        </Fragment>
      );
    });
  }, [action, actionRender, canAdd, canRemove, copy, copyIconProps, deleteIconProps, fields, itemRender, removeAt]);

  const actionsNode = sortable
    ? (
      <DndContext onDragEnd={buildOnDragEnd({ move, fields: fields as Array<{ id: string }> })}>
        {(() => {
          const SortableContextAny = SortableContext as any;
          return (
            <SortableContextAny items={fields.map(item => item.id)} strategy={verticalListSortingStrategy}>
              {defaultActionRows}
            </SortableContextAny>
          );
        })()}
      </DndContext>
    )
    : defaultActionRows;

  return (
    <div className='om-react-ui-proform-list'>
      {label && <div className='om-react-ui-proform-list-label'>{label}</div>}

      {hasCreator && creatorPosition === 'top' && (
        <button
          {...creatorButtonDomProps}
          type='button'
          onClick={(event) => {
            add({}, fields.length);
            creatorButtonOnClick?.(event);
          }}
          disabled={!canAdd || creatorButtonDisabled}
        >
          {creatorText}
        </button>
      )}

      <div className='om-react-ui-proform-list-content'>{listDom}</div>
      <div className='om-react-ui-proform-list-actions'>{actionsNode}</div>

      {hasCreator && creatorPosition === 'bottom' && (
        <button
          {...creatorButtonDomProps}
          type='button'
          onClick={(event) => {
            add();
            creatorButtonOnClick?.(event);
          }}
          disabled={!canAdd || creatorButtonDisabled}
        >
          {creatorText}
        </button>
      )}
    </div>
  );
});

export default ProFormList;
