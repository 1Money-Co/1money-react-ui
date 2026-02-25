import { DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { memo, useEffect, useMemo, useRef } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { Button } from '../Button';
import { CSS_PREFIX, DEFAULT_TEXT } from './constants';
import { extractButtonProps } from './utils';
import type { DragEndEvent } from '@dnd-kit/core';
import type { CSSProperties, FC, ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ButtonProps } from '../Button';
import type { ProFormListAction, ProFormListProps } from './interface';

/**
 * Creates a `DndContext` `onDragEnd` handler that translates drag events
 * into field array `move` calls.
 *
 * @param options.move - The `move` function from `useFieldArray`.
 * @param options.fields - The current field array entries.
 * @returns A drag-end event handler.
 */
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

type IconProps = false | Record<string, unknown>;

/** @internal Props for an individual row inside {@link ProFormList}. */
interface ProFormListRowProps {
  fieldId: string;
  index: number;
  record: unknown;
  copyIconProps: IconProps | undefined;
  deleteIconProps: IconProps | undefined;
  canAdd: boolean;
  canRemove: boolean;
  copy: (index: number) => void;
  removeAt: (index: number) => void;
  action: ProFormListAction;
  actionRender?: ProFormListProps['actionRender'];
  itemRender?: ProFormListProps['itemRender'];
}

/** @internal Renders copy/delete action buttons for a single list row. */
const ProFormListRowBodyBase: FC<ProFormListRowProps> = ({
  fieldId,
  index,
  record,
  copyIconProps,
  deleteIconProps,
  canAdd,
  canRemove,
  copy,
  removeAt,
  action,
  actionRender,
  itemRender,
}) => {
  const copyBtn = extractButtonProps(copyIconProps);
  const deleteBtn = extractButtonProps(deleteIconProps);

  const defaultDom = {
    delete: deleteIconProps === false
      ? null
      : (
        <Button
          key={`delete-${fieldId}`}
          {...deleteBtn.domProps}
          type='button'
          severity='secondary'
          onClick={(event) => {
            removeAt(index);
            deleteBtn.onClick?.(event);
          }}
          disabled={!canRemove || deleteBtn.disabled}
        >
          {deleteBtn.children ?? DEFAULT_TEXT.delete}
        </Button>
      ),
    copy: copyIconProps === false
      ? null
      : (
        <Button
          key={`copy-${fieldId}`}
          {...copyBtn.domProps}
          type='button'
          severity='secondary'
          onClick={(event) => {
            copy(index);
            copyBtn.onClick?.(event);
          }}
          disabled={!canAdd || copyBtn.disabled}
        >
          {copyBtn.children ?? DEFAULT_TEXT.copy}
        </Button>
      ),
  };

  const renderedActions = actionRender
    ? actionRender({ index, record }, action, defaultDom)
    : [defaultDom.copy, defaultDom.delete].filter(Boolean);

  const rowNode = (
    <div className={`${CSS_PREFIX}-list-row-actions`}>
      {renderedActions as ReactNode}
    </div>
  );

  if (!itemRender) return rowNode;

  return <>{itemRender({ listDom: rowNode, action })}</>;
};

const ProFormListRowBody = memo(ProFormListRowBodyBase);

/** @internal Drag-and-drop wrapper for a sortable list row. */
const SortableProFormListRowBase: FC<ProFormListRowProps> = (props) => {
  const { fieldId } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: fieldId });

  const style: CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: transition || undefined,
    cursor: 'grab',
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      data-sortable='true'
      {...attributes}
      {...listeners}
    >
      <ProFormListRowBody {...props} />
    </div>
  );
};

const SortableProFormListRow = memo(SortableProFormListRowBase);

type CreatorConfig = ButtonProps & { text?: ReactNode; position?: 'top' | 'bottom' };

/** @internal Props for the "add row" button rendered by {@link ProFormList}. */
interface CreatorButtonProps {
  config: CreatorConfig | undefined;
  canAdd: boolean;
  onAdd: () => void;
}

/** @internal Renders the "add row" button for {@link ProFormList}. */
const CreatorButton: FC<CreatorButtonProps> = ({ config, canAdd, onAdd }) => {
  if (!config) return null;

  const { text, position: _, onClick, disabled, ...domProps } = config;

  return (
    <Button
      {...domProps}
      type='button'
      onClick={(event) => {
        onAdd();
        onClick?.(event);
      }}
      disabled={!canAdd || !!disabled}
    >
      {text ?? DEFAULT_TEXT.add}
    </Button>
  );
};

/**
 * Dynamic, repeatable form field list with add, remove, copy, and
 * drag-and-drop reordering capabilities.
 *
 * @example
 * ```tsx
 * <ProFormList name="items" min={1} max={5} sortable>
 *   {(fields) => fields.map(({ name, key }) => (
 *     <ProFormText key={key} name={`${name}.title`} label="Title" />
 *   ))}
 * </ProFormList>
 * ```
 */
