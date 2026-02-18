# AGENTS.md

This file provides guidance to Code Agent when working with code in this repository.

## Development Commands

### Development Server
- `pnpm dev` - Start Storybook development server on port 6205
- `pnpm start` - Alternative command to start development server

### Building
- `pnpm build` - Build the component library (both CommonJS and ES modules)
- `pnpm build -n` - Build bypassing all pre-checks
- `pnpm build:demo` - Build Storybook demo

### Testing and Linting
- `pnpm test` - Run Jest tests (passes with no tests by default)
- `pnpm test:snapshot` - Update Jest snapshots
- `pnpm lint` - Run all linting (ESLint, Prettier, Stylelint)
- `pnpm lint:fix` - Auto-fix all linting issues
- `pnpm lint:es` / `pnpm lint:es_fix` - ESLint only
- `pnpm lint:prettier` / `pnpm lint:prettier_fix` - Prettier only
- `pnpm lint:style` / `pnpm lint:style_fix` - Stylelint only

### Component Generation
- `pnpm new` - Interactive component scaffolding using omni-door
- `pnpm new ComponentName -f` - Generate functional component with given name

### Package Management
- `pnpm release` - Release new version (auto-builds first)
- `pnpm release -i` - Release ignoring version iteration
- `pnpm release -m 0.3.25` - Release with specific version
- `pnpm release -n` - Release bypassing pre-checks

## Project Architecture

### Component Library Structure
This is a React component library built with PrimeReact as the base, using the omni-door CLI framework for scaffolding and build processes.

**Core Dependencies:**
- **PrimeReact**: Base UI component library (>=10.9.0)
- **React**: >=16.8.0 with React 19+ for development
- **TailwindCSS**: >=3.0.0 for styling system
- **TypeScript**: Full TypeScript support with strict mode

**Build System:**
- Dual output: CommonJS (`lib/`) and ES modules (`es/`)
- Gulp-based build pipeline via omni-door
- SCSS preprocessing with modern API
- Path aliasing: `@/` maps to `src/`

### Directory Structure
```
src/
├── components/           # All UI components
│   └── ComponentName/
│       ├── ComponentName.tsx      # Main component file
│       ├── ComponentName.stories.tsx  # Storybook stories
│       ├── interface.ts           # TypeScript interfaces
│       ├── index.ts              # Export barrel
│       ├── README.md             # Component documentation
│       ├── __test__/             # Jest tests with snapshots
│       └── style/                # SCSS styles
├── utils/               # Utility functions (classnames, clipboard, uuid)
├── variable.scss        # Global SCSS variables
└── index.ts            # Main library export
```

### Component Development Patterns
- **Base Components**: Most components wrap PrimeReact components with custom styling
- **Props Interface**: Each component has a dedicated `interface.ts` file
- **Styling**: SCSS modules with BEM-like naming via `classnames` utility
- **Testing**: Jest with snapshot testing for visual regression
- **Stories**: Storybook stories for documentation and testing

### Key Files
- `omni.config.js`: Main configuration for build, dev server, and scaffolding
- `gulpfile.js`: Custom build pipeline configuration
- `tsconfig.json`: TypeScript configuration with path mapping
- `.storybook/`: Storybook configuration with custom theming

### Package Exports
The library provides both named exports and individual component imports:
```js
// Named imports
import { Button, Input } from '@1money/react-ui';

// Individual component imports
import { Button } from '@1money/react-ui/Button';
import '@1money/react-ui/index.css';
```

### Development Workflow
1. Use `pnpm new ComponentName -f` to scaffold new components
2. Components automatically include TypeScript interfaces, SCSS styles, Storybook stories, and Jest tests
3. All components must pass linting (ESLint, Prettier, Stylelint) and tests before building
4. Build process generates both CommonJS and ES module outputs with TypeScript declarations
5. Storybook serves as both development environment and documentation

### Important Notes
- Components are patches applied to PrimeReact and react-pro-sidebar (see `patches/` directory)
- Font assets (Aeonik, Inter, Outfit) are included in `public/fonts/`
- Lottie animations are used in Loading component
- Pre-commit hooks enforce code quality via husky and lint-staged

## TypeScript Standards

### Core Principles

