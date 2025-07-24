# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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