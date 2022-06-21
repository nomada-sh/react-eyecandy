import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  sourcemap: true,
  clean: true,
  dts: true,
  outDir: 'lib',
});
