import { DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button } from '../Button';
import type { DragEndEvent } from '@dnd-kit/core';
import type { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ButtonProps } from '../Button';
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

type IconProps = false | Record<string, unknown>;

interface ProFormListRowProps {
  fieldId: string;
  index: number;
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

const ProFormListRowBody: FC<ProFormListRowProps> = ({
  fieldId,
  index,
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
  const copyBtnProps = (copyIconProps && typeof copyIconProps === 'object')
    ? copyIconProps
    : {};
  const {
    onClick: copyButtonOnClick,
    disabled: copyButtonDisabled,
    children: copyButtonChildren,
    ...copyButtonDomProps
  } = copyBtnProps as Record<string, unknown>;

  const deleteBtnProps = (deleteIconProps && typeof deleteIconProps === 'object')
    ? deleteIconProps
    : {};
  const {
    onClick: deleteButtonOnClick,
    disabled: deleteButtonDisabled,
    children: deleteButtonChildren,
    ...deleteButtonDomProps
  } = deleteBtnProps as Record<string, unknown>;

  const copyButtonClick = copyButtonOnClick as ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  const deleteButtonClick = deleteButtonOnClick as ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  const copyButtonNode = copyButtonChildren as ReactNode;
  const deleteButtonNode = deleteButtonChildren as ReactNode;

  const defaultDom = {
    delete: deleteIconProps === false
      ? null
      : (
        <Button
          key={`delete-${fieldId}`}
          {...deleteButtonDomProps}
          type='button'
          severity='secondary'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            removeAt(index);
            deleteButtonClick?.(event);
          }}
          disabled={!canRemove || !!deleteButtonDisabled}
        >
          {deleteButtonNode ?? 'Delete'}
        </Button>
      ),
    copy: copyIconProps === false
      ? null
      : (
        <Button
          key={`copy-${fieldId}`}
          {...copyButtonDomProps}
          type='button'
          severity='secondary'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            copy(index);
            copyButtonClick?.(event);
          }}
          disabled={!canAdd || !!copyButtonDisabled}
        >
          {copyButtonNode ?? 'Copy'}
        </Button>
      ),
  };

  const renderedActions = actionRender
    ? actionRender({ index, record: action.getList()[index] }, action, defaultDom)
    : [defaultDom.copy, defaultDom.delete].filter(Boolean);

  const rowNode = (
    <div className='om-react-ui-proform-list-row-actions'>
      {renderedActions as ReactNode}
    </div>
  );

  if (!itemRender) return rowNode;

  return <>{itemRender({ listDom: rowNode, action })}</>;
};

const SortableProFormListRow: FC<ProFormListRowProps> = (props) => {
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

type CreatorConfig = ButtonProps & { text?: ReactNode; position?: 'top' | 'bottom' };

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
  const { control, getValues } = useFormContext<FieldValues>();
  const { fields, append, remove, move, insert, replace } = useFieldArray({
    control,
    name: name as string,
  });

  useEffect(() => {
    if (initialApplied.current) return;
    if (fields.length !== 0) return;
    if (!Array.isArray(initialValue) || initialValue.length === 0) return;
    initialApplied.current = true;
    replace(initialValue as Record<string, unknown>[]);
  }, [fields.length, initialValue, replace]);

  const canAdd = max == null || fields.length < max;
  const canRemove = min == null || fields.length > min;

  const add = useCallback((defaultValue?: Record<string, unknown>, index?: number) => {
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

    const list = (getValues(name as string) as Record<string, unknown>[] | undefined) ?? [];
    const value = list[index] ?? {};
    add(value, index + 1);
  }, [add, canAdd, getValues, name]);

  const action = useMemo<ProFormListAction>(() => ({
    add,
    remove: removeAt,
    move,
    copy,
    getList: () => ((getValues(name as string) as Record<string, unknown>[] | undefined) ?? []),
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
  const creatorConfig: CreatorConfig | undefined = hasCreator && creatorButtonProps
    ? creatorButtonProps as CreatorConfig
    : hasCreator ? {} as CreatorConfig : undefined;
  const creatorText = creatorConfig?.text ?? 'Add';
  const creatorPosition = creatorConfig?.position ?? 'bottom';

  const {
    text: _text,
    position: _position,
    onClick: creatorButtonOnClick,
    disabled: creatorButtonDisabled,
    ...creatorButtonDomProps
  } = creatorConfig ?? {} as CreatorConfig;

  const actionRows = fields.map((field, index) => {
    const rowProps: ProFormListRowProps = {
      fieldId: field.id,
      index,
      copyIconProps,
      deleteIconProps,
      canAdd,
      canRemove,
      copy,
      removeAt,
      action,
      actionRender,
      itemRender,
    };

    if (sortable) {
      return <SortableProFormListRow key={field.id} {...rowProps} />;
    }

    return <ProFormListRowBody key={field.id} {...rowProps} />;
  });

  const actionsNode = sortable
    ? (
      <DndContext onDragEnd={buildOnDragEnd({ move, fields: fields as Array<{ id: string }> })}>
        <SortableContext items={fields.map(item => item.id)} strategy={verticalListSortingStrategy}>
          {actionRows}
        </SortableContext>
      </DndContext>
    )
    : actionRows;

  return (
    <div className='om-react-ui-proform-list'>
      {label && <div className='om-react-ui-proform-list-label'>{label}</div>}

      {hasCreator && creatorPosition === 'top' && (
        <Button
          {...creatorButtonDomProps}
          type='button'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            add({}, fields.length);
            creatorButtonOnClick?.(event);
          }}
          disabled={!canAdd || !!creatorButtonDisabled}
        >
          {creatorText}
        </Button>
      )}

      <div className='om-react-ui-proform-list-content'>{listDom}</div>
      <div className='om-react-ui-proform-list-actions'>{actionsNode}</div>

      {hasCreator && creatorPosition === 'bottom' && (
        <Button
          {...creatorButtonDomProps}
          type='button'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            add();
            creatorButtonOnClick?.(event);
          }}
          disabled={!canAdd || !!creatorButtonDisabled}
        >
          {creatorText}
        </Button>
      )}
    </div>
  );
};

ProFormListBase.displayName = 'ProFormList';

export const ProFormList = memo(ProFormListBase);

export default ProFormList;
