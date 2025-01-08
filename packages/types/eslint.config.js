/* eslint-disable import/no-default-export */
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import url, { URL } from 'node:url';
import tseslint from 'typescript-eslint';

import { makeEsLintConfig } from '@simspace/config-eslint';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const project = [`${dirname}/tsconfig.json`];

export default tseslint.config(
  {
    ignores: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
  },
  ...makeEsLintConfig({ baseDirectory: import.meta.url }),
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.*.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project,
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        { considerDefaultExhaustiveForUnions: true },
      ],
      ...pluginReact.configs['jsx-runtime'].rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-restricted-imports': 'off',
      '@typescript-eslint/consistent-type-exports': 'off',
    },
  },
);
