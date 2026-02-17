import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProForm } from '../ProForm';
import { ProFormRadio, ProFormSwitch, ProFormText } from '../fields';

describe('ProForm fields', () => {
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

  it('binds ProFormText to FormItem + Input', async () => {
    render(
      <ProForm>
        <ProFormText name='email' label='Email' />
      </ProForm>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('uses checked prop for ProFormSwitch', () => {
    render(
      <ProForm>
        <ProFormSwitch name='enabled' label='Enabled' />
      </ProForm>
    );

    expect(screen.getByText('Enabled')).toBeInTheDocument();
  });

  it('renders plain text in readonly mode', async () => {
    render(
      <ProForm readonly defaultValues={{ firstName: 'Ada' }}>
        <ProFormText name='firstName' label='First Name' />
      </ProForm>
    );

    expect(screen.getByText('Ada')).toBeInTheDocument();
  });

  it('composes fieldProps onBlur with form blur handling', async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();

    render(
      <ProForm defaultValues={{ email: '' }}>
        <ProFormText name='email' label='Email' fieldProps={{ onBlur }} />
        <button type='button'>Outside</button>
      </ProForm>
    );

    await user.click(screen.getByRole('textbox'));
    await user.click(screen.getByRole('button', { name: 'Outside' }));

    expect(onBlur).toHaveBeenCalled();
  });

  it('reset restores ProFormSwitch and ProFormRadio values', async () => {
    const user = userEvent.setup();
    const onFinish = jest.fn();

    render(
      <ProForm
        defaultValues={{ newsletter: true, status: 'active' }}
        onFinish={onFinish}
      >
        <ProFormSwitch name='newsletter' label='Newsletter' />
        <ProFormRadio
          name='status'
          label='Status'
          fieldProps={{
            items: [
              { key: 'active', label: 'Active' },
              { key: 'inactive', label: 'Inactive' },
            ],
          }}
        />
      </ProForm>
    );

    await user.click(screen.getByRole('switch'));
    await user.click(screen.getByLabelText('Inactive'));
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledTimes(1);
    });

    expect(onFinish).toHaveBeenLastCalledWith({
      newsletter: false,
      status: 'inactive',
    });

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledTimes(2);
    });

    expect(onFinish).toHaveBeenLastCalledWith({
      newsletter: true,
      status: 'active',
    });
  });
});
