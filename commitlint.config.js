/* eslint-disable */
'use strict';

const Configuration = {
  formatter: '@commitlint/format',
  /*
    * Any rules defined here will override rules from @commitlint/config-conventional
    */
  rules: {
    'type-enum': [2, 'always', [
      '[OMNI-DOOR]',
      '[@1MONEY/REACT-UI]',
      'feat',
      'feature',
      'fix',
      'hotfix',
      'docs',
      'style',
      'refactor',
      'test',
      'revert',
      'update',
      'upgrade',
      'modify',
      'merge',
      'optimize',
      'chore'
    ]]
  },
  /*
    * Functions that return true if commitlint should ignore the given message.
    */
  ignores: [
    commit => {
      const regExp = /^Merge branch.+/;
      return regExp.test(commit);
    }
  ],
  /*
    * Whether commitlint uses the default ignore rules.
    */
  defaultIgnores: true
};

module.exports = Configuration;