- ✅ All components and functions must provide accurate type definitions
- ✅ Avoid using `any`; define types as precisely as possible
- ✅ Use interfaces (`interface`) instead of type aliases (`type`) for object structures
- ✅ Export all public interface types for easier consumer usage
- ✅ Follow TypeScript type design principles strictly to ensure type safety
- ✅ Ensure compilation has no type errors or warnings

### Component Type Definitions

```tsx
// ✅ Correct: use interface to define Props
interface ButtonProps {
  type?: 'primary' | 'secondary' | 'warning';
  onClick?: (e: React.MouseEvent) => void;
}

// ❌ Incorrect: avoid using type to define object structures
type ButtonProps = {
  type?: 'primary' | 'secondary';
};

// ✅ Correct: component Props interface naming
interface ComponentNameProps {
  // ...
}

// ✅ Correct: component state interface naming
interface ComponentNameState {
  // ...
}

// ✅ Correct: use ForwardRefRenderFunction to define ref
const Component = React.forwardRef<ComponentRef, ComponentProps>((props, ref) => {
  // ...
});
```

### Type Usage Best Practices

- ✅ Use generics where appropriate to improve type flexibility
- ✅ Use intersection types (`&`) to combine multiple types
- ✅ Use literal union types to define a limited set of options
- ✅ Avoid `enum`; prefer union types and `as const`
- ✅ Rely on TypeScript type inference as much as possible
- ✅ Use type assertions (`as`) only when necessary

```tsx
// ✅ Recommended: use union types and as const
const ButtonTypes = ['primary', 'secondary', 'warning'] as const;
type ButtonType = (typeof ButtonTypes)[number];

// ❌ Not recommended: use enum
enum ButtonType {
  Primary = 'primary',
  Default = 'secondary',
}
```

### Avoid Magic Strings

- ✅ Define string constants or use `as const` arrays for repeated string values
- ✅ Use constants for event names, action types, storage keys, and API endpoints
- ✅ Extract hardcoded strings into named constants with descriptive names
- ✅ Keep constants close to their usage or in a dedicated constants file

```tsx
// ✅ Correct: define constants
const STORAGE_KEY = 'user_preferences';
const EVENT_SUBMIT = 'submit';

localStorage.setItem(STORAGE_KEY, value);
element.addEventListener(EVENT_SUBMIT, handler);

// ✅ Correct: use as const for related values
const ToastTypes = ['success', 'error', 'warning', 'info'] as const;
type ToastType = (typeof ToastTypes)[number];

// ❌ Incorrect: magic strings scattered in code
localStorage.setItem('user_preferences', value);
element.addEventListener('submit', handler);
if (status === 'success') { ... }
```

## Custom Hooks Usage Guide

This library provides 11 custom hooks for common React patterns. Use these hooks to improve code quality and consistency.

### useControlledState

**When to use**: Building components that support both controlled and uncontrolled modes.

```tsx
// ✅ Use for form components that can be controlled or uncontrolled
function Input({ value, defaultValue, onChange }: InputProps) {
  const [innerValue, setInnerValue] = useControlledState(defaultValue ?? '', value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e);
  };

  return <input value={innerValue} onChange={handleChange} />;
}
```

### useEventCallback

**When to use**: When you need a stable callback reference that always invokes the latest function version. Similar to React's `useEvent` RFC.

```tsx
// ✅ Use when passing callbacks to optimized child components
function Parent() {
  const [count, setCount] = useState(0);

  // Stable reference, always calls latest function
  const handleClick = useEventCallback(() => {
    console.log('Current count:', count); // Always gets latest count
  });

  return <MemoizedChild onClick={handleClick} />;
}
```

### useLatest

**When to use**: When you need to access the latest value in callbacks without causing re-renders or stale closures.

```tsx
// ✅ Use to avoid stale closures in timers or event handlers
function Timer({ delay, callback }: TimerProps) {
  const callbackRef = useLatest(callback);

  useEffect(() => {
    const id = setInterval(() => {
      callbackRef.current(); // Always calls the latest callback
    }, delay);
    return () => clearInterval(id);
  }, [delay]); // No need to include callback in deps
}
```

### useLayoutEffect

