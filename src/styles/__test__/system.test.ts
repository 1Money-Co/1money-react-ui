/** @jest-environment node */

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
  });

  it('exposes the new layered theme entrypoint for direct consumption', () => {
    const css = compileSass(
      `
      @use '@/styles/theme' as theme;

      .fixture {
        color: theme.om-color(primary);

        @include theme.om-up(md) {
          width: theme.om-sizing(50);
        }
      }
      `,
      'src/styles/__test__/fixture.scss'
    );

    expect(css).toContain('color: var(--om-color-primary, #073387);');
    expect(css).toContain('@media (min-width: 1024px)');
    expect(css).toContain('width: 50%;');
  });
});
