# Clipboard

A copy-to-clipboard component that displays content with a convenient copy button. Features automatic clipboard copying with success/error callback handling.

## Features

- One-click copy to clipboard functionality
- Visual feedback with copy icon
- Customizable labels and styling
- Success and error callback support
- Built-in Typography integration for consistent text styling
- Responsive design with proper text wrapping

## Basic Usage

```tsx
import { Clipboard } from '@1money/react-ui';

// Basic clipboard with content
<Clipboard content="Hello World" />

// With label
<Clipboard 
  label="API Key"
  content="sk-1234567890abcdef"
/>

// With callbacks
<Clipboard
  label="Setup Key"
  content="GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU"
  onSuccess={(content) => console.log('Copied:', content)}
  onError={(error) => console.error('Copy failed:', error)}
/>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content | The text content to be copied to clipboard | string | - |
| id | Optional ID attribute for the component | string | - |
| className | Additional CSS class name for the component | string | - |
| prefixCls | The classname prefix for component styling | string | "clipboard" |
| label | Optional label text displayed above the content | string | - |
| labelCls | Additional CSS class name for the label | string | - |
| onSuccess | Callback function called when copy operation succeeds | (content: string) => any | - |
| onError | Callback function called when copy operation fails | (error: Error) => any | - |

## Styling

The Clipboard component uses SCSS modules with BEM-like naming conventions. You can customize styles by:

1. Using the `className` prop for additional component styles
2. Using the `labelCls` prop for label-specific styles
3. Overriding the `prefixCls` for complete style control
4. Using CSS custom properties for theme customization

Key CSS classes:
- `.clipboard` - Root component class
- `.clipboard-label` - Label styling
- `.clipboard-content` - Content container
- `.clipboard-content-text` - Text content styling
- `.clipboard-content-icon` - Copy icon styling

## Accessibility

- Copy button is keyboard accessible
- Proper semantic structure with labels
- Screen reader friendly text content
- Visual feedback through icon interaction
- Proper focus management

## Examples

### API Key Display

```tsx
const apiKey = "sk-1234567890abcdefghijklmnopqrstuvwxyz";

<Clipboard
  label="API Key"
  content={apiKey}
  onSuccess={() => {
    // Show toast notification
    toast.success('API key copied to clipboard!');
  }}
  onError={() => {
    toast.error('Failed to copy API key');
  }}
/>
```

### Configuration Settings

```tsx
const configData = JSON.stringify({
  endpoint: "https://api.1money.co",
  version: "v1",
  timeout: 30000
}, null, 2);

<Clipboard
  label="Configuration"
  content={configData}
  className="tw-w-full tw-max-w-md"
  onSuccess={(content) => {
    analytics.track('config_copied', { 
      contentLength: content.length 
    });
  }}
/>
```

### Webhook URL

```tsx
const webhookUrl = "https://your-app.com/webhooks/1money?token=abc123";

<Clipboard
  label="Webhook URL"
  content={webhookUrl}
  onSuccess={() => setShowCopyConfirmation(true)}
  onError={(error) => {
    console.error('Copy failed:', error);
    // Fallback: show manual copy instructions
    setShowManualCopyModal(true);
  }}
/>
```

### Two-Factor Authentication Setup

```tsx
const setupKey = "GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU";

<div className="auth-setup-section">
  <p>Scan the QR code or manually enter this setup key:</p>
  
  <Clipboard
    label="Setup Key"
    content={setupKey}
    className="tw-w-[400px]"
    onSuccess={() => {
      // Track successful copy for analytics
      analytics.track('2fa_setup_key_copied');
    }}
  />
  
  <p className="tw-text-sm tw-text-gray-600 tw-mt-2">
    Save this key in a secure location as a backup.
  </p>
</div>
```

### Share Link

```tsx
const shareUrl = `${window.location.origin}/shared/${documentId}`;

<Clipboard
  label="Share Link"
  content={shareUrl}
  onSuccess={() => {
    // Update UI to show link was copied
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  }}
  onError={() => {
    // Fallback to native sharing if available
    if (navigator.share) {
      navigator.share({
        title: 'Document Share',
        url: shareUrl
      });
    }
  }}
/>
```
