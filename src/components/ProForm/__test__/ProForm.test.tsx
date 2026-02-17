import 'jsdom-global/register';
import * as React from 'react';
import type {
  ProFormProps,
  ProFormFieldProps,
  SubmitterProps,
  ModalFormProps,
  DrawerFormProps,
  QueryFilterProps,
  StepsFormProps,
  StepFormProps,
  ProFormListProps,
} from '../interface';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useForm } from 'react-hook-form';
import { Submitter } from '../Submitter';
import { ProForm } from '../ProForm';
import { ProFormText } from '../fields';
import { ProFormDependency } from '../ProFormDependency';
import {
  ProForm as PublicProForm,
  ProFormText as PublicProFormText,
  ModalForm as PublicModalForm,
  QueryFilter as PublicQueryFilter,
} from '@/index';

describe('ProForm', () => {
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

  test('ProForm types are exported', () => {
    const ok: boolean = true;
    expect(ok).toBe(true);
  });

  it('renders submit and reset buttons', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const onReset = jest.fn();

    render(<Submitter submitText='Search' resetText='Clear' onSubmit={onSubmit} onReset={onReset} />);

    await user.click(screen.getByRole('button', { name: 'Search' }));
    await user.click(screen.getByRole('button', { name: 'Clear' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('hydrates values from request(params)', async () => {
    const request = jest.fn().mockResolvedValue({ firstName: 'Ada' });
    render(
      <ProForm request={request} params={{ id: 'u_1' }}>
        <ProFormText name='firstName' label='First Name' />
      </ProForm>
    );

    expect(await screen.findByDisplayValue('Ada')).toBeInTheDocument();
  });

  it('hides submitter when submitter=false', () => {
    render(
      <ProForm submitter={false}>
        <div>Body</div>
      </ProForm>
    );
    expect(screen.queryByRole('button', { name: 'Submit' })).not.toBeInTheDocument();
  });

  it('supports custom submitter render', () => {
    render(
      <ProForm
        submitter={{
          render: () => <div data-testid='custom-submitter'>Custom Submitter</div>,
        }}
      >
        <ProFormText name='firstName' label='First Name' />
      </ProForm>
    );

    expect(screen.getByTestId('custom-submitter')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Submit' })).not.toBeInTheDocument();
  });

  it('executes form submit flow from custom submitter render', async () => {
    const user = userEvent.setup();
    const onFinish = jest.fn();

    render(
      <ProForm
        defaultValues={{ firstName: '' }}
        onFinish={onFinish}
        submitter={{
          render: ({ submit }) => (
            <button type='button' onClick={submit}>Custom Submit</button>
          ),
        }}
      >
        <ProFormText name='firstName' label='First Name' rules={{ required: 'First Name is required' }} />
      </ProForm>
    );

    await user.click(screen.getByRole('button', { name: 'Custom Submit' }));
    expect(await screen.findByText('First Name is required')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Custom Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({ firstName: 'Ada' });
    });
  });

  it('uses external form instance when provided', async () => {
    const user = userEvent.setup();

    const ExternalFormCase = () => {
      const methods = useForm({
        defaultValues: { firstName: 'Ada' },
      });

      return (
        <>
          <ProForm form={methods} submitter={false}>
            <ProFormText name='firstName' label='First Name' />
          </ProForm>
          <button type='button' onClick={() => methods.setValue('firstName', 'Grace')}>
            Set Name
          </button>
        </>
      );
    };

    render(<ExternalFormCase />);
    expect(screen.getByDisplayValue('Ada')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Set Name' }));
    expect(screen.getByDisplayValue('Grace')).toBeInTheDocument();
  });

  it('does not rerun request when params value is unchanged', async () => {
    const request = jest.fn().mockResolvedValue({ firstName: 'Ada' });

    const View = ({ marker }: { marker: number }) => {
      return (
        <ProForm request={request} params={{ id: 'u_1' }} submitter={false}>
          <ProFormText name='firstName' label={`First Name ${marker}`} />
        </ProForm>
      );
    };

    const { rerender } = render(<View marker={1} />);
    expect(await screen.findByDisplayValue('Ada')).toBeInTheDocument();

    rerender(<View marker={2} />);

    await waitFor(() => {
      expect(request).toHaveBeenCalledTimes(1);
    });
  });

  it('disables submitter buttons when loading', () => {
    render(
      <ProForm loading>
        <ProFormText name='email' label='Email' />
      </ProForm>
    );

    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled();
  });

  it('renders dependency child with current values', async () => {
    render(
      <ProForm defaultValues={{ plan: 'basic' }}>
        <ProFormText name='plan' label='Plan' />
        <ProFormDependency name={['plan']}>
          {(values) => <div>Current: {String(values.plan)}</div>}
        </ProFormDependency>
      </ProForm>
    );

    expect(screen.getByText('Current: basic')).toBeInTheDocument();
  });

  test('public exports include ProForm suite', () => {
    expect(PublicProForm).toBeDefined();
    expect(PublicProFormText).toBeDefined();
    expect(PublicModalForm).toBeDefined();
    expect(PublicQueryFilter).toBeDefined();
  });
});
