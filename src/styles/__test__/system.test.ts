/** @jest-environment node */

// Verifies that the styles entrypoints compile and emit the expected theme-aware CSS.

import path from 'node:path';
import { pathToFileURL } from 'node:url';
import sass from 'sass';

const stylesDir = path.resolve(process.cwd(), 'src/styles');
const srcDir = path.resolve(process.cwd(), 'src');
const aliasImporter = {
  findFileUrl(url: string) {
    if (url.startsWith('@/')) {
      return pathToFileURL(path.resolve(srcDir, url.slice(2)));
    }

    return null;
  },
};

const compileSass = (source: string, fileName: string) =>
  sass.compileString(source, {
    importers: [aliasImporter],
    loadPaths: [path.dirname(path.resolve(process.cwd(), fileName)), stylesDir],
    style: 'expanded',
  }).css;

describe('styles system', () => {
  it('compiles theme-aware om-sx declarations with responsive nesting', () => {
    const css = compileSass(
      `
      @use 'functions' as *;

      .fixture {
        @include om-sx((
          px: 2,
          py: 1,
          display: flex,
          justifyContent: center,
          alignItems: center,
          bgcolor: primary,
          color: primary-white,
          radius: 2,
          shadow: 1,
          md: (
            px: 1,
            gap: 1x5,
          ),
        ));
      }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('padding-left: var(--om-spacing-2, 16px);');
    expect(css).toContain('padding-right: var(--om-spacing-2, 16px);');
    expect(css).toContain('background-color: var(--om-color-primary, #073387);');
    expect(css).toContain('color: var(--om-color-primary-white, #FEFEFE);');
    expect(css).toContain('border-radius: var(--om-radius-2, 8px);');
    expect(css).toContain('box-shadow: var(--om-shadow-1, 0 1px 3px rgba(0, 0, 0, 0.12));');
    expect(css).toContain('@media (max-width: 1023.98px)');
    expect(css).toContain('gap: var(--om-spacing-1x5, 12px);');
  });

  it('orders om-sx responsive overrides by the configured breakpoint order', () => {
    const css = compileSass(
      `
      @use 'functions' as *;

      .fixture {
        @include om-sx((
          p: 6,
          sm: (
            p: 3,
          ),
          lg: (
            p: 5,
          ),
        ));
      }
      `,
      'src/styles/__test__/fixture.scss'
    );

    const lgIndex = css.indexOf('@media (max-width: 1279.98px)');
    const smIndex = css.indexOf('@media (max-width: 767.98px)');

    expect(css).toContain('padding: var(--om-spacing-6, 48px);');
    expect(css).toMatch(/@media \(max-width: 1279\.98px\)\s*{\s*\.fixture\s*{\s*padding: var\(--om-spacing-5, 40px\);/);
    expect(css).toMatch(/@media \(max-width: 767\.98px\)\s*{\s*\.fixture\s*{\s*padding: var\(--om-spacing-3, 24px\);/);
    expect(lgIndex).toBeGreaterThan(-1);
    expect(smIndex).toBeGreaterThan(lgIndex);
    expect(css).not.toContain('@media (max-width: 1023.98px)');
  });

  it('rejects breakpoint maps that are not ordered from large to small', () => {
    expect(() =>
      sass.compileString(
        `
        @use 'theme/breakpoints' with (
          $om-breakpoints: (
            sm: 768px,
            md: 1024px,
            lg: 1280px,
          ),
        );
        `,
        {
          loadPaths: [stylesDir],
          style: 'expanded',
        }
      )
    ).toThrow('$om-breakpoints must be ordered from large to small');
  });

  it('emits root theme vars and generated utility classes from index.scss', () => {
    const css = sass.compileString(`@use 'utilities';`, {
      loadPaths: [stylesDir],
      style: 'expanded',
    }).css;

    expect(css).toContain(':root');
    expect(css).toContain('--om-color-primary: #073387;');
    expect(css).toContain('--om-spacing-2: 16px;');
    expect(css).toContain('.om-p-2');
    expect(css).toContain('.om-bg-primary');
    expect(css).toContain('.om-color-primary');
    expect(css).toContain('.om-sm-p-2');
    expect(css).toMatch(/\.om-w-33\s*{\s*width: 33\.333%;\s*}/);
  });

  it('resolves arbitrary unitless spacing multiplier via om-spacing', () => {
    const css = compileSass(
      `
      @use 'functions' as *;

      .fixture { padding: om-spacing(7); }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('padding: 56px;');
  });

  it('passes through unregistered props as raw CSS in om-sx', () => {
    const css = compileSass(
      `
      @use 'functions' as *;

      .fixture {
        @include om-sx((opacity: 0.5));
      }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('opacity: 0.5;');
  });

  it('suppresses color utility classes when $om-sys-enable-color is false', () => {
    const css = sass.compileString(
      `
      @use 'theme/config' with ($om-sys-enable-color: false);
      @use 'utilities';
      `,
      {
        loadPaths: [stylesDir],
        style: 'expanded',
      }
    ).css;

    expect(css).not.toContain('.om-bg-');
    expect(css).not.toContain('.om-color-primary');
    expect(css).toContain('.om-p-2');
  });

  it('resolves alias and canonical prop to identical CSS in om-sx', () => {
    const aliased = compileSass(
      `
      @use 'functions' as *;

      .fixture { @include om-sx((bgColor: primary)); }
      `,
      'src/styles/__test__/fixture.scss'
    );

    const canonical = compileSass(
      `
      @use 'functions' as *;

      .fixture { @include om-sx((bg: primary)); }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(aliased).toBe(canonical);
  });

  it('returns raw value for om-sizing(auto)', () => {
    const css = compileSass(
      `
      @use 'functions' as *;

      .fixture { width: om-sizing(auto); }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('width: auto;');
  });

  it('matches full utility CSS output snapshot', () => {
    const css = sass.compileString(`@use 'utilities';`, {
      loadPaths: [stylesDir],
      style: 'expanded',
    }).css;

    expect(css).toMatchSnapshot();
  });

  it('exposes the new layered theme entrypoint for direct consumption', () => {
    const css = compileSass(
      `
      @use '@/styles/theme' as theme;

      .fixture {
        color: theme.om-color(primary);
        width: theme.om-sizing(33);
        height: theme.om-sizing(66);

        @include theme.om-up(md) {
          width: theme.om-sizing(50);
        }
      }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('color: var(--om-color-primary, #073387);');
    expect(css).toContain('width: 33.333%;');
    expect(css).toContain('height: 66.667%;');
    expect(css).toContain('@media (min-width: 1024px)');
    expect(css).toContain('width: 50%;');
  });
});
