import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig({
  files: ['**/*.{mjs,ts}'],
  ignores: ['dist/**', 'node_modules/**'],
  languageOptions: {
    ecmaVersion: 2023,
    globals: globals.node,
  },
  extends: [eslint.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier],
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error',
  },
});
