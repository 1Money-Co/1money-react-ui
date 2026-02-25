import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import {
  ProForm,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormDependency,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormMultiSelect,
  ProFormPassword,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from './index';
import {
  DrawerForm,
  ModalForm,
  QueryFilter,
  StepForm,
  StepsForm,
} from './layouts';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProForm> = {
  title: 'Components/ProForm',
  component: ProForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ProForm>;

// ============================================
// Basic Form Examples
// ============================================

const roleOptions = [
  { label: 'User', value: 'user' },
  { label: 'Admin', value: 'admin' },
  { label: 'Reviewer', value: 'reviewer' },
];

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
];

const permissionOptions = [
  { label: 'Read', value: 'read' },
  { label: 'Write', value: 'write' },
  { label: 'Delete', value: 'delete' },
  { label: 'Admin', value: 'admin' },
];

export const Basic: Story = {
  render: () => (
    <ProForm
      defaultValues={{ email: '', password: '', role: 'user' }}
      onFinish={action('onFinish')}
    >
      <ProFormText
        name='email'
        label='Email'
        placeholder='you@company.com'
        rules={{ required: 'Email is required' }}
      />
      <ProFormPassword
        name='password'
        label='Password'
        rules={{ required: 'Password is required' }}
      />
      <ProFormSelect
        name='role'
        label='Role'
        fieldProps={{ options: roleOptions, placeholder: 'Select a role' }}
      />
    </ProForm>
  ),
};

export const AllFieldTypes: Story = {
  name: 'All Field Types',
  render: () => (
    <ProForm
      defaultValues={{
        username: '',
        password: '',
        bio: '',
        age: 25,
        salary: 50000,
        role: 'user',
        permissions: ['read'],
        status: 'active',
        newsletter: false,
        terms: false,
      }}
      onFinish={action('onFinish')}
    >
      <ProFormText
        name='username'
        label='Username'
        placeholder='Enter username'
        rules={{ required: 'Username is required' }}
      />
      <ProFormPassword
        name='password'
        label='Password'
        placeholder='Enter password'
      />
      <ProFormTextArea
        name='bio'
        label='Bio'
        placeholder='Tell us about yourself'
        fieldProps={{ rows: 4 }}
      />
      <ProFormDigit
        name='age'
        label='Age'
        fieldProps={{ min: 0, max: 120 }}
      />
      <ProFormMoney
        name='salary'
        label='Salary'
        fieldProps={{ currency: 'USD' }}
      />
      <ProFormSelect
        name='role'
        label='Role'
        fieldProps={{ options: roleOptions }}
      />
      <ProFormMultiSelect
        name='permissions'
        label='Permissions'
        fieldProps={{ options: permissionOptions }}
      />
      <ProFormRadio
        name='status'
        label='Status'
        fieldProps={{
          items: [
            { key: 'active', label: 'Active' },
            { key: 'inactive', label: 'Inactive' },
            { key: 'pending', label: 'Pending' },
          ],
        }}
      />
      <ProFormSwitch
        name='newsletter'
        label='Subscribe to Newsletter'
      />
      <ProFormCheckbox
        name='terms'
        label='I agree to the Terms of Service'
      />
    </ProForm>
  ),
};

// ============================================
// Form with Async Data Loading
// ============================================

export const WithRequest: Story = {
  name: 'With Async Request',
  render: () => (
    <ProForm
      params={{ userId: 'u_1' }}
      request={async (params) => {
        action('request')(params);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
          email: 'ada@1money.com',
          password: 'secret',
          role: 'admin',
        };
      }}
      onFinish={action('onFinish')}
    >
      <ProFormText name='email' label='Email' />
      <ProFormPassword name='password' label='Password' />
      <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
    </ProForm>
  ),
};

// ============================================
// Readonly Mode
// ============================================

export const ReadonlyMode: Story = {
  name: 'Readonly Mode',
  render: () => (
    <ProForm
      readonly
      defaultValues={{
        email: 'user@example.com',
        role: 'admin',
        active: true,
        permissions: ['read', 'write'],
      }}
      submitter={false}
    >
      <ProFormText name='email' label='Email' />
      <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
      <ProFormSwitch name='active' label='Active' />
      <ProFormMultiSelect name='permissions' label='Permissions' fieldProps={{ options: permissionOptions }} />
    </ProForm>
  ),
};

