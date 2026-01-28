---
name: Upload
category: DataEntry
description: A comprehensive file upload component built on top of PrimeReact's FileUpload with enhanced styling and additional file status display capabilities. Includes both the main Upload component and a companion UploadFileBar component for showing upload status.
---

# Upload

## Component Overview

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

## Usage Scenarios

### When to use

- User needs to upload files (images/attachments) with unified interaction and validation
- Attachment upload linked with form submission

### When not to use

- Advanced upload like large file chunking or resumable upload (requires special implementation/wrapping)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Color tokens used in source style: `$color-grey-bold`, `$color-negative`, `$color-primary`, `$color-primary-hover`, `$color-primary-white`
- Border radius (px, extracted from source style): 12
- Font size (px, extracted from source style): 12, 14, 16
- Line height (px, extracted from source style)：12, 16, 20
- Height/Max Height (px, extracted from source style)：12, 32, 44
- Padding values (px, extracted from source style)：12, 16
- Detailed visuals and interactions are based on component source code `style/*.scss`. Additions or adjustments to styles should be consolidated into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: [PrimeReact FileUpload](https://primereact.org/fileupload/).

### Component Props

#### Upload Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| ref | Reference to FileUpload methods | `RefObject<FileUpload>` | - |
| className | Additional CSS classes | `string` | - |
| prefixCls | Component class prefix | `string` | `"upload"` |
| btnSize | Button size | `'small' \| 'medium' \| 'large'` | `'large'` |

> Common inherited props: `name`, `url`, `mode`, `accept`, `maxFileSize`, `auto`, `customUpload`, `uploadHandler`.

### UploadFileBar Props

Standalone component for displaying file status.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| fileName | Name of file | `string` | - |
| status | Upload status | `0` (Success) \| `1` (Error) | `0` |
| message | State message | `string` | - |
| className | Additional CSS classes | `string` | - |
| prefixCls | Component class prefix | `string` | `"upload-file-bar"` |
| onClickRemove | Remove handler | `() => void` | - |

## Examples

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

// Custom Upload Handler Example
<Upload
  customUpload
  uploadHandler={(e) => {
      // Handle file upload manually
      console.log(e.files);
  }}
/>

// UploadFileBar usage (for custom file lists)
<UploadFileBar
  fileName="document.pdf"
  status={0}
  message="Upload successful"
  onClickRemove={() => console.log('Remove file')}
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

## Core Principles

- **Component Separation**: Use `<Upload>` for the actionable dropzone/button. Use `<UploadFileBar>` to display the *resulting* file list items. Do not try to force the `Upload` component to render custom file list UI internally if it doesn't support it.
- **Handler Logic**: When using `customUpload`, the `uploadHandler` must handle the entire XHR/Fetch process and update the parent state.
- **Validation**: Use `maxFileSize` and `accept` props for client-side validation first; backend validation is a fallback.
