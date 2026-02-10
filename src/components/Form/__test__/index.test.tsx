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
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
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
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <FormItem
          name='confirmEmail'
          label='Confirm Email'
          dependencies={['email']}
          rules={{
            validate: (value, values) => value === values.email || 'Emails do not match'
          }}
        >
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
      </Form>
    );

    const [emailInput] = screen.getAllByRole('textbox');
    await user.type(emailInput, 'test@1money.com');
    expect(await screen.findByText('Emails do not match')).toBeInTheDocument();
  });

  it('validates on blur when validateTrigger is onBlur', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ email: '' }}>
        <FormItem name='email' label='Email' rules={{ required: 'Email is required' }} validateTrigger='onBlur'>
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <button type='button'>Outside</button>
      </Form>
    );

    const [emailInput] = screen.getAllByRole('textbox');
    await user.click(emailInput);
    await user.click(screen.getByText('Outside'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('re-renders shouldUpdate items', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ first: '' }}>
        <FormItem name='first' label='First'>
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <FormItem shouldUpdate watchNames={['first']}>
          {({ values }) => <div>Preview: {values.first}</div>}
        </FormItem>
      </Form>
    );

    const [firstInput] = screen.getAllByRole('textbox');
    await user.type(firstInput, 'Ada');
    expect(screen.getByText('Preview: Ada')).toBeInTheDocument();
  });

  it('re-renders when shouldUpdate is true', async () => {
    const user = userEvent.setup();
    render(
      <Form defaultValues={{ first: '' }}>
        <FormItem name='first' label='First'>
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <FormItem shouldUpdate>
          {({ values }) => <div>Mirror: {values.first}</div>}
        </FormItem>
      </Form>
    );

    const [firstInput] = screen.getAllByRole('textbox');
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
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
        <FormItem name='name' label='Name'>
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
      </Form>
    );

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[1], 'Ada');
    expect(onValuesChange).not.toHaveBeenCalled();

    await user.type(inputs[0], 'a');
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
          {({ field }) => <Input type='text' {...field} />}
        </FormItem>
      </Form>
    );

    const [emailInput] = screen.getAllByRole('textbox');
    await user.type(emailInput, 'ab');
    expect(screen.queryByText('Too short')).not.toBeInTheDocument();

    jest.advanceTimersByTime(300);
    expect(await screen.findByText('Too short')).toBeInTheDocument();
    jest.useRealTimers();
  });
});
