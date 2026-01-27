---
name: Upload
category: DataEntry
description: A comprehensive file upload component built on top of PrimeReact's FileUpload with enhanced styling and additional file status display capabilities. Includes both the main Upload component and a companion UploadFileBar component for showing upload status.
---

# Upload

## 组件概述

A comprehensive file upload component built on top of PrimeReact's FileUpload with enhanced styling and additional file status display capabilities. Includes both the main Upload component and a companion UploadFileBar component for showing upload status.

### Features

- Built on PrimeReact FileUpload for robust functionality
- Drag and drop file upload support
- Multiple file selection and upload
- Customizable button sizes (small, medium, large)
- File validation (type, size limits)
- Upload progress tracking
- Companion UploadFileBar for status display
- Success and error status indicators
- Custom styling and theming support
- Full TypeScript support

## 使用场景

### 何时使用
- 用户需要上传文件（图片/附件），并需要统一的交互与校验
- 与表单提交联动的附件上传

### 不适用
- 大文件分片、断点续传等高级上传（需要专项实现/封装）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey-bold`, `$color-negative`, `$color-primary`, `$color-primary-hover`, `$color-primary-white`
- 圆角（px，源码样式提取）：12
- 字号（px，源码样式提取）：12, 14, 16
- 行高（px，源码样式提取）：12, 16, 20
- 高度/最大高度（px，源码样式提取）：12, 32, 44
- padding 数值（px，源码样式提取）：12, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to FileUpload methods | RefObject<FileUpload> | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "upload" |
| btnSize | Size of upload buttons | 'small' \| 'medium' \| 'large' | 'medium' |

> 其余属性继承 PrimeReact FileUpload（如 `mode`、`customUpload`、`uploadHandler` 等）。

### UploadFileBar Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| fileName | Name of the uploaded file | string | - |
| status | Upload status indicator | 0 \| 1 | 0 |
| message | Status message to display | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "upload-file-bar" |
| onClickRemove | Remove file callback | () => void | - |

## 示例

```tsx
import { Upload, UploadFileBar } from '@1money/react-ui';

// Basic upload
<Upload
  name="files"
  url="/api/upload"
  accept="image/*"
  maxFileSize={1000000}
/>

// Upload with custom button size
<Upload
  name="documents"
  url="/api/documents"
  btnSize="large"
  accept=".pdf,.doc,.docx"
/>

// Upload file status bar
<UploadFileBar
  fileName="document.pdf"
  status={0}
  message="Upload successful"
  onClickRemove={() => removeFile()}
/>
```

```tsx
const [uploadedFiles, setUploadedFiles] = useState([]);

const handleUpload = (event) => {
  console.log('Files uploaded:', event.files);
  setUploadedFiles(event.files);
};

<Upload
  name="demo"
  url="/api/upload"
  onUpload={handleUpload}
  accept="image/*"
  maxFileSize={1000000}
  emptyTemplate={<p>Drag and drop files here to upload.</p>}
/>
```

```tsx
const customUploader = async (event) => {
  const formData = new FormData();
  event.files.forEach((file, index) => {
    formData.append(`file${index}`, file);
  });

  try {
    const response = await fetch('/api/custom-upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Upload successful');
    }
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

<Upload
  name="custom"
  customUpload
  uploadHandler={customUploader}
  multiple
  accept=".pdf,.doc,.docx"
  btnSize="large"
/>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Upload } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