// ============================================
// Custom Submitter
// ============================================

export const CustomSubmitter: Story = {
  name: 'Custom Submitter',
  render: () => (
    <ProForm
      defaultValues={{ name: '' }}
      onFinish={action('onFinish')}
      submitter={{
        submitText: 'Save Changes',
        resetText: 'Clear Form',
        submitButtonProps: { severity: 'success' },
        resetButtonProps: { severity: 'secondary' },
        render: (_props, dom) => (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            {dom}
            <Button type='button' severity='info' onClick={() => action('custom')('Custom action')}>
              Custom Action
            </Button>
          </div>
        ),
      }}
    >
      <ProFormText name='name' label='Name' rules={{ required: 'Name is required' }} />
    </ProForm>
  ),
};

// ============================================
// Form Validation
// ============================================

export const WithValidation: Story = {
  name: 'With Validation',
  render: () => (
    <ProForm
      defaultValues={{ email: '', password: '', confirmPassword: '', age: 0 }}
      onFinish={action('onFinish')}
    >
      <ProFormText
        name='email'
        label='Email'
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />
      <ProFormPassword
        name='password'
        label='Password'
        rules={{
          required: 'Password is required',
          minLength: { value: 8, message: 'Password must be at least 8 characters' },
        }}
      />
      <ProFormPassword
        name='confirmPassword'
        label='Confirm Password'
        rules={{
          required: 'Please confirm your password',
          validate: (value, formValues) =>
            value === formValues.password || 'Passwords do not match',
        }}
      />
      <ProFormDigit
        name='age'
        label='Age'
        rules={{
          required: 'Age is required',
          min: { value: 18, message: 'Must be at least 18 years old' },
          max: { value: 100, message: 'Must be under 100 years old' },
        }}
      />
    </ProForm>
  ),
};

// ============================================
// ProFormDependency
// ============================================

export const WithDependency: Story = {
  name: 'With Field Dependencies',
  render: () => (
    <ProForm
      defaultValues={{ showDetails: false, details: '' }}
      onFinish={action('onFinish')}
    >
      <ProFormSwitch name='showDetails' label='Show Details' />
      <ProFormDependency name={['showDetails']}>
        {({ showDetails }) =>
          showDetails ? (
            <ProFormTextArea
              name='details'
              label='Details'
              placeholder='Enter additional details...'
              rules={{ required: 'Details are required when enabled' }}
            />
          ) : null
        }
      </ProFormDependency>
    </ProForm>
  ),
};

export const ConditionalFields: Story = {
  name: 'Conditional Fields',
  render: () => (
    <ProForm
      defaultValues={{ userType: 'individual', companyName: '', taxId: '' }}
      onFinish={action('onFinish')}
    >
      <ProFormRadio
        name='userType'
        label='User Type'
        fieldProps={{
          items: [
            { key: 'individual', label: 'Individual' },
            { key: 'company', label: 'Company' },
          ],
        }}
      />
      <ProFormDependency name={['userType']}>
        {({ userType }) =>
          userType === 'company' ? (
            <>
              <ProFormText
                name='companyName'
                label='Company Name'
                rules={{ required: 'Company name is required' }}
              />
              <ProFormText
                name='taxId'
                label='Tax ID'
                rules={{ required: 'Tax ID is required' }}
              />
            </>
          ) : null
        }
      </ProFormDependency>
    </ProForm>
  ),
};

// ============================================
// ProFormList - Dynamic List
// ============================================

export const DynamicList: Story = {
  name: 'Dynamic List',
  render: () => (
    <ProForm
      defaultValues={{ members: [{ name: 'Ada', email: 'ada@example.com' }] }}
      onFinish={action('onFinish')}
    >
      <ProFormList
        name='members'
        label='Team Members'
        initialValue={[{ name: 'Ada', email: 'ada@example.com' }]}
        creatorButtonProps={{ children: 'Add Member' }}
      >
        {(fields) =>
          fields.map((field, index) => (
            <div key={field.key} style={{ display: 'flex', gap: 16 }}>
              <ProFormText
                name={`members.${index}.name`}
                label={`Name ${index + 1}`}
                rules={{ required: 'Name is required' }}
              />
              <ProFormText
                name={`members.${index}.email`}
                label={`Email ${index + 1}`}
                rules={{ required: 'Email is required' }}
              />
            </div>
          ))
        }
      </ProFormList>
    </ProForm>
  ),
};

