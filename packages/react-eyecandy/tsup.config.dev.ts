import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  splitting: false,
  sourcemap: 'inline',
  clean: true,
  dts: true,
})
