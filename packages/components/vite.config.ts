import { createVuePlugin } from 'vite-plugin-vue2';

export default {
  plugins: [
    createVuePlugin(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/main.ts',
      name: 'MyLibUI',
      formats: ['es', 'umd', 'iife', 'cjs'],
      fileName: 'my-lib-ui'
    }
  }
}