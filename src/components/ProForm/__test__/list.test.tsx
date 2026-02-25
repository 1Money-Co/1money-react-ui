import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProForm } from '@/components/ProForm';
import { ProFormText } from '@/components/ProForm/fields';
import { ProFormList, buildOnDragEnd } from '@/components/ProForm/ProFormList';

describe('ProForm list', () => {
  let consoleErrorSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((message, ...optionalParams) => {
      if (
        typeof message === 'string' && (
          message.includes('Could not parse CSS stylesheet') ||
          message.includes('findDOMNode is deprecated and will be removed') ||
          message.includes('should not be null')
        )
      ) {
        return;
      }
      // eslint-disable-next-line no-console
      console.log(message, ...optionalParams);
    });

    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation((message, ...optionalParams) => {
      if (typeof message === 'string' && message.includes('[FormItem]')) return;
      // eslint-disable-next-line no-console
      console.log(message, ...optionalParams);
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  it('adds, copies, and removes list rows', async () => {
    const user = userEvent.setup();

    render(
      <ProForm defaultValues={{ users: [{ name: 'Ada' }] }}>
        <ProFormList name='users'>
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    await user.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getAllByRole('textbox').length).toBe(2);

    await user.click(screen.getAllByRole('button', { name: 'Copy' })[0]);
    expect(screen.getAllByRole('textbox').length).toBe(3);

    await user.click(screen.getAllByRole('button', { name: 'Delete' })[0]);
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('composes creatorButtonProps.onClick with internal add behavior', async () => {
    const user = userEvent.setup();
    const onCreatorClick = jest.fn();

    render(
      <ProForm defaultValues={{ users: [] }}>
        <ProFormList
          name='users'
          creatorButtonProps={{ onClick: onCreatorClick }}
        >
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(onCreatorClick).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });

  it('applies copyIconProps/deleteIconProps object configs and composed callbacks', async () => {
    const user = userEvent.setup();
    const onCopyClick = jest.fn();
    const onDeleteClick = jest.fn();

    render(
      <ProForm defaultValues={{ users: [{ name: 'Ada' }] }}>
        <ProFormList
          name='users'
          copyIconProps={{
            onClick: onCopyClick,
            children: 'Duplicate',
            'data-testid': 'copy-action',
          }}
          deleteIconProps={{
            onClick: onDeleteClick,
            children: 'Remove',
            'data-testid': 'delete-action',
          }}
        >
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    await user.click(screen.getByRole('button', { name: 'Duplicate' }));
    expect(onCopyClick).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(2);

    await user.click(screen.getAllByRole('button', { name: 'Remove' })[0]);
    expect(onDeleteClick).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });

  it('does not repeatedly call action.getList during actionRender list rows', () => {
    const users = Array.from({ length: 20 }, (_, index) => ({ name: `User ${index}` }));
    let patchedGetListSpy: jest.Mock | null = null;
    const actionRender = jest.fn((
      _row: { index: number; record: unknown },
      action: { getList: () => Record<string, unknown>[] },
      defaultDom: { copy: React.ReactNode; delete: React.ReactNode },
    ) => {
      if (patchedGetListSpy === null) {
        const originalGetList = action.getList;
        patchedGetListSpy = jest.fn(() => originalGetList());
        action.getList = patchedGetListSpy;
      }
      return [defaultDom.copy, defaultDom.delete];
    });

    render(
      <ProForm defaultValues={{ users }}>
        <ProFormList
          name='users'
          actionRender={actionRender}
        >
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    expect(actionRender).toHaveBeenCalled();
    expect(patchedGetListSpy).toBeTruthy();
    expect(patchedGetListSpy).toHaveBeenCalledTimes(0);
  });

  it('calls move when sortable drag ends with a different index', () => {
    const move = jest.fn();
    const onDragEnd = buildOnDragEnd({
      move,
      fields: [{ id: 'a' }, { id: 'b' }] as any,
    });

    onDragEnd({ active: { id: 'a' }, over: { id: 'b' } } as any);

    expect(move).toHaveBeenCalledWith(0, 1);
  });

  it('marks action rows as sortable when sortable is enabled', () => {
    render(
      <ProForm defaultValues={{ users: [{ name: 'Ada' }] }}>
        <ProFormList name='users' sortable>
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    expect(document.querySelectorAll('[data-sortable=\"true\"]').length).toBeGreaterThan(0);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <ProForm defaultValues={{ users: [{ name: 'Ada' }] }}>
        <ProFormList name='users'>
          {(fields) => fields.map((field, index) => (
            <ProFormText key={field.key} name={`users.${index}.name`} label={`Name ${index}`} />
          ))}
        </ProFormList>
      </ProForm>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