export const SortableList: Story = {
  name: 'Sortable List',
  render: () => (
    <ProForm
      defaultValues={{
        tasks: [
          { title: 'Task 1', priority: 'high' },
          { title: 'Task 2', priority: 'medium' },
          { title: 'Task 3', priority: 'low' },
        ],
      }}
      onFinish={action('onFinish')}
    >
      <ProFormList
        name='tasks'
        label='Tasks (Drag to reorder)'
        sortable
        min={1}
        max={5}
        creatorButtonProps={{ children: 'Add Task' }}
        onAfterAdd={action('onAfterAdd')}
        onAfterRemove={action('onAfterRemove')}
      >
        {(fields) =>
          fields.map((field, index) => (
            <div key={field.key} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <ProFormText
                name={`tasks.${index}.title`}
                label='Title'
                rules={{ required: 'Title is required' }}
              />
              <ProFormSelect
                name={`tasks.${index}.priority`}
                label='Priority'
                fieldProps={{
                  options: [
                    { label: 'High', value: 'high' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Low', value: 'low' },
                  ],
                }}
              />
            </div>
          ))
        }
      </ProFormList>
    </ProForm>
  ),
};

// ============================================
// ModalForm
// ============================================

export const InModal: Story = {
  name: 'Modal Form',
  render: () => (
    <ModalForm
      title='Create User'
      trigger={<Button type='button'>Open Modal Form</Button>}
      onFinish={async (values) => {
        action('onFinish')(values);
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
      }}
    >
      <ProFormText name='email' label='Email' rules={{ required: 'Email is required' }} />
      <ProFormPassword name='password' label='Password' rules={{ required: 'Password is required' }} />
      <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
    </ModalForm>
  ),
};

export const ControlledModal: Story = {
  name: 'Controlled Modal Form',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button type='button' onClick={() => setOpen(true)}>Open Controlled Modal</Button>
        <ModalForm
          title='Edit User'
          open={open}
          onOpenChange={setOpen}
          width={600}
          modalProps={{ closable: true }}
          onFinish={async (values) => {
            action('onFinish')(values);
            return true;
          }}
        >
          <ProFormText name='name' label='Name' />
          <ProFormText name='email' label='Email' />
        </ModalForm>
      </>
    );
  },
};

// ============================================
// DrawerForm
// ============================================

export const InDrawer: Story = {
  name: 'Drawer Form',
  render: () => (
    <DrawerForm
      title='Edit Profile'
      width={400}
      trigger={<Button type='button'>Open Drawer Form</Button>}
      onFinish={async (values) => {
        action('onFinish')(values);
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
      }}
    >
      <ProFormText name='firstName' label='First Name' />
      <ProFormText name='lastName' label='Last Name' />
      <ProFormTextArea name='bio' label='Bio' fieldProps={{ rows: 4 }} />
      <ProFormSwitch name='publicProfile' label='Public Profile' />
    </DrawerForm>
  ),
};

// ============================================
// StepsForm
// ============================================

export const MultiStepForm: Story = {
  name: 'Multi-Step Form',
  render: () => (
    <StepsForm
      onFinish={async (values) => {
        action('onFinish')(values);
      }}
    >
      <StepForm title='Basic Info'>
        <ProFormText name='firstName' label='First Name' rules={{ required: 'Required' }} />
        <ProFormText name='lastName' label='Last Name' rules={{ required: 'Required' }} />
        <ProFormText name='email' label='Email' rules={{ required: 'Required' }} />
      </StepForm>
      <StepForm title='Account Setup'>
        <ProFormPassword name='password' label='Password' rules={{ required: 'Required' }} />
        <ProFormPassword name='confirmPassword' label='Confirm Password' rules={{ required: 'Required' }} />
      </StepForm>
      <StepForm title='Preferences'>
        <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
        <ProFormSwitch name='newsletter' label='Subscribe to Newsletter' />
        <ProFormCheckbox name='terms' label='I agree to Terms of Service' />
      </StepForm>
    </StepsForm>
  ),
};

