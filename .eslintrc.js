const path = require('path');

module.exports = {
  extends: [
    'airbnb/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    quotes: [2, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'react/prop-types': 0,
    'no-mixed-operators': 0,
    'global-require': 0,
    'no-console': 2,
    'max-len': [1, 120, 2],
    'no-param-reassign': [2, { props: false }],
    'no-continue': 0,
    'no-underscore-dangle': 0,
    'generator-star-spacing': 0,
    'no-duplicate-imports': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'spaced-comment': 0,
    'arrow-parens': 0,
    'import/first': 1,
    'no-return-await': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'import/namespace': [2, { allowComputed: true }],
    'import/no-duplicates': 1,
    'import/order': [2, { 'newlines-between': 'always-and-inside-groups' }],
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-await-in-loop': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'no-restricted-syntax': 0,
    'no-bitwise': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'import/no-cycle': 1,
    'import/no-unresolved': [
      2,
      { ignore: ['@entria/graphql-mongoose-loader'] },
    ],
    'import/no-self-import': 1,
    indent: 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'interface-over-type-literal': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-var-requires': 1,
    'import/no-extraneous-dependencies': 1,
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'no-multi-assign': 1,
    // TODO - reenable when https://github.com/eslint/eslint/issues/12636 is fixed
    'prefer-destructuring': 0,
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@feedback/**/src'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
  },
  plugins: [
    'flowtype',
    'react',
    'import',
    '@typescript-eslint',
    'no-only-tests',
  ],
  globals: {
    require: true,
  },
  env: {
    jest: true,
    node: true,
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'eslint-import-resolver-typescript': true,
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages'),
      },
    },
  },
};
