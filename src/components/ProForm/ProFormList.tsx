import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { DragEndEvent } from '@dnd-kit/core';
import type { FC, MouseEvent, ReactNode } from 'react';
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

const ProFormListRow: FC<ProFormListRowProps> = ({
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
  const copyBtnProps = (copyIconProps && typeof copyIconProps === 'object') ? copyIconProps : {};
  const {
    onClick: copyButtonOnClick,
    disabled: copyButtonDisabled,
    children: copyButtonChildren,
    ...copyButtonDomProps
  } = copyBtnProps as Record<string, any>;

  const deleteBtnProps = (deleteIconProps && typeof deleteIconProps === 'object') ? deleteIconProps : {};
  const {
    onClick: deleteButtonOnClick,
    disabled: deleteButtonDisabled,
    children: deleteButtonChildren,
    ...deleteButtonDomProps
  } = deleteBtnProps as Record<string, any>;

  const defaultDom = {
    delete: deleteIconProps === false
      ? null
      : (
        <button
          key={`delete-${fieldId}`}
          {...deleteButtonDomProps}
          type='button'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
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
          key={`copy-${fieldId}`}
          {...copyButtonDomProps}
          type='button'
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
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
    <div className='om-react-ui-proform-list-row-actions'>
      {renderedActions as ReactNode}
    </div>
  );

  if (!itemRender) return rowNode;

  return <>{itemRender({ listDom: rowNode, action })}</>;
};

type CreatorConfig = ButtonProps & { text?: ReactNode; position?: 'top' | 'bottom' };

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

    const list = getValues(name as string) ?? [];
    const value = list[index] ?? {};
    add(value, index + 1);
  }, [add, canAdd, getValues, name]);

  const action = useMemo<ProFormListAction>(() => ({
    add,
    remove: removeAt,
    move,
    copy,
    getList: () => getValues(name as string) ?? [],
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

  const actionRows = fields.map((field, index) => (
    <ProFormListRow
      key={field.id}
      fieldId={field.id}
      index={index}
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
  ));

  const actionsNode = sortable
    ? (
      <DndContext onDragEnd={buildOnDragEnd({ move, fields: fields as Array<{ id: string }> })}>
        {(() => {
          const SortableContextAny = SortableContext as any;
          return (
            <SortableContextAny items={fields.map(item => item.id)} strategy={verticalListSortingStrategy}>
              {actionRows}
            </SortableContextAny>
          );
        })()}
      </DndContext>
    )
    : actionRows;

  return (
    <div className='om-react-ui-proform-list'>
      {label && <div className='om-react-ui-proform-list-label'>{label}</div>}

      {hasCreator && creatorPosition === 'top' && (
        <button
          {...creatorButtonDomProps}
          type='button'
          onClick={(event) => {
            add({}, fields.length);
            creatorButtonOnClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
          }}
          disabled={!canAdd || !!creatorButtonDisabled}
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
            creatorButtonOnClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
          }}
          disabled={!canAdd || !!creatorButtonDisabled}
        >
          {creatorText}
        </button>
      )}
    </div>
  );
});

export default ProFormList;
