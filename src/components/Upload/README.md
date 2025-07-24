# Upload

A comprehensive file upload component built on top of PrimeReact's FileUpload with enhanced styling and additional file status display capabilities. Includes both the main Upload component and a companion UploadFileBar component for showing upload status.

## Features

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

## Components

### Upload
Main file upload component with drag-and-drop interface and customizable upload controls.

### UploadFileBar  
Status display component showing file upload success/failure states with visual indicators.

## Basic Usage

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

## Upload Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "upload" |
| btnSize | Size of upload buttons | 'small' \| 'medium' \| 'large' | 'medium' |

### Inherited Props

Extends PrimeReact's FileUpload component with all its props:

- `name?: string` - Name of the request parameter for files
- `url?: string` - Remote URL to upload files
- `mode?: 'advanced' | 'basic'` - Upload mode
- `multiple?: boolean` - Allow multiple file selection
- `accept?: string` - Accepted file types
- `maxFileSize?: number` - Maximum file size in bytes
- `fileLimit?: number` - Maximum number of files
- `disabled?: boolean` - Disable the upload
- `auto?: boolean` - Auto upload on file selection
- `customUpload?: boolean` - Use custom upload handler
- `onUpload?: (e: FileUploadUploadEvent) => void` - Upload success callback
- `onError?: (e: FileUploadErrorEvent) => void` - Upload error callback
- `onSelect?: (e: FileUploadSelectEvent) => void` - File selection callback
- `onRemove?: (e: FileUploadRemoveEvent) => void` - File removal callback
- `onProgress?: (e: FileUploadProgressEvent) => void` - Upload progress callback
- `uploadHandler?: (e: FileUploadHandlerEvent) => void` - Custom upload handler
- `uploadOptions?: object` - Upload button options
- `chooseOptions?: object` - Choose button options  
- `cancelOptions?: object` - Cancel button options

## UploadFileBar Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| fileName | Name of the uploaded file | string | - |
| status | Upload status indicator | 0 \| 1 | 0 |
| message | Status message to display | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | Component class prefix | string | "upload-file-bar" |  
| onClickRemove | Remove file callback | () => void | - |

### Status Values
- `0`: Success (green indicators)
- `1`: Failed (red indicators with error icon)

## Styling

Both components use SCSS modules with BEM-like naming:

1. Use `className` prop for additional styles
2. Override `prefixCls` for complete style control
3. Button sizes are applied to all upload control buttons
4. Status colors are automatically applied based on success/failure state

## Accessibility

- Supports keyboard navigation for file selection
- Screen reader friendly with proper ARIA labels
- Focus management for upload controls
- Proper semantic markup for status indicators
- Error messages announced to screen readers

## Examples

### Basic File Upload
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

### Custom Upload Handler
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

### Upload with File Status Display
```tsx
const [files, setFiles] = useState([
  { name: 'document1.pdf', status: 0, message: 'Upload successful' },
  { name: 'document2.pdf', status: 1, message: 'Upload failed - file too large' },
]);

const removeFile = (index) => {
  setFiles(files.filter((_, i) => i !== index));
};

<div>
  <Upload
    name="documents"
    url="/api/documents"
    onUpload={(e) => {
      // Add uploaded files to status list
      setFiles([...files, ...e.files.map(f => ({
        name: f.name,
        status: 0,
        message: 'Upload successful'
      }))]);
    }}
    onError={(e) => {
      // Add failed files to status list
      setFiles([...files, {
        name: e.files[0].name,
        status: 1,
        message: e.message || 'Upload failed'
      }]);
    }}
  />

  <div className="file-status-list">
    {files.map((file, index) => (
      <UploadFileBar
        key={index}
        fileName={file.name}
        status={file.status}
        message={file.message}
        onClickRemove={() => removeFile(index)}
      />
    ))}
  </div>
</div>
```

### Image Upload with Preview
```tsx
const [previewImages, setPreviewImages] = useState([]);

const handleImageSelect = (event) => {
  const files = event.files;
  const previews = files.map(file => ({
    name: file.name,
    url: URL.createObjectURL(file),
    status: 0
  }));
  setPreviewImages(previews);
};

<div>
  <Upload
    name="images"
    url="/api/images"
    accept="image/*"
    multiple
    onSelect={handleImageSelect}
    itemTemplate={(file, props) => (
      <div className="image-preview">
        <img src={file.url} alt={file.name} width="100" />
        <div className="image-info">
          <span>{file.name}</span>
          <span>{(file.size / 1024).toFixed(2)} KB</span>
        </div>
      </div>
    )}
  />

  {previewImages.map((image, index) => (
    <UploadFileBar
      key={index}
      fileName={image.name}
      status={image.status}
      onClickRemove={() => {
        URL.revokeObjectURL(image.url);
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
      }}
    />
  ))}
</div>
```

### Form Integration
```tsx
const [formData, setFormData] = useState({
  title: '',
  description: '',
  attachments: []
});

const handleFileUpload = (event) => {
  setFormData(prev => ({
    ...prev,
    attachments: [...prev.attachments, ...event.files]
  }));
};

<form onSubmit={handleSubmit}>
  <div className="form-field">
    <label>Title</label>
    <input
      type="text"
      value={formData.title}
      onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
    />
  </div>

  <div className="form-field">
    <label>Description</label>
    <textarea
      value={formData.description}
      onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
    />
  </div>

  <div className="form-field">
    <label>Attachments</label>
    <Upload
      name="attachments"
      customUpload
      uploadHandler={handleFileUpload}
      multiple
      accept=".pdf,.doc,.docx,.jpg,.png"
      btnSize="small"
    />
    
    {formData.attachments.map((file, index) => (
      <UploadFileBar
        key={index}
        fileName={file.name}
        status={0}
        onClickRemove={() => {
          setFormData(prev => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index)
          }));
        }}
      />
    ))}
  </div>

  <button type="submit">Submit Form</button>
</form>
```

### Progress Tracking
```tsx
const [uploadProgress, setUploadProgress] = useState({});

const handleProgress = (event) => {
  setUploadProgress(prev => ({
    ...prev,
    [event.files[0].name]: event.progress
  }));
};

<Upload
  name="progress-demo"
  url="/api/upload"
  onProgress={handleProgress}
  onUpload={() => setUploadProgress({})}
  progressTemplate={(progress) => (
    <div className="upload-progress">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <span>{progress}%</span>
    </div>
  )}
/>
```