// ============================================
// QueryFilter
// ============================================

export const SearchFilter: Story = {
  name: 'Query Filter',
  render: () => (
    <QueryFilter
      defaultValues={{ keyword: '', status: '', dateRange: '' }}
      onFinish={action('onSearch')}
      onReset={action('onReset')}
      defaultCollapsed={false}
    >
      <ProFormText name='keyword' label='Keyword' placeholder='Search...' />
      <ProFormSelect
        name='status'
        label='Status'
        fieldProps={{ options: statusOptions, placeholder: 'All' }}
      />
      <ProFormSelect
        name='role'
        label='Role'
        fieldProps={{ options: roleOptions, placeholder: 'All' }}
      />
    </QueryFilter>
  ),
};

export const CollapsibleFilter: Story = {
  name: 'Collapsible Query Filter',
  render: () => (
    <QueryFilter
      defaultValues={{}}
      onFinish={action('onSearch')}
      onReset={action('onReset')}
      defaultCollapsed
      defaultColsNumber={2}
      submitter={{
        searchConfig: {
          collapseText: 'Less Filters',
          expandText: 'More Filters',
        },
      }}
    >
      <ProFormText name='name' label='Name' />
      <ProFormText name='email' label='Email' />
      <ProFormSelect name='status' label='Status' fieldProps={{ options: statusOptions }} />
      <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
      <ProFormText name='department' label='Department' />
      <ProFormText name='location' label='Location' />
    </QueryFilter>
  ),
};

// ============================================
// Loading State
// ============================================

export const LoadingState: Story = {
  name: 'Loading State',
  render: () => (
    <ProForm
      loading
      defaultValues={{ email: 'loading@example.com' }}
      onFinish={action('onFinish')}
    >
      <ProFormText name='email' label='Email' />
      <ProFormPassword name='password' label='Password' />
    </ProForm>
  ),
};

// ============================================
// Checkbox Group
// ============================================

export const CheckboxGroupExample: Story = {
  name: 'Checkbox Group',
  render: () => (
    <ProForm
      defaultValues={{ permissions: ['read'] }}
      onFinish={action('onFinish')}
    >
      <ProFormCheckboxGroup
        name='permissions'
        label='Permissions'
        fieldProps={{
          items: [
            { key: 'read', label: 'Read' },
            { key: 'write', label: 'Write' },
            { key: 'delete', label: 'Delete' },
            { key: 'admin', label: 'Admin' },
          ],
        }}
      />
    </ProForm>
  ),
};

// ============================================
// Field Width Options
// ============================================

export const FieldWidths: Story = {
  name: 'Field Width Options',
  render: () => (
    <ProForm
      defaultValues={{}}
      onFinish={action('onFinish')}
    >
      <ProFormText name='small' label='Small (sm)' width='sm' placeholder='Small width' />
      <ProFormText name='medium' label='Medium (md)' width='md' placeholder='Medium width' />
      <ProFormText name='large' label='Large (lg)' width='lg' placeholder='Large width' />
      <ProFormText name='xlarge' label='Extra Large (xl)' width='xl' placeholder='Extra large width' />
      <ProFormText name='custom' label='Custom (200px)' width={200} placeholder='200px width' />
    </ProForm>
  ),
};

// ============================================
// No Submitter
// ============================================

export const WithoutSubmitter: Story = {
  name: 'Without Submitter (External Control)',
  render: () => {
    const form = useForm<{ name: string; email: string }>({ defaultValues: { name: '', email: '' } });
    const onFinish = action('onFinish');

    return (
      <div>
        <ProForm
          form={form}
          defaultValues={{ name: '' }}
          submitter={false}
          onFinish={onFinish}
        >
          <ProFormText name='name' label='Name' />
          <ProFormText name='email' label='Email' />
        </ProForm>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <Button type='button' onClick={() => void form.handleSubmit(onFinish)()}>
            External Submit
          </Button>
          <Button type='button' severity='secondary' onClick={() => form.reset()}>
            External Reset
          </Button>
        </div>
      </div>
    );
  },
};