const ProFormListBase: FC<ProFormListProps<FieldValues>> = (props) => {
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
  const { control } = useFormContext<FieldValues>();
  const { fields, append, remove, move, insert, replace } = useFieldArray({
    control,
    name: name as string,
  });
  const watchedList = useWatch({ control, name: name as string });
  const listSnapshot = useMemo(() => {
    return Array.isArray(watchedList) ? watchedList as Record<string, unknown>[] : [];
  }, [watchedList]);

  useEffect(() => {
    if (initialApplied.current) return;
    if (fields.length !== 0) return;
    if (!Array.isArray(initialValue) || initialValue.length === 0) return;
    initialApplied.current = true;
    replace(initialValue as Record<string, unknown>[]);
  }, [fields.length, initialValue, replace]);

  const canAdd = max == null || fields.length < max;
  const canRemove = min == null || fields.length > min;

  const add = useMemoizedFn((defaultValue?: Record<string, unknown>, index?: number) => {
    if (!canAdd) return;

    const value = defaultValue ?? {};

    if (typeof index === 'number') {
      insert(index, value);
      onAfterAdd?.(value, index);
      return;
    }

    append(value);
    onAfterAdd?.(value, fields.length);
  });

  const removeAt = useMemoizedFn((index: number) => {
    if (!canRemove) return;
    remove(index);
    onAfterRemove?.(index);
  });

  const copy = useMemoizedFn((index: number) => {
    if (!canAdd) return;

    const value = listSnapshot[index] ?? {};
    add(value, index + 1);
  });

  const getList = useMemoizedFn(() => listSnapshot);

  const action = useMemo<ProFormListAction>(() => ({
    add,
    remove: removeAt,
    move,
    copy,
    getList,
  }), [add, copy, getList, move, removeAt]);

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
  const creatorConfig: CreatorConfig | undefined = hasCreator
    ? { ...(creatorButtonProps || {}) }
    : undefined;
  const creatorPosition = creatorConfig?.position ?? 'bottom';
  const addFromTopCreator = useMemoizedFn(() => add({}, fields.length));
  const addFromBottomCreator = useMemoizedFn(() => add());

  const actionRows = useMemo(() => {
    return fields.map((field, index) => {
      const rowRecord = listSnapshot[index];
      if (sortable) {
        return (
          <SortableProFormListRow
            key={field.id}
            fieldId={field.id}
            index={index}
            record={rowRecord}
            copyIconProps={copyIconProps}
            deleteIconProps={deleteIconProps}
            canAdd={canAdd}
            canRemove={canRemove}
            copy={copy}
            removeAt={removeAt}
            action={action}
            actionRender={actionRender}
            itemRender={itemRender}
          />
        );
      }

      return (
        <ProFormListRowBody
          key={field.id}
          fieldId={field.id}
          index={index}
          record={rowRecord}
          copyIconProps={copyIconProps}
          deleteIconProps={deleteIconProps}
          canAdd={canAdd}
          canRemove={canRemove}
          copy={copy}
          removeAt={removeAt}
          action={action}
          actionRender={actionRender}
          itemRender={itemRender}
        />
      );
    });
  }, [
    action,
    actionRender,
    canAdd,
    canRemove,
    copy,
    copyIconProps,
    deleteIconProps,
    fields,
    itemRender,
    listSnapshot,
    removeAt,
    sortable,
  ]);

  const sortableIds = useMemo(() => fields.map(item => item.id), [fields]);
  const dragEndHandler = useMemo(
    () => buildOnDragEnd({ move, fields: fields as Array<{ id: string }> }),
    [fields, move]
  );

  const actionsNode = sortable
    ? (
      <DndContext onDragEnd={dragEndHandler}>
        <SortableContext items={sortableIds} strategy={verticalListSortingStrategy}>
          {actionRows}
        </SortableContext>
      </DndContext>
    )
    : actionRows;

  return (
    <div className={`${CSS_PREFIX}-list`}>
      {label && <div className={`${CSS_PREFIX}-list-label`}>{label}</div>}

      {creatorPosition === 'top' && (
        <CreatorButton config={creatorConfig} canAdd={canAdd} onAdd={addFromTopCreator} />
      )}

      <div className={`${CSS_PREFIX}-list-content`}>{listDom}</div>
      <div className={`${CSS_PREFIX}-list-actions`}>{actionsNode}</div>

      {creatorPosition === 'bottom' && (
        <CreatorButton config={creatorConfig} canAdd={canAdd} onAdd={addFromBottomCreator} />
      )}
    </div>
  );
};

ProFormListBase.displayName = 'ProFormList';

export const ProFormList = memo(ProFormListBase);

export default ProFormList;
