import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  publicDir: false,
  build: {
    target: 'esnext',
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
      },
    },
  },
  resolve: {
    alias: {
      '~/': path.resolve(__dirname, 'build'),
    },
  },
  plugins: [dts(), tsconfigPaths()],
})
