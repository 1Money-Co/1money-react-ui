---
name: Message
category: Feedback
description: A message component built on top of PrimeReact's Message with enhanced styling. Messages are used to display inline information, warnings, errors, or success messages within forms or content areas.
source: src/components/Message
---

# Message

## 组件概述

A message component built on top of PrimeReact's Message with enhanced styling. Messages are used to display inline information, warnings, errors, or success messages within forms or content areas.

### Features

- Multiple severity levels (success, info, warn, error)
- Inline display with automatic icon assignment
- Content flexibility through children or text prop
- Closable messages with dismiss functionality
- Built-in accessibility features
- Customizable styling and theming
- Full PrimeReact Message compatibility

## 使用场景

### 何时使用
- 给用户反馈（成功/失败/告警/信息），不打断主流程（Toast/Notification）
- 表单或区域内的状态提示（Message）
- 对图标/按钮提供补充说明（Tooltip）

### 不适用
- 必须用户确认才能继续（考虑 Modal/ConfirmPopup）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 圆角（px，源码样式提取）：6
- 字号（px，源码样式提取）：14
- 高度/最大高度（px，源码样式提取）：14
- padding 数值（px，源码样式提取）：10
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | 'message' |
| children | Custom content (overrides text prop) | ReactNode | - |

> 其余属性继承 PrimeReact Message（如 `severity`、`text`、`closable` 等）。

## 示例

```tsx
import { Message } from '@1money/react-ui';

// Basic info message
<Message severity="info" text="This is an informational message" />

// Success message
<Message severity="success" text="Operation completed successfully!" />

// Warning message
<Message severity="warn" text="Please review your input before proceeding" />

// Error message
<Message severity="error" text="An error occurred while processing your request" />

// Message with custom content
<Message severity="info">
  <div>
    <strong>Account Update</strong>
    <p>Your profile information has been updated successfully.</p>
  </div>
</Message>

// Closable message
<Message 
  severity="warn" 
  text="Your session will expire soon"
  closable
  onClose={() => console.log('Message dismissed')}
/>
```

```tsx
const FormValidation = ({ errors, success }) => {
  return (
    <div className="form-messages">
      {success && (
        <Message 
          severity="success" 
          text="Form submitted successfully!"
          closable
        />
      )}
      
      {errors.map((error, index) => (
        <Message 
          key={index}
          severity="error" 
          text={error.message}
        />
      ))}
    </div>
  );
};
```

```tsx
const AccountMessages = ({ user }) => {
  return (
    <div className="account-status">
      {!user.emailVerified && (
        <Message severity="warn">
          <div>
            <strong>Email Verification Required</strong>
            <p>Please check your email and click the verification link to complete your account setup.</p>
          </div>
        </Message>
      )}
      
      {user.subscription?.isPremium && (
        <Message severity="success" text="You have premium access to all features!" />
      )}
      
      {user.profile?.isIncomplete && (
        <Message severity="info">
          <div>
            Complete your profile to unlock additional features.
            <a href="/profile">Update Profile</a>
          </div>
        </Message>
      )}
    </div>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Message } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
