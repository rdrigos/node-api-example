import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/main.ts',
  format: ['esm'],
  platform: 'node',
  target: 'es2023',
  clean: true,
  treeshake: true,
});