**When to use**: When you need to know if the effect is running on initial mount or subsequent updates.

```tsx
// ✅ Use when behavior differs between mount and update
function AnimatedComponent({ value }: Props) {
  useLayoutEffect((mount) => {
    if (mount) {
      // Initial mount - setup without animation
      element.style.opacity = '1';
    } else {
      // Update - animate the change
      animateOpacity(element);
    }
  }, [value]);
}
```

### useMemoizedFn

**When to use**: When you need a stable function reference without managing a dependency array, while always calling the latest version.

```tsx
// ✅ Use for event handlers passed to child components
function Form({ onSubmit }: FormProps) {
  const [data, setData] = useState({});

  // Stable reference, no deps needed, always uses latest data
  const handleSubmit = useMemoizedFn(() => {
    onSubmit(data);
  });

  return <ExpensiveChild onSubmit={handleSubmit} />;
}
```

### usePrevious

**When to use**: When you need to compare current value with the previous render's value.

```tsx
// ✅ Use for detecting value changes
function Counter({ count }: Props) {
  const prevCount = usePrevious(count);

  useEffect(() => {
    if (prevCount !== undefined && count > prevCount) {
      console.log('Count increased!');
    }
  }, [count, prevCount]);
}
```

### useSafeState

**When to use**: When setting state in async callbacks where the component might unmount before completion.

```tsx
// ✅ Use for async operations to prevent memory leaks
function AsyncComponent() {
  const [data, setData] = useSafeState<Data | null>(null);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result); // Safe: won't update if unmounted
    });
  }, []);
}
```

### useSyncState

**When to use**: When React batches multiple state updates but you need to read the latest value synchronously.

```tsx
// ✅ Use when multiple events fire simultaneously (e.g., onTransitionEnd)
function AnimatedList() {
  const [getCompletedCount, setCompletedCount] = useSyncState(0);

  const handleTransitionEnd = () => {
    // Multiple transitions may end at once, React batches them
    // getCompletedCount() always returns the latest value
    setCompletedCount(getCompletedCount() + 1);
  };
}
```

### useUpdateEffect

**When to use**: When you want an effect to run only on updates, skipping the initial mount.

```tsx
// ✅ Use when initial render shouldn't trigger the effect
function SearchInput({ query, onSearch }: Props) {
  useUpdateEffect(() => {
    // Only runs when query changes, not on initial mount
    onSearch(query);
  }, [query]);
}
```

### useLayoutState

**When to use**: When you need to batch multiple synchronous state updates into a single microtask to reduce unnecessary re-renders. Updates are collected and applied together via `Promise.resolve`, triggering only one render.

```tsx
// ✅ Use when multiple state updates happen synchronously and should be batched
function VirtualTable({ columns }: Props) {
  const [colWidths, setColWidths] = useLayoutState<Map<string, number>>(new Map());

  const handleResize = (key: string, width: number) => {
    // Multiple columns may resize at once; updates are batched into one render
    setColWidths(prev => new Map(prev).set(key, width));
  };

  return <ResizableColumns widths={colWidths} onResize={handleResize} />;
}
```

### useTimeoutLock

**When to use**: When you need a short-lived lock that auto-resets after a timeout (100ms). Useful for preventing duplicate actions or debouncing rapid state changes.

```tsx
// ✅ Use to prevent rapid duplicate submissions
function SubmitButton() {
  const [setLock, getLock] = useTimeoutLock<string>();

  const handleClick = () => {
    if (getLock()) return; // Already locked
    setLock('submitting');
    submitForm();
  };
}
```

### Hook Selection Guide

| Scenario | Recommended Hook |
|----------|------------------|
| Controlled/uncontrolled component | `useControlledState` |
| Stable callback for memoized children | `useEventCallback` or `useMemoizedFn` |
| Access latest value without re-render | `useLatest` |
| Different logic for mount vs update | `useLayoutEffect` |
| Compare with previous value | `usePrevious` |
| Async state updates after unmount | `useSafeState` |
| Read latest state synchronously | `useSyncState` |
| Skip effect on initial mount | `useUpdateEffect` |
| Batch synchronous state updates | `useLayoutState` |
| Short-lived lock with auto-reset | `useTimeoutLock` |
