import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProFormText } from '../fields';
import { DrawerForm, ModalForm, QueryFilter, StepsForm } from '../layouts';

describe('ProForm layouts', () => {
  let consoleErrorSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;

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
      // eslint-disable-next-line no-console
      console.log(message, ...optionalParams);
    });

    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation((message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
      if (typeof message === 'string' && errorMessage.includes('[FormItem]')) return;
      // eslint-disable-next-line no-console
      console.log(message, ...optionalParams);
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  it('auto closes ModalForm when onFinish resolves truthy', async () => {
    const user = userEvent.setup();

    render(
      <ModalForm
        title='Create User'
        trigger={<button type='button'>Open</button>}
        onFinish={async () => true}
      >
        <ProFormText name='email' label='Email' />
      </ModalForm>
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Create User')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.queryByText('Create User')).not.toBeInTheDocument();
    });
  });

  it('opens DrawerForm with trigger', async () => {
    const user = userEvent.setup();

    render(
      <DrawerForm title='Drawer Title' trigger={<button type='button'>Open Drawer</button>}>
        <ProFormText name='email' label='Email' />
      </DrawerForm>
    );

    await user.click(screen.getByRole('button', { name: 'Open Drawer' }));
    expect(screen.getByText('Drawer Title')).toBeInTheDocument();
  });

  it('matches snapshot for opened ModalForm and DrawerForm', async () => {
    const { unmount } = render(
      <ModalForm open title='Snapshot Modal'>
        <ProFormText name='email' label='Email' />
      </ModalForm>
    );

    await waitFor(() => {
      expect(screen.getByText('Snapshot Modal')).toBeInTheDocument();
    });
    expect(document.querySelector('.p-dialog')).toMatchSnapshot('modal-opened');

    unmount();

    render(
      <DrawerForm open title='Snapshot Drawer'>
        <ProFormText name='email' label='Email' />
      </DrawerForm>
    );

    await waitFor(() => {
      expect(screen.getByText('Snapshot Drawer')).toBeInTheDocument();
    });
    expect(document.querySelector('.p-sidebar')).toMatchSnapshot('drawer-opened');
  });

  it('validates each step and submits merged values on last step', async () => {
    const user = userEvent.setup();
    const onFinish = jest.fn();

    render(
      <StepsForm onFinish={onFinish}>
        <StepsForm.StepForm title='Step A'>
          <ProFormText name='firstName' label='First Name' rules={{ required: 'Required' }} />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='Step B'>
          <ProFormText name='lastName' label='Last Name' rules={{ required: 'Required' }} />
        </StepsForm.StepForm>
      </StepsForm>
    );

    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(await screen.findByText('Required')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Next' }));

    expect(screen.getByText('Last Name')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox'), 'Lovelace');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({ firstName: 'Ada', lastName: 'Lovelace' });
    });
  });

  it('hides steps actions when submitter=false', () => {
    render(
      <StepsForm submitter={false}>
        <StepsForm.StepForm title='Step A'>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='Step B'>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Submit' })).not.toBeInTheDocument();
  });

  it('supports StepsForm submitter texts, button props, and callbacks', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const onReset = jest.fn();

    render(
      <StepsForm
        submitter={{
          prevText: 'Back',
          nextText: 'Continue',
          submitText: 'Finish',
          submitButtonProps: { className: 'steps-submit-btn' },
          resetButtonProps: { className: 'steps-prev-btn' },
          onSubmit,
          onReset,
        }}
      >
        <StepsForm.StepForm title='Step A'>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='Step B'>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    expect(document.querySelector('.steps-submit-btn')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    expect(document.querySelector('.steps-prev-btn')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Finish' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('passes working submit/reset actions to StepsForm submitter.render', async () => {
    const user = userEvent.setup();
    const onFinish = jest.fn();
    const renderSpy = jest.fn(({ submit, reset }) => (
      <div>
        <button type='button' onClick={reset}>Custom Previous</button>
        <button type='button' onClick={submit}>Custom Submit</button>
      </div>
    ));

    render(
      <StepsForm
        onFinish={onFinish}
        submitter={{ render: renderSpy }}
      >
        <StepsForm.StepForm title='Step A'>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='Step B'>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    expect(renderSpy).toHaveBeenCalled();

    await user.type(screen.getByRole('textbox'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Custom Submit' }));
    expect(screen.getByText('Last Name')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Custom Previous' }));
    expect(screen.getByText('First Name')).toBeInTheDocument();

    const firstNameInput = screen.getByRole('textbox');
    await user.clear(firstNameInput);
    await user.type(firstNameInput, 'Grace');
    await user.click(screen.getByRole('button', { name: 'Custom Submit' }));

    await user.type(screen.getByRole('textbox'), 'Hopper');
    await user.click(screen.getByRole('button', { name: 'Custom Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({ firstName: 'Grace', lastName: 'Hopper' });
    });
  });

  it('clears downstream step values when navigating backward', async () => {
    const user = userEvent.setup();
    const onFinish = jest.fn();

    render(
      <StepsForm onFinish={onFinish}>
        <StepsForm.StepForm title='Step A'>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='Step B'>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    // Fill step A and advance
    await user.type(screen.getByRole('textbox'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Next' }));

    // Fill step B
    await user.type(screen.getByRole('textbox'), 'Lovelace');

    // Navigate backward — should clear step B values
    await user.click(screen.getByRole('button', { name: 'Previous' }));

    // Change step A value and advance again
    const textbox = screen.getByRole('textbox');
    await user.clear(textbox);
    await user.type(textbox, 'Grace');
    await user.click(screen.getByRole('button', { name: 'Next' }));

    // Step B should NOT have stale "Lovelace" value pre-filled
    // Fill fresh value and submit
    await user.type(screen.getByRole('textbox'), 'Hopper');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith({ firstName: 'Grace', lastName: 'Hopper' });
    });
  });

  it('applies stepsProps and stepProps to current step container', () => {
    render(
      <StepsForm stepsProps={{ 'data-testid': 'steps-root' }}>
        <StepsForm.StepForm title='A' stepProps={{ 'data-testid': 'step-root' }}>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='B'>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    expect(screen.getByTestId('steps-root')).toBeInTheDocument();
    expect(screen.getByTestId('step-root')).toBeInTheDocument();
  });

  it('matches snapshot for StepsForm first and last steps', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <StepsForm stepsProps={{ 'data-testid': 'steps-snapshot' }}>
        <StepsForm.StepForm title='A' stepProps={{ 'data-testid': 'step-snapshot-a' }}>
          <ProFormText name='firstName' label='First Name' />
        </StepsForm.StepForm>
        <StepsForm.StepForm title='B' stepProps={{ 'data-testid': 'step-snapshot-b' }}>
          <ProFormText name='lastName' label='Last Name' />
        </StepsForm.StepForm>
      </StepsForm>
    );

    expect(screen.getByTestId('steps-snapshot')).toBeInTheDocument();
    expect(screen.getByTestId('step-snapshot-a')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot('steps-first');

    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByTestId('step-snapshot-b')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot('steps-last');
  });

  it('shows limited fields when collapsed and all fields when expanded', async () => {
    const user = userEvent.setup();

    render(
      <QueryFilter defaultCollapsed defaultColsNumber={2} submitter={{}}>
        <ProFormText name='a' label='A' />
        <ProFormText name='b' label='B' />
        <ProFormText name='c' label='C' />
      </QueryFilter>
    );

    expect(screen.queryByText('C')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Expand' }));

    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('matches snapshot for QueryFilter collapsed and expanded states', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <QueryFilter defaultCollapsed defaultColsNumber={2} submitter={{}}>
        <ProFormText name='a' label='A' />
        <ProFormText name='b' label='B' />
        <ProFormText name='c' label='C' />
      </QueryFilter>
    );

    expect(container.firstChild).toMatchSnapshot('query-collapsed');

    await user.click(screen.getByRole('button', { name: 'Expand' }));
    expect(container.firstChild).toMatchSnapshot('query-expanded');
  });

  it('uses searchConfig text and labelWidth/split styles in QueryFilter', async () => {
    const user = userEvent.setup();
    const onReset = jest.fn();

    render(
      <QueryFilter
        defaultCollapsed
        defaultColsNumber={1}
        split
        labelWidth={120}
        onReset={onReset}
        submitter={{
          searchConfig: {
            expandText: 'More',
            collapseText: 'Less',
          },
        }}
      >
        <ProFormText name='a' label='A' />
        <ProFormText name='b' label='B' />
      </QueryFilter>
    );

    const root = document.querySelector('.om-react-ui-proform-query-filter');
    expect(root).not.toBeNull();
    expect(root).toHaveClass('om-react-ui-proform-query-filter-split');
    expect(root).toHaveStyle('--om-form-label-width: 120px');

    await user.click(screen.getByRole('button', { name: 'More' }));
    expect(screen.getByRole('button', { name: 'Less' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('runs submitter.onReset before QueryFilter onReset', async () => {
    const user = userEvent.setup();
    const order: string[] = [];

    render(
      <QueryFilter
        onReset={() => order.push('query')}
        submitter={{
          onReset: () => order.push('submitter'),
        }}
      >
        <ProFormText name='a' label='A' />
      </QueryFilter>
    );

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(order).toEqual(['submitter', 'query']);
  });

  it('calls QueryFilter submitter.onSubmit when clicking search', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();

    render(
      <QueryFilter
        submitter={{
          onSubmit,
        }}
      >
        <ProFormText name='a' label='A' />
      </QueryFilter>
    );

    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('passes composed actions to QueryFilter submitter.render', () => {
    const renderSpy = jest.fn((_props, dom) => <div data-testid='custom-query-actions'>{dom}</div>);

    render(
      <QueryFilter
        submitter={{
          render: renderSpy,
        }}
      >
        <ProFormText name='a' label='A' />
      </QueryFilter>
    );

    expect(renderSpy).toHaveBeenCalled();
    const [, dom] = renderSpy.mock.calls[0];
    expect(dom).toHaveLength(3);
    expect(screen.getByTestId('custom-query-actions')).toBeInTheDocument();
  });
});
