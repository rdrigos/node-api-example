import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs'],
  target: 'esnext',
  platform: 'node',
  clean: false,
  dts: true,
  minify: true,
  treeshake: true,
  splitting: false,
  sourcemap: true,
});
