const js = require('@eslint/js');
const globals = require('globals');
const typescriptParser = require('@typescript-eslint/parser');
const eslintReact = require('eslint-plugin-react');
const eslintTypescript = require('@typescript-eslint/eslint-plugin');
const eslintPrettier = require('eslint-plugin-prettier');
const eslintStorybook = require('eslint-plugin-storybook');

module.exports = [
  js.configs.recommended,
  // eslintTypescript.configs.recommended,
  // eslintPrettier.configs.recommended,
  // eslintStorybook.configs.recommended,
  {
    files: [
      '**/*.ts',
      '**/*.tsx'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json',
      },
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        ...globals.browser,
        ...globals.es2015
      }
    },
    plugins: {
      react: eslintReact,
      typescript: eslintTypescript,
      prettier: eslintPrettier,
      storybook: eslintStorybook
    },
    rules: {
      '@typescript-eslint/no-empty-interface': ['off'],
      '@typescript-eslint/camelcase': ['off'],
      '@typescript-eslint/array-type': ['off'],
      '@typescript-eslint/no-use-before-define': ['off'],
      '@typescript-eslint/no-angle-bracket-type-assertion': ['off'],
      '@typescript-eslint/interface-name-prefix': ['off'],
      'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
      'semi': ['error', 'always'],
      'prefer-spread': ['warn'],
      'no-unused-vars': ['off'],
      'no-extra-semi': ['warn'],
      'quotes': ['error', 'single'],
      'linebreak-style': ['warn', 'unix'],
      'prettier/prettier': [
        'warn',
        {
          'printWidth': 50,
          'tabWidth': 2,
          'singleQuote': true,
          'jsxSingleQuote': true,
          'semi': true,
          'trailingComma': 'none',
          'endOfLine': 'auto',
          'arrowParens': 'avoid',
          'rangeEnd': 0
        }
      ]
    },
    ignores: [
      'build/*',
      'configs/*',
      'es/*',
      'lib/*',
      'dist/*',
      'server/*',
      'demo/*',
      'node_modules/*',
      '.storybook/*',
      '**/__test__/*',
      '**/stories/*',
      '**/*.stories.*',
      'doczrc.js',
      'gulpfile.js',
      '.eslintrc.js',
      '*.config.js',
      '*.conf.js',
      'setupTests.js'
    ]
  }
];
