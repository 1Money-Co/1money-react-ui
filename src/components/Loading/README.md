# Loading

An animated loading component powered by Lottie animations. Provides smooth, professional loading indicators with two distinct animation styles.

## Features

- Lottie-based animations for smooth performance
- Two animation types: pure and pattern
- Automatic animation lifecycle management
- Lightweight with dynamic Lottie import
- Customizable styling and sizing
- Memory-safe cleanup on unmount
- SVG rendering for crisp visuals

## Basic Usage

```tsx
import { Loading } from '@1money/react-ui';

// Basic loading with pure animation
<Loading />

// Loading with pattern animation
<Loading type="pattern" />

// Loading with custom styling
<Loading className="my-loading" />

// Loading with custom ID
<Loading id="page-loader" />
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the loading element | string | - |
| className | Additional CSS classes for styling | string | - |
| prefixCls | The classname prefix for component styling | string | "loading" |
| type | Animation type to display | 'pure' \| 'pattern' | 'pure' |

## Animation Types

### Pure Type
The default loading animation featuring a clean, minimal design suitable for most loading scenarios.

### Pattern Type  
A more decorative loading animation with additional visual elements, ideal for branded loading experiences.

## Styling

The Loading component uses SCSS modules with BEM-like naming conventions:

1. Use the `className` prop for additional styles
2. Override the `prefixCls` for complete style control
3. The component automatically sizes to its container

## Accessibility

- Uses appropriate ARIA attributes for loading states
- Screen reader friendly with proper semantic markup
- Non-intrusive animations that respect user motion preferences
- Keyboard navigation compatible

## Technical Details

- Uses dynamic import for Lottie library to reduce bundle size
- Automatic cleanup prevents memory leaks
- SVG renderer ensures crisp animations at any scale
- Handles component unmounting gracefully

## Examples

### Page Loading
```tsx
const [loading, setLoading] = useState(true);

return (
  <div className="page-container">
    {loading ? (
      <div className="loading-overlay">
        <Loading type="pure" />
      </div>
    ) : (
      <PageContent />
    )}
  </div>
);
```

### Inline Loading
```tsx
<div className="content-section">
  <h2>Loading Data...</h2>
  <Loading type="pattern" className="inline-loading" />
</div>
```

### Custom Sized Loading
```tsx
<div style={{ width: '64px', height: '64px' }}>
  <Loading type="pure" />
</div>
```

### Full Screen Loading
```tsx
<div className="fullscreen-loading">
  <Loading 
    id="main-loader"
    type="pattern" 
    className="large-loading"
  />
</div>

<style>
.fullscreen-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

.large-loading {
  width: 120px;
  height: 120px;
}
</style>
```

### Conditional Loading
```tsx
const LoadingWrapper = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading type="pure" />
      </div>
    );
  }
  
  return children;
};

// Usage
<LoadingWrapper isLoading={fetchingData}>
  <DataTable data={data} />
</LoadingWrapper>
```
