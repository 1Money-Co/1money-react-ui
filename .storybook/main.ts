import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-console',
    '@storybook/addon-onboarding',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    defaultName: 'Overview',
  },
  staticDirs: ['../public'],
  managerHead: (head) => `
    ${head}
    <script>
      var title = '@1money/react-ui';
      document.title = title;
      var observer = new MutationObserver(function(mutations) {
        if (document.title.match(/Storybook$/) && title !== document.title) {
          document.title = title;
        }
      }).observe(document.querySelector('title'), {
        childList: true,
        subtree: true,
        characterData: true
      });
    </script>
  `,
  viteFinal: config => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src')
    };
    config.css = {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        }
      }
    };
    return config;
  }
};
export default config;