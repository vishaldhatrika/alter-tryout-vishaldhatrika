import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      '**/dist',
      '**/coverage',
      '**/node_modules',
      '**/node_modules*',
      '**/generated',
      '**/.git',
      '**/.next',
      'public/blob/lib',
      'public/blob',
      'public/js',
      '**/backend-types',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      importPlugin,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 2021,
      sourceType: 'module',
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',

      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'jest/no-conditional-expect': 'off',
      'jest/no-try-expect': 'off',
      'no-empty-function': 'off',
      'prettier/prettier': 'warn',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'quote-props': ['error', 'as-needed'],
      'no-unreachable': 'warn',
    },
  },
  {
    files: ['playwright/**'],

    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  ...fixupConfigRules(
    compat
      .extends
      // 'plugin:react/recommended',
      // 'plugin:react-hooks/recommended',
      // 'next/core-web-vitals'
      ()
  ).map((config) => ({
    ...config,
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['playwright/**'],
  })),
];

export default config;
