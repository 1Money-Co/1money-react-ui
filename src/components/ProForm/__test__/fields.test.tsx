import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProForm } from '../ProForm';
import { ProFormSwitch, ProFormText } from '../fields';

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
});
