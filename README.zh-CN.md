# @1money/react-ui

基于 PrimeReact 构建的综合性 React 组件库，专为金融应用程序和现代 Web 界面设计。

[![Build Status](https://github.com/1Money-Co/1money-react-ui/actions/workflows/cicd-npm.yml/badge.svg)](https://github.com/1Money-Co/1money-react-ui/actions/workflows/cicd-npm.yml)
[![NPM downloads](http://img.shields.io/npm/dm/%401money%2Freact-ui.svg?style=flat-square)](https://www.npmjs.com/package/@1money/react-ui)
[![npm version](https://badge.fury.io/js/%401money%2Freact-ui.svg)](https://badge.fury.io/js/%401money%2Freact-ui)
[![install size](https://packagephobia.now.sh/badge?p=%401money%2Freact-ui)](https://packagephobia.now.sh/result?p=%401money%2Freact-ui)
[![license](http://img.shields.io/npm/l/%401money%2Freact-ui.svg)](https://github.com/1money/tpls/blob/master/packages/react-ui/LICENSE)

📖 [在线文档 & Storybook](https://1money-co.github.io/1money-react-ui/)

[English](./README.md) | 简体中文

## ✨ 特性

- 🎨 **30+ 高质量组件** - 基于 PrimeReact 构建，具有增强样式
- 💰 **金融应用就绪** - 专为金融科技界面设计的组件
- 🎯 **TypeScript 支持** - 完整的 TypeScript 定义和严格类型检查
- 📱 **响应式设计** - 移动优先方法，集成 TailwindCSS
- ♿ **无障碍优先** - 符合 WCAG 标准，支持键盘导航
- 🌍 **国际化就绪** - 开箱即用的国际化支持
- 🎭 **可自定义主题** - 使用 SCSS 变量轻松自定义
- 📦 **Tree Shaking** - 通过单独组件导入优化包大小

## 📦 安装

```bash
# npm
npm install @1money/react-ui

# yarn
yarn add @1money/react-ui

# pnpm
pnpm add @1money/react-ui
```

### 同伴依赖

确保已安装所需的同伴依赖：

```bash
npm install react react-dom primereact primeicons tailwindcss
```

## 🚀 快速开始

### 基础设置

```tsx
import '@1money/react-ui/index.css';
import { Button, Input, Modal } from '@1money/react-ui';

function App() {
  return (
    <div className="p-4">
      <Button severity="primary">开始使用</Button>
    </div>
  );
}
```

### 单独组件导入

为了更好的 tree shaking，可以单独导入组件：

```tsx
import { Button } from '@1money/react-ui/Button';
import { Input } from '@1money/react-ui/Input';
import { Modal } from '@1money/react-ui/Modal';
import '@1money/react-ui/index.css';
```

## 📋 组件分类

### 🎮 表单组件
构建复杂表单和数据输入界面的完美选择。

```tsx
import { Button, Input, Checkbox, Radio, Switch, Select } from '@1money/react-ui';

// 表单示例
<form className="space-y-4">
  <Input 
    type="text" 
    label="姓名" 
    placeholder="请输入您的姓名"
    required
  />
  
  <Input 
    type="number" 
    label="投资金额" 
    prefixEle="¥"
    placeholder="0.00"
  />
  
  <Select 
    label="账户类型"
    options={[
      { label: '活期账户', value: 'checking' },
      { label: '储蓄账户', value: 'savings' },
      { label: '投资账户', value: 'investment' }
    ]}
  />
  
  <div className="flex items-center gap-2">
    <Checkbox inputId="terms" />
    <label htmlFor="terms">我同意条款和条件</label>
  </div>
  
  <Button type="submit" severity="primary">
    创建账户
  </Button>
</form>
```

### 💼 金融组件
专为金融应用程序设计的专业组件。

```tsx
import { InputAmount, Badge, Progress, Table } from '@1money/react-ui';

// 金融仪表板示例
<div className="financial-dashboard">
  <div className="balance-card">
    <h3>账户余额</h3>
    <InputAmount 
      value={125430.50}
      precision={2}
      disabled
      prefixEle="¥"
    />
    <Badge severity="success" value="↑ 12.5%" />
  </div>
  
  <Progress 
    type="ring"
    value={75}
    label="投资组合增长"
    color="var(--primary-color)"
  />
</div>
```

### 🎨 布局和导航
构建复杂布局和导航系统。

```tsx
import { Sidebar, Tab, Menu, Collapse } from '@1money/react-ui';

// 应用程序布局
<div className="app-layout">
  <Sidebar 
    items={[
      { label: '仪表板', icon: 'dashboard', command: () => navigate('/dashboard') },
      { label: '账户', icon: 'account-balance', command: () => navigate('/accounts') },
      { label: '交易记录', icon: 'receipt', command: () => navigate('/transactions') },
      { label: '设置', icon: 'settings', command: () => navigate('/settings') }
    ]}
  />
  
  <main className="main-content">
    <Tab 
      items={[
        { label: '概览', content: <DashboardOverview /> },
        { label: '分析', content: <Analytics />, count: 3 },
        { label: '报告', content: <Reports /> }
      ]}
    />
  </main>
</div>
```

### 📊 数据展示
以表格、列表和其他格式展示数据。

```tsx
import { Table, Cell, Typography, Loading } from '@1money/react-ui';

// 交易记录表格
const transactions = [
  { id: 1, date: '2024-01-15', description: '咖啡店', amount: -4.50, category: '餐饮' },
  { id: 2, date: '2024-01-14', description: '工资入账', amount: 3500.00, category: '收入' },
  { id: 3, date: '2024-01-13', description: '超市购物', amount: -89.32, category: '购物' }
];

<Table
  data={transactions}
  selectionMode="multiple"
  pagination
  pageSize={10}
>
  <Column field="date" header="日期" />
  <Column field="description" header="描述" />
  <Column 
    field="amount" 
    header="金额"
    body={(rowData) => (
      <Typography.Body 
        className={rowData.amount > 0 ? 'text-green-600' : 'text-red-600'}
      >
        ¥{Math.abs(rowData.amount).toFixed(2)}
      </Typography.Body>
    )}
  />
  <Column field="category" header="类别" />
</Table>
```

### 💬 反馈组件
提供用户反馈和系统状态。

```tsx
import { Toast, Notification, Message, Progress } from '@1money/react-ui';

// 支付处理反馈
const PaymentFlow = () => {
  const [processing, setProcessing] = useState(false);
  const toast = useRef<Toast>(null);

  const processPayment = async () => {
    setProcessing(true);
    
    try {
      await paymentAPI.process();
      toast.current?.show({
        severity: 'success',
        summary: '支付成功',
        detail: '您的支付已成功处理'
      });
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: '支付失败',
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
        处理支付
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

### 🎭 交互组件
模态框、弹窗和其他交互元素。

```tsx
import { Modal, Popup, Tooltip, ConfirmPopup } from '@1money/react-ui';

// 账户删除确认
const AccountSettings = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <div className="account-settings">
      <Tooltip target=".delete-btn" content="此操作无法撤消">
        <Button 
          className="delete-btn"
          severity="danger"
          outlined
          onClick={() => setDeleteModalVisible(true)}
        >
          删除账户
        </Button>
      </Tooltip>

      <Modal
        visible={deleteModalVisible}
        onHide={() => setDeleteModalVisible(false)}
        header="确认删除账户"
        footer={
          <div className="flex gap-2">
            <Button 
              severity="secondary" 
              onClick={() => setDeleteModalVisible(false)}
            >
              取消
            </Button>
            <Button 
              severity="danger"
              onClick={handleAccountDeletion}
            >
              删除账户
            </Button>
          </div>
        }
      >
        <Message 
          severity="warn" 
          text="这将永久删除您的账户和所有相关数据。"
        />
        <Typography.Body className="mt-4">
          您确定要继续吗？此操作无法撤消。
        </Typography.Body>
      </Modal>
    </div>
  );
};
```

## 🎨 主题和自定义

### CSS 自定义属性

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

### SCSS 主题 Token

```scss
@use '@/styles/theme' as theme;

.custom-surface {
  color: theme.$color-primary;
  background-color: theme.$color-primary-light;
}
```

### 组件级自定义

```tsx
// 使用 prefixCls 进行组件级样式设置
<Button 
  prefixCls="custom-button"
  className="my-custom-styles"
>
  自定义按钮
</Button>
```

```css
.custom-button {
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}
```

## 🛠️ 开发

### 先决条件

- Node.js >= 16
- pnpm（推荐）

### 开始使用

```bash
# 克隆仓库
git clone https://github.com/1Money-Co/1money-react-ui.git
cd 1money-react-ui

# 安装依赖
pnpm install

# 启动开发服务器（Storybook）
pnpm dev

# 构建组件
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

### 项目结构

```
src/
├── components/          # 所有 UI 组件
│   ├── Button/         # 单个组件
│   │   ├── Button.tsx  # 组件实现
│   │   ├── interface.ts # TypeScript 接口
│   │   ├── index.ts    # 导出文件
│   │   ├── style/      # 组件样式
│   │   └── README.md   # 组件文档
│   └── ...
├── styles/             # 共享主题 Token 与 Sass 样式系统
├── utils/              # 工具函数
└── index.ts           # 主库导出
```

## 📚 文档

- 📖 [Storybook 文档](https://1money-co.github.io/1money-react-ui/)
- 🔧 [开发指南](./DEV.zh-CN.md)
- 📝 [组件文档](./src/components/)
- 🤖 [Claude Code 指南](./CLAUDE.md)

### 开发工作流程

1. Fork 仓库
2. 创建功能分支：`git checkout -b feature/new-component`
3. 进行更改并添加测试
4. 运行检查和测试：`pnpm lint && pnpm test`
5. 创建拉取请求

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 🆘 支持

- 📖 [文档](https://1money-co.github.io/1money-react-ui/)
- 🐛 [问题反馈](https://github.com/1Money-Co/1money-react-ui/issues)

---

用 ❤️ 由 [@1money](https://github.com/1Money-Co) 团队制作
