import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  sourcemap: 'inline',
  clean: true,
  dts: true,
  outDir: 'lib',
});
