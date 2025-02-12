/* eslint-disable */
'use strict';

module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],

  roots: [
    '<rootDir>/src'
  ],

  testRegex: '(test|__test__)/.*.test.(tsx|ts|jsx|js)?$',

  transform: {
    '^.+.(tsx|ts)?$': 'ts-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  setupFiles: ['<rootDir>/setupTests.js', 'jest-canvas-mock']
};
