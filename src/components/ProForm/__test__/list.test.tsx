import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProForm } from '../ProForm';
import { ProFormText } from '../fields';
import { ProFormList, buildOnDragEnd } from '../ProFormList';

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

  it('calls move when sortable drag ends with a different index', () => {
    const move = jest.fn();
    const onDragEnd = buildOnDragEnd({
      move,
      fields: [{ id: 'a' }, { id: 'b' }] as any,
    });

    onDragEnd({ active: { id: 'a' }, over: { id: 'b' } } as any);

    expect(move).toHaveBeenCalledWith(0, 1);
  });
});
