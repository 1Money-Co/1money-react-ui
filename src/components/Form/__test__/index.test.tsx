import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form, FormItem } from '../index';
import { Input } from '../../Input';

describe('Form', () => {
  let consoleErrorSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  const originalConsoleError = console.error.bind(console);
  const originalConsoleWarn = console.warn.bind(console);

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
      if (
        errorMessage.includes('Could not parse CSS stylesheet') ||
        errorMessage.includes('findDOMNode is deprecated and will be removed') ||
        errorMessage.includes('should not be null')
      ) {
        return;
      }
      originalConsoleError(message, ...optionalParams);
    });
    // Only suppress known FormItem warnings; let unexpected warns surface.
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation((message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
      if (typeof message === 'string' && errorMessage.includes('[FormItem]')) return;
      originalConsoleWarn(message, ...optionalParams);
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });
  it('renders labels and help text', () => {
    const view = render(
      <Form layout='vertical'>
        <FormItem label='Email' help='We never share it.'>
          <Input type='text' />
        </FormItem>
      </Form>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('We never share it.')).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  it('shows validation error on submit', async () => {
    const user = userEvent.setup();
    render(
      <Form onFinish={() => undefined} defaultValues={{ email: '' }}>
        <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <button type='submit'>Submit</button>
      </Form>
    );

    await user.click(screen.getByText('Submit'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('revalidates dependent fields on dependency change', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ email: '', confirmEmail: '' }}>
        <FormItem name='email' label='Email'>
          {({ field }) => <Input type='text' aria-label='Email' {...field} />}
        </FormItem>
        <FormItem
          name='confirmEmail'
          label='Confirm Email'
          dependencies={['email']}
          rules={{
            validate: (value, values) => value === values.email || 'Emails do not match'
          }}
        >
          {({ field }) => <Input type='text' aria-label='Confirm Email' {...field} />}
        </FormItem>
      </Form>
    );

    const emailInput = screen.getByRole('textbox', { name: /^email$/i });
    await user.type(emailInput, 'test@1money.com');
    expect(await screen.findByText('Emails do not match')).toBeInTheDocument();
  });

  it('does not validate dependency rules on initial mount', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ email: '', confirmEmail: '' }}>
        <FormItem name='email' label='Email'>
          {({ field }) => <Input type='text' aria-label='Email' {...field} />}
        </FormItem>
        <FormItem
          name='confirmEmail'
          label='Confirm Email'
          dependencies={['email']}
          rules={{
            validate: () => 'Emails do not match'
          }}
        >
          {({ field }) => <Input type='text' aria-label='Confirm Email' {...field} />}
        </FormItem>
      </Form>
    );

    expect(screen.queryByText('Emails do not match')).not.toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', { name: /^email$/i });
    await user.type(emailInput, 'a');
    expect(await screen.findByText('Emails do not match')).toBeInTheDocument();
  });

  it('validates on blur when validateTrigger is onBlur', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem name='email' label='Email' rules={{ required: 'Email is required' }} validateTrigger='onBlur'>
          {({ field }) => <Input type='text' aria-label='Email' {...field} />}
        </FormItem>
        <button type='button'>Outside</button>
      </Form>
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.click(emailInput);
    await user.click(screen.getByText('Outside'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('re-renders shouldUpdate items', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ first: '' }}>
        <FormItem name='first' label='First'>
          {({ field }) => <Input type='text' aria-label='First' {...field} />}
        </FormItem>
        <FormItem shouldUpdate watchNames={['first']}>
          {({ values }) => <div>Preview: {values.first}</div>}
        </FormItem>
      </Form>
    );

    const firstInput = screen.getByRole('textbox', { name: /first/i });
    await user.type(firstInput, 'Ada');
    expect(screen.getByText('Preview: Ada')).toBeInTheDocument();
  });

  it('re-renders when shouldUpdate is true', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ first: '' }}>
        <FormItem name='first' label='First'>
          {({ field }) => <Input type='text' aria-label='First' {...field} />}
        </FormItem>
        <FormItem shouldUpdate>
          {({ values }) => <div>Mirror: {values.first}</div>}
        </FormItem>
      </Form>
    );

    const firstInput = screen.getByRole('textbox', { name: /first/i });
    await user.type(firstInput, 'Ada');
    expect(screen.getByText('Mirror: Ada')).toBeInTheDocument();
  });

  it('does not crash when FormItem has name without Form context', () => {
    render(
      <FormItem name='email' label='Email'>
        <Input type='text' />
      </FormItem>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      '[FormItem] `name` prop is set but no form control found. Wrap FormItem inside a <Form> component.'
    );
  });

  it('filters onValuesChange when watchNames is set', async () => {
    const user = userEvent.setup();
    const onValuesChange = jest.fn();
    render(
      <Form
        defaultValues={{ email: '', name: '' }}
        onValuesChange={onValuesChange}
        watchNames={['email']}
      >
        <FormItem name='email' label='Email'>
          {({ field }) => <Input type='text' aria-label='Email' {...field} />}
        </FormItem>
        <FormItem name='name' label='Name'>
          {({ field }) => <Input type='text' aria-label='Name' {...field} />}
        </FormItem>
      </Form>
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await user.type(nameInput, 'Ada');
    expect(onValuesChange).not.toHaveBeenCalled();

    await user.type(emailInput, 'a');
    expect(onValuesChange).toHaveBeenCalled();
  });

  it('validateFirst stops at first validator', async () => {
    const user = userEvent.setup();
    const first = jest.fn(() => 'First error');
    const second = jest.fn(() => 'Second error');
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem
          name='email'
          label='Email'
          validateFirst
          rules={{ validate: { first, second } }}
        >
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <button type='submit'>Submit</button>
      </Form>
    );

    await user.click(screen.getByText('Submit'));
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('validateFirst parallel runs all validators', async () => {
    const user = userEvent.setup();
    const first = jest.fn(() => 'First error');
    const second = jest.fn(() => 'Second error');
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem
          name='email'
          label='Email'
          validateFirst='parallel'
          rules={{ validate: { first, second } }}
        >
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <button type='submit'>Submit</button>
      </Form>
    );

    await user.click(screen.getByText('Submit'));
    expect(first).toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('debounces validation when validateDebounce is set', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem
          name='email'
          label='Email'
          validateTrigger='onChange'
          validateDebounce={300}
          rules={{ validate: (value) => (value?.length ?? 0) >= 3 || 'Too short' }}
        >
          {({ field }) => <Input type='text' aria-label='Email' {...field} />}
        </FormItem>
      </Form>
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, 'ab');
    expect(screen.queryByText('Too short')).not.toBeInTheDocument();

    jest.advanceTimersByTime(300);
    expect(await screen.findByText('Too short')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('preserves child onChange and onBlur handlers for direct child usage', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const onBlur = jest.fn();
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem name='email' label='Email'>
          <Input type='text' aria-label='Email' onChange={onChange} onBlur={onBlur} />
        </FormItem>
        <button type='button'>Outside</button>
      </Form>
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, 'a');
    expect(onChange).toHaveBeenCalled();

    await user.click(screen.getByText('Outside'));
    expect(onBlur).toHaveBeenCalled();
  });

  it('keeps child disabled when form disabled is false', () => {
    render(
      <Form disabled={false} defaultValues={{ email: '' }}>
        <FormItem name='email' label='Email'>
          <Input type='text' aria-label='Email' disabled />
        </FormItem>
      </Form>
    );

    expect(screen.getByRole('textbox', { name: /email/i })).toBeDisabled();
  });
});
