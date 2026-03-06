# @1money/react-ui

A comprehensive React component library built on PrimeReact, specifically designed for financial applications and modern web interfaces.

[![Build Status](https://github.com/1Money-Co/1money-react-ui/actions/workflows/cicd-npm.yml/badge.svg)](https://github.com/1Money-Co/1money-react-ui/actions/workflows/cicd-npm.yml)
[![NPM downloads](http://img.shields.io/npm/dm/%401money%2Freact-ui.svg?style=flat-square)](https://www.npmjs.com/package/@1money/react-ui)
[![npm version](https://badge.fury.io/js/%401money%2Freact-ui.svg)](https://badge.fury.io/js/%401money%2Freact-ui)
[![install size](https://packagephobia.now.sh/badge?p=%401money%2Freact-ui)](https://packagephobia.now.sh/result?p=%401money%2Freact-ui)
[![license](http://img.shields.io/npm/l/%401money%2Freact-ui.svg)](https://github.com/1money/tpls/blob/master/packages/react-ui/LICENSE)

📖 [Online Documentation & Storybook](https://1money-co.github.io/1money-react-ui/)

English | [简体中文](./README.zh-CN.md)

## ✨ Features

- 🎨 **30+ High-quality Components** - Built on PrimeReact with enhanced styling
- 💰 **Financial Application Ready** - Components designed for fintech interfaces
- 🎯 **TypeScript Support** - Full TypeScript definitions with strict typing
- 📱 **Responsive Design** - Mobile-first approach with TailwindCSS integration
- ♿ **Accessibility First** - WCAG compliant with keyboard navigation
- 🌍 **I18n Ready** - Internationalization support out of the box
- 🎭 **Customizable Theming** - Easy customization with SCSS variables
- 📦 **Tree Shaking** - Optimized bundle size with individual component imports

## 📦 Installation

```bash
# npm
npm install @1money/react-ui

# yarn
yarn add @1money/react-ui

# pnpm
pnpm add @1money/react-ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom primereact primeicons tailwindcss
```

## 🚀 Quick Start

### Basic Setup

```tsx
import '@1money/react-ui/index.css';
import { Button, Input, Modal } from '@1money/react-ui';

function App() {
  return (
    <div className="p-4">
      <Button severity="primary">Get Started</Button>
    </div>
  );
}
```

### Individual Component Imports

For better tree shaking, import components individually:

```tsx
import { Button } from '@1money/react-ui/Button';
import { Input } from '@1money/react-ui/Input';
import { Modal } from '@1money/react-ui/Modal';
import '@1money/react-ui/index.css';
```

## 📋 Component Categories

### 🎮 Form Components
Perfect for building complex forms and data input interfaces.

```tsx
import { Button, Input, Checkbox, Radio, Switch, Select } from '@1money/react-ui';

// Form example
<form className="space-y-4">
  <Input 
    type="text" 
    label="Full Name" 
    placeholder="Enter your name"
    required 
  />
  
  <Input 
    type="number" 
    label="Investment Amount" 
    prefixEle="$"
    placeholder="0.00"
  />
  
  <Select 
    label="Account Type"
    options={[
      { label: 'Checking', value: 'checking' },
      { label: 'Savings', value: 'savings' },
      { label: 'Investment', value: 'investment' }
    ]}
  />
  
  <div className="flex items-center gap-2">
    <Checkbox inputId="terms" />
    <label htmlFor="terms">I agree to the terms and conditions</label>
  </div>
  
  <Button type="submit" severity="primary">
    Create Account
  </Button>
</form>
```

### 💼 Financial Components
Specialized components for financial applications.

```tsx
import { InputAmount, Badge, Progress, Table } from '@1money/react-ui';

// Financial dashboard example
<div className="financial-dashboard">
  <div className="balance-card">
    <h3>Account Balance</h3>
    <InputAmount 
      value={125430.50}
      precision={2}
      disabled
      prefixEle="$"
    />
    <Badge severity="success" value="↑ 12.5%" />
  </div>
  
  <Progress 
    type="ring"
    value={75}
    label="Portfolio Growth"
    color="var(--primary-color)"
  />
</div>
```

### 🎨 Layout & Navigation
Build complex layouts and navigation systems.

```tsx
import { Sidebar, Tab, Menu, Collapse } from '@1money/react-ui';

// Application layout
<div className="app-layout">
  <Sidebar 
    items={[
      { label: 'Dashboard', icon: 'dashboard', command: () => navigate('/dashboard') },
      { label: 'Accounts', icon: 'account-balance', command: () => navigate('/accounts') },
      { label: 'Transactions', icon: 'receipt', command: () => navigate('/transactions') },
      { label: 'Settings', icon: 'settings', command: () => navigate('/settings') }
    ]}
  />
  
  <main className="main-content">
    <Tab 
      items={[
        { label: 'Overview', content: <DashboardOverview /> },
        { label: 'Analytics', content: <Analytics />, count: 3 },
        { label: 'Reports', content: <Reports /> }
      ]}
    />
  </main>
</div>
```

### 📊 Data Display
Present data in tables, lists, and other formats.

```tsx
import { Table, Cell, Typography, Loading } from '@1money/react-ui';

// Transaction table
const transactions = [
  { id: 1, date: '2024-01-15', description: 'Coffee Shop', amount: -4.50, category: 'Food' },
  { id: 2, date: '2024-01-14', description: 'Salary Deposit', amount: 3500.00, category: 'Income' },
  { id: 3, date: '2024-01-13', description: 'Grocery Store', amount: -89.32, category: 'Shopping' }
];

<Table
  data={transactions}
  selectionMode="multiple"
  pagination
  pageSize={10}
>
  <Column field="date" header="Date" />
  <Column field="description" header="Description" />
  <Column 
    field="amount" 
    header="Amount"
    body={(rowData) => (
      <Typography.Body 
        className={rowData.amount > 0 ? 'text-green-600' : 'text-red-600'}
      >
        ${Math.abs(rowData.amount).toFixed(2)}
      </Typography.Body>
    )}
  />
  <Column field="category" header="Category" />
</Table>
```

### 💬 Feedback Components
Provide user feedback and system status.

```tsx
import { Toast, Notification, Message, Progress } from '@1money/react-ui';

// Payment processing feedback
const PaymentFlow = () => {
  const [processing, setProcessing] = useState(false);
  const toast = useRef<Toast>(null);

  const processPayment = async () => {
    setProcessing(true);
    
    try {
      await paymentAPI.process();
      toast.current?.show({
        severity: 'success',
        summary: 'Payment Successful',
        detail: 'Your payment has been processed successfully'
      });
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Payment Failed',
        detail: error.message
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      <Button 
        onClick={processPayment}
        loading={processing}
        disabled={processing}
      >
        Process Payment
      </Button>
      
      {processing && (
        <Progress 
          type="bar"
          mode="indeterminate"
          className="mt-4"
        />
      )}
      
      <Toast ref={toast} />
    </div>
  );
};
```

### 🎭 Interactive Components
Modals, popups, and other interactive elements.

```tsx
import { Modal, Popup, Tooltip, ConfirmPopup } from '@1money/react-ui';

// Account deletion confirmation
const AccountSettings = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <div className="account-settings">
      <Tooltip target=".delete-btn" content="This action cannot be undone">
        <Button 
          className="delete-btn"
          severity="danger"
          outlined
          onClick={() => setDeleteModalVisible(true)}
        >
          Delete Account
        </Button>
      </Tooltip>

      <Modal
        visible={deleteModalVisible}
        onHide={() => setDeleteModalVisible(false)}
        header="Confirm Account Deletion"
        footer={
          <div className="flex gap-2">
            <Button 
              severity="secondary" 
              onClick={() => setDeleteModalVisible(false)}
            >
              Cancel
            </Button>
            <Button 
              severity="danger"
              onClick={handleAccountDeletion}
            >
              Delete Account
            </Button>
          </div>
        }
      >
        <Message 
          severity="warn" 
          text="This will permanently delete your account and all associated data."
        />
        <Typography.Body className="mt-4">
          Are you sure you want to proceed? This action cannot be undone.
        </Typography.Body>
      </Modal>
    </div>
  );
};
```

## 🎨 Theming & Customization

### CSS Custom Properties

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --info-color: #17a2b8;
  
  --border-radius: 6px;
  --font-family: 'Inter', sans-serif;
  --transition-duration: 0.15s;
}
```

### SCSS Theme Tokens

```scss
@use '@/styles/theme' as theme;

.custom-surface {
  color: theme.$color-primary;
  background-color: theme.$color-primary-light;
}
```

### Component-level Customization

```tsx
// Using prefixCls for component-level styling
<Button 
  prefixCls="custom-button"
  className="my-custom-styles"
>
  Custom Button
</Button>
```

```css
.custom-button {
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}
```

## 🛠️ Development

### Prerequisites

- Node.js >= 16
- pnpm (recommended)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/1Money-Co/1money-react-ui.git
cd 1money-react-ui

# Install dependencies
pnpm install

# Start development server (Storybook)
pnpm dev

# Build components
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

### MCP Server (Claude/agents)

The repo ships a lightweight MCP server that exposes all `src/components` files as resources for tools like Claude Desktop/CLI.

1. Start the server (defaults to `http://127.0.0.1:8686/mcp`):
   ```bash
   MCP_HOST=127.0.0.1 MCP_PORT=8686 pnpm dev:mcp
   ```
2. Point your MCP client to the endpoint URL above.

Notes:
- Resources are auto-registered from `src/components/*` with per-file `file://` URIs and MIME types.
- Restart the server after adding/removing component files so the list refreshes.

### Project Structure

```
src/
├── components/          # All UI components
│   ├── Button/         # Individual component
│   │   ├── Button.tsx  # Component implementation
│   │   ├── interface.ts # TypeScript interfaces
│   │   ├── index.ts    # Export barrel
│   │   ├── style/      # Component styles
│   │   └── README.md   # Component documentation
│   └── ...
├── styles/             # Shared theme tokens and Sass style system
├── utils/              # Utility functions
└── index.ts           # Main library export
```

## 📚 Documentation

- 📖 [Storybook Documentation](https://1money-co.github.io/1money-react-ui/)
- 🔧 [Development Guide](./DEV.md)
- 📝 [Component Documentation](./src/components/)
- 🤖 [Claude Code Guide](./CLAUDE.md)

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Run linting and tests: `pnpm lint && pnpm test`
5. Create a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://1money-co.github.io/1money-react-ui/)
- 🐛 [Issues](https://github.com/1Money-Co/1money-react-ui/issues)

---

Made with ❤️ by the [@1money](https://github.com/1Money-Co) team
