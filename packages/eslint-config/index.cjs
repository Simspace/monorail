module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    'codegen',
    '@0x706b/module-specifier-extensions',
    'import',
    'simple-import-sort',
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  ignorePatterns: [
    'dist/',
    'ts-dist/',
    '**/node_modules/',
    '**/*.d.ts',
    '*.gen.*',
    '**/*.cjs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    project: [`${__dirname}/tsconfig.eslint.json`],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    '@0x706b/module-specifier-extensions/module-specifier-extensions': [
      'error',
      {
        remove: ['^@monorail.*$'],
        extensions: {
          '.tsx': '.js',
        },
      },
    ],
    'codegen/codegen': [
      'error',
      {
        presets: {
          barrel: require('@fncts/codegen/barrel'),
          'type-barrel': require('@fncts/codegen/type-barrel'),
        },
      },
    ],
    'constructor-super': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    radix: ['error', 'always'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react*', '^@?\\w'],
          ['^@monorail/.*'],
          ['^[^.]'],
          ['^\\.'],
          ['^\\u0000'],
        ],
      },
    ],
    'use-isnan': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          Object: {
            message:
              'Avoid using the `Object` type. Prefer a generic type parameter if you can, or use `object` or `{}` if you have to use a raw object type.',
            fixWith: 'object',
          },
          object: false,
          '{}': false,
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message:
              'Avoid using the `Boolean` type. Prefer `boolean` instead.',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Avoid using the `Number` type. Prefer `number` instead.',
            fixWith: 'number',
          },
          String: {
            message: 'Avoid using the `String` type. Prefer `string` instead.',
            fixWith: 'string',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Prefer `symbol` instead.',
            fixWith: 'symbol',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/unified-signatures': 'error',
    'react/jsx-key': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
}
